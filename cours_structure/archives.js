(function(){'use strict';const qp=new URLSearchParams(location.search),docs=window.CoursArchives,doc=docs.find(d=>d.id===qp.get('doc'))||docs[0],select=document.querySelector('#document'),deck=document.querySelector('.deck');
const warnings={
 'intro:2':'Précision apportée dans le cours : le nombre d’essais intervient aussi dans la précision ; seule la disposition ne suffit pas.',
 'intro:56':'Dans les données de ce cours, la porosité correspond à Y2, et la densité à Y1. La légende Y1 de cette planche est une coquille.',
 'intro:61':'La variance calculée à partir des répétitions est estimée. Student demande une estimation indépendante et les hypothèses normales ; une variance exactement connue conduirait à la loi normale.',
 'intro:66':'Une absence de significativité ne démontre pas un comportement identique : une incertitude trop grande peut masquer un effet.',
 'intro:63':'Notation modernisée : pour un intervalle bilatéral à 95 %, employer le quantile t₀,₉₇₅;ν.',
 'intro:65':'Notation modernisée : le seuil bilatéral 5 % correspond au quantile 0,975.',
 'niveaux:40':'Coquille historique : 1 + 4 + 2 + 3 = 10 coefficients, et non 11. La construction retenue contient 16 essais.',
 'factoriel:17':'L’unité de la réponse du sécheur est donnée en ppm ici, puis en % à la page 23 : unité physique à confirmer.',
 'factoriel:23':'L’unité ne concorde pas avec la page 17. Le cours reprend les valeurs sans convertir arbitrairement les unités.',
 'factoriel:37':'Le tableau statistique de cette planche ne correspond pas aux coefficients du cas sécheur. Ne pas l’utiliser comme résultat de ce cas.',
 'surfaces:20':'Incohérence historique : le signe du coefficient 0,83 change à la page 23. Ne pas utiliser ces deux modèles comme un même résultat vérifié.',
 'surfaces:23':'Le signe du coefficient 0,83 diffère de la page 20. Le modèle général est expliqué dans le cours ; cette incohérence reste signalée.',
 'surfaces:27':'Une réponse centrale est indiquée 72 ici, mais 71 aux pages 19/47. Ne pas fusionner silencieusement ces données.',
 'niveaux:33':'La condition supplémentaire √s < s₁ n’est pas utilisée comme condition générale dans le cours modernisé.',
 'niveaux:35':'Après une correspondance, contrôler équilibre et rang ; ne pas appliquer une condition de construction sans vérification.'
};
docs.forEach(d=>{const o=document.createElement('option');o.value=d.id;o.textContent=d.file;o.selected=d.id===doc.id;select.append(o);});select.onchange=()=>location.href='archives.html?doc='+select.value;
document.querySelector('#original').href='originaux/'+doc.id+'.pdf';const chapter=qp.get('chapitre');document.querySelector('#return-course').href=(qp.get('parcours')==='module'?'module.html':'index.html')+(chapter?'?chapitre='+encodeURIComponent(chapter):'');
doc.pages.forEach(p=>{const s=document.createElement('section');s.className='slide archive';const h=document.createElement('h2');h.textContent=doc.file+' · page '+p.page;const f=document.createElement('figure'),img=document.createElement('img');img.src=p.image;img.alt=p.text||'Planche historique '+p.page;f.append(img);const src=document.createElement('div');src.className='src';src.textContent=doc.credit+' · '+doc.ppt+' · diapositive '+p.page; s.append(h,f,src);const note=warnings[doc.id+':'+p.page];if(note){const n=document.createElement('p');n.className='archive-note';n.textContent=note;s.append(n);}deck.append(s);});
document.querySelector('#print-archive').onclick=()=>{if(qp.has('print'))window.print();else location.href='archives.html?doc='+doc.id+'&print';};document.addEventListener('DOMContentLoaded',()=>{if(!qp.has('print')&&qp.has('from'))Deck.go(Math.max(0,Math.min(doc.pages.length-1,+qp.get('from')-1)));});
})();
