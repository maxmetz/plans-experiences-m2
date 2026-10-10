/* deck.js — moteur de présentation HTML minimal, hors ligne (module Plans d'expériences, AMU).
 * Structure : <main class="deck"><section class="slide">…</section>…</main>
 * Fragments : éléments .frag révélés un à un (ordre DOM, ou data-frag="n").
 * Clavier : → ↓ Espace PgSuiv = suivant ; ← ↑ PgPréc = précédent ; Début/Fin ;
 *   n° + Entrée = aller à la diapositive ; O = vue d'ensemble ; F = plein écran ; B = écran noir ;
 *   T = démarrer/arrêter le minuteur de la diapositive (data-timer en minutes) ; N = notes ; H ou ? = aide ;
 *   P = vue impression (toutes diapositives, tous fragments) ; R = tout révéler sur la diapositive.
 * URL : #12 ouvre la diapositive 12 ; ?print ouvre la vue impression (export PDF via Chrome).
 */
(function () {
  'use strict';
  const deck = document.querySelector('.deck');
  const slides = [...deck.querySelectorAll(':scope > section.slide')];
  const params = new URLSearchParams(location.search);
  const printMode = params.has('print');
  let cur = 0, typed = '', timer = null, timerEnd = 0;
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) { } } };

  slides.forEach((s, i) => {
    s.dataset.index = i + 1;
    const frags = [...s.querySelectorAll('.frag')];
    frags.sort((a, b) => (+a.dataset.frag || 0) - (+b.dataset.frag || 0));
    s._frags = frags; s._shown = 0;
    const foot = document.createElement('div'); foot.className = 'slide-foot';
    foot.innerHTML = `<span>${document.title}</span><span>${i + 1} / ${slides.length}</span>`;
    s.appendChild(foot);
  });

  // ---- Mise à l'échelle 1600×900
  function fit() {
    if (printMode) return;
    const k = Math.min(innerWidth / 1600, innerHeight / 900);
    deck.style.setProperty('--k', k);
  }
  addEventListener('resize', fit); fit();

  function render() {
    slides.forEach((s, i) => s.classList.toggle('active', i === cur));
    const s = slides[cur];
    s._frags.forEach((f, j) => f.classList.toggle('shown', j < s._shown));
    history.replaceState(null, '', '#' + (cur + 1));
    store.set('deck:' + location.pathname, String(cur));
    document.dispatchEvent(new CustomEvent('slidechange', { detail: { index: cur, slide: s } }));
    const nt = document.getElementById('deck-notes');
    if (nt) { const a = s.querySelector('aside.notes'); nt.innerHTML = a ? a.innerHTML : '<em>Pas de notes.</em>'; }
    updateTimer();
  }
  function go(i, shownAll = false) {
    cur = Math.max(0, Math.min(slides.length - 1, i));
    slides[cur]._shown = shownAll ? slides[cur]._frags.length : 0; stopTimer(); render();
  }
  function next() {
    const s = slides[cur];
    if (s._shown < s._frags.length) { s._shown++; render(); s._frags[s._shown - 1].dispatchEvent(new Event('reveal', { bubbles: true })); }
    else if (cur < slides.length - 1) go(cur + 1);
  }
  function prev() {
    const s = slides[cur];
    if (s._shown > 0) { s._shown--; render(); } else if (cur > 0) go(cur - 1, true);
  }

  // ---- Minuteur
  const timerEl = document.createElement('div'); timerEl.id = 'deck-timer'; document.body.appendChild(timerEl);
  function updateTimer() {
    const mins = +slides[cur].dataset.timer || 0;
    if (!timer) { timerEl.hidden = !mins; timerEl.textContent = mins ? `⏱ ${mins}:00 — touche T` : ''; timerEl.className = ''; return; }
    const r = Math.max(0, timerEnd - Date.now()); const m = Math.floor(r / 60000), sec = Math.floor(r / 1000) % 60;
    timerEl.hidden = false; timerEl.textContent = `⏱ ${m}:${String(sec).padStart(2, '0')}`;
    timerEl.className = r === 0 ? 'done' : r < 60000 ? 'warn' : 'run';
  }
  function startTimer() { const mins = +slides[cur].dataset.timer || 5; timerEnd = Date.now() + mins * 60000; clearInterval(timer); timer = setInterval(updateTimer, 500); updateTimer(); }
  function stopTimer() { clearInterval(timer); timer = null; updateTimer(); }

  // ---- Aide, notes, vue d'ensemble, écran noir
  const help = document.createElement('div'); help.id = 'deck-help'; help.hidden = true;
  help.innerHTML = `<h3>Raccourcis clavier</h3><table>
  <tr><td>→ Espace PgSuiv</td><td>révéler / suivant</td></tr><tr><td>← PgPréc</td><td>précédent</td></tr>
  <tr><td>Début / Fin</td><td>première / dernière</td></tr><tr><td>12 puis Entrée</td><td>aller à la diapositive 12</td></tr>
  <tr><td>R</td><td>tout révéler sur la diapositive</td></tr><tr><td>O</td><td>vue d'ensemble</td></tr>
  <tr><td>T</td><td>minuteur de l'activité</td></tr><tr><td>N</td><td>notes de l'enseignant</td></tr>
  <tr><td>B</td><td>écran noir</td></tr><tr><td>F</td><td>plein écran</td></tr><tr><td>P</td><td>vue impression / PDF</td></tr><tr><td>H ou ?</td><td>cette aide</td></tr></table>`;
  document.body.appendChild(help);
  const notes = document.createElement('div'); notes.id = 'deck-notes'; notes.hidden = true; document.body.appendChild(notes);
  const black = document.createElement('div'); black.id = 'deck-black'; black.hidden = true; document.body.appendChild(black);

  function overview(on) {
    document.body.classList.toggle('overview', on);
    if (on) slides.forEach((s, i) => { s.onclick = () => { overview(false); go(i); }; });
    else slides.forEach(s => { s.onclick = null; });
  }

  addEventListener('keydown', e => {
    if (e.target.closest('input,textarea,select,[contenteditable]')) return;
    const k = e.key;
    if (/^[0-9]$/.test(k)) { typed += k; return; }
    if (k === 'Enter' && typed) { go(+typed - 1); typed = ''; return; }
    typed = '';
    if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(k)) { e.preventDefault(); next(); }
    else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(k)) { e.preventDefault(); prev(); }
    else if (k === 'Home') go(0); else if (k === 'End') go(slides.length - 1);
    else if (k === 'r' || k === 'R') { slides[cur]._shown = slides[cur]._frags.length; render(); slides[cur]._frags.forEach(f => f.dispatchEvent(new Event('reveal', { bubbles: true }))); }
    else if (k === 'o' || k === 'O') overview(!document.body.classList.contains('overview'));
    else if (k === 'f' || k === 'F') { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen().catch(() => { }); }
    else if (k === 'b' || k === 'B' || k === '.') black.hidden = !black.hidden;
    else if (k === 't' || k === 'T') timer ? stopTimer() : startTimer();
    else if (k === 'n' || k === 'N') notes.hidden = !notes.hidden;
    else if (k === 'h' || k === 'H' || k === '?') help.hidden = !help.hidden;
    else if (k === 'p' || k === 'P') { location.search = '?print'; }
    else if (k === 'Escape') { help.hidden = true; notes.hidden = true; black.hidden = true; overview(false); }
  });
  deck.addEventListener('click', e => {
    if (document.body.classList.contains('overview') || e.target.closest('a,button,input,select,textarea,svg')) return;
    (e.clientX > innerWidth / 3) ? next() : prev();
  });

  if (printMode) {
    document.body.classList.add('print');
    slides.forEach(s => { s.classList.add('active'); s._frags.forEach(f => f.classList.add('shown')); });
    document.dispatchEvent(new CustomEvent('printready'));
  } else {
    const h = parseInt(location.hash.slice(1), 10);
    const saved = parseInt(store.get('deck:' + location.pathname), 10);
    go(!isNaN(h) ? h - 1 : (!isNaN(saved) ? saved : 0));
  }
  window.Deck = { go, next, prev, slides, get index() { return cur; } };
})();
