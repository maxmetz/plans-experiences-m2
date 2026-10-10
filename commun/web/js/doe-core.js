/* doe-core.js — noyau de calcul partagé (module « Plans d'expériences », AMU).
 * Algèbre linéaire élémentaire, rang, inverse, moindres carrés, matrice du modèle,
 * générateur pseudo-aléatoire à graine fixe. Aucune dépendance.
 * Utilisable dans le navigateur (window.DoE) et dans Node (require).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.DoE = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  const EPS = 1e-9;

  // ---------- Matrices (tableaux de lignes) ----------
  const shape = A => [A.length, A.length ? A[0].length : 0];
  const zeros = (n, m) => Array.from({ length: n }, () => new Array(m).fill(0));
  const identity = n => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  const transpose = A => (A.length ? A[0].map((_, j) => A.map(r => r[j])) : []);
  function matmul(A, B) {
    const [n, k] = shape(A), [k2, m] = shape(B);
    if (k !== k2) throw new Error(`Dimensions incompatibles : (${n}×${k})·(${k2}×${m})`);
    const C = zeros(n, m);
    for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) {
      let s = 0; for (let l = 0; l < k; l++) s += A[i][l] * B[l][j]; C[i][j] = s;
    }
    return C;
  }
  const matvec = (A, v) => A.map(r => r.reduce((s, a, j) => s + a * v[j], 0));
  const dot = (u, v) => u.reduce((s, a, i) => s + a * v[i], 0);
  const scale = (A, c) => A.map(r => r.map(a => a * c));
  const clean = (x, d = 10) => { const v = Math.round(x * 10 ** d) / 10 ** d; return Object.is(v, -0) ? 0 : v; };
  const cleanM = A => A.map(r => r.map(a => clean(a)));

  /** Réduction de Gauss (échelonnement) avec pivot partiel. Retourne {R, rank, pivots}. */
  function rref(A, tol = EPS) {
    const M = A.map(r => r.slice()); const [n, m] = shape(M);
    const pivots = []; let row = 0;
    const normA = Math.max(1, ...M.flat().map(Math.abs));
    for (let col = 0; col < m && row < n; col++) {
      let p = row, best = Math.abs(M[row][col]);
      for (let i = row + 1; i < n; i++) if (Math.abs(M[i][col]) > best) { best = Math.abs(M[i][col]); p = i; }
      if (best <= tol * normA) continue;
      [M[row], M[p]] = [M[p], M[row]];
      const piv = M[row][col];
      for (let j = col; j < m; j++) M[row][j] /= piv;
      for (let i = 0; i < n; i++) if (i !== row) {
        const f = M[i][col]; if (f !== 0) for (let j = col; j < m; j++) M[i][j] -= f * M[row][j];
      }
      pivots.push(col); row++;
    }
    return { R: M, rank: pivots.length, pivots };
  }
  const rank = A => rref(A).rank;

  /** Inverse par Gauss-Jordan ; renvoie null si la matrice est singulière. */
  function inverse(A) {
    const n = A.length; const aug = A.map((r, i) => r.concat(identity(n)[i]));
    const { R, rank: r } = rref(aug.map(row => row.slice()));
    // Vérifier que la partie gauche est l'identité
    const left = R.map(row => row.slice(0, n));
    if (rref(A).rank < n) return null;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (Math.abs(left[i][j] - (i === j ? 1 : 0)) > 1e-7) return null;
    return R.map(row => row.slice(n));
  }
  function det(A) {
    const n = A.length; const M = A.map(r => r.slice()); let d = 1;
    for (let c = 0; c < n; c++) {
      let p = c; for (let i = c + 1; i < n; i++) if (Math.abs(M[i][c]) > Math.abs(M[p][c])) p = i;
      if (Math.abs(M[p][c]) < 1e-14) return 0;
      if (p !== c) { [M[p], M[c]] = [M[c], M[p]]; d = -d; }
      d *= M[c][c];
      for (let i = c + 1; i < n; i++) { const f = M[i][c] / M[c][c]; for (let j = c; j < n; j++) M[i][j] -= f * M[c][j]; }
    }
    return d;
  }

  /** Base du noyau (vecteurs v tels que A v = 0), utile pour montrer la non-identifiabilité. */
  function nullspace(A) {
    const m = A[0].length; const { R, pivots } = rref(A);
    const free = [...Array(m).keys()].filter(j => !pivots.includes(j));
    return free.map(f => {
      const v = new Array(m).fill(0); v[f] = 1;
      pivots.forEach((pc, i) => { v[pc] = -R[i][f]; });
      return v.map(x => clean(x));
    });
  }

  // ---------- Modèles ----------
  /** Termes d'un modèle : liste de tableaux d'indices de facteurs. [] = constante, [0] = x1, [0,1] = x1x2, [0,0] = x1². */
  function modelTerms(k, type) {
    const t = [[]];
    for (let i = 0; i < k; i++) t.push([i]);
    if (type === 'interactions' || type === 'quadratique')
      for (let i = 0; i < k; i++) for (let j = i + 1; j < k; j++) t.push([i, j]);
    if (type === 'quadratique') for (let i = 0; i < k; i++) t.push([i, i]);
    return t;
  }
  const termName = (t, names) => t.length === 0 ? 'b0' : 'b' + t.map(i => i + 1).join('');
  const termLabel = (t, names) => t.length === 0 ? '1' : (t.length === 2 && t[0] === t[1] ? names[t[0]] + '²' : t.map(i => names[i]).join('·'));
  /** Matrice du modèle X (N × p) pour un plan D (N × k) en variables codées. */
  const modelMatrix = (D, terms) => D.map(x => terms.map(t => t.reduce((p, i) => p * x[i], 1)));

  /** Analyse complète d'un plan pour un modèle donné. */
  function analyseDesign(D, terms) {
    const X = modelMatrix(D, terms); const Xt = transpose(X); const XtX = matmul(Xt, X);
    const r = rank(X); const p = terms.length; const N = D.length;
    const res = { X, XtX, rank: r, p, N, identifiable: r === p };
    if (r === p) {
      const inv = inverse(XtX); res.XtXinv = inv; res.det = det(XtX);
      res.varFactors = inv.map((row, i) => row[i]); // en unités de σ²
      res.corr = inv.map((row, i) => row.map((v, j) => v / Math.sqrt(inv[i][i] * inv[j][j])));
      res.orthogonal = XtX.every((row, i) => row.every((v, j) => i === j || Math.abs(v) < 1e-9));
    } else {
      res.null = nullspace(X);
    }
    return res;
  }

  /** Estimation par moindres carrés. Renvoie null si non identifiable. */
  function fitLS(D, y, terms) {
    const a = analyseDesign(D, terms); if (!a.identifiable) return { ...a, beta: null };
    const beta = matvec(a.XtXinv, matvec(transpose(a.X), y));
    const fitted = matvec(a.X, beta); const resid = y.map((v, i) => v - fitted[i]);
    const sse = dot(resid, resid); const df = a.N - a.p;
    return { ...a, beta, fitted, resid, sse, df, s2: df > 0 ? sse / df : null };
  }

  // ---------- Hasard reproductible ----------
  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0; let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  /** Générateur gaussien N(0,1) à graine fixe (Box-Muller). */
  function gaussian(seed) {
    const u = mulberry32(seed); let spare = null;
    return function () {
      if (spare !== null) { const s = spare; spare = null; return s; }
      let a = 0, b = 0; while (a === 0) a = u(); b = u();
      const r = Math.sqrt(-2 * Math.log(a)); spare = r * Math.sin(2 * Math.PI * b);
      return r * Math.cos(2 * Math.PI * b);
    };
  }
  /** Réponse simulée : vrai modèle (coefficients sur des termes) + bruit σ. */
  function simulate(D, trueModel, sigma, seed) {
    const g = gaussian(seed);
    return D.map(x => {
      const mu = trueModel.reduce((s, [coef, t]) => s + coef * t.reduce((p, i) => p * x[i], 1), 0);
      return mu + (sigma > 0 ? sigma * g() : 0);
    });
  }
  const trueMean = (x, trueModel) => trueModel.reduce((s, [coef, t]) => s + coef * t.reduce((p, i) => p * x[i], 1), 0);

  // ---------- Codage ----------
  const toCoded = (u, low, high) => (u - (low + high) / 2) / ((high - low) / 2);
  const toReal = (x, low, high) => (low + high) / 2 + x * (high - low) / 2;

  // ---------- Formatage ----------
  function fmt(x, d = 3) {
    if (x === null || x === undefined || Number.isNaN(x)) return '—';
    const v = clean(x, d); return v.toLocaleString('fr-FR', { maximumFractionDigits: d });
  }
  /** Fraction simple (pour afficher 1/4, 3/8…) si possible. */
  function frac(x, maxDen = 64) {
    if (Math.abs(x) < 1e-12) return '0';
    for (let d = 1; d <= maxDen; d++) { const n = Math.round(x * d); if (Math.abs(n / d - x) < 1e-9) return d === 1 ? String(n) : `${n}/${d}`; }
    return fmt(x, 4);
  }

  return { shape, zeros, identity, transpose, matmul, matvec, dot, scale, clean, cleanM, rref, rank, inverse, det, nullspace,
    modelTerms, termName, termLabel, modelMatrix, analyseDesign, fitLS, mulberry32, gaussian, simulate, trueMean,
    toCoded, toReal, fmt, frac };
});
