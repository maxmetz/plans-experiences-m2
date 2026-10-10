/* plots.js — petits graphiques SVG sans dépendance (slides et laboratoire).
 * Couleurs : variables CSS --s1..--s4 (palette catégorielle validée), --ink, --muted, --grid.
 * Chaque marque porte un <title> (info-bulle native au survol).
 */
(function (root) {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs = {}, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) if (v !== undefined && v !== null) e.setAttribute(k, v);
    if (parent) parent.appendChild(e);
    return e;
  };
  const txt = (parent, x, y, s, attrs = {}) => { const t = el('text', { x, y, ...attrs }, parent); t.textContent = s; return t; };
  const tip = (node, s) => { const t = el('title', {}, node); t.textContent = s; return node; };
  const fmt = (v, d = 2) => (Math.round(v * 10 ** d) / 10 ** d).toLocaleString('fr-FR');
  const niceTicks = (a, b, n = 5) => {
    const span = b - a || 1; const step0 = span / n; const p = 10 ** Math.floor(Math.log10(step0));
    const step = [1, 2, 2.5, 5, 10].map(m => m * p).find(s => s >= step0) || p * 10;
    const out = []; for (let v = Math.ceil(a / step) * step; v <= b + 1e-9; v += step) out.push(Math.round(v * 1e9) / 1e9);
    return out;
  };

  function frame(container, { width = 520, height = 380, margin = { l: 56, r: 20, t: 16, b: 46 } } = {}) {
    container.innerHTML = '';
    const svg = el('svg', { viewBox: `0 0 ${width} ${height}`, class: 'plot', role: 'img' }, container);
    return { svg, W: width, H: height, m: margin, iw: width - margin.l - margin.r, ih: height - margin.t - margin.b };
  }
  function axes(f, { xmin, xmax, ymin, ymax, xticks, yticks, xlabel, ylabel, xfmt = v => fmt(v), yfmt = v => fmt(v), grid = true }) {
    const sx = v => f.m.l + (v - xmin) / (xmax - xmin) * f.iw;
    const sy = v => f.m.t + f.ih - (v - ymin) / (ymax - ymin) * f.ih;
    const g = el('g', { class: 'axes' }, f.svg);
    (yticks || niceTicks(ymin, ymax)).forEach(v => {
      if (grid) el('line', { x1: f.m.l, x2: f.m.l + f.iw, y1: sy(v), y2: sy(v), class: 'grid' }, g);
      txt(g, f.m.l - 8, sy(v) + 4, yfmt(v), { class: 'tick', 'text-anchor': 'end' });
    });
    (xticks || niceTicks(xmin, xmax)).forEach(v => {
      if (grid) el('line', { y1: f.m.t, y2: f.m.t + f.ih, x1: sx(v), x2: sx(v), class: 'grid' }, g);
      txt(g, sx(v), f.m.t + f.ih + 18, xfmt(v), { class: 'tick', 'text-anchor': 'middle' });
    });
    el('line', { x1: f.m.l, x2: f.m.l + f.iw, y1: f.m.t + f.ih, y2: f.m.t + f.ih, class: 'axis' }, g);
    el('line', { x1: f.m.l, x2: f.m.l, y1: f.m.t, y2: f.m.t + f.ih, class: 'axis' }, g);
    if (xlabel) txt(g, f.m.l + f.iw / 2, f.H - 8, xlabel, { class: 'label', 'text-anchor': 'middle' });
    if (ylabel) txt(g, 14, f.m.t + f.ih / 2, ylabel, { class: 'label', 'text-anchor': 'middle', transform: `rotate(-90 14 ${f.m.t + f.ih / 2})` });
    return { sx, sy };
  }

  /** Lignes avec marqueurs ; étiquette directe en bout de ligne. series: [{name, color, dash, pts:[[x,y]..]}] */
  function lines(container, { series, xmin, xmax, ymin, ymax, xticks, yticks, xlabel, ylabel, width, height, xfmt, labelEnd = true }) {
    const f = frame(container, { width, height, margin: { l: 56, r: labelEnd ? 92 : 20, t: 16, b: 46 } });
    const { sx, sy } = axes(f, { xmin, xmax, ymin, ymax, xticks, yticks, xlabel, ylabel, xfmt });
    series.forEach((s, i) => {
      const d = s.pts.map((p, j) => `${j ? 'L' : 'M'}${sx(p[0])},${sy(p[1])}`).join('');
      el('path', { d, class: 'series-line', stroke: s.color, 'stroke-dasharray': s.dash || null }, f.svg);
      s.pts.forEach(p => tip(el('circle', { cx: sx(p[0]), cy: sy(p[1]), r: 5.5, class: 'marker', fill: s.color }, f.svg), `${s.name} : ${xfmt ? xfmt(p[0]) : fmt(p[0])} → ${fmt(p[1], 1)}`));
      s.pts.forEach(p => { if (s.values !== false) txt(f.svg, sx(p[0]) + (p[0] === xmin ? -10 : 10), sy(p[1]) + 4, fmt(p[1], 1), { class: 'val', 'text-anchor': p[0] === xmin ? 'end' : 'start' }); });
      if (labelEnd) { const q = s.pts[s.pts.length - 1]; txt(f.svg, sx(q[0]) + 40, sy(q[1]) + 4, s.name, { class: 'direct', fill: 'currentColor' }); }
    });
    return f;
  }

  /** Domaine codé [-1,1]² avec points d'essais. opts: {points:[[x1,x2,label?]], color, constraint:fn, forbidden:polygon, arrows:[[from,to]], labels} */
  function domain(container, { points = [], color = 'var(--s1)', forbidden, arrows = [], cornerValues, xlabel = 'x₁', ylabel = 'x₂', width = 360, height = 360, onClick, highlight, nullLine }) {
    const f = frame(container, { width, height, margin: { l: 48, r: 22, t: 22, b: 44 } });
    const { sx, sy } = axes(f, { xmin: -1.25, xmax: 1.25, ymin: -1.25, ymax: 1.25, xticks: [-1, -0.5, 0, 0.5, 1], yticks: [-1, -0.5, 0, 0.5, 1], xlabel, ylabel, grid: true });
    el('rect', { x: sx(-1), y: sy(1), width: sx(1) - sx(-1), height: sy(-1) - sy(1), class: 'domain' }, f.svg);
    if (forbidden) el('polygon', { points: forbidden.map(p => `${sx(p[0])},${sy(p[1])}`).join(' '), class: 'forbidden' }, f.svg);
    if (nullLine) el('line', { x1: sx(-1.2), y1: sy(-1.2), x2: sx(1.2), y2: sy(1.2), class: 'nullline' }, f.svg);
    arrows.forEach(([a, b, c]) => {
      const [x1, y1, x2, y2] = [sx(a[0]), sy(a[1]), sx(b[0]), sy(b[1])]; const L = Math.hypot(x2 - x1, y2 - y1); const k = (L - 12) / L;
      el('line', { x1, y1, x2: x1 + (x2 - x1) * k, y2: y1 + (y2 - y1) * k, class: 'arrow', stroke: c || color, 'marker-end': 'url(#arrowhead)' }, f.svg);
    });
    const defs = el('defs', {}, f.svg); const mk = el('marker', { id: 'arrowhead', viewBox: '0 0 10 10', refX: 5, refY: 5, markerWidth: 6, markerHeight: 6, orient: 'auto-start-reverse' }, defs);
    el('path', { d: 'M0,0 L10,5 L0,10 z', fill: 'context-stroke' }, mk);
    // compter les répétitions
    const counts = new Map(); points.forEach(p => { const k = p[0] + ',' + p[1]; counts.set(k, (counts.get(k) || 0) + 1); });
    const seen = new Set();
    points.forEach((p, i) => {
      const k = p[0] + ',' + p[1]; if (seen.has(k)) return; seen.add(k);
      const n = counts.get(k);
      const c = tip(el('circle', { cx: sx(p[0]), cy: sy(p[1]), r: 8, class: 'design-pt', fill: (highlight && highlight(p)) || color }, f.svg), `(${fmt(p[0])} ; ${fmt(p[1])})${n > 1 ? ` — ${n} essais` : ''}`);
      if (n > 1) txt(f.svg, sx(p[0]) + 11, sy(p[1]) - 9, '×' + n, { class: 'rep' });
      if (p[2] !== undefined) txt(f.svg, sx(p[0]), sy(p[1]) + (p[1] > 0 ? -16 : 26), p[2], { class: 'val', 'text-anchor': 'middle' });
    });
    if (cornerValues) cornerValues.forEach(([x, y, s]) => txt(f.svg, sx(x), sy(y) + (y > 0 ? -16 : 26), s, { class: 'val big', 'text-anchor': 'middle' }));
    if (onClick) {
      f.svg.style.cursor = 'crosshair';
      f.svg.addEventListener('click', ev => {
        const pt = f.svg.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY;
        const q = pt.matrixTransform(f.svg.getScreenCTM().inverse());
        const x = -1.25 + (q.x - f.m.l) / f.iw * 2.5, y = -1.25 + (f.m.t + f.ih - q.y) / f.ih * 2.5;
        onClick(Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y)), ev);
      });
    }
    return f;
  }

  /** Nuages Monte-Carlo de (b1, b2) + ellipses théoriques. clouds: [{name,color,pts:[[b1,b2]], cov:[[v11,v12],[v12,v22]] (en unités réelles), center:[b1,b2]}] */
  function clouds(container, { clouds, xlabel = 'b̂₁', ylabel = 'b̂₂', width = 520, height = 420, k = 2, bounds }) {
    const all = clouds.flatMap(c => c.pts);
    let xmin, xmax, ymin, ymax;
    if (bounds) [xmin, xmax, ymin, ymax] = bounds;
    else {
      const xs = all.map(p => p[0]), ys = all.map(p => p[1]);
      const pad = (a, b) => [(a - (b - a) * 0.08), (b + (b - a) * 0.08)];
      [xmin, xmax] = pad(Math.min(...xs), Math.max(...xs)); [ymin, ymax] = pad(Math.min(...ys), Math.max(...ys));
      const c = [(xmin + xmax) / 2, (ymin + ymax) / 2], r = Math.max(xmax - xmin, ymax - ymin) / 2;
      [xmin, xmax, ymin, ymax] = [c[0] - r, c[0] + r, c[1] - r, c[1] + r];
    }
    const f = frame(container, { width, height, margin: { l: 56, r: 20, t: 16, b: 46 } });
    const { sx, sy } = axes(f, { xmin, xmax, ymin, ymax, xlabel, ylabel });
    clouds.forEach(c => {
      c.pts.forEach(p => el('circle', { cx: sx(p[0]), cy: sy(p[1]), r: 2.2, fill: c.color, class: 'cloud-pt' }, f.svg));
    });
    clouds.forEach(c => {
      if (!c.cov) return;
      const [[a, b], [, d]] = c.cov; const tr = a + d, det = a * d - b * b;
      const l1 = tr / 2 + Math.sqrt(tr * tr / 4 - det), l2 = tr / 2 - Math.sqrt(Math.max(0, tr * tr / 4 - det));
      const th = Math.abs(b) < 1e-12 ? (a >= d ? 0 : Math.PI / 2) : Math.atan2(l1 - a, b);
      const pts = []; for (let t = 0; t <= 64; t++) {
        const u = 2 * Math.PI * t / 64; const ex = k * Math.sqrt(l1) * Math.cos(u), ey = k * Math.sqrt(Math.max(l2, 0)) * Math.sin(u);
        pts.push([c.center[0] + ex * Math.cos(th) - ey * Math.sin(th), c.center[1] + ex * Math.sin(th) + ey * Math.cos(th)]);
      }
      tip(el('path', { d: pts.map((p, j) => `${j ? 'L' : 'M'}${sx(p[0])},${sy(p[1])}`).join('') + 'Z', class: 'ellipse', stroke: c.color }, f.svg),
        `${c.name} : Var(b̂₁)=${fmt(a, 3)}, Var(b̂₂)=${fmt(d, 3)}, Cov=${fmt(b, 3)}`);
    });
    if (clouds[0] && clouds[0].center) {
      const [cx, cy] = clouds[0].center; el('line', { x1: sx(cx), x2: sx(cx), y1: f.m.t, y2: f.m.t + f.ih, class: 'truth' }, f.svg);
      el('line', { y1: sy(cy), y2: sy(cy), x1: f.m.l, x2: f.m.l + f.iw, class: 'truth' }, f.svg);
    }
    return f;
  }

  /** Barres horizontales des coefficients (signe), avec barres d'erreur ±2 écarts-types optionnelles. */
  function coefBars(container, { names, values, se, color = 'var(--s1)', width = 460, height }) {
    const n = names.length; height = height || 40 + n * 34;
    const vmax = Math.max(1e-9, ...values.map((v, i) => Math.abs(v) + (se ? 2 * se[i] : 0))) * 1.1;
    const f = frame(container, { width, height: height + 16, margin: { l: 70, r: 64, t: 10, b: 50 } });
    const { sx } = axes(f, { xmin: -vmax, xmax: vmax, ymin: 0, ymax: n, yticks: [], xlabel: 'valeur du coefficient (unités codées)' });
    values.forEach((v, i) => {
      const y = f.m.t + (i + 0.5) * f.ih / n; const h = Math.min(20, f.ih / n * 0.6);
      const x0 = sx(0), x1 = sx(v);
      tip(el('rect', { x: Math.min(x0, x1), y: y - h / 2, width: Math.max(1, Math.abs(x1 - x0)), height: h, rx: 3, fill: color, class: 'bar' }, f.svg), `${names[i]} = ${fmt(v, 3)}${se ? ` (écart-type ${fmt(se[i], 3)})` : ''}`);
      if (se) { el('line', { x1: sx(v - 2 * se[i]), x2: sx(v + 2 * se[i]), y1: y, y2: y, class: 'errbar' }, f.svg); }
      txt(f.svg, f.m.l - 8, y + 4, names[i], { class: 'tick', 'text-anchor': 'end' });
      txt(f.svg, f.m.l + f.iw + 6, y + 4, fmt(v, 2), { class: 'val' });
    });
    el('line', { x1: sx(0), x2: sx(0), y1: f.m.t, y2: f.m.t + f.ih, class: 'axis' }, f.svg);
    return f;
  }

  root.Plots = { lines, domain, clouds, coefBars, el, txt, fmt, niceTicks };
})(typeof self !== 'undefined' ? self : this);
