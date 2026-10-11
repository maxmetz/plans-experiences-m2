(function(){'use strict';const {chapters,slides}=window.CoursData,deck=document.querySelector('.deck'),select=document.querySelector('#chapters');
const isModule=location.pathname.endsWith('/module.html');
const local=location.protocol==='file:'||(['localhost','127.0.0.1'].includes(location.hostname)&&!location.pathname.includes('/publication/'));
if(local){document.querySelector('#course-home').href='../publication/accueil.html';for(const id of ['f0','f1']){const a=document.querySelector('#course-'+id);a.href=a.getAttribute('href').replace('/documents/','/exports/');}}
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
slides.forEach(s=>{const chapter=chapters.find(c=>c.id===s.chapter),section=document.createElement('section');section.className='slide v3 course';section.dataset.chapter=s.chapter;section.innerHTML=`<div class="kicker">${esc(chapter.title)}${chapter.start!==undefined?` · ${chapter.start}–${chapter.end} min`:""}</div><h2>${esc(s.title)}</h2><div class="v3-body">${s.body}</div><div class="src">${s.pages?`<a href="archives.html?doc=intro&from=${s.pages[0]}&chapitre=${s.chapter}">${esc(s.source)}</a>`:esc(s.source)}</div>`;deck.append(section);});
renderMathInElement(deck,{delimiters:[{left:"\\[",right:"\\]",display:true},{left:"\\(",right:"\\)",display:false}],throwOnError:false});
chapters.forEach(c=>{const o=document.createElement('option');o.value=c.id;o.textContent=c.title+(c.start!==undefined?` · ${c.start}–${c.end} min`:"");select.append(o);});
const links=id=>{const c=chapters.find(c=>c.id===id);select.value=id;document.querySelector('#historical').href=`archives.html?doc=${c.doc}&from=${c.from}&to=${c.to}&chapitre=${c.id}${isModule?"&parcours=module":""}`;document.querySelector('#interactive').href='../session_01/slides/S1_slides.html?m1='+c.interactive;};
select.addEventListener('change',()=>{const id=select.value;Deck.go(slides.findIndex(s=>s.chapter===id));links(id);});
document.querySelector('#print-course').onclick=()=>{if(new URLSearchParams(location.search).has('print'))window.print();else location.href=(isModule?'module.html':'index.html')+'?print';};
document.addEventListener('DOMContentLoaded',()=>{const wanted=new URLSearchParams(location.search).get('chapitre');if(wanted&&chapters.some(c=>c.id===wanted))Deck.go(slides.findIndex(s=>s.chapter===wanted));links(slides[Deck.index].chapter);new MutationObserver(()=>links(slides[Deck.index].chapter)).observe(deck,{subtree:true,attributes:true,attributeFilter:['class']});});
})();
