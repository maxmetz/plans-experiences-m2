/* s1-charts.js — graphiques des diapositives S1, calculés à partir de s1-data.js et doe-core.js. */
(function () {
  'use strict';
  const P = window.Plots, D = window.DoE, S = window.S1;
  const $ = id => document.getElementById(id);
  const split = (id, n) => { const c = $(id); if (!c) return []; c.innerHTML = ''; c.style.display = 'grid'; c.style.gridTemplateColumns = `repeat(${n}, 1fr)`; c.style.gap = '18px'; return Array.from({ length: n }, () => { const d = document.createElement('div'); c.appendChild(d); return d; }); };
  const obs = w => S.observed[w];
  const corners = w => [[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => [a, b, String(obs(w)[a + ',' + b])]);

  function draw() {
    // Diapo 4 : deux stratégies
    const [s1, s2] = split('ch-a-strategies', 2);
    if (s1) {
      P.domain(s1, { points: S.designs.OFAT3.D, color: 'var(--s2)', arrows: [[[-1, -1], [1, -1], 'var(--s2)'], [[-1, -1], [-1, 1], 'var(--s2)']], xlabel: 'x₁ (T)', ylabel: 'x₂ (t)', width: 330, height: 330 });
      P.domain(s2, { points: S.designs.FACT4.D, color: 'var(--s1)', xlabel: 'x₁ (T)', ylabel: 'x₂ (t)', width: 330, height: 330 });
      s1.insertAdjacentHTML('beforeend', '<p class="small center">un facteur à la fois : 3 essais</p>');
      s2.insertAdjacentHTML('beforeend', '<p class="small center">factoriel 2² : 4 essais</p>');
    }
    // Diapo 6 : résultats par laboratoire
    for (const [id, w, col] of [['ch-a-worldA', 'A', 'var(--s1)'], ['ch-a-worldB', 'B', 'var(--s2)']]) {
      const c = $(id); if (!c) continue;
      P.domain(c, { points: S.designs.FACT4.D, color: col, cornerValues: corners(w).map(p => [p[0], p[1], p[2] + ' %']), xlabel: 'x₁ : 40 → 60 °C', ylabel: 'x₂ : 1 → 2 h', width: 400, height: 330 });
    }
    // Diapo 7 : chemins adaptatifs (laboratoire B)
    const cv = corners('B').map(p => [p[0], p[1], p[2]]);
    if ($('ch-a-pathT')) P.domain($('ch-a-pathT'), { points: S.designs.FACT4.D, color: '#b9b8b2', cornerValues: cv, arrows: [[[-1, -1], [1, -1], 'var(--s2)'], [[1, -1], [1, 1], 'var(--s2)']], highlight: p => (p[0] === 1 && p[1] === -1) ? 'var(--s2)' : null, width: 380, height: 380 });
    if ($('ch-a-patht')) P.domain($('ch-a-patht'), { points: S.designs.FACT4.D, color: '#b9b8b2', cornerValues: cv, arrows: [[[-1, -1], [-1, 1], 'var(--s1)'], [[-1, 1], [1, 1], 'var(--s1)']], highlight: p => (p[0] === -1 && p[1] === 1) ? 'var(--s1)' : null, width: 380, height: 380 });
    // Diapo 8 : diagrammes d'interaction (petits multiples A | B)
    const [ia, ib] = split('ch-a-inter', 2);
    if (ia) for (const [box, w, col] of [[ia, 'A', 'var(--s1)'], [ib, 'B', 'var(--s2)']]) {
      const o = obs(w);
      P.lines(box, {
        series: [{ name: '1 h', color: col, pts: [[40, o['-1,-1']], [60, o['1,-1']]] }, { name: '2 h', color: col, dash: '9 6', pts: [[40, o['-1,1']], [60, o['1,1']]] }],
        xmin: 35, xmax: 65, ymin: 10, ymax: 70, xticks: [40, 60], yticks: [10, 30, 50, 70], xlabel: `T (°C) — laboratoire ${w}`, ylabel: 'rendement (%)', width: 360, height: 360, xfmt: v => v + ' °C'
      });
    }
    // Diapo 11 : journal
    if ($('ch-b-journal')) {
      const yJ = D.simulate(S.designs.DIAG6.D, S.worlds.A.model, S.worlds.A.sigma, S.journalSeed).map(v => Math.round(v * 10) / 10);
      const sx = S.designs.DIAG6.D.map(x => x[0]);
      const f = D.fitLS(sx.map(v => [v]), yJ, D.modelTerms(1, 'lineaire'));
      P.lines($('ch-b-journal'), {
        series: [{ name: 'ajustement', color: 'var(--muted)', dash: '6 5', values: false, pts: [[-1, f.beta[0] - f.beta[1]], [1, f.beta[0] + f.beta[1]]] },
        { name: 'lots', color: 'var(--s1)', values: false, pts: sx.map((s, i) => [s, yJ[i]]) }],
        xmin: -1.2, xmax: 1.2, ymin: 15, ymax: 65, xticks: [-1, -0.5, 0, 0.5, 1], xlabel: 'x₁ = x₂ (T et t ensemble)', ylabel: 'rendement (%)', width: 560, height: 420, labelEnd: false
      });
      // le tracé « lots » ne doit pas être relié : on masque le chemin
      const paths = $('ch-b-journal').querySelectorAll('path.series-line'); if (paths[1]) paths[1].style.display = 'none';
    }
    // Diapo 13 : diagonale + essai découplé
    if ($('ch-b-domain')) P.domain($('ch-b-domain'), { points: S.designs.DIAG6P.D, color: 'var(--s1)', nullLine: true, highlight: p => (p[0] === 1 && p[1] === -1) ? 'var(--s2)' : null, width: 400, height: 400 });
    // Diapo 16 : cinq plans
    const keys = ['DIAG6', 'OFAT3', 'OFAT6', 'FACT4', 'FACT8'], names = ['P1 journal (6)', 'P2 un à la fois (3)', 'P3 = P2 dupliqué (6)', 'P4 factoriel (4)', 'P5 = P4 dupliqué (8)'];
    const cs = split('ch-c-plans', 5);
    cs.forEach((c, i) => { P.domain(c, { points: S.designs[keys[i]].D, color: i < 3 ? 'var(--s2)' : 'var(--s1)', width: 300, height: 300 }); c.insertAdjacentHTML('beforeend', `<p class="small center" style="margin:2px 0">${names[i]}</p>`); });
    // Diapo 21 : Q1 / Q2
    if ($('ch-d-q1')) P.domain($('ch-d-q1'), { points: S.designs.FACT4.D, color: 'var(--s1)', width: 380, height: 360 });
    if ($('ch-d-q2')) P.domain($('ch-d-q2'), { points: S.designs.OFATR.D, color: 'var(--s2)', width: 380, height: 360 });
    // Diapo 24 : contrainte
    if ($('ch-d-constraint')) P.domain($('ch-d-constraint'), {
      points: [[-1, -1, 'base'], [1, -1], [-1, 1], [0, 0, 'C'], [0.5, 0.5, 'F']], forbidden: [[0, 1], [1, 1], [1, 0]],
      highlight: p => (p[0] === 0 && p[1] === 0) ? 'var(--s3)' : (p[0] === 0.5 ? 'var(--s4)' : 'var(--s1)'), width: 460, height: 440
    });
  }

  // Diapo 23 : nuages Monte-Carlo (calculés à la première révélation de la diapositive, pour ne pas ralentir l'ouverture)
  let cloudsDone = false;
  function drawClouds() {
    const c = $('ch-d-clouds'); if (!c || cloudsDone) return; cloudsDone = true;
    const truth = [[40, []], [8, [0]], [10, [1]]], sigma = 1.5, R = 500, T2 = D.modelTerms(2, 'lineaire');
    const mk = (key, color, name, seed0) => {
      const des = S.designs[key].D; const a = D.analyseDesign(des, T2); const pts = [];
      for (let r = 0; r < R; r++) { const y = D.simulate(des, truth, sigma, seed0 + r); const b = D.matvec(a.XtXinv, D.matvec(D.transpose(a.X), y)); pts.push([b[1], b[2]]); }
      const v = a.XtXinv; return { name, color, pts, center: [8, 10], cov: [[sigma ** 2 * v[1][1], sigma ** 2 * v[1][2]], [sigma ** 2 * v[2][1], sigma ** 2 * v[2][2]]] };
    };
    P.clouds(c, { clouds: [mk('OFATR', 'var(--s2)', 'Q2', 5000), mk('FACT4', 'var(--s1)', 'Q1', 9000)], bounds: [5, 11, 7, 13], width: 620, height: 560, xlabel: 'b̂₁ (vrai : 8)', ylabel: 'b̂₂ (vrai : 10)' });
  }

  function init() {
    draw();
    if (window.renderMathInElement) renderMathInElement(document.body, { delimiters: [{ left: '\\[', right: '\\]', display: true }, { left: '\\(', right: '\\)', display: false }], throwOnError: false });
    document.addEventListener('slidechange', e => { if (e.detail.slide.querySelector('#ch-d-clouds')) drawClouds(); });
    document.addEventListener('printready', drawClouds);
    if (location.search.includes('print') || (window.Deck && Deck.slides[Deck.index].querySelector('#ch-d-clouds'))) drawClouds();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
