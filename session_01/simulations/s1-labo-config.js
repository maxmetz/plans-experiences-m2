/* s1-labo-config.js — configuration du laboratoire pour la séance 1.
 * Toutes les données viennent de s1-data.js (source unique, vérifiée par validation/verif_calculs.js).
 */
(function () {
  'use strict';
  const S = window.S1;
  const d = key => S.designs[key].D.map(r => r.slice());
  const constraintD = { label: S.constraintD.label, ok: S.constraintD.ok, polygon: [[0, 1], [1, 1], [1, 0]] };
  const f4 = S.factorsF;
  const full3 = []; for (const c of [-1, 1]) for (const b of [-1, 1]) for (const a of [-1, 1]) full3.push([a, b, c]);

  window.LAB_CONFIG = {
    session: 's1', storageKey: 's1-v1',
    title: 'Laboratoire — Plans d\'expériences, séance 1',
    subtitle: 'Simuler, construire X, calculer le rang, XᵀX et la covariance des coefficients',
    teacherCode: 'MENTOR',
    codes: S.codes,
    factors: S.factors2,
    defaultWorld: 'ADD',
    worlds: {
      ADD: { label: 'Monde additif d\'entraînement (sans interaction)', model: [[40, []], [8, [0]], [10, [1]]], sigma: 1.5 },
      A: { label: S.worlds.A.label, model: S.worlds.A.model, sigma: S.worlds.A.sigma, code: 'ROUGE' },
      B: { label: S.worlds.B.label, model: S.worlds.B.model, sigma: S.worlds.B.sigma, code: 'VERT' },
      F: { label: S.worldF.label, model: S.worldF.model, sigma: S.worldF.sigma, code: 'SPME', hidden: true },
    },
    startPreset: 'A-OFAT',
    presets: [
      { id: 'A-OFAT', group: 'Mission A', label: 'Un facteur à la fois (3 essais)', design: d('OFAT3'), model: 'lineaire' },
      { id: 'A-FACT', group: 'Mission A', label: 'Plan factoriel 2² (4 essais)', design: d('FACT4'), model: 'interactions' },
      { id: 'B-JOURNAL', group: 'Mission B', label: 'Journal de production (6 lots, T et t ensemble)', design: d('DIAG6'), model: 'lineaire', world: 'A', code: 'JOURNAL', seed: S.journalSeed,
        note: 'Avec le monde « laboratoire A » (code ROUGE), σ = 1,5 et la graine 2024, l\'onglet 3 reproduit exactement les rendements du journal (arrondis au dixième dans M1).' },
      { id: 'B-DECOUPLE', group: 'Mission B', label: 'Journal + un essai découplé (60 °C ; 1 h)', design: d('DIAG6P'), model: 'lineaire', code: 'DECOUPLE' },
      { id: 'C-P1', group: 'Mission C', label: 'P1 journal (6)', design: d('DIAG6'), model: 'lineaire', code: 'MATRICE' },
      { id: 'C-P2', group: 'Mission C', label: 'P2 un facteur à la fois (3)', design: d('OFAT3'), model: 'lineaire', code: 'MATRICE' },
      { id: 'C-P3', group: 'Mission C', label: 'P3 un facteur à la fois dupliqué (6)', design: d('OFAT6'), model: 'lineaire', code: 'MATRICE' },
      { id: 'C-P4', group: 'Mission C', label: 'P4 factoriel (4)', design: d('FACT4'), model: 'lineaire', code: 'MATRICE' },
      { id: 'C-P5', group: 'Mission C', label: 'P5 factoriel dupliqué (8)', design: d('FACT8'), model: 'lineaire', code: 'MATRICE' },
      { id: 'D-Q1', group: 'Mission D', label: 'Q1 factoriel (4)', design: d('FACT4'), model: 'lineaire', code: 'PRECISION' },
      { id: 'D-Q2', group: 'Mission D', label: 'Q2 un facteur à la fois + base répétée (4)', design: d('OFATR'), model: 'lineaire', code: 'PRECISION' },
      { id: 'D-R', group: 'Mission D (zone interdite)', label: 'R base répétée', design: d('OFATR'), model: 'lineaire', code: 'CONTRAINTE', constraint: constraintD },
      { id: 'D-C', group: 'Mission D (zone interdite)', label: 'C centre', design: d('OFATC'), model: 'lineaire', code: 'CONTRAINTE', constraint: constraintD },
      { id: 'D-F', group: 'Mission D (zone interdite)', label: 'F frontière (0,5 ; 0,5)', design: d('TRONQ'), model: 'lineaire', code: 'CONTRAINTE', constraint: constraintD },
      { id: 'D-S', group: 'Mission D (zone interdite)', label: 'S resserré ±0,5', design: d('SHRINK'), model: 'lineaire', code: 'CONTRAINTE', constraint: constraintD },
      { id: 'D-LIBRE', group: 'Mission D (zone interdite)', label: 'Plan libre sous contrainte (à construire)', design: [[-1, -1], [1, -1], [-1, 1]], model: 'lineaire', code: 'CONTRAINTE', constraint: constraintD,
        note: 'Ajoutez un 4e essai en cliquant dans le domaine (zone autorisée) et comparez-le aux plans R, C, F, S dans l\'onglet 4.' },
      { id: 'F-FRAC', group: 'Mission finale (SPME)', label: '2^(4−1) avec D = ABC (8 essais)', factors: f4, design: full3.map(x => [...x, x[0] * x[1] * x[2]]), model: 'lineaire', world: 'F', code: 'SPME', seed: 31 },
      { id: 'F-23', group: 'Mission finale (SPME)', label: '2³ sur A, B, C avec D fixé au niveau bas', factors: f4, design: full3.map(x => [...x, -1]), model: 'lineaire', world: 'F', code: 'SPME', seed: 31 },
      { id: 'F-OFAT', group: 'Mission finale (SPME)', label: 'Un facteur à la fois + 3 répétitions de la base', factors: f4, design: [[-1, -1, -1, -1], [1, -1, -1, -1], [-1, 1, -1, -1], [-1, -1, 1, -1], [-1, -1, -1, 1], [-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]], model: 'lineaire', world: 'F', code: 'SPME', seed: 31 },
      { id: 'F-VIDE', group: 'Mission finale (SPME)', label: 'Plan d\'équipe (8 essais à saisir)', factors: f4, design: Array.from({ length: 8 }, () => [-1, -1, -1, -1]), model: 'lineaire', world: 'F', code: 'SPME', seed: 31 },
    ],
    teacherNotes: 'Ordre conseillé des codes : ROUGE et VERT (mission A, après ouverture des enveloppes) → JOURNAL (préparation B) → DECOUPLE (révélation B) → MATRICE (mission C) → PRECISION (mission D) → CONTRAINTE (après l\'annonce) → SPME (mission finale). Le monde SPME reste caché aux étudiants ; utilisez « Révéler le monde simulé » en fin de séance.',
  };
})();
