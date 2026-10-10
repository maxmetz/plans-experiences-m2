/* s1-data.js — données de la séance 1 (source unique pour labo, slides et vérifications).
 * Variables codées : x1 = (T − 50 °C)/10 °C ; x2 = (t − 1,5 h)/0,5 h.
 * Les « mondes » A et B reprennent EXACTEMENT les rendements des diapositives 11 et 13
 * de « Factorielle_procédé.pptx » (23/37/41/59 et 17/43/65/35). Le contexte « extraction »
 * est un habillage ajouté (voir sources/AUDIT.md).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.S1 = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  const factors2 = [
    { name: 'T', label: 'Température', unit: '°C', low: 40, high: 60 },
    { name: 't', label: 'Durée', unit: 'h', low: 1, high: 2 },
  ];
  // Vrais modèles : liste [coefficient, termes]
  const worlds = {
    A: { label: 'Laboratoire A — sédiment sableux', model: [[40, []], [8, [0]], [10, [1]], [1, [0, 1]]], sigma: 1.5 },
    B: { label: 'Laboratoire B — boue de station d’épuration', model: [[40, []], [-1, [0]], [10, [1]], [-14, [0, 1]]], sigma: 1.5 },
  };
  // Valeurs historiques (sans bruit ajouté : ce sont les données des anciennes diapositives)
  const observed = {
    A: { '-1,-1': 23, '1,-1': 37, '-1,1': 41, '1,1': 59 },
    B: { '-1,-1': 17, '1,-1': 43, '-1,1': 65, '1,1': 35 },
  };
  const rep = (D, n) => Array.from({ length: n }, () => D).flat();
  const OFAT3 = [[-1, -1], [1, -1], [-1, 1]];
  const FACT4 = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
  const designs = {
    OFAT3: { label: 'Un facteur à la fois (3 essais)', D: OFAT3 },
    FACT4: { label: 'Factoriel 2² (4 essais)', D: FACT4 },
    OFAT6: { label: 'Un facteur à la fois, dupliqué (6 essais)', D: rep(OFAT3, 2) },
    FACT8: { label: 'Factoriel 2² dupliqué (8 essais)', D: rep(FACT4, 2) },
    DIAG6: { label: 'Journal de production : T et t varient ensemble (6 lots)', D: [[-1, -1], [-0.5, -0.5], [0, 0], [0, 0], [0.5, 0.5], [1, 1]] },
    DIAG6P: { label: 'Journal + 1 essai découplé (7 essais)', D: [[-1, -1], [-0.5, -0.5], [0, 0], [0, 0], [0.5, 0.5], [1, 1], [1, -1]] },
    SHRINK: { label: 'Factoriel resserré ±0,5 (4 essais)', D: [[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]] },
    OFATR: { label: 'Un facteur à la fois + répétition du point de base (4 essais)', D: [[-1, -1], [-1, -1], [1, -1], [-1, 1]] },
    OFATC: { label: 'Un facteur à la fois + centre (4 essais)', D: [[-1, -1], [1, -1], [-1, 1], [0, 0]] },
    TRONQ: { label: 'Coin tronqué sur la frontière (4 essais)', D: [[-1, -1], [1, -1], [-1, 1], [0.5, 0.5]] },
    LOSANGE: { label: 'Losange : milieux des côtés autorisés (4 essais)', D: [[-1, 0], [1, -1], [0, 1], [-1, -1]] },
  };
  // Contrainte de la mission D : dose thermique x1 + x2 ≤ 1
  const constraintD = { label: 'x₁ + x₂ ≤ 1 (dose thermique maximale)', ok: x => x[0] + x[1] <= 1 + 1e-9 };

  // Journal de production (mission B) : simulé à partir du monde A, σ = 1,5, graine 2024, arrondi à 0,1
  const journalSeed = 2024;

  // Mission finale : 4 facteurs (SPME-GC-MS), modèle caché (enseignant)
  const factorsF = [
    { name: 'A', label: "Température d'extraction", unit: '°C', low: 30, high: 60 },
    { name: 'B', label: "Durée d'extraction", unit: 'min', low: 10, high: 40 },
    { name: 'C', label: 'Ajout de NaCl', unit: '% m/v', low: 0, high: 25 },
    { name: 'D', label: 'Agitation', unit: 'tr/min', low: 250, high: 750 },
  ];
  const worldF = { label: 'Méthode SPME (modèle caché)', model: [[100, []], [12, [0]], [8, [1]], [6, [2]], [0, [3]], [5, [0, 1]]], sigma: 3 };

  // Codes de révélation annoncés oralement par l'enseignant (voir P1)
  const codes = {
    'ROUGE': { id: 'A-resultatsA', label: 'Mission A : résultats du laboratoire A' },
    'VERT': { id: 'A-resultatsB', label: 'Mission A : résultats du laboratoire B' },
    'JOURNAL': { id: 'B-journal', label: 'Mission B : journal de production' },
    'DECOUPLE': { id: 'B-decouple', label: 'Mission B : essai découplé' },
    'MATRICE': { id: 'C-matrice', label: 'Mission C : matrices et rangs' },
    'PRECISION': { id: 'D-covariance', label: 'Mission D : covariances' },
    'CONTRAINTE': { id: 'D-contrainte', label: 'Mission D : zone interdite' },
    'SPME': { id: 'F-simulation', label: 'Mission finale : simulation des plans' },
  };
  return { factors2, worlds, observed, designs, constraintD, journalSeed, factorsF, worldF, codes, rep };
});
