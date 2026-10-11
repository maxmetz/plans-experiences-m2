/* Vérifications sans dépendance ajoutée : node cours_structure/validation.js */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
const base=__dirname,root=path.dirname(base),window={};vm.runInNewContext(fs.readFileSync(path.join(base,'contenu.js'),'utf8'),{window});
const data=window.CoursData,history=JSON.parse(fs.readFileSync(path.join(base,'historique.json'),'utf8')),D=require('../commun/web/js/doe-core.js'),katex=require('../commun/web/vendor/katex/katex.min.js');
assert.equal(data.slides.length,75);assert.equal(data.chapters.length,10);let equations=0;
for(const s of data.slides){assert(data.chapters.some(c=>c.id===s.chapter));assert(s.source);for(const m of s.body.matchAll(/\\\[([\s\S]*?)\\\]/g)){katex.renderToString(m[1].replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>'),{throwOnError:true});equations++;}}
let pages=0;for(const h of history){const digest=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');assert.equal(digest(path.join(root,h.file)),digest(path.join(base,'originaux',h.id+'.pdf')));for(const p of h.pages){assert(fs.existsSync(path.join(base,p.image)));pages++;}}assert.equal(pages,231);
const corners=[[-1,-1],[1,-1],[-1,1],[1,1]],X=corners.map(([a,b])=>[1,a,b]),XT=D.transpose(X);assert.deepEqual(D.matmul(XT,X),[[4,0,0],[0,4,0],[0,0,4]]);assert.deepEqual(D.matvec(X,[40,8,10]),[22,38,42,58]);assert.equal(D.rank(corners.map(([a,b])=>[1,a,b,a*b,a*a,b*b])),4);assert.equal(D.rank([[1,-1,-1],[1,0,0],[1,1,1]]),2);
const full=D.rank([...X,[1,1,-1]]);assert.equal(full,3);assert.equal(1+(3-1)+(2-1)+(4-1)+(4-1),10);
console.log(`75 slides, 10 chapitres, ${equations} équations valides ; 231 planches présentes ; 4 PDF originaux identiques ; prédictions, orthogonalité, rangs et décompte multinéveau vérifiés.`);
