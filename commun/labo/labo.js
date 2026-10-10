/* labo.js — laboratoire interactif générique « plans d'expériences » (AMU, M2 Instrumentation).
 * Dépendances : doe-core.js (window.DoE), plots.js (window.Plots), une configuration window.LAB_CONFIG.
 * Aucun serveur, aucun compte : l'état (codes déverrouillés) est gardé dans le navigateur (localStorage).
 */
(function () {
  'use strict';
  const D = window.DoE, P = window.Plots, CFG = window.LAB_CONFIG;
  const $ = s => document.querySelector(s);
  const h = (tag, attrs = {}, ...kids) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) { if (k === 'class') e.className = v; else if (k.startsWith('on')) e.addEventListener(k.slice(2), v); else if (v !== undefined && v !== null && v !== false) e.setAttribute(k, v === true ? '' : v); }
    for (const c of kids.flat()) if (c !== null && c !== undefined && c !== false) e.append(c.nodeType ? c : document.createTextNode(c));
    return e;
  };
  const fmt = (x, d = 3) => D.fmt(x, d);
  const frac = x => { const f = D.frac(x, 400); return f.length > 9 ? fmt(x, 4) : f; };
  const KEY = 'labo:' + (CFG.storageKey || CFG.session);
  const store = {
    load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } },
    save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { } },
  };
  const saved = store.load();

  // ------------------------------------------------------------------ état
  const S = {
    unlocked: new Set(saved.unlocked || []),
    prof: !!saved.prof,
    factors: JSON.parse(JSON.stringify(CFG.factors)),
    design: [], model: 'lineaire', preset: null, constraint: null,
    world: CFG.defaultWorld, custom: [[40, []], [8, [0]], [10, [1]]], sigma: null, seed: 1,
    preds: [], validated: false, y: null, revealWorld: false,
    cmp: { a: null, b: null, pair: [1, 2], R: 500 },
  };
  const persist = () => store.save({ unlocked: [...S.unlocked], prof: S.prof });
  const k = () => S.factors.length;
  const names = () => S.factors.map(f => f.name);
  const terms = (type = S.model, kk = k()) => D.modelTerms(kk, type);
  const termLabel = t => D.termLabel(t, names());
  const coefName = t => t.length === 0 ? 'b₀' : 'b' + t.map(i => '₁₂₃₄₅₆₇₈₉'[i]).join('');
  const isUnlocked = code => !code || S.prof || S.unlocked.has(code);
  const worldsAvail = () => Object.entries(CFG.worlds).filter(([, w]) => isUnlocked(w.code));
  const presetsAvail = () => CFG.presets.filter(p => isUnlocked(p.code));
  const curWorld = () => S.world === 'custom' ? { label: 'Monde personnalisé', model: S.custom, sigma: S.sigma ?? 1 } : CFG.worlds[S.world];
  const sigma = () => S.sigma ?? curWorld().sigma ?? 1;

  function loadPreset(id) {
    const p = CFG.presets.find(q => q.id === id); if (!p) return;
    S.preset = id;
    if (p.factors) S.factors = JSON.parse(JSON.stringify(p.factors));
    S.design = p.design.map(r => r.slice());
    S.model = p.model || S.model;
    S.constraint = p.constraint || null;
    if (p.world && isUnlocked(CFG.worlds[p.world] && CFG.worlds[p.world].code)) S.world = p.world;
    S.sigma = p.sigma !== undefined ? p.sigma : null;
    if (p.seed !== undefined) S.seed = p.seed;
    resetRun(); renderAll();
  }
  function resetRun() { S.preds = S.design.map(() => ''); S.validated = false; S.y = null; S.revealWorld = false; }

  // ------------------------------------------------------------------ codes
  function tryCode(raw) {
    const c = (raw || '').trim().toUpperCase(); if (!c) return;
    if (c === (CFG.teacherCode || 'MENTOR')) { S.prof = true; persist(); toast('Mode enseignant activé : tout est déverrouillé.'); renderAll(); return; }
    if (CFG.codes[c]) { S.unlocked.add(c); persist(); toast('Déverrouillé : ' + CFG.codes[c].label); renderAll(); return; }
    toast('Code inconnu.', true);
  }
  function toast(msg, bad) {
    const t = h('div', { class: bad ? 'warn' : 'okmsg', style: 'position:fixed;bottom:16px;left:50%;transform:translateX(-50%);z-index:99;box-shadow:0 4px 16px rgba(0,0,0,.2)' }, msg);
    document.body.append(t); setTimeout(() => t.remove(), 2600);
  }

  // ------------------------------------------------------------------ rendu : entête et onglets
  function renderHeader() {
    const hd = $('header.lab'); hd.innerHTML = '';
    const inp = h('input', { type: 'text', placeholder: 'code', 'aria-label': 'Code de déverrouillage', onkeydown: e => { if (e.key === 'Enter') { tryCode(inp.value); inp.value = ''; } } });
    hd.append(
      h('div', {}, h('h1', {}, CFG.title), h('div', { class: 'sub' }, CFG.subtitle || '')),
      h('div', { class: 'codes' },
        S.prof ? h('span', { class: 'badge prof' }, 'ENSEIGNANT') : null,
        ...[...S.unlocked].map(c => h('span', { class: 'badge', title: CFG.codes[c] ? CFG.codes[c].label : '' }, c)),
        inp, h('button', { class: 'btn ghost', onclick: () => { tryCode(inp.value); inp.value = ''; } }, 'Déverrouiller'))
    );
  }
  const TABS = [['plan', '1 · Plan et facteurs'], ['matrice', '2 · Matrice X'], ['simuler', '3 · Simuler et ajuster'], ['comparer', '4 · Comparer deux plans'], ['prof', 'Enseignant']];
  let tab = (location.hash || '#plan').slice(1);
  function renderTabs() {
    const nav = $('nav.tabs'); nav.innerHTML = '';
    TABS.forEach(([id, label]) => nav.append(h('button', { class: tab === id ? 'on' : '', onclick: () => { tab = id; history.replaceState(null, '', '#' + id); renderAll(); } }, label)));
    document.querySelectorAll('section.tab').forEach(s => s.classList.toggle('on', s.id === 'tab-' + tab));
  }

  // ------------------------------------------------------------------ outils d'affichage
  function matrix(name, M, opts = {}) {
    const tb = h('table', { class: 'mat' });
    if (opts.cols) tb.append(h('tr', {}, ...opts.cols.map(c => h('th', {}, c))));
    M.forEach((r, i) => tb.append(h('tr', {}, ...r.map((v, j) => h('td', { class: (opts.diag && i === j) ? 'diag' : (opts.diag && Math.abs(v) > 1e-9 ? 'offnz' : '') }, opts.fmt ? opts.fmt(v) : frac(v))))));
    return h('div', { class: 'matwrap' }, h('span', { class: 'matname' }, name), h('div', { class: 'scroll' }, tb));
  }
  const realVal = (j, x) => { const f = S.factors[j]; const v = D.toReal(x, +f.low, +f.high); return Number.isFinite(v) ? +v.toFixed(3) : '—'; };
  const feasible = x => !S.constraint || S.constraint.ok(x);
  function domainPlot(container, design, color, onClick, opts = {}) {
    const ax = opts.axes || [0, 1];
    const pts = design.map(x => [x[ax[0]], x[ax[1]]]);
    return P.domain(container, {
      points: pts, color, onClick, forbidden: S.constraint && S.constraint.polygon,
      xlabel: `${S.factors[ax[0]].name} (codé)`, ylabel: `${S.factors[ax[1]].name} (codé)`,
      highlight: p => (!S.constraint || S.constraint.ok(p)) ? null : 'var(--s2)', width: opts.width || 380, height: opts.height || 380,
    });
  }

  // ------------------------------------------------------------------ Onglet 1 : plan et facteurs
  let viewAxes = [0, 1], snap = true;
  function renderPlan() {
    const sec = $('#tab-plan'); sec.innerHTML = '';
    // Préréglages
    const sel = h('select', { onchange: e => e.target.value && loadPreset(e.target.value) }, h('option', { value: '' }, '— choisir un plan proposé —'));
    const groups = {};
    presetsAvail().forEach(p => { (groups[p.group || 'Plans'] = groups[p.group || 'Plans'] || []).push(p); });
    for (const [g, list] of Object.entries(groups)) { const og = h('optgroup', { label: g }); list.forEach(p => og.append(h('option', { value: p.id, selected: S.preset === p.id }, p.label))); sel.append(og); }
    const locked = CFG.presets.filter(p => !isUnlocked(p.code)).length;
    sec.append(h('div', { class: 'card' }, h('h2', {}, 'Plans proposés'),
      h('div', { class: 'row' }, sel, locked ? h('span', { class: 'note' }, `${locked} plan(s) verrouillé(s) : l'enseignant donnera le code au bon moment.`) : null),
      S.preset && CFG.presets.find(p => p.id === S.preset).note ? h('div', { class: 'info' }, CFG.presets.find(p => p.id === S.preset).note) : null,
      S.constraint ? h('div', { class: 'warn' }, 'Contrainte active : ' + S.constraint.label) : null));

    // Expliquer les comparaisons sur le plan courant, même après modification.
    if (k() === 2) {
      const has = (a, b) => S.design.some(x => x[0] === a && x[1] === b);
      if (has(-1, -1) && has(1, -1) && has(-1, 1)) {
        const condition = (a, b) => `${realVal(0, a)} ${S.factors[0].unit} ; ${realVal(1, b)} ${S.factors[1].unit}`;
        const factorial = has(1, 1);
        const comparisons = h('table', { class: 'data' }, h('tr', {},
          ...['Comparaison à faire', 'Ce qui change', 'Ce qui reste constant'].map(s => h('th', {}, s))),
          h('tr', {}, h('td', {}, `${condition(-1, -1)} → ${condition(1, -1)}`), h('td', {}, S.factors[0].label), h('td', {}, `${S.factors[1].label} : ${realVal(1, -1)} ${S.factors[1].unit}`)),
          h('tr', {}, h('td', {}, `${condition(-1, -1)} → ${condition(-1, 1)}`), h('td', {}, S.factors[1].label), h('td', {}, `${S.factors[0].label} : ${realVal(0, -1)} ${S.factors[0].unit}`)));
        sec.append(h('div', { class: 'card' },
          h('h2', {}, factorial ? 'Quatre combinaisons : comparer aussi depuis l’autre niveau' : 'Comprendre « un facteur à la fois »'),
          h('p', {}, `Notre référence commune : ${condition(-1, -1)}. On réalise un autre essai en changeant seulement un réglage par rapport à cette référence.`),
          h('div', { class: 'scroll' }, comparisons),
          h('p', {}, 'Dans le plan initial à trois essais, comparez les essais 1 et 2, puis 1 et 3. Entre 2 et 3, les deux réglages changent : cette comparaison ne sépare pas leurs effets. Les numéros des lignes ne prescrivent pas l’ordre de passage sur l’appareil.'),
          h('div', { class: 'info' }, factorial
            ? `Le point ${condition(1, 1)} est présent : on peut comparer l’effet du premier facteur aux deux niveaux du second. C’est ce qui permet d’étudier l’interaction.`
            : `Vérifiez le tableau : le point ${condition(1, 1)} manque. Ces trois conditions ne montrent pas si l’effet du premier facteur change au niveau haut du second. Pour prévoir ce point en additionnant les gains, il faut supposer l’absence d’interaction.`),
          h('p', { class: 'note' }, 'Avant de simuler : pointez la référence, puis expliquez chaque comparaison avec les unités réelles. Les répétitions éventuelles donnent plusieurs mesures des mêmes conditions.')));
      }
    }

    // Facteurs
    const ft = h('table', { class: 'data' }, h('tr', {}, h('th', { class: 'l' }, 'Facteur'), h('th', {}, 'Nom court'), h('th', {}, 'Unité'), h('th', {}, 'Niveau −1'), h('th', {}, 'Niveau +1'), h('th', {}, 'Centre'), h('th', {}, 'Pas')));
    S.factors.forEach((f, j) => {
      const upd = (key, num) => e => { f[key] = num ? +e.target.value : e.target.value; renderAll(); };
      ft.append(h('tr', {},
        h('td', { class: 'l' }, h('input', { type: 'text', value: f.label, onchange: upd('label') })),
        h('td', {}, h('input', { type: 'text', value: f.name, style: 'width:60px', onchange: upd('name') })),
        h('td', {}, h('input', { type: 'text', value: f.unit, style: 'width:70px', onchange: upd('unit') })),
        h('td', {}, h('input', { type: 'number', class: 'cell', value: f.low, step: 'any', onchange: upd('low', true) })),
        h('td', {}, h('input', { type: 'number', class: 'cell', value: f.high, step: 'any', onchange: upd('high', true) })),
        h('td', {}, fmt((+f.low + +f.high) / 2)), h('td', {}, fmt((+f.high - +f.low) / 2))));
    });
    const kSel = h('select', { onchange: e => { const nk = +e.target.value; while (S.factors.length < nk) { const i = S.factors.length; S.factors.push({ name: 'X' + (i + 1), label: 'Facteur ' + (i + 1), unit: '', low: -1, high: 1 }); } S.factors.length = nk; S.design = S.design.map(r => { const q = r.slice(0, nk); while (q.length < nk) q.push(0); return q; }); viewAxes = [0, 1]; resetRun(); renderAll(); } },
      ...[2, 3, 4, 5].map(n => h('option', { value: n, selected: n === k() }, n + ' facteurs')));
    sec.append(h('div', { class: 'card' }, h('h2', {}, 'Facteurs et domaine'), h('div', { class: 'row' }, kSel, h('span', { class: 'note' }, 'Codage : x = (U − centre) / pas. Le domaine devient [−1 ; 1] pour chaque facteur.')), h('div', { class: 'scroll' }, ft)));

    // Plan d'expériences : tableau + domaine cliquable
    const dt = h('table', { class: 'data' });
    dt.append(h('tr', {}, h('th', {}, 'Essai'), ...S.factors.map(f => h('th', {}, `${f.name} codé`)), ...S.factors.map(f => h('th', {}, `${f.name} (${f.unit || '—'})`)), h('th', {}, '')));
    S.design.forEach((x, i) => {
      dt.append(h('tr', { class: feasible(x) ? '' : 'bad', title: feasible(x) ? '' : 'Essai dans la zone interdite' }, h('td', {}, i + 1),
        ...x.map((v, j) => h('td', {}, h('input', { type: 'number', class: 'cell', value: v, step: 0.25, min: -1, max: 1, onchange: e => { x[j] = Math.max(-1, Math.min(1, +e.target.value)); resetRun(); renderAll(); } }))),
        ...x.map((v, j) => h('td', {}, String(realVal(j, v)).replace('.', ','))),
        h('td', {}, h('button', { class: 'btn danger', title: 'Supprimer cet essai', onclick: () => { S.design.splice(i, 1); S.preset = null; resetRun(); renderAll(); } }, '×'))));
    });
    const dom = h('div', { class: 'chartbox' });
    const axSel = k() > 2 ? h('div', { class: 'row' }, h('label', {}, 'Projection :'),
      ...[0, 1].map(a => h('select', { onchange: e => { viewAxes[a] = +e.target.value; renderAll(); } }, ...S.factors.map((f, j) => h('option', { value: j, selected: viewAxes[a] === j }, f.name))))) : null;
    sec.append(h('div', { class: 'grid2' },
      h('div', { class: 'card' }, h('h2', {}, `Plan d'expériences (${S.design.length} essais)`),
        h('div', { class: 'row' },
          h('button', { class: 'btn ghost', onclick: () => { S.design.push(new Array(k()).fill(0)); S.preset = null; resetRun(); renderAll(); } }, '+ essai au centre'),
          h('button', { class: 'btn ghost', onclick: () => { S.design = S.design.concat(S.design.map(r => r.slice())); S.preset = null; resetRun(); renderAll(); } }, 'Dupliquer le plan'),
          h('button', { class: 'btn danger', onclick: () => { S.design = []; S.preset = null; resetRun(); renderAll(); } }, 'Vider')),
        h('div', { class: 'scroll' }, dt),
        S.design.some(x => !feasible(x)) ? h('div', { class: 'warn' }, 'Au moins un essai est dans la zone interdite (ligne surlignée).') : null),
      h('div', { class: 'card' }, h('h2', {}, 'Domaine expérimental'), axSel,
        h('p', { class: 'note' }, k() > 2 ? 'Projection sur deux facteurs (les autres ne sont pas visibles). ' : '', 'Cliquez pour ajouter un essai ; Maj + clic pour retirer l\'essai le plus proche.'),
        h('label', {}, h('input', { type: 'checkbox', checked: snap, onchange: e => { snap = e.target.checked; } }), ' aimanter aux pas de 0,25'),
        dom)));
    domainPlot(dom, S.design, 'var(--s1)', (x, y, ev) => {
      const sn = v => snap ? Math.round(v * 4) / 4 : Math.round(v * 100) / 100;
      if (ev.shiftKey) {
        let best = -1, bd = 1e9; S.design.forEach((r, i) => { const d = Math.hypot(r[viewAxes[0]] - x, r[viewAxes[1]] - y); if (d < bd) { bd = d; best = i; } });
        if (best >= 0 && bd < 0.3) S.design.splice(best, 1);
      } else { const r = new Array(k()).fill(0); r[viewAxes[0]] = sn(x); r[viewAxes[1]] = sn(y); S.design.push(r); }
      S.preset = null; resetRun(); renderAll();
    }, { axes: viewAxes });
  }

  // ------------------------------------------------------------------ Onglet 2 : matrice X
  function modelSelect() {
    return h('select', { onchange: e => { S.model = e.target.value; resetRun(); renderAll(); } },
      ...[['lineaire', 'additif : b₀ + Σ bⱼxⱼ'], ['interactions', '+ interactions de deux facteurs'], ['quadratique', '+ interactions + carrés']].map(([v, l]) => h('option', { value: v, selected: S.model === v }, l)));
  }
  function renderMatrice() {
    const sec = $('#tab-matrice'); sec.innerHTML = '';
    if (!S.design.length) { sec.append(h('div', { class: 'card' }, h('p', {}, 'Le plan est vide : définissez des essais dans l\'onglet 1.'))); return; }
    const T = terms(); const a = D.analyseDesign(S.design, T); const cols = T.map(termLabel);
    const distinct = new Set(S.design.map(r => r.join(','))).size;
    sec.append(h('div', { class: 'card' }, h('h2', {}, 'Modèle'), h('div', { class: 'row' }, h('label', {}, 'Termes du modèle :'), modelSelect(),
      h('span', { class: 'note' }, `p = ${a.p} coefficients : ${T.map(coefName).join(', ')}`))));
    const verdict = a.identifiable
      ? h('div', { class: 'okmsg' }, h('b', {}, `rang(X) = ${a.rank} = p : modèle identifiable. `), 'Chaque coefficient est déterminé de façon unique par les données (sans bruit).')
      : h('div', { class: 'warn' }, h('b', {}, `rang(X) = ${a.rank} < p = ${a.p} : modèle NON identifiable. `), 'Plusieurs jeux de coefficients donnent exactement les mêmes prédictions aux essais.');
    const kernel = !a.identifiable ? h('div', {}, h('h3', {}, 'Combinaisons de colonnes nulles (noyau de X)'),
      ...a.null.map(v => h('p', {}, 'X · (', v.map(frac).join(' ; '), ')ᵀ = 0  →  ', v.map((c, j) => c ? `${c > 0 && j ? '+' : ''}${frac(c)}·[${cols[j]}]` : '').filter(Boolean).join(' '), ' = 0')),
      h('p', { class: 'note' }, 'On peut ajouter n\'importe quel multiple de ce vecteur aux coefficients sans changer aucune prédiction : les coefficients concernés sont confondus.')) : null;
    sec.append(h('div', { class: 'grid2' },
      h('div', { class: 'card' }, h('h2', {}, `Matrice du modèle X (${a.N} × ${a.p})`), h('div', { class: 'scroll' }, matrix('X =', a.X, { cols })),
        h('div', { class: 'kv', style: 'margin-top:8px' }, h('span', {}, 'Essais N'), h('b', {}, a.N), h('span', {}, 'Points distincts'), h('b', {}, distinct),
          h('span', {}, 'Coefficients p'), h('b', {}, a.p), h('span', {}, 'Rang de X'), h('b', {}, a.rank),
          h('span', {}, 'ddl résiduels N − p'), h('b', {}, a.N - a.p), h('span', {}, 'ddl d\'erreur pure'), h('b', {}, a.N - distinct))),
      h('div', { class: 'card' }, h('h2', {}, 'Identifiabilité et XᵀX'), verdict, kernel,
        h('div', { class: 'scroll' }, matrix('XᵀX =', a.XtX, { cols, diag: true })),
        h('p', { class: 'note' }, 'Élément (j, k) = produit scalaire des colonnes j et k. Les cases jaunes (hors diagonale, non nulles) signalent des colonnes non orthogonales.'),
        a.identifiable ? h('p', {}, 'Plan ', a.orthogonal ? h('span', { class: 'pill ok' }, 'orthogonal') : h('span', { class: 'pill ko' }, 'non orthogonal'), ' pour ce modèle · det(XᵀX) = ', fmt(a.det, 3)) : null)));
    if (a.identifiable) {
      const s2 = sigma() ** 2;
      sec.append(h('div', { class: 'grid2' },
        h('div', { class: 'card' }, h('h2', {}, '(XᵀX)⁻¹'), h('div', { class: 'scroll' }, matrix('(XᵀX)⁻¹ =', a.XtXinv, { cols, diag: true })),
          h('h3', {}, 'Précision théorique : Cov(b̂) = σ² (XᵀX)⁻¹'),
          h('div', { class: 'row' }, h('label', {}, 'σ ='), h('input', { type: 'number', class: 'cell', step: 'any', value: sigma(), onchange: e => { S.sigma = +e.target.value; renderAll(); } }), h('span', { class: 'note' }, 'écart-type de répétabilité supposé')),
          h('table', { class: 'data' }, h('tr', {}, h('th', { class: 'l' }, 'Coefficient'), h('th', {}, 'Var / σ²'), h('th', {}, 'Var'), h('th', {}, 'Écart-type')),
            ...T.map((t, j) => h('tr', {}, h('td', { class: 'l' }, coefName(t), ' (', cols[j], ')'), h('td', {}, frac(a.varFactors[j])), h('td', {}, fmt(s2 * a.varFactors[j], 4)), h('td', {}, fmt(Math.sqrt(s2 * a.varFactors[j]), 3)))))),
        h('div', { class: 'card' }, h('h2', {}, 'Corrélations entre estimateurs'), h('div', { class: 'scroll' }, matrix('Corr =', a.corr, { cols, diag: true, fmt: v => fmt(v, 2) })),
          h('p', { class: 'note' }, 'Une corrélation non nulle signifie qu\'une erreur de mesure qui gonfle un coefficient en gonfle (ou en diminue) un autre. Elle disparaît quand XᵀX est diagonale.'),
          h('p', { class: 'note' }, 'Borne : si |xᵢⱼ| ≤ 1, Var(b̂ⱼ) ≥ σ²/N = ', fmt(s2 / a.N, 4), ' ; atteinte seulement pour une colonne de ±1 orthogonale aux autres.'))));
    }
  }

  // ------------------------------------------------------------------ Onglet 3 : simuler et ajuster
  function worldEquation(w) {
    return w.model.map(([c, t], i) => `${i && c >= 0 ? '+ ' : ''}${c < 0 ? '− ' : ''}${fmt(Math.abs(c), 3)}${t.length ? ' ' + termLabel(t) : ''}`).join(' ');
  }
  function renderSimuler() {
    const sec = $('#tab-simuler'); sec.innerHTML = '';
    if (!S.design.length) { sec.append(h('div', { class: 'card' }, h('p', {}, 'Le plan est vide : définissez des essais dans l\'onglet 1.'))); return; }
    const w = curWorld();
    const wSel = h('select', { onchange: e => { S.world = e.target.value; S.sigma = null; resetRun(); renderAll(); } },
      ...worldsAvail().map(([key, ww]) => h('option', { value: key, selected: S.world === key }, ww.label)), h('option', { value: 'custom', selected: S.world === 'custom' }, 'Monde personnalisé (coefficients à saisir)'));
    const custom = S.world === 'custom' ? h('div', { class: 'row' }, ...D.modelTerms(k(), 'interactions').map(t => {
      const cur = S.custom.find(c => c[1].join() === t.join()); return h('span', {}, h('label', {}, coefName(t), ' '), h('input', { type: 'number', class: 'cell', step: 'any', value: cur ? cur[0] : 0, onchange: e => { const v = +e.target.value; const i = S.custom.findIndex(c => c[1].join() === t.join()); if (i >= 0) S.custom[i][0] = v; else S.custom.push([v, t]); resetRun(); renderAll(); } }));
    })) : null;
    const showWorld = S.prof || S.revealWorld || (S.validated && !w.hidden);
    sec.append(h('div', { class: 'card sim' }, h('h2', {}, 'Phénomène simulé (le « monde »)'),
      h('div', { class: 'row' }, wSel,
        h('label', {}, 'bruit σ ='), h('input', { type: 'number', class: 'cell', step: 'any', min: 0, value: sigma(), onchange: e => { S.sigma = Math.max(0, +e.target.value); resetRun(); renderAll(); } }),
        h('label', {}, 'graine'), h('input', { type: 'number', class: 'cell', step: 1, value: S.seed, onchange: e => { S.seed = Math.round(+e.target.value); resetRun(); renderAll(); } })),
      custom,
      h('p', {}, 'Moyenne vraie : ', h('span', { class: showWorld ? '' : 'hidden-world', title: showWorld ? '' : 'Caché jusqu\'à la validation des prédictions' }, 'y = ' + worldEquation(w)), '  (variables codées)'),
      h('p', { class: 'note' }, 'Ce que la nature « fait », inconnu de l\'expérimentateur. La même graine redonne exactement les mêmes mesures d\'une séance à l\'autre.')));

    // Prédictions puis observations
    const y = S.validated ? D.simulate(S.design, w.model, sigma(), S.seed).map(v => Math.round(v * 100) / 100) : null; S.y = y;
    const tbl = h('table', { class: 'data' }, h('tr', {}, h('th', {}, 'Essai'), ...S.factors.map(f => h('th', {}, f.name)), h('th', {}, 'Ma prédiction'), h('th', {}, 'Observé'), S.validated ? h('th', {}, 'Écart') : null));
    S.design.forEach((x, i) => tbl.append(h('tr', {}, h('td', {}, i + 1), ...x.map((v, j) => h('td', { title: realVal(j, v) + ' ' + S.factors[j].unit }, fmt(v, 2))),
      h('td', {}, h('input', { type: 'number', class: 'cell', step: 'any', value: S.preds[i], disabled: S.validated, oninput: e => { S.preds[i] = e.target.value; } })),
      h('td', {}, y ? h('b', {}, fmt(y[i], 2)) : '—'),
      S.validated ? h('td', {}, S.preds[i] === '' ? '—' : fmt(y[i] - +S.preds[i], 2)) : null)));
    const btn = h('button', { class: 'btn', disabled: S.validated, onclick: () => {
      if (S.preds.some(p => p === '' || isNaN(+p))) { toast('Écrivez d\'abord une prédiction pour chaque essai (même approximative).', true); return; }
      S.validated = true; renderAll();
    } }, 'Valider mes prédictions et réaliser les essais');
    sec.append(h('div', { class: 'card obs' }, h('h2', {}, 'Observations'),
      h('p', { class: 'note' }, 'Écrivez votre prédiction pour chaque essai avant de voir les résultats : l\'écart entre prédiction et observation est la meilleure source d\'apprentissage.'),
      h('div', { class: 'scroll' }, tbl), h('div', { class: 'row' }, btn, S.validated ? h('button', { class: 'btn ghost', onclick: () => { resetRun(); renderAll(); } }, 'Recommencer') : null)));

    // Ajustement
    if (!S.validated) return;
    const T = terms(); const f = D.fitLS(S.design, y, T);
    const fitCard = h('div', { class: 'card fit' }, h('h2', {}, 'Modèle ajusté (votre hypothèse)'), h('div', { class: 'row' }, h('label', {}, 'Modèle ajusté :'), modelSelect()));
    if (!f.beta) {
      fitCard.append(h('div', { class: 'warn' }, `Modèle non identifiable avec ce plan (rang ${f.rank} < ${f.p}). Les moindres carrés n'ont pas de solution unique : voyez l'onglet 2.`));
      sec.append(fitCard); return;
    }
    const se = f.varFactors.map(v => Math.sqrt(v) * sigma());
    const ct = h('table', { class: 'data' }, h('tr', {}, h('th', { class: 'l' }, 'Coefficient'), h('th', {}, 'Estimation'), h('th', {}, 'Écart-type (σ connu)'), (S.prof || S.revealWorld || !w.hidden) ? h('th', {}, 'Vraie valeur') : null));
    T.forEach((t, j) => {
      const tv = w.model.find(c => c[1].join() === t.join()); const truth = tv ? tv[0] : 0;
      ct.append(h('tr', {}, h('td', { class: 'l' }, coefName(t), ' (', termLabel(t), ')'), h('td', {}, h('b', {}, fmt(f.beta[j], 3))), h('td', {}, fmt(se[j], 3)), (S.prof || S.revealWorld || !w.hidden) ? h('td', {}, fmt(truth, 3)) : null));
    });
    const bars = h('div', { class: 'chartbox' });
    fitCard.append(h('div', { class: 'grid2' }, h('div', {}, h('div', { class: 'scroll' }, ct),
      h('p', { class: 'note' }, f.df > 0 ? `Résidus : SCR = ${fmt(f.sse, 3)}, ${f.df} ddl, s = ${fmt(Math.sqrt(f.s2), 3)} (estimation de σ par le modèle).` : 'Plan saturé (N = p) : résidus nuls, aucune estimation de σ ni contrôle du modèle possible.'),
      omitted(w, T) ? h('div', { class: 'warn' }, 'Attention : le monde simulé contient des termes absents du modèle ajusté (', omitted(w, T), '). Les coefficients peuvent être biaisés.') : null),
      h('div', {}, bars, h('p', { class: 'note' }, 'Barres : estimation ; traits : ± 2 écarts-types.'))));
    sec.append(fitCard);
    const regressionRows = h('table', { class: 'data' }, h('tr', {},
      ...['Essai', 'Mesure y', 'Prévision ŷ', 'Résidu y − ŷ'].map(label => h('th', {}, label))));
    y.forEach((value, i) => regressionRows.append(h('tr', {},
      ...[i + 1, fmt(value), fmt(f.fitted[i]), fmt(f.resid[i])].map(value => h('td', {}, value)))));
    const xty = D.matvec(D.transpose(f.X), y);
    sec.append(h('div', { class: 'card' }, h('h2', {}, 'Régression : des mesures aux prévisions'),
      h('p', {}, 'Nous connaissons les réglages X et les mesures y. La régression cherche les coefficients qui minimisent la somme des carrés des résidus.'),
      h('p', {}, 'Quand les colonnes de X sont indépendantes : β̂ = (XᵀX)⁻¹Xᵀy. Puis ŷ = Xβ̂ et r = y − ŷ.'),
      h('div', { class: 'grid2' },
        h('div', { class: 'scroll' }, matrix('Xᵀy =', xty.map(v => [v])), matrix('β̂ =', f.beta.map(v => [v]))),
        h('div', { class: 'scroll' }, regressionRows)),
      h('p', {}, `Somme des carrés des résidus (SCR) = ${fmt(f.sse)}. Un résidu est un écart observé ; il ne provient pas nécessairement du seul bruit de mesure.`)));
    P.coefBars(bars, { names: T.map(coefName), values: f.beta, se, color: 'var(--s1)' });

    // Diagramme d'interaction (2 facteurs, 4 sommets présents)
    if (k() === 2) {
      const mean = (a, b) => { const v = S.design.map((x, i) => [x, y[i]]).filter(([x]) => x[0] === a && x[1] === b).map(q => q[1]); return v.length ? v.reduce((s, q) => s + q) / v.length : null; };
      const m = [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => mean(a, b));
      if (m.every(v => v !== null)) {
        const box = h('div', { class: 'chartbox' }); const f1 = S.factors[0], f2 = S.factors[1];
        sec.append(h('div', { class: 'card obs' }, h('h2', {}, 'Diagramme d\'interaction (moyennes observées)'), box,
          h('p', { class: 'note' }, 'Droites parallèles : pas d\'interaction. Droites qui divergent ou se croisent : l\'effet de ', f1.name, ' dépend de ', f2.name, '.')));
        P.lines(box, { series: [{ name: `${f2.name} = ${f2.low} ${f2.unit}`, color: 'var(--s1)', pts: [[+f1.low, m[0]], [+f1.high, m[1]]] }, { name: `${f2.name} = ${f2.high} ${f2.unit}`, color: 'var(--s2)', dash: '8 5', pts: [[+f1.low, m[2]], [+f1.high, m[3]]] }],
          xmin: +f1.low - (f1.high - f1.low) * 0.25, xmax: +f1.high + (f1.high - f1.low) * 0.25, ymin: Math.min(...m) - 5, ymax: Math.max(...m) + 5, xticks: [+f1.low, +f1.high], xlabel: `${f1.label} (${f1.unit})`, ylabel: 'réponse', width: 480, height: 340 });
      }
    }
  }
  function omitted(w, T) {
    const set = new Set(T.map(t => t.join()));
    const miss = w.model.filter(([c, t]) => Math.abs(c) > 1e-12 && !set.has(t.join())).map(([, t]) => termLabel(t));
    return miss.length ? miss.join(', ') : '';
  }

  // ------------------------------------------------------------------ Onglet 4 : comparer deux plans
  function renderComparer() {
    const sec = $('#tab-comparer'); sec.innerHTML = '';
    const opts = [['__cur', 'Plan courant (onglet 1)'], ...presetsAvail().filter(p => !p.factors || p.factors.length === k()).map(p => [p.id, p.label])];
    if (!S.cmp.a) S.cmp.a = '__cur';
    if (!S.cmp.b || !opts.some(o => o[0] === S.cmp.b)) S.cmp.b = (opts[1] || opts[0])[0];
    const getD = id => id === '__cur' ? S.design : CFG.presets.find(p => p.id === id).design;
    const selA = h('select', { onchange: e => { S.cmp.a = e.target.value; renderAll(); } }, ...opts.map(([v, l]) => h('option', { value: v, selected: v === S.cmp.a }, l)));
    const selB = h('select', { onchange: e => { S.cmp.b = e.target.value; renderAll(); } }, ...opts.map(([v, l]) => h('option', { value: v, selected: v === S.cmp.b }, l)));
    const T = terms();
    const pairSel = h('select', { onchange: e => { S.cmp.pair = e.target.value.split(',').map(Number); renderAll(); } },
      ...T.flatMap((t, i) => T.map((u, j) => (i < j && i > 0) ? h('option', { value: i + ',' + j, selected: S.cmp.pair[0] === i && S.cmp.pair[1] === j }, `${coefName(t)} et ${coefName(u)}`) : null)).filter(Boolean));
    sec.append(h('div', { class: 'card' }, h('h2', {}, 'Choisir deux plans'), h('div', { class: 'row' },
      h('span', { class: 'legend' }, h('span', { style: '--c:var(--s1)' }, 'Plan 1')), selA, h('span', { class: 'legend' }, h('span', { style: '--c:var(--s2)' }, 'Plan 2')), selB,
      h('label', {}, 'Modèle :'), modelSelect(), h('label', {}, 'Coefficients tracés :'), pairSel),
      h('p', { class: 'note' }, 'Comparaison a priori : tout ce qui suit se calcule sans aucune mesure, à partir de X seule (sauf les nuages simulés).')));
    const A = [getD(S.cmp.a), getD(S.cmp.b)].map(d => D.analyseDesign(d, T));
    const row = (label, f) => h('tr', {}, h('td', { class: 'l' }, label), ...A.map((a, i) => h('td', {}, f(a, i))));
    const s2 = sigma() ** 2;
    const tb = h('table', { class: 'data' }, h('tr', {}, h('th', { class: 'l' }, ''), h('th', {}, 'Plan 1'), h('th', {}, 'Plan 2')),
      row('Nombre d\'essais N', a => a.N), row('Rang / p', a => `${a.rank} / ${a.p}`),
      row('Identifiable', a => a.identifiable ? h('span', { class: 'pill ok' }, 'oui') : h('span', { class: 'pill ko' }, 'non')),
      row('Orthogonal', a => a.identifiable ? (a.orthogonal ? 'oui' : 'non') : '—'),
      row('Réalisable (contrainte)', (a, i) => [getD(S.cmp.a), getD(S.cmp.b)][i].every(feasible) ? 'oui' : h('span', { class: 'pill ko' }, 'non')),
      row('det(XᵀX)', a => a.identifiable ? fmt(a.det, 3) : '0'),
      ...T.map((t, j) => row(`Var(${coefName(t)}) / σ²`, a => a.identifiable ? frac(a.varFactors[j]) : '—')),
      row(`Corr(${coefName(T[S.cmp.pair[0]] || [0])}, ${coefName(T[S.cmp.pair[1]] || [1])})`, a => a.identifiable ? fmt(a.corr[S.cmp.pair[0]][S.cmp.pair[1]], 3) : '—'));
    const d1 = h('div'), d2 = h('div'), cl = h('div', { class: 'chartbox', style: 'max-width:620px' });
    sec.append(h('div', { class: 'grid2' }, h('div', { class: 'card' }, h('h2', {}, 'Propriétés comparées'), h('div', { class: 'scroll' }, tb), h('p', { class: 'note' }, `Avec σ = ${fmt(sigma())} : multiplier les Var/σ² par σ² = ${fmt(s2, 4)}.`)),
      h('div', { class: 'card' }, h('h2', {}, 'Disposition des essais'), h('div', { class: 'grid2' }, d1, d2))));
    domainPlot(d1, getD(S.cmp.a), 'var(--s1)', null, { width: 300, height: 300 });
    domainPlot(d2, getD(S.cmp.b), 'var(--s2)', null, { width: 300, height: 300 });
    // Nuages Monte-Carlo
    const w = curWorld(); const [ia, ib] = S.cmp.pair;
    const card = h('div', { class: 'card' }, h('h2', {}, `${S.cmp.R} campagnes simulées : dispersion de (${coefName(T[ia])}, ${coefName(T[ib])})`),
      h('p', { class: 'note' }, `Monde : ${w.hidden && !S.prof ? 'caché' : w.label} · σ = ${fmt(sigma())} · graines fixes (${S.seed * 1000} et suivantes). Ellipses : ± 2 écarts-types théoriques, σ²(XᵀX)⁻¹. Si le monde contient des termes absents du modèle, le nuage peut être décentré (biais).`),
      h('div', { class: 'legend' }, h('span', { style: '--c:var(--s1)' }, 'Plan 1'), h('span', { style: '--c:var(--s2)' }, 'Plan 2')), cl);
    sec.append(card);
    const clouds = [];
    A.forEach((a, n) => {
      if (!a.identifiable || !T[ia] || !T[ib]) return;
      const des = [getD(S.cmp.a), getD(S.cmp.b)][n]; const pts = [];
      for (let r = 0; r < S.cmp.R; r++) { const yy = D.simulate(des, w.model, sigma(), S.seed * 1000 + n * 100000 + r); const b = D.matvec(a.XtXinv, D.matvec(D.transpose(a.X), yy)); pts.push([b[ia], b[ib]]); }
      const tv = t => { const c = w.model.find(q => q[1].join() === t.join()); return c ? c[0] : 0; };
      clouds.push({ name: 'Plan ' + (n + 1), color: n ? 'var(--s2)' : 'var(--s1)', pts, center: [tv(T[ia]), tv(T[ib])], cov: [[s2 * a.XtXinv[ia][ia], s2 * a.XtXinv[ia][ib]], [s2 * a.XtXinv[ib][ia], s2 * a.XtXinv[ib][ib]]] });
    });
    if (clouds.length) P.clouds(cl, { clouds: clouds.reverse(), xlabel: coefName(T[ia]), ylabel: coefName(T[ib]), width: 600, height: 520 });
    else cl.append(h('div', { class: 'warn' }, 'Aucun des deux plans n\'identifie le modèle : pas de nuage à tracer.'));
  }

  // ------------------------------------------------------------------ Onglet enseignant
  function renderProf() {
    const sec = $('#tab-prof'); sec.innerHTML = '';
    if (!S.prof) {
      const inp = h('input', { type: 'text', placeholder: 'code enseignant' });
      sec.append(h('div', { class: 'card' }, h('h2', {}, 'Espace enseignant'), h('p', {}, 'Saisissez le code enseignant (voir guide P1) pour révéler progressivement les informations.'),
        h('div', { class: 'row' }, inp, h('button', { class: 'btn', onclick: () => tryCode(inp.value) }, 'Entrer'))));
      return;
    }
    const list = h('table', { class: 'data' }, h('tr', {}, h('th', { class: 'l' }, 'Code'), h('th', { class: 'l' }, 'Ce qu\'il déverrouille'), h('th', {}, 'État')));
    Object.entries(CFG.codes).forEach(([c, v]) => list.append(h('tr', {}, h('td', { class: 'l' }, h('b', {}, c)), h('td', { class: 'l' }, v.label),
      h('td', {}, S.unlocked.has(c) ? 'annoncé' : h('button', { class: 'btn ghost', onclick: () => { S.unlocked.add(c); persist(); renderAll(); } }, 'marquer annoncé')))));
    sec.append(h('div', { class: 'grid2' },
      h('div', { class: 'card' }, h('h2', {}, 'Codes de la séance (à annoncer oralement)'), list,
        h('p', { class: 'note' }, 'Les étudiants saisissent ces codes en haut à droite. Ils ne sont pas secrets au sens informatique (le code source est lisible) : ils servent à rythmer la séance.')),
      h('div', { class: 'card' }, h('h2', {}, 'Révélations et projection'),
        h('div', { class: 'row' }, h('button', { class: 'btn', onclick: () => { S.revealWorld = !S.revealWorld; renderAll(); } }, S.revealWorld ? 'Masquer le monde simulé' : 'Révéler le monde simulé')),
        h('div', { class: 'row' }, h('button', { class: 'btn ghost', onclick: () => { document.body.classList.toggle('projection'); } }, 'Mode projection (gros caractères)')),
        h('div', { class: 'row' }, h('button', { class: 'btn danger', onclick: () => { S.prof = false; S.unlocked.clear(); persist(); renderAll(); } }, 'Quitter le mode enseignant et tout reverrouiller')),
        CFG.teacherNotes ? h('div', { class: 'info' }, CFG.teacherNotes) : null)));
  }

  function renderAll() {
    renderHeader(); renderTabs();
    ({ plan: renderPlan, matrice: renderMatrice, simuler: renderSimuler, comparer: renderComparer, prof: renderProf })[tab]?.();
  }

  // ------------------------------------------------------------------ démarrage
  const qp = new URLSearchParams(location.search);
  if (qp.get('code')) qp.get('code').split(',').forEach(c => { const u = c.trim().toUpperCase(); if (CFG.codes[u]) S.unlocked.add(u); if (u === (CFG.teacherCode || 'MENTOR')) S.prof = true; });
  persist();
  loadPreset(qp.get('preset') || CFG.startPreset);
  if (qp.get('monde') && CFG.worlds[qp.get('monde')] && isUnlocked(CFG.worlds[qp.get('monde')].code)) { if (S.world !== qp.get('monde')) S.sigma = null; S.world = qp.get('monde'); }
  // Démonstration enseignant : ?valider réalise les essais sans saisie de prédictions (mode enseignant uniquement)
  if (qp.has('valider') && S.prof) { S.preds = S.design.map(() => '0'); S.validated = true; }
  renderAll();
  window.Labo = { state: S, loadPreset, tryCode, renderAll };
})();
