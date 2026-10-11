window.CoursData = {
  "chapters": [
    {
      "id": "fondements",
      "title": "1 · Problème expérimental",
      "doc": "intro",
      "from": 1,
      "to": 15,
      "interactive": "1"
    },
    {
      "id": "effets",
      "title": "2 · Effets et stratégies",
      "doc": "intro",
      "from": 16,
      "to": 32,
      "interactive": "14"
    },
    {
      "id": "matrices",
      "title": "3 · Modèle, matrices et estimation",
      "doc": "factoriel",
      "from": 4,
      "to": 10,
      "interactive": "21"
    },
    {
      "id": "precision",
      "title": "4 · Information et précision",
      "doc": "intro",
      "from": 29,
      "to": 32,
      "interactive": "32"
    },
    {
      "id": "criblage",
      "title": "5 · Criblage à deux niveaux",
      "doc": "intro",
      "from": 33,
      "to": 87,
      "interactive": "30"
    },
    {
      "id": "niveaux",
      "title": "6 · Criblage à plusieurs niveaux",
      "doc": "niveaux",
      "from": 1,
      "to": 50,
      "interactive": "30"
    },
    {
      "id": "factoriel",
      "title": "7 · Plans factoriels et interactions",
      "doc": "factoriel",
      "from": 1,
      "to": 37,
      "interactive": "14"
    },
    {
      "id": "surfaces",
      "title": "8 · Surfaces de réponse",
      "doc": "surfaces",
      "from": 1,
      "to": 57,
      "interactive": "33"
    },
    {
      "id": "td",
      "title": "9 · TD historiques résolus",
      "doc": "intro",
      "from": 16,
      "to": 47,
      "interactive": "28"
    },
    {
      "id": "synthese",
      "title": "10 · Choisir et vérifier un plan",
      "doc": "intro",
      "from": 87,
      "to": 87,
      "interactive": "35"
    }
  ],
  "slides": [
    {
      "chapter": "fondements",
      "title": "Choisir des expériences pour prendre une décision",
      "body": "<svg class=\"science-svg\" viewBox=\"0 0 1200 280\" role=\"img\" aria-label=\"Expériences puis Information puis Décision puis Risque\"><rect x=\"10\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Expériences</text><path d=\"M275 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"310\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Information</text><path d=\"M575 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"610\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Décision</text><path d=\"M875 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"910\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Risque</text></svg><p>Le plan organise ce que l’on pourra apprendre avant de mesurer. Une information mal adaptée conduit à une décision fragile.</p><div class=\"frag\"><p>La qualité dépend de la disposition des essais, de leur nombre, du modèle et du bruit. Le nombre seul ne suffit pas.</p></div>",
      "source": "cours1.pdf, p. 2 : affirmation nuancée, conformément aux hypothèses de précision"
    },
    {
      "chapter": "fondements",
      "title": "Facteurs, niveaux et réponse",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Objet</th><th>Exemple d’extraction</th></tr></thead><tbody><tr><td>Facteurs contrôlés</td><td>Température T ; durée t</td></tr><tr><td>Niveaux</td><td>40 et 60 °C ; 1 et 2 h</td></tr><tr><td>Réponse</td><td>Rendement récupéré (%)</td></tr><tr><td>Parasites possibles</td><td>Humidité, lot de solvant, dérive</td></tr></tbody></table><p>Une expérience applique un protocole à une condition définie et observe une réponse. Un facteur parasite peut influencer la réponse sans être le facteur étudié.</p>",
      "source": "cours1.pdf, p. 3–6"
    },
    {
      "chapter": "fondements",
      "title": "Définir un domaine exploitable",
      "body": "<p>Le domaine est l’ensemble des conditions autorisées : ici 40 ≤ T ≤ 60 °C et 1 ≤ t ≤ 2 h. Il contient davantage que les points finalement mesurés.</p><svg class=\"science-svg\" viewBox=\"0 0 1200 280\" role=\"img\" aria-label=\"Faisabilité puis Variations utiles puis Modèle plausible puis Conclusions bornées\"><rect x=\"10\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Faisabilité</text><path d=\"M275 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"310\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Variations utiles</text><path d=\"M575 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"610\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Modèle plausible</text><path d=\"M875 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"910\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Conclusions bornées</text></svg><div class=\"frag\"><p>Un réglage hors domaine est une extrapolation. Même à l’intérieur, une prévision demande un modèle validé.</p></div>",
      "source": "cours1.pdf, p. 7–9"
    },
    {
      "chapter": "fondements",
      "title": "Quatre objectifs scientifiques",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Objectif</th><th>Question</th></tr></thead><tbody><tr><td>Explorer</td><td>Quels phénomènes et facteurs envisager ?</td></tr><tr><td>Cribler</td><td>Quels facteurs paraissent actifs dans les niveaux choisis ?</td></tr><tr><td>Quantifier</td><td>Quels effets et interactions peut-on estimer ?</td></tr><tr><td>Optimiser</td><td>Quels réglages satisfont l’objectif et les contraintes ?</td></tr></tbody></table><p>Le même budget peut conduire à des plans différents selon la décision attendue.</p>",
      "source": "cours1.pdf, p. 12–15"
    },
    {
      "chapter": "fondements",
      "title": "Coder sans changer l’expérience",
      "body": "<div class=\"eq\">\\[x_j=\\frac{U_j-U_j^0}{\\Delta U_j},\\qquad U_j=U_j^0+x_j\\Delta U_j\\]</div><table class=\"annotated-matrix\"><thead><tr><th>Facteur</th><th>Centre</th><th>Demi-étendue</th></tr></thead><tbody><tr><td>T</td><td>50 °C</td><td>10 °C</td></tr><tr><td>t</td><td>1,5 h</td><td>0,5 h</td></tr></tbody></table><div class=\"frag\"><p>55 °C → x₁ = 0,5 ; x₂ = −0,5 → t = 1,25 h. Les codes décrivent les mêmes positions dans des unités différentes.</p></div>",
      "source": "cours1.pdf, p. 9 ; cours 4.pdf, p. 4"
    },
    {
      "chapter": "fondements",
      "title": "Une prédiction formalise une hypothèse",
      "body": "<p>Archives fictives complémentaires : à 1 h, 20 % à 40 °C et 34 % à 60 °C. Prévoir 27 % à 50 °C suppose un gain constant.</p><div class=\"eq\">\\[\\hat y=20+0{,}7(T-40)\\]</div><div class=\"frag\"><p>Deux points déterminent une droite ; ils ne prouvent pas sa validité entre les points. Une mesure de contrôle doit éprouver la prévision.</p></div>",
      "source": "Exemple complémentaire explicatif ; F0/F1"
    },
    {
      "chapter": "effets",
      "title": "Coefficient codé et changement entre deux niveaux",
      "body": "<div class=\"eq\">\\[b_j=\\frac{\\bar y_{j+}-\\bar y_{j-}}2,\\qquad\\Delta_j=\\bar y_{j+}-\\bar y_{j-}=2b_j\\]</div><p>Distinguer le coefficient codé bⱼ de la différence entre niveaux Δⱼ = 2bⱼ.</p><div class=\"frag\"><p>Une différence de 14 points entre x = −1 et x = +1 correspond à b = 7 points par unité codée.</p></div>",
      "source": "cours1.pdf, p. 16 ; Factorielle_procédé.pptx, d6"
    },
    {
      "chapter": "effets",
      "title": "Un facteur à la fois : ce que la comparaison isole",
      "body": "<p>Changer un facteur à durée constante permet de mesurer son effet local. Cette stratégie est pertinente si la question est locale ou si les changements simultanés sont impossibles.</p><div class=\"frag\"><p>Prévoir un coin non mesuré en additionnant des gains ajoute une hypothèse : les effets ne dépendent pas du niveau des autres facteurs.</p></div>",
      "source": "cours1.pdf, p. 17–23"
    },
    {
      "chapter": "effets",
      "title": "Soudure laser : trois comparaisons séparées",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Facteur</th><th>Réponse au niveau bas</th><th>Réponse au niveau haut</th><th>b</th></tr></thead><tbody><tr><td>Vitesse</td><td>18</td><td>29</td><td>5,5</td></tr><tr><td>Hélium</td><td>31</td><td>15</td><td>−8</td></tr><tr><td>Puissance</td><td>25</td><td>22</td><td>−1,5</td></tr></tbody></table><p>Réponse : nombre de soufflures, à réduire. Chaque coefficient utilise deux mesures ; sous erreurs indépendantes de variance σ², Var(b) = σ²/2.</p>",
      "source": "cours1.pdf, p. 17–23"
    },
    {
      "chapter": "effets",
      "title": "Trois facteurs en quatre essais",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>x₁</th><th>x₂</th><th>x₃</th><th>Soufflures</th></tr></thead><tbody><tr><td>+1</td><td>+1</td><td>−1</td><td>22</td></tr><tr><td>−1</td><td>+1</td><td>+1</td><td>8</td></tr><tr><td>+1</td><td>−1</td><td>+1</td><td>35</td></tr><tr><td>−1</td><td>−1</td><td>−1</td><td>27</td></tr></tbody></table><div class=\"frag\"><div class=\"eq\">\\[\\hat b_0=23,\\quad\\hat b_1=5{,}5,\\quad\\hat b_2=-8,\\quad\\hat b_3=-1{,}5\\]</div></div>",
      "source": "cours1.pdf, p. 24–28"
    },
    {
      "chapter": "effets",
      "title": "Lire les effets avec la figure d’origine",
      "body": "<figure><img src=\"figures/INTRO_d28_image19.png\" alt=\"Coefficients du procédé de soudure\" loading=\"eager\"><figcaption>Coefficients du procédé de soudure</figcaption></figure><p>Un signe positif indique une augmentation de la réponse, pas nécessairement une amélioration du procédé.</p>",
      "source": "Figure originale conservée"
    },
    {
      "chapter": "effets",
      "title": "Le prix de quatre essais : une confusion",
      "body": "<div class=\"eq\">\\[x_3=-x_1x_2\\]</div><p>Le plan de soudure est orthogonal pour le modèle à effets principaux. Mais sa colonne x₃ est l’opposée de la colonne d’interaction x₁x₂.</p><div class=\"frag\"><div class=\"eq\">\\[b_3x_3+b_{12}x_1x_2=(b_3-b_{12})x_3\\]</div></div><p>Le coefficient calculé peut donc mélanger effet principal et interaction. Orthogonal ne signifie pas absence d’interaction.</p>",
      "source": "cours1.pdf, p. 24–32 ; développement explicatif"
    },
    {
      "chapter": "matrices",
      "title": "Un essai, une équation de prévision",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><figure><svg class=\"science-svg v3-svg\" viewBox=\"0 0 640 420\" role=\"img\" aria-label=\"Quatre conditions, quatre recettes de calcul\"><title>Quatre conditions, quatre recettes de calcul</title><text x=\"25\" y=\"35\" >Durée (h)</text><line x1=\"115\" y1=\"75\" x2=\"115\" y2=\"325\" stroke=\"#d9e1e7\" /><line x1=\"115\" y1=\"325\" x2=\"505\" y2=\"325\" stroke=\"#d9e1e7\" /><text x=\"115\" y=\"359\" text-anchor=\"middle\">40 °C</text><text x=\"95\" y=\"333\" text-anchor=\"end\">1</text><line x1=\"310\" y1=\"75\" x2=\"310\" y2=\"325\" stroke=\"#d9e1e7\" /><line x1=\"115\" y1=\"200\" x2=\"505\" y2=\"200\" stroke=\"#d9e1e7\" /><text x=\"310\" y=\"359\" text-anchor=\"middle\">50 °C</text><text x=\"95\" y=\"208\" text-anchor=\"end\">1,5</text><line x1=\"505\" y1=\"75\" x2=\"505\" y2=\"325\" stroke=\"#d9e1e7\" /><line x1=\"115\" y1=\"75\" x2=\"505\" y2=\"75\" stroke=\"#d9e1e7\" /><text x=\"505\" y=\"359\" text-anchor=\"middle\">60 °C</text><text x=\"95\" y=\"83\" text-anchor=\"end\">2</text><line x1=\"115\" y1=\"325\" x2=\"525\" y2=\"325\" stroke=\"#334b60\" /><line x1=\"115\" y1=\"325\" x2=\"115\" y2=\"60\" stroke=\"#334b60\" /><text x=\"310\" y=\"402\" text-anchor=\"middle\">Température</text><g ><circle cx=\"115\" cy=\"325\" r=\"8\" fill=\"#1f4e79\"/><text x=\"135\" y=\"309\" fill=\"#1f4e79\"></text></g><g ><circle cx=\"505\" cy=\"325\" r=\"8\" fill=\"#1f4e79\"/><text x=\"525\" y=\"309\" fill=\"#1f4e79\"></text></g><g ><circle cx=\"115\" cy=\"75\" r=\"8\" fill=\"#1f4e79\"/><text x=\"135\" y=\"59\" fill=\"#1f4e79\"></text></g><g ><circle cx=\"505\" cy=\"75\" r=\"8\" fill=\"#1f4e79\"/><text x=\"525\" y=\"59\" fill=\"#1f4e79\"></text></g></svg><figcaption>Quatre conditions, quatre recettes de calcul</figcaption></figure><div><p class=\"v3-lead\">Modèle additif : une constante et deux contributions.</p><div class=\"eq\">\\[\\hat y_i=b_0+b_1x_{i1}+b_2x_{i2}\\]</div><div class=\"frag\"><div class=\"eq\">\\[40\\,°C,\\ 1\\,h\\quad\\Rightarrow\\quad\\hat y_1=b_0-b_1-b_2\\]</div></div></div></div></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Quatre essais : les mêmes coefficients, quatre équations",
      "body": "<div class=\"v3-body\"><div class=\"equation-list\"><div class=\"\"><span>Essai 1</span>ŷ1 = b₀ − b₁ − b₂</div><div class=\"frag\"><span>Essai 2</span>ŷ2 = b₀ + b₁ − b₂</div><div class=\"frag\"><span>Essai 3</span>ŷ3 = b₀ − b₁ + b₂</div><div class=\"frag\"><span>Essai 4</span>ŷ4 = b₀ + b₁ + b₂</div></div><p class=\"takeaway\">Les coefficients sont communs. Seuls les multiplicateurs 1, −1 et +1 changent selon l’essai.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Construire X : ranger les multiplicateurs",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><table class=\"annotated-matrix matrix-x\"><thead><tr><th>constante</th><th>température</th><th>durée</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"1\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"2\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">1</td></tr><tr data-row=\"3\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">1</td></tr></tbody></table><div><p class=\"v3-lead\"><b>Une ligne = un essai.</b><br><br><b>Une colonne = un terme du modèle.</b></p><div class=\"frag\"><p class=\"v3-lead\">La colonne de 1 multiplie b₀ : la constante intervient à chaque ligne.</p></div></div></div><p class=\"takeaway\">X est une matrice 4 × 3. Les rendements mesurés restent séparés, dans y.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Produit ligne × colonne : associer les nombres",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><table class=\"annotated-matrix matrix-x\"><thead><tr><th>pour b₀</th><th>pour b₁</th><th>pour b₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">-1</td></tr></tbody></table><table class=\"annotated-matrix matrix-beta\"><thead><tr><th>β : coefficients fournis</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">40</td></tr><tr data-row=\"1\"><td class=\"term-0\">8</td></tr><tr data-row=\"2\"><td class=\"term-0\">10</td></tr></tbody></table></div><div class=\"frag\"><div class=\"eq\">\\[\\hat y_1=\\color{#5b3f8c}{1\\times40}+\\color{#1f4e79}{(-1)\\times8}+\\color{#b5591b}{(-1)\\times10}=22\\]</div></div><p class=\"takeaway\">Multiplier chaque multiplicateur par son coefficient, puis additionner les trois produits.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Xβ : une prévision par ligne",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><table class=\"annotated-matrix matrix-x\"><thead><tr><th>1</th><th>x₁</th><th>x₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"1\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"2\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">1</td></tr><tr data-row=\"3\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">1</td></tr></tbody></table><table class=\"annotated-matrix matrix-y\"><thead><tr><th>ŷ : prévisions</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">22</td></tr><tr data-row=\"1\"><td class=\"term-0\">38</td></tr><tr data-row=\"2\"><td class=\"term-0\">42</td></tr><tr data-row=\"3\"><td class=\"term-0\">58</td></tr></tbody></table></div><div class=\"eq\">\\[\\underbrace{\\mathbf X}_{4\\times3}\\underbrace{\\boldsymbol\\beta}_{3\\times1}=\\underbrace{\\hat{\\mathbf y}}_{4\\times1}\\]</div><p class=\"takeaway\">Les dimensions se raccordent : trois multiplicateurs par ligne pour trois coefficients. Quatre lignes produisent quatre prévisions.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Prévoir et faire une régression : deux sens différents",
      "body": "<div class=\"cols\"><div class=\"box good\"><p><b>Jusqu’ici : prévoir</b><br>On vous donnait b₀ = 40, b₁ = 8, b₂ = 10.<br>Avec X, vous calculiez les prévisions.</p></div><div class=\"box \"><p><b>Maintenant : ajuster</b><br>Nous avons les mesures : 23, 37, 41, 59.<br>Quels coefficients décrivent au mieux ces mesures ?</p></div></div><div class=\"eq\">\\[\\underbrace{\\mathbf y}_{\\text{mesures}}=\\underbrace{\\mathbf X}_{\\text{essais et termes}}\\underbrace{\\boldsymbol\\beta}_{\\text{coefficients inconnus}}+\\underbrace{\\boldsymbol\\varepsilon}_{\\text{erreurs du modèle}}\\]</div><p>La <b>régression</b> estime les coefficients à partir des mesures.</p>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Écrire les quatre mesures dans une seule équation · 1/2",
      "body": "<div class=\"v3-body\"><div class=\"equation-list\"><div><span>Essai 1</span>23 = b₀ − b₁ − b₂ + ε₁</div><div><span>Essai 2</span>37 = b₀ + b₁ − b₂ + ε₂</div><div><span>Essai 3</span>41 = b₀ − b₁ + b₂ + ε₃</div><div><span>Essai 4</span>59 = b₀ + b₁ + b₂ + ε₄</div></div><div class=\"insight \"><b>Quatre équations, trois coefficients communs</b><p>Les multiplicateurs sont connus. Les mesures sont connues. Les coefficients sont cherchés. Les ε décrivent les erreurs inconnues du modèle.</p></div></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Écrire les quatre mesures dans une seule équation · 2/2",
      "body": "<div class=\"v3-body\"><div class=\"eq\">\\[\\underbrace{\\begin{pmatrix}23\\\\37\\\\41\\\\59\\end{pmatrix}}_{\\mathbf y}=\\underbrace{\\begin{pmatrix}1&-1&-1\\\\1&1&-1\\\\1&-1&1\\\\1&1&1\\end{pmatrix}}_{\\mathbf X}\\underbrace{\\begin{pmatrix}b_0\\\\b_1\\\\b_2\\end{pmatrix}}_{\\boldsymbol\\beta}+\\underbrace{\\begin{pmatrix}\\varepsilon_1\\\\\\varepsilon_2\\\\\\varepsilon_3\\\\\\varepsilon_4\\end{pmatrix}}_{\\boldsymbol\\varepsilon}\\]</div><div class=\"insight \"><b>Une écriture compacte, aucune nouvelle règle</b><p>Les quatre équations précédentes sont regroupées. L’ordre des lignes doit être identique dans y et X.</p></div></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Voir les écarts avant de chercher une formule",
      "body": "<div class=\"v3-body\"><figure><svg class=\"science-svg v3-svg\" viewBox=\"0 0 640 420\" role=\"img\" aria-label=\"Mesures, prévisions puis résidus des quatre essais\"><title>Mesures, prévisions puis résidus des quatre essais</title><text x=\"20\" y=\"30\" >Rendement (%)</text><line x1=\"80\" y1=\"245\" x2=\"550\" y2=\"245\" stroke=\"#d9e1e7\" /><text x=\"65\" y=\"253\" text-anchor=\"end\">20</text><line x1=\"80\" y1=\"165\" x2=\"550\" y2=\"165\" stroke=\"#d9e1e7\" /><text x=\"65\" y=\"173\" text-anchor=\"end\">40</text><line x1=\"80\" y1=\"85\" x2=\"550\" y2=\"85\" stroke=\"#d9e1e7\" /><text x=\"65\" y=\"93\" text-anchor=\"end\">60</text><circle cx=\"115\" cy=\"233\" r=\"8\" fill=\"#2e6b3a\"/><text x=\"115\" y=\"365\" text-anchor=\"middle\">Essai 1</text><circle cx=\"245\" cy=\"177\" r=\"8\" fill=\"#2e6b3a\"/><text x=\"245\" y=\"365\" text-anchor=\"middle\">Essai 2</text><circle cx=\"375\" cy=\"161\" r=\"8\" fill=\"#2e6b3a\"/><text x=\"375\" y=\"365\" text-anchor=\"middle\">Essai 3</text><circle cx=\"505\" cy=\"89\" r=\"8\" fill=\"#2e6b3a\"/><text x=\"505\" y=\"365\" text-anchor=\"middle\">Essai 4</text><g class=\"frag\"><rect x=\"108\" y=\"230\" width=\"14\" height=\"14\" fill=\"white\" stroke=\"#1f4e79\" stroke-width=\"4\"/><rect x=\"238\" y=\"166\" width=\"14\" height=\"14\" fill=\"white\" stroke=\"#1f4e79\" stroke-width=\"4\"/><rect x=\"368\" y=\"150\" width=\"14\" height=\"14\" fill=\"white\" stroke=\"#1f4e79\" stroke-width=\"4\"/><rect x=\"498\" y=\"86\" width=\"14\" height=\"14\" fill=\"white\" stroke=\"#1f4e79\" stroke-width=\"4\"/></g><g class=\"frag\"><line x1=\"115\" y1=\"233\" x2=\"115\" y2=\"237\" stroke=\"#b5591b\" stroke-width=\"7\"/><text x=\"130\" y=\"215\" fill=\"#b5591b\">+1</text><line x1=\"245\" y1=\"177\" x2=\"245\" y2=\"173\" stroke=\"#b5591b\" stroke-width=\"7\"/><text x=\"260\" y=\"159\" fill=\"#b5591b\">-1</text><line x1=\"375\" y1=\"161\" x2=\"375\" y2=\"157\" stroke=\"#b5591b\" stroke-width=\"7\"/><text x=\"390\" y=\"143\" fill=\"#b5591b\">-1</text><line x1=\"505\" y1=\"89\" x2=\"505\" y2=\"93\" stroke=\"#b5591b\" stroke-width=\"7\"/><text x=\"520\" y=\"71\" fill=\"#b5591b\">+1</text></g></svg><figcaption>● vert : mesure · □ bleu : prévision · orange : résidu</figcaption></figure><p class=\"takeaway frag\">Pour chaque essai : résidu = mesure − prévision. Les traits orange montrent les écarts.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Pourquoi mettre les résidus au carré ?",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><table class=\"annotated-matrix \"><thead><tr><th>résidu rᵢ</th><th>carré rᵢ²</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td></tr><tr data-row=\"1\"><td class=\"term-0\">-1</td><td class=\"term-1\">1</td></tr><tr data-row=\"2\"><td class=\"term-0\">-1</td><td class=\"term-1\">1</td></tr><tr data-row=\"3\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td></tr></tbody></table><div><div class=\"eq\">\\[1-1-1+1=0\\]</div><p class=\"v3-lead\">La somme des écarts se compense, malgré des prévisions inexactes.</p><div class=\"frag\"><div class=\"eq\">\\[1^2+(-1)^2+(-1)^2+1^2=4\\]</div></div></div></div><p class=\"takeaway frag\">Les moindres carrés cherchent les coefficients qui minimisent la somme des carrés, pour le modèle choisi.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Estimer : chercher la meilleure règle dans ce modèle",
      "body": "<div class=\"v3-body\"><div class=\"eq\">\\[\\hat{\\boldsymbol\\beta}=\\underset{\\boldsymbol\\beta}{\\operatorname{arg\\,min}}\\ \\sum_i\\left(y_i-(\\mathbf X\\boldsymbol\\beta)_i\\right)^2\\]</div><p class=\"v3-lead\">yᵢ : une mesure · (Xβ)ᵢ : la prévision correspondante.<br><br>On change les coefficients, on recalcule les prévisions et la somme des carrés, puis on retient le minimum.</p><p class=\"takeaway frag\">Un petit résidu ne prouve pas la validité du modèle. Un résidu peut refléter du bruit ou un terme oublié.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Transposer : une colonne devient une ligne",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><table class=\"annotated-matrix matrix-x\"><thead><tr><th>1</th><th>x₁</th><th>x₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"1\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"2\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">1</td></tr><tr data-row=\"3\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">1</td></tr></tbody></table><div class=\"frag\"><table class=\"annotated-matrix matrix-transpose\"><thead><tr><th>essai 1</th><th>essai 2</th><th>essai 3</th><th>essai 4</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">1</td><td class=\"term-3\">1</td></tr><tr data-row=\"1\"><td class=\"term-0\">-1</td><td class=\"term-1\">1</td><td class=\"term-2\">-1</td><td class=\"term-3\">1</td></tr><tr data-row=\"2\"><td class=\"term-0\">-1</td><td class=\"term-1\">-1</td><td class=\"term-2\">1</td><td class=\"term-3\">1</td></tr></tbody></table></div></div><p class=\"takeaway frag\">X : 4 × 3. Xᵀ : 3 × 4. Aucun nombre ne change ; la colonne température devient la deuxième ligne.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "XᵀX : chaque case compare deux colonnes",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><table class=\"annotated-matrix matrix-x\"><thead><tr><th>1</th><th>x₁</th><th>x₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"1\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"2\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">1</td></tr><tr data-row=\"3\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">1</td></tr></tbody></table><div class=\"eq\">\\[(\\mathbf X^{\\mathsf T}\\mathbf X)_{jk}=\\sum_{i=1}^4 X_{ij}X_{ik}\\]</div></div><p class=\"takeaway frag\">Choisir deux colonnes de X, multiplier les nombres ligne par ligne, puis additionner. Ce produit remplit une case.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Une case hors diagonale : constante × température",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><table class=\"annotated-matrix matrix-x select-two\"><thead><tr><th>1</th><th>x₁</th><th>x₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"1\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"2\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">1</td></tr><tr data-row=\"3\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">1</td></tr></tbody></table><div><p class=\"v3-lead\">Case (1,2) : colonne 1 avec colonne x₁.</p><div class=\"eq\">\\[1(-1)+1(1)+1(-1)+1(1)=0\\]</div><div class=\"frag\"><table class=\"annotated-matrix \"><thead><tr><th>1</th><th>x₁</th><th>x₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">?</td><td class=\"term-1\">0</td><td class=\"term-2\">?</td></tr><tr data-row=\"1\"><td class=\"term-0\">?</td><td class=\"term-1\">?</td><td class=\"term-2\">?</td></tr><tr data-row=\"2\"><td class=\"term-0\">?</td><td class=\"term-1\">?</td><td class=\"term-2\">?</td></tr></tbody></table></div></div></div><p class=\"takeaway\">Le produit scalaire vaut zéro : ces deux colonnes sont orthogonales. Ce n’est pas une multiplication case par case de deux matrices.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Une case diagonale : température × température",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><table class=\"annotated-matrix matrix-x select-temperature\"><thead><tr><th>1</th><th>x₁</th><th>x₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"1\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"2\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">1</td></tr><tr data-row=\"3\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">1</td></tr></tbody></table><div><p class=\"v3-lead\">Case (2,2) : la colonne x₁ avec elle-même.</p><div class=\"eq\">\\[(-1)^2+1^2+(-1)^2+1^2=4\\]</div><div class=\"frag\"><table class=\"annotated-matrix \"><thead><tr><th>1</th><th>x₁</th><th>x₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">?</td><td class=\"term-1\">0</td><td class=\"term-2\">?</td></tr><tr data-row=\"1\"><td class=\"term-0\">?</td><td class=\"term-1\">4</td><td class=\"term-2\">?</td></tr><tr data-row=\"2\"><td class=\"term-0\">?</td><td class=\"term-1\">?</td><td class=\"term-2\">?</td></tr></tbody></table></div></div></div><p class=\"takeaway\">Une case diagonale contient la somme des carrés d’une colonne.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Les neuf cases : répéter la même construction",
      "body": "<div class=\"v3-body\"><div class=\"xtx-grid\"><div class=\"dot-cell \"><b>(1,1) · 1 avec 1</b><div class=\"dot-terms\"><span>(1)×(1)</span><span>(1)×(1)</span><span>(1)×(1)</span><span>(1)×(1)</span></div><strong>= 4</strong></div><div class=\"dot-cell frag\"><b>(1,2) · 1 avec x₁</b><div class=\"dot-terms\"><span>(1)×(-1)</span><span>(1)×(1)</span><span>(1)×(-1)</span><span>(1)×(1)</span></div><strong>= 0</strong></div><div class=\"dot-cell frag\"><b>(1,3) · 1 avec x₂</b><div class=\"dot-terms\"><span>(1)×(-1)</span><span>(1)×(-1)</span><span>(1)×(1)</span><span>(1)×(1)</span></div><strong>= 0</strong></div><div class=\"dot-cell frag\"><b>(2,1) · x₁ avec 1</b><div class=\"dot-terms\"><span>(-1)×(1)</span><span>(1)×(1)</span><span>(-1)×(1)</span><span>(1)×(1)</span></div><strong>= 0</strong></div><div class=\"dot-cell frag\"><b>(2,2) · x₁ avec x₁</b><div class=\"dot-terms\"><span>(-1)×(-1)</span><span>(1)×(1)</span><span>(-1)×(-1)</span><span>(1)×(1)</span></div><strong>= 4</strong></div><div class=\"dot-cell frag\"><b>(2,3) · x₁ avec x₂</b><div class=\"dot-terms\"><span>(-1)×(-1)</span><span>(1)×(-1)</span><span>(-1)×(1)</span><span>(1)×(1)</span></div><strong>= 0</strong></div><div class=\"dot-cell frag\"><b>(3,1) · x₂ avec 1</b><div class=\"dot-terms\"><span>(-1)×(1)</span><span>(-1)×(1)</span><span>(1)×(1)</span><span>(1)×(1)</span></div><strong>= 0</strong></div><div class=\"dot-cell frag\"><b>(3,2) · x₂ avec x₁</b><div class=\"dot-terms\"><span>(-1)×(-1)</span><span>(-1)×(1)</span><span>(1)×(-1)</span><span>(1)×(1)</span></div><strong>= 0</strong></div><div class=\"dot-cell frag\"><b>(3,3) · x₂ avec x₂</b><div class=\"dot-terms\"><span>(-1)×(-1)</span><span>(-1)×(-1)</span><span>(1)×(1)</span><span>(1)×(1)</span></div><strong>= 4</strong></div></div><p class=\"takeaway\">Chaque case apparaît avec la flèche →. Au final : diagonale 4, produits croisés 0, donc XᵀX = 4I₃.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Des résidus au calcul des coefficients",
      "body": "<div class=\"v3-body\"><div class=\"eq\">\\[\\mathbf r=\\mathbf y-\\mathbf X\\hat{\\boldsymbol\\beta}\\]</div><div class=\"frag\"><div class=\"eq\">\\[\\mathbf X^{\\mathsf T}\\mathbf r=0\\quad\\Rightarrow\\quad\\mathbf X^{\\mathsf T}\\mathbf X\\hat{\\boldsymbol\\beta}=\\mathbf X^{\\mathsf T}\\mathbf y\\]</div></div><p class=\"takeaway frag\">Au minimum des carrés, les résidus sont orthogonaux aux colonnes de X. Le laboratoire résout ces équations normales.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Pourquoi les équations normales minimisent-elles les écarts ?",
      "body": "<div class=\"v3-body\"><p>Nous voulons minimiser S(β) = ‖y − Xβ‖². Pour une colonne xⱼ, faisons varier seulement son coefficient.</p><div class=\"eq\">\\[\\frac{\\partial S}{\\partial b_j}=-2\\sum_i x_{ij}(y_i-\\mathbf x_i\\beta)=0\\]</div><div class=\"frag\"><div class=\"eq\">\\[\\mathbf X^{\\mathsf T}(\\mathbf y-\\mathbf X\\hat\\beta)=0\\quad\\Rightarrow\\quad\\mathbf X^{\\mathsf T}\\mathbf X\\hat\\beta=\\mathbf X^{\\mathsf T}\\mathbf y\\]</div><p>Chaque colonne est orthogonale au résidu ajusté. Un autre choix ajoute un carré positif : S(β) = S(β̂) + ‖X(β̂ − β)‖².</p></div><p class=\"takeaway\">Le minimum est unique si X a son rang complet. Développement complet : F0, section 8.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Quand la formule avec l’inverse est-elle possible ?",
      "body": "<div class=\"v3-body\"><div class=\"eq\">\\[\\hat{\\boldsymbol\\beta}=(\\mathbf X^{\\mathsf T}\\mathbf X)^{-1}\\mathbf X^{\\mathsf T}\\mathbf y\\]</div><p class=\"v3-lead\">X : essais et termes connus.<br>Xᵀy : produits entre colonnes et mesures.<br>(XᵀX)⁻¹ : inverse, s’il existe.</p><p class=\"takeaway frag\">Il faut des colonnes indépendantes : rang(X) = nombre de coefficients. L’inverse n’existe pas pour le journal confondu. Aucun calcul manuel d’inverse n’est demandé.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Orthogonalité : les équations se séparent",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><table class=\"annotated-matrix \"><thead><tr><th>1</th><th>x₁</th><th>x₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">4</td><td class=\"term-1\">0</td><td class=\"term-2\">0</td></tr><tr data-row=\"1\"><td class=\"term-0\">0</td><td class=\"term-1\">4</td><td class=\"term-2\">0</td></tr><tr data-row=\"2\"><td class=\"term-0\">0</td><td class=\"term-1\">0</td><td class=\"term-2\">4</td></tr></tbody></table><div><div class=\"eq\">\\[\\mathbf X^{\\mathsf T}\\mathbf y=\\begin{pmatrix}23+37+41+59\\\\-23+37-41+59\\\\-23-37+41+59\\end{pmatrix}=\\begin{pmatrix}160\\\\32\\\\40\\end{pmatrix}\\]</div></div></div><div class=\"frag\"><div class=\"eq\">\\[4\\hat b_0=160,\\qquad4\\hat b_1=32,\\qquad4\\hat b_2=40\\]</div></div><p class=\"takeaway\">Produits croisés nuls : pas de mélange entre coefficients dans ces équations.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Estimation additive : coefficients et résidus",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><table class=\"annotated-matrix \"><thead><tr><th>β̂ = (Xᵀy) / 4</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">40</td></tr><tr data-row=\"1\"><td class=\"term-0\">8</td></tr><tr data-row=\"2\"><td class=\"term-0\">10</td></tr></tbody></table><table class=\"annotated-matrix \"><thead><tr><th>mesure</th><th>prévision</th><th>résidu</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">23</td><td class=\"term-1\">22</td><td class=\"term-2\">1</td></tr><tr data-row=\"1\"><td class=\"term-0\">37</td><td class=\"term-1\">38</td><td class=\"term-2\">-1</td></tr><tr data-row=\"2\"><td class=\"term-0\">41</td><td class=\"term-1\">42</td><td class=\"term-2\">-1</td></tr><tr data-row=\"3\"><td class=\"term-0\">59</td><td class=\"term-1\">58</td><td class=\"term-2\">1</td></tr></tbody></table></div><p class=\"takeaway frag\">SCR = 4. Sans bruit ajouté, les écarts viennent ici de l’interaction omise. Orthogonal ne signifie pas que le modèle est validé.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Deux colonnes identiques : deux effets inséparables",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><table class=\"annotated-matrix matrix-x identical\"><thead><tr><th>1</th><th>x₁</th><th>x₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"1\"><td class=\"term-0\">1</td><td class=\"term-1\">-0.5</td><td class=\"term-2\">-0.5</td></tr><tr data-row=\"2\"><td class=\"term-0\">1</td><td class=\"term-1\">0</td><td class=\"term-2\">0</td></tr><tr data-row=\"3\"><td class=\"term-0\">1</td><td class=\"term-1\">0</td><td class=\"term-2\">0</td></tr><tr data-row=\"4\"><td class=\"term-0\">1</td><td class=\"term-1\">0.5</td><td class=\"term-2\">0.5</td></tr><tr data-row=\"5\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">1</td></tr></tbody></table><div><p class=\"v3-lead\">Ajoutons δ à b₁ et retirons δ à b₂.</p><div class=\"eq\">\\[(b_1+\\delta)x_1+(b_2-\\delta)x_2\\]</div><div class=\"frag\"><div class=\"eq\">\\[=b_1x_1+b_2x_2\\quad\\text{si }x_1=x_2\\]</div></div></div></div><p class=\"takeaway frag\">Une infinité de couples donnent les mêmes prévisions. Même sans bruit, ces essais ne permettent pas de les départager.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Le rang : compter les directions indépendantes",
      "body": "<div class=\"v3-body\"><div class=\"v3-columns\"><div><p class=\"v3-lead\">Journal : six lignes, trois colonnes</p><table class=\"annotated-matrix matrix-x identical\"><thead><tr><th>1</th><th>x₁</th><th>x₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"1\"><td class=\"term-0\">1</td><td class=\"term-1\">0</td><td class=\"term-2\">0</td></tr><tr data-row=\"2\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">1</td></tr></tbody></table><div class=\"frag\"><p class=\"v3-lead\"><b>Rang 2 : seulement deux directions indépendantes.</b></p></div></div><div><p class=\"v3-lead\">Quatre combinaisons : quatre lignes</p><table class=\"annotated-matrix matrix-x\"><thead><tr><th>1</th><th>x₁</th><th>x₂</th></tr></thead><tbody><tr data-row=\"0\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"1\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">-1</td></tr><tr data-row=\"2\"><td class=\"term-0\">1</td><td class=\"term-1\">-1</td><td class=\"term-2\">1</td></tr><tr data-row=\"3\"><td class=\"term-0\">1</td><td class=\"term-1\">1</td><td class=\"term-2\">1</td></tr></tbody></table><div class=\"frag\"><p class=\"v3-lead\"><b>Rang 3 : les trois coefficients additifs sont identifiables.</b></p></div></div></div><p class=\"takeaway\">Le rang dépend du plan et des termes du modèle, pas des rendements observés.</p></div>",
      "source": "F0, sections 2–8 ; modèle et données de Factorielle_procédé.pptx, d11"
    },
    {
      "chapter": "matrices",
      "title": "Linéaire en quels objets ?",
      "body": "<div class=\"eq\">\\[y=b_0+b_1x_1+b_2x_2+b_{12}x_1x_2+b_{11}x_1^2+\\varepsilon\\]</div><p>Le modèle est linéaire en ses coefficients : les colonnes de X sont connues une fois les réglages choisis. Elles peuvent contenir des produits ou des carrés.</p><div class=\"frag\"><p>Linéaire ne veut donc pas dire que le phénomène est une droite en chaque facteur. Le modèle reste une approximation à vérifier.</p></div>",
      "source": "F0/F1 ; cours 3.pdf, p. 4–10 ; cours 4.pdf"
    },
    {
      "chapter": "precision",
      "title": "Moyenne, variance et répétition",
      "body": "<div class=\"eq\">\\[\\bar y=\\frac1n\\sum_i y_i,\\qquad s^2=\\frac{\\sum_i(y_i-\\bar y)^2}{n-1}\\]</div><p>La variance est en unités au carré ; s = √s² est un écart-type dans l’unité de mesure.</p><div class=\"frag\"><div class=\"eq\">\\[\\operatorname{Var}(\\bar Y)=\\frac{\\sigma^2}{n}\\]</div></div><p>Cette dernière relation demande des erreurs non corrélées, de variance commune. Un biais constant reste présent dans la moyenne.</p>",
      "source": "F0 §7 ; cours1.pdf, p. 29–32"
    },
    {
      "chapter": "precision",
      "title": "Comment les erreurs se transmettent aux coefficients",
      "body": "<div class=\"eq\">\\[\\hat\\beta=(X^TX)^{-1}X^Ty=\\beta+A\\varepsilon,\\quad A=(X^TX)^{-1}X^T\\]</div><div class=\"frag\"><div class=\"eq\">\\[\\operatorname{Cov}(\\hat\\beta)=A(\\sigma^2I)A^T=\\sigma^2(X^TX)^{-1}\\]</div></div><p>Modèle correct, X connu de rang complet, erreurs centrées non corrélées de variance commune. La normalité n’est pas nécessaire à cette covariance.</p>",
      "source": "F0 §9 : démonstration complète conservée"
    },
    {
      "chapter": "precision",
      "title": "Orthogonalité : calcul séparé et covariances nulles",
      "body": "<div class=\"eq\">\\[X^TX=NI\\quad\\Rightarrow\\quad\\operatorname{Var}(\\hat b_j)=\\frac{\\sigma^2}{N}\\]</div><p>Cette écriture vaut pour les colonnes orthogonales de norme au carré N, notamment des colonnes équilibrées de ±1.</p><div class=\"frag\"><p>Répéter tout le plan double XᵀX : les variances sont divisées par deux, sans changement de rang.</p></div>",
      "source": "cours1.pdf, p. 29–32"
    },
    {
      "chapter": "precision",
      "title": "Orthogonal ne suffit pas : la position compte",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Quatre essais, modèle additif</th><th>XᵀX</th><th>Var(b̂₁)/σ²</th></tr></thead><tbody><tr><td>Coins ±1</td><td>diag(4,4,4)</td><td>1/4</td></tr><tr><td>Coins ±0,5</td><td>diag(4,1,1)</td><td>1</td></tr></tbody></table><p>Les deux plans sont identifiables et orthogonaux ; le second estime les pentes quatre fois moins précisément.</p><div class=\"frag\"><p>Élargir le domaine peut aider à mesurer une pente, dans la limite de la faisabilité et de la validité du modèle.</p></div>",
      "source": "F0 §9 ; développement du principe historique de position des points"
    },
    {
      "chapter": "precision",
      "title": "Borne de précision : expliciter les hypothèses",
      "body": "<div class=\"eq\">\\[\\operatorname{Var}(\\hat b_j)\\ge\\frac{\\sigma^2}{N}\\]</div><p>Sous le modèle linéaire identifiable, erreurs de covariance σ²I et niveaux codés |xᵢⱼ| ≤ 1 : aucune colonne ne possède plus de N unités de norme au carré. Les autres colonnes peuvent réduire l’information utile.</p><p>L’égalité pour une colonne nécessite sa norme maximale et son orthogonalité aux autres. Une interaction omise peut néanmoins biaiser l’interprétation.</p>",
      "source": "cours1.pdf, p. 31–33 ; F0 §9, démonstration de la borne"
    },
    {
      "chapter": "criblage",
      "title": "Cribler : une hypothèse de parcimonie",
      "body": "<p>L’objectif est de repérer les facteurs qui influencent fortement la réponse dans les niveaux choisis. On commence souvent par un modèle à effets principaux.</p><div class=\"eq\">\\[Y=b_0+\\sum_{j=1}^k b_jx_j+\\varepsilon\\]</div><p>Des interactions peuvent se confondre avec ces coefficients. La parcimonie des effets est une hypothèse scientifique, pas une propriété garantie du plan.</p>",
      "source": "cours1.pdf, p. 33–47, 87"
    },
    {
      "chapter": "criblage",
      "title": "Combien d’essais pour k facteurs à deux niveaux ?",
      "body": "<div class=\"eq\">\\[N\\ge k+1\\]</div><p>Un coefficient de référence et k coefficients de facteurs demandent au moins k + 1 colonnes indépendantes. Le décompte est nécessaire ; il ne prouve pas le rang.</p><div class=\"frag\"><p>Avec neuf facteurs : au moins dix observations. Le plan orthogonal proposé dans le TD est un plan à douze essais, pas dix essais choisis au hasard.</p></div>",
      "source": "cours1.pdf, p. 33–44 ; TD Hadamard"
    },
    {
      "chapter": "criblage",
      "title": "Hadamard et Plackett–Burman",
      "body": "<div class=\"eq\">\\[H^TH=NI\\]</div><p>Une colonne constante et des colonnes équilibrées de ±1 donnent un calcul de contrastes simple. Les lignes génératrices permettent de construire les plans par permutations circulaires.</p><div class=\"frag\"><p>Un plan saturé pour les effets principaux n’offre pas de degrés de liberté résiduels. Il ne permet pas de contrôler les interactions laissées hors modèle.</p></div>",
      "source": "cours1.pdf, p. 33–44"
    },
    {
      "chapter": "criblage",
      "title": "Calculer un poids par un contraste",
      "body": "<div class=\"eq\">\\[\\hat b_j=\\frac1N\\sum_i x_{ij}y_i\\]</div><p>Multiplier chaque observation par le signe de la colonne, additionner, diviser par N : chaque mesure contribue à chaque coefficient.</p><div class=\"frag\"><p>La différence des moyennes haut/bas vaut 2b̂ⱼ. Cette interprétation suppose que les effets confondus sont négligeables.</p></div>",
      "source": "cours1.pdf, p. 45–60"
    },
    {
      "chapter": "criblage",
      "title": "Dispersion et décision statistique",
      "body": "<div class=\"eq\">\\[\\hat\\sigma^2=\\frac{\\mathrm{SCR}}{N-p},\\quad\\mathrm{SE}(\\hat b_j)=\\sqrt{\\hat\\sigma^2[(X^TX)^{-1}]_{jj}}\\]</div><div class=\"eq\">\\[\\hat b_j\\pm t_{1-\\alpha/2;\\nu}\\,\\mathrm{SE}(\\hat b_j)\\]</div><p>Pour une inférence exacte de Student : modèle correct, erreurs normales indépendantes de variance commune et estimation de variance adaptée. Avec des répétitions, l’erreur pure peut être estimée séparément.</p><p>Pour un risque bilatéral de 5 %, utiliser le quantile t₀,₉₇₅;ν.</p>",
      "source": "cours1.pdf, p. 61–66 ; correction de notation, sans modification des originaux"
    },
    {
      "chapter": "criblage",
      "title": "Pareto, normal plot et half-normal plot",
      "body": "<p>Pareto ordonne les amplitudes des coefficients. Les graphiques normal et half-normal comparent leur répartition à une distribution de référence.</p><div class=\"frag\"><p>Un coefficient visuellement isolé est un candidat actif. Ces diagnostics reposent sur la parcimonie ; ils ne démontrent pas une causalité ni l’absence d’interaction.</p></div><p>Comparer les diagnostics pour chaque réponse étudiée.</p>",
      "source": "cours1.pdf, p. 67–87"
    },
    {
      "chapter": "criblage",
      "title": "Limites d’un criblage",
      "body": "<p>Les conclusions portent sur les facteurs, niveaux et conditions étudiés. Un facteur peu actif entre deux niveaux peut agir ailleurs.</p><div class=\"frag\"><p>Un modèle de criblage catégoriel ne justifie pas une interpolation physique. Une étude quantitative ultérieure peut proposer une fonction entre les niveaux et la vérifier.</p></div>",
      "source": "cours1.pdf, p. 87"
    },
    {
      "chapter": "niveaux",
      "title": "Un facteur à s niveaux demande s − 1 contrastes",
      "body": "<p>Pour trois catégories A, B et C, une constante et trois indicatrices seraient dépendantes : I_A + I_B + I_C = 1.</p><table class=\"annotated-matrix\"><thead><tr><th>Niveau</th><th>Constante</th><th>I_B</th><th>I_C</th></tr></thead><tbody><tr><td>A</td><td>1</td><td>0</td><td>0</td></tr><tr><td>B</td><td>1</td><td>1</td><td>0</td></tr><tr><td>C</td><td>1</td><td>0</td><td>1</td></tr></tbody></table><div class=\"frag\"><p>Fixer une catégorie de référence laisse deux coefficients libres. Ce sont des différences entre niveaux, pas une pente numérique.</p></div>",
      "source": "Cours 2.pdf, p. 1–10"
    },
    {
      "chapter": "niveaux",
      "title": "Modèle présence–absence",
      "body": "<div class=\"eq\">\\[Y_i=b_0+\\sum_j\\sum_{\\ell=1}^{s_j-1}b_{j\\ell}I_{ij\\ell}+\\varepsilon_i\\]</div><p>Iᵢⱼℓ vaut 1 si le niveau ℓ du facteur j est présent dans l’essai i, 0 sinon. Une catégorie de chaque facteur sert de référence.</p><p>L’absence d’interaction est ici une hypothèse du modèle. Le nombre de colonnes dépend des niveaux et du codage choisi.</p>",
      "source": "Cours 2.pdf, p. 3–10"
    },
    {
      "chapter": "niveaux",
      "title": "Décompter les informations avant la construction",
      "body": "<div class=\"eq\">\\[p=1+\\sum_j(s_j-1),\\qquad N\\ge p\\]</div><p>Têtes de forage : quatre facteurs à deux niveaux, un à trois niveaux et un à quatre niveaux.</p><div class=\"frag\"><div class=\"eq\">\\[p=1+4(2-1)+(3-1)+(4-1)=10\\]</div></div><p>Le décompte est 10, puis une construction à 16 essais est retenue. Le modèle comporte dix coefficients ; la construction retenue comporte seize essais.</p>",
      "source": "Cours 2.pdf, p. 37–45"
    },
    {
      "chapter": "niveaux",
      "title": "Plans symétriques : équilibre entre niveaux",
      "body": "<div class=\"eq\">\\[s^k//N\\]</div><p>Notation : k facteurs à s niveaux dans N essais. Les tableaux orthogonaux équilibrent les niveaux et leurs associations selon leur force.</p><p>Pour un modèle à effets principaux, il faut vérifier les colonnes de sa matrice, pas seulement compter N. Les plans se construisent notamment par permutations et arithmétique modulaire.</p>",
      "source": "Cours 2.pdf, p. 11–24"
    },
    {
      "chapter": "niveaux",
      "title": "Plans asymétriques : regrouper des niveaux",
      "body": "<p>La correspondance A regroupe des niveaux d’une colonne pour obtenir un facteur à moins de niveaux. La correspondance B combine des colonnes selon une construction définie.</p><div class=\"frag\"><p>Les regroupements peuvent changer l’équilibre et la précision. Vérifier les effectifs, les associations et le rang du modèle après transformation.</p></div><p>La condition supplémentaire √s &lt; s₁ de certaines planches n’est pas employée ici comme théorème général ; la construction utilisée doit être vérifiée.</p>",
      "source": "Cours 2.pdf, p. 25–36 ; constructions Addelman des supports"
    },
    {
      "chapter": "niveaux",
      "title": "Du tableau de niveaux au plan réel",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Facteur du cas forage</th><th>Niveaux</th></tr></thead><tbody><tr><td>Type de tête</td><td>Neuf ; récupéré</td></tr><tr><td>Taille</td><td>0,125 ; 0,25 mm</td></tr><tr><td>Vitesse</td><td>400 ; 800 tr/min</td></tr><tr><td>Matériel</td><td>Mou ; dur</td></tr><tr><td>Usine</td><td>Chicago ; Kansas ; Miami</td></tr><tr><td>Opérateur</td><td>A ; B ; C ; D</td></tr></tbody></table><p>Le code d’un niveau est une étiquette. Traduire chaque ligne en conditions réelles avant de réaliser les essais.</p>",
      "source": "Cours 2.pdf, p. 38, 45–47"
    },
    {
      "chapter": "niveaux",
      "title": "Interpréter les moyennes de niveaux",
      "body": "<p>Comparer les réponses moyennes de chaque niveau aux autres niveaux, dans un plan équilibré ou au moyen du modèle ajusté.</p><div class=\"eq\">\\[\\hat y=\\hat b_0+\\sum_j\\hat b_{j,\\ell(j)}\\]</div><p>Une comparaison ne permet de conclure que pour les niveaux testés, sous les hypothèses du modèle. Les graphiques originaux de poids et d’effets totaux restent disponibles au chapitre.</p>",
      "source": "Cours 2.pdf, p. 48–50"
    },
    {
      "chapter": "factoriel",
      "title": "Plan factoriel complet à deux niveaux",
      "body": "<div class=\"eq\">\\[N=2^k\\]</div><p>Toutes les combinaisons des k facteurs sont réalisées. Dans l’ordre standard, x₁ alterne chaque ligne, x₂ toutes les deux lignes, x₃ toutes les quatre.</p><div class=\"frag\"><p>Les produits de colonnes construisent les interactions. Le modèle complet comprend 2ᵏ coefficients : une constante et tous les produits possibles.</p></div>",
      "source": "cours 3.pdf, p. 4–16"
    },
    {
      "chapter": "factoriel",
      "title": "Interaction : comparer des effets locaux",
      "body": "<div class=\"eq\">\\[b_1^- =\\frac{y_{+-}-y_{--}}2,\\quad b_1^+=\\frac{y_{++}-y_{-+}}2\\]</div><div class=\"frag\"><div class=\"eq\">\\[b_{12}=\\frac{b_1^+-b_1^-}2\\]</div></div><p>Des courbes non parallèles indiquent une interaction sur l’échelle considérée. Le bruit impose de juger l’incertitude de cette différence.</p>",
      "source": "cours 3.pdf, p. 7–14"
    },
    {
      "chapter": "factoriel",
      "title": "Deux procédés : mêmes facteurs, réponses différentes",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Condition</th><th>Cas A</th><th>Cas B</th></tr></thead><tbody><tr><td>40 °C ; 1 h</td><td>23</td><td>17</td></tr><tr><td>60 °C ; 1 h</td><td>37</td><td>43</td></tr><tr><td>40 °C ; 2 h</td><td>41</td><td>65</td></tr><tr><td>60 °C ; 2 h</td><td>59</td><td>35</td></tr></tbody></table><div class=\"frag\"><p>Coefficients (b₀,b₁,b₂,b₁₂) : A = (40,8,10,1) ; B = (40,−1,10,−14). Un coefficient moyen b₁ proche de zéro peut masquer des effets locaux opposés.</p></div>",
      "source": "Factorielle_procédé.pptx, d11–14 ; cours 3.pdf"
    },
    {
      "chapter": "factoriel",
      "title": "Sécheur : interpréter l’interaction",
      "body": "<figure><img src=\"figures/FACT_d36_image16.png\" alt=\"Interaction pression–température\" loading=\"eager\"><figcaption>Interaction pression–température</figcaption></figure><p>Le gain de pression change selon la température. L’unité de la réponse doit être confirmée avant toute interprétation physique ou conversion.</p>",
      "source": "cours 3.pdf, p. 17, 23, 35–36"
    },
    {
      "chapter": "factoriel",
      "title": "Répétitions, erreur pure et modèle saturé",
      "body": "<div class=\"eq\">\\[s_{\\mathrm{pur}}^2=\\frac{\\sum_g\\sum_{r}(y_{gr}-\\bar y_g)^2}{N-G}\\]</div><p>G conditions distinctes et N réalisations donnent N − G degrés de liberté d’erreur pure. Répéter ne change pas le rang, mais fournit une information sur la dispersion.</p><div class=\"frag\"><p>Sans répétitions, un modèle complet sur 2ᵏ essais est saturé : ajuster parfaitement n’est pas valider le modèle.</p></div>",
      "source": "cours 3.pdf, p. 17–37"
    },
    {
      "chapter": "surfaces",
      "title": "Pourquoi quitter un modèle du premier degré ?",
      "body": "<p>Un modèle additif décrit des pentes constantes. Une courbure observée ou la recherche d’un optimum intérieur demandent des termes supplémentaires.</p><div class=\"eq\">\\[Y=b_0+\\sum_j b_jx_j+\\sum_{j&lt;\\ell}b_{j\\ell}x_jx_\\ell+\\sum_j b_{jj}x_j^2+\\varepsilon\\]</div><p>Le modèle est toujours linéaire en ses coefficients. Le domaine et les points tests doivent permettre de le mettre à l’épreuve.</p>",
      "source": "cours 4.pdf, p. 1–10"
    },
    {
      "chapter": "surfaces",
      "title": "Combien de coefficients au second degré ?",
      "body": "<div class=\"eq\">\\[p=1+k+\\frac{k(k-1)}2+k=\\frac{(k+1)(k+2)}2\\]</div><p>À deux facteurs : constante, deux pentes, une interaction et deux carrés, soit six coefficients.</p><div class=\"frag\"><p>Les quatre coins seuls ne séparent pas x₁² et x₂² de la constante : chacun vaut 1 aux coins. Ajouter seulement des répétitions aux coins ne résout pas ce défaut.</p></div>",
      "source": "cours 4.pdf ; développement matriciel explicatif"
    },
    {
      "chapter": "surfaces",
      "title": "Plan composite : coins, axes et centre",
      "body": "<svg class=\"science-svg\" viewBox=\"0 0 1200 280\" role=\"img\" aria-label=\"Partie factorielle puis Points axiaux puis Centres répétés puis Contrôles\"><rect x=\"10\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Partie factorielle</text><path d=\"M275 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"310\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Points axiaux</text><path d=\"M575 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"610\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Centres répétés</text><path d=\"M875 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"910\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Contrôles</text></svg><p>Les coins renseignent sur pentes et interactions ; les points axiaux aident à séparer les carrés ; les centres répétés renseignent sur répétabilité et courbure.</p><div class=\"eq\">\\[N=2^k+2k+n_0\\]</div><p>Le domaine peut être cubique ou sphérique ; la distance axiale α dépend des propriétés recherchées, sans dépasser les conditions réalisables.</p>",
      "source": "cours 4.pdf, p. 5–18"
    },
    {
      "chapter": "surfaces",
      "title": "Surface et contours : deux lectures du même modèle",
      "body": "<figure><img src=\"figures/SURF_d26_image7.png\" alt=\"Surface de réponse\" loading=\"eager\"><figcaption>Surface de réponse</figcaption></figure><p>Une courbe de niveau rassemble des réglages donnant la même réponse prévue. L’orientation et la courbure traduisent des coefficients ; la validité reste expérimentale.</p>",
      "source": "cours 4.pdf"
    },
    {
      "chapter": "surfaces",
      "title": "Décomposer l’erreur : manque d’ajustement et erreur pure",
      "body": "<div class=\"eq\">\\[\\mathrm{SCR}=\\mathrm{SC}_{\\mathrm{manque}}+\\mathrm{SC}_{\\mathrm{pur}}\\]</div><div class=\"eq\">\\[F=\\frac{\\mathrm{SC}_{\\mathrm{manque}}/(G-p)}{\\mathrm{SC}_{\\mathrm{pur}}/(N-G)}\\]</div><p>G conditions distinctes, p coefficients, N essais. Le test demande G &gt; p et N &gt; G, un modèle approprié et les hypothèses usuelles d’erreurs normales indépendantes de variance commune.</p><p>Une absence de rejet ne prouve pas la validité universelle ; ajouter des points tests hors ajustement.</p>",
      "source": "cours 4.pdf, p. 24–48"
    },
    {
      "chapter": "surfaces",
      "title": "Chercher un point stationnaire",
      "body": "<div class=\"eq\">\\[\\hat y=b_0+\\mathbf b^T\\mathbf x+\\mathbf x^TB\\mathbf x\\]</div><p>B est symétrique, avec les coefficients des carrés sur la diagonale et la moitié de chaque interaction hors diagonale.</p><div class=\"frag\"><div class=\"eq\">\\[\\nabla\\hat y=\\mathbf b+2B\\mathbf x=0,\\qquad\\mathbf x_*=-\\tfrac12B^{-1}\\mathbf b\\]</div></div><p>Si B est inversible, ses valeurs propres distinguent maximum, minimum ou selle. L’optimum doit rester dans le domaine et être vérifié par une expérience.</p>",
      "source": "cours 4.pdf ; formalisation explicative du modèle du second degré"
    },
    {
      "chapter": "surfaces",
      "title": "Plusieurs réponses : décider du compromis",
      "body": "<p>La désirabilité transforme chaque réponse en un score dⱼ entre 0 et 1, selon une cible ou une borne choisie.</p><div class=\"eq\">\\[D=\\left(\\prod_jd_j^{w_j}\\right)^{1/\\sum_jw_j}\\]</div><p>Les poids et seuils expriment une décision métier. Ils ne sont pas déduits du plan. Une solution calculée doit être réalisable et confirmée expérimentalement.</p>",
      "source": "cours 4.pdf, p. 49–57"
    },
    {
      "chapter": "td",
      "title": "TD factoriel : diffusion dans une sangle",
      "body": "<p>Le revêtement doit pénétrer la sangle de freinage. Réponse : profondeur de diffusion, en mm. Quatre facteurs sont étudiés, y compris la nature du prépolymère.</p><table class=\"annotated-matrix\"><thead><tr><th>Facteur</th><th>Bas</th><th>Haut</th></tr></thead><tbody><tr><td>Rapport diamine/prépolymère</td><td>0,85</td><td>1,15</td></tr><tr><td>Température</td><td>23 °C</td><td>75 °C</td></tr><tr><td>Dilution</td><td>85</td><td>115</td></tr><tr><td>Prépolymère</td><td>Vibrathane</td><td>Adiprène</td></tr></tbody></table>",
      "source": "TD Factorielle.docx ; TD Factorielle.xlsx"
    },
    {
      "chapter": "td",
      "title": "TD factoriel : matrice et données",
      "body": "<p>Le plan complet contient 16 essais. Dans l’ordre standard :</p><p>4,20 ; 2,65 ; 2,30 ; 1,20 ; 4,50 ; 2,60 ; 2,70 ; 1,10 ; 3,15 ; 1,80 ; 2,95 ; 2,00 ; 3,45 ; 1,70 ; 3,20 ; 1,80 mm.</p><div class=\"frag\"><p>L’essai 10 a les codes (+1,−1,−1,+1) : rapport 1,15 ; 23 °C ; dilution 85 ; Adiprène.</p></div><p>Modèle complet : 16 colonnes orthogonales. Un modèle plus parcimonieux doit être motivé, pas choisi uniquement pour effacer des résidus.</p>",
      "source": "TD Factorielle.docx"
    },
    {
      "chapter": "td",
      "title": "TD factoriel : interpréter les coefficients",
      "body": "<figure><img src=\"figures/TDFACT_image1.png\" alt=\"Coefficients de diffusion\" loading=\"eager\"><figcaption>Coefficients de diffusion</figcaption></figure><div class=\"eq\">\\[\\hat b_0=2{,}58125,\\quad\\hat b_1=-0{,}725,\\quad\\hat b_2=-0{,}425,\\quad\\hat b_{24}=0{,}40625\\]</div><p>La température et le prépolymère interagissent : une recommandation doit examiner les combinaisons. Les valeurs sont des coefficients codés, pas des différences entières entre niveaux.</p>",
      "source": "TD Factorielle.docx/xlsx ; calculs vérifiés"
    },
    {
      "chapter": "td",
      "title": "TD Hadamard : vitesse de dépôt électrolytique",
      "body": "<p>Neuf facteurs : température, pH, or, agitation, cobalt, courant, position, additif et surface. Réponse : vitesse de dépôt (mg/min).</p><p>Données, dans l’ordre de la matrice : 101,8 ; 71,2 ; 91,3 ; 114,1 ; 43,8 ; 105,5 ; 145,0 ; 56,1 ; 30,6 ; 50,0 ; 97,3 ; 52,4.</p><div class=\"eq\">\\[N=12,\\quad X^TX=12I_{10}\\]</div><p>Dix colonnes pour la constante et les neuf facteurs. Les deux degrés de liberté résiduels ne garantissent pas à eux seuls que les interactions sont négligeables.</p>",
      "source": "TD Hadamard.docx/xlsx"
    },
    {
      "chapter": "td",
      "title": "TD Hadamard : retrouver les coefficients manquants",
      "body": "<div class=\"eq\">\\[\\hat b_j=\\frac{\\mathbf x_j^T\\mathbf y}{12}\\]</div><div class=\"frag\"><div class=\"eq\">\\[\\hat b_2=12{,}425,\\qquad\\hat b_9=1{,}725\\]</div></div><p>Le pH a un coefficient positif dans les niveaux étudiés. Une recommandation d’augmentation de vitesse doit aussi respecter les critères de qualité et vérifier les effets confondus.</p>",
      "source": "TD Hadamard.docx/xlsx ; ordre de matrice historique, vérifié numériquement"
    },
    {
      "chapter": "td",
      "title": "TD Hadamard : interpréter les coefficients",
      "body": "<figure><img src=\"figures/TDHAD_image2.png\" alt=\"Coefficients de vitesse de dépôt\" loading=\"eager\"><figcaption>Coefficients de vitesse de dépôt</figcaption></figure><p>Le graphique aide à comparer les amplitudes. Il ne remplace ni les hypothèses de criblage, ni une validation des conditions retenues.</p>",
      "source": "TD Hadamard.docx"
    },
    {
      "chapter": "synthese",
      "title": "Six distinctions pour conclure correctement",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>À distinguer</th><th>Conséquence</th></tr></thead><tbody><tr><td>Bruit / biais</td><td>Répéter ne supprime pas un décalage systématique</td></tr><tr><td>Répétition / direction indépendante</td><td>Précision et rang répondent à des questions différentes</td></tr><tr><td>Identifiabilité / précision</td><td>Rang complet ne garantit pas faible variance</td></tr><tr><td>Modèle / phénomène</td><td>Un bon ajustement n’est pas une preuve physique</td></tr><tr><td>Coefficient b / différence Δ</td><td>Entre deux niveaux codés : Δ = 2b</td></tr><tr><td>Nombre d’essais / information</td><td>La disposition, le modèle et le bruit comptent aussi</td></tr></tbody></table>",
      "source": "Synthèse du cours et F0/F1"
    },
    {
      "chapter": "synthese",
      "title": "Une stratégie scientifique complète",
      "body": "<svg class=\"science-svg\" viewBox=\"0 0 1200 280\" role=\"img\" aria-label=\"Question puis Plan et mesures puis Modèle vérifié puis Décision et limites\"><rect x=\"10\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Question</text><path d=\"M275 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"310\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Plan et mesures</text><path d=\"M575 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"610\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Modèle vérifié</text><path d=\"M875 120h25l-8-7m8 7l-8 7\" stroke=\"#1f4e79\" fill=\"none\"/><rect x=\"910\" y=\"70\" width=\"260\" height=\"100\" rx=\"8\" fill=\"#e8f0f8\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"128\" text-anchor=\"middle\" font-size=\"29\">Décision et limites</text></svg><p>Consigner les conditions, prévoir les répétitions utiles, examiner les résidus, tester les prévisions et expliciter le domaine de conclusion.</p><p>Retrouvez les démonstrations et les exercices complémentaires dans F0 et F1.</p>",
      "source": "Synthèse"
    }
  ]
};
