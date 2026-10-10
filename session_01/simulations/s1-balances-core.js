/* Calculs des balances : réutilise le noyau DoE et son générateur reproductible. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require('../../commun/web/js/doe-core.js'));else root.S1Balances=factory(root.DoE);})(typeof globalThis!=='undefined'?globalThis:this,function(D){
  'use strict';
  const masses=[20,30,50];
  const plans={
    redondant:{name:'Une seule somme répétée',X:Array.from({length:6},()=>[1,1,1])},
    insuffisant:{name:'Deux objets seulement',X:[[1,0,0],[0,1,0],[1,1,0],[1,0,0],[0,1,0],[1,1,0]]},
    separes:{name:'Chaque objet deux fois',X:[[1,0,0],[0,1,0],[0,0,1],[1,0,0],[0,1,0],[0,0,1]]},
    paires:{name:'Chaque paire deux fois',X:[[1,1,0],[1,0,1],[0,1,1],[1,1,0],[1,0,1],[0,1,1]]},
    desequilibre:{name:'Quatre totaux, puis A et B',X:[[1,1,1],[1,1,1],[1,1,1],[1,1,1],[1,0,0],[0,1,0]]}
  };
  function stats(values){const n=values.length,mean=n?values.reduce((a,b)=>a+b,0)/n:null;const variance=n>1?values.reduce((s,x)=>s+(x-mean)**2,0)/(n-1):null;return {n,mean,variance,sd:variance===null?null:Math.sqrt(variance)};}
  function observe(X,{sigma=2,bias=0,seed=2026}={}){const z=D.gaussian(seed);return X.map(r=>D.dot(r,masses)+bias+sigma*z());}
  function fit(X,y,sigma=2){const rank=D.rank(X);if(rank<3)return {rank,beta:null,cov:null,se:null};const Xt=D.transpose(X),inv=D.inverse(D.matmul(Xt,X));const beta=D.matvec(inv,D.matvec(Xt,y)),cov=inv.map(r=>r.map(x=>sigma*sigma*x));return {rank,beta,cov,se:cov.map((r,i)=>Math.sqrt(r[i]))};}
  function campaigns(X,{sigma=2,bias=0,seed=7000,n=200}={}){if(D.rank(X)<3)return {rank:D.rank(X),estimates:[],mean:null,sd:null};const estimates=Array.from({length:n},(_,i)=>fit(X,observe(X,{sigma,bias,seed:seed+i}),sigma).beta);const summaries=masses.map((_,j)=>stats(estimates.map(r=>r[j])));return {rank:3,estimates,mean:summaries.map(s=>s.mean),sd:summaries.map(s=>s.sd)};}
  return {masses,plans,stats,observe,fit,campaigns};
});
