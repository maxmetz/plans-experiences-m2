window.CoursData = {
  "title": "Cours 1 · Introduction et criblage",
  "duration": 118,
  "source": "cours1.pdf",
  "chapters": [
    {
      "id": "fondements",
      "title": "1 · Organiser une étude expérimentale",
      "doc": "intro",
      "from": 1,
      "to": 15,
      "start": 0,
      "end": 18,
      "interactive": "1"
    },
    {
      "id": "soudure",
      "title": "2 · Soudure laser : comparer les stratégies",
      "doc": "intro",
      "from": 16,
      "to": 28,
      "start": 18,
      "end": 38,
      "interactive": "14"
    },
    {
      "id": "precision",
      "title": "3 · Qualité de l’information et Hadamard",
      "doc": "intro",
      "from": 29,
      "to": 34,
      "start": 38,
      "end": 53,
      "interactive": "32"
    },
    {
      "id": "frittage",
      "title": "4 · Frittage : onze facteurs, douze essais",
      "doc": "intro",
      "from": 35,
      "to": 54,
      "start": 53,
      "end": 73,
      "interactive": "2"
    },
    {
      "id": "contrastes",
      "title": "5 · Calculer et lire les poids",
      "doc": "intro",
      "from": 55,
      "to": 60,
      "start": 73,
      "end": 85,
      "interactive": "28"
    },
    {
      "id": "signification",
      "title": "6 · Quantifier l’incertitude",
      "doc": "intro",
      "from": 61,
      "to": 66,
      "start": 85,
      "end": 100,
      "interactive": "32"
    },
    {
      "id": "interpretation",
      "title": "7 · Pareto, Henry et conclusions",
      "doc": "intro",
      "from": 67,
      "to": 87,
      "start": 100,
      "end": 118,
      "interactive": "35"
    }
  ],
  "slides": [
    {
      "chapter": "fondements",
      "title": "Cours 1 · Comprendre et organiser les expériences",
      "body": "<p>Introduction aux plans d’expériences et criblage à deux niveaux.</p><svg class=\"science-svg\" viewBox=\"0 0 1200 230\" role=\"img\" aria-label=\"Question puis Expériences puis Information puis Décision\"><rect x=\"8\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"120\" text-anchor=\"middle\">Question</text><path d=\"M275 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"308\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"120\" text-anchor=\"middle\">Expériences</text><path d=\"M575 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"608\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"120\" text-anchor=\"middle\">Information</text><path d=\"M875 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"908\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"120\" text-anchor=\"middle\">Décision</text></svg><p class=\"takeaway\">Deux fils conducteurs : soudure laser, puis frittage d’une céramique. Parcours prévu pour 1 h 58.</p>",
      "pages": [
        1,
        2
      ],
      "source": "cours1.pdf, p. 1–2 · Michelle Sergent, AMU"
    },
    {
      "chapter": "fondements",
      "title": "Information, décision et risque",
      "body": "<svg class=\"science-svg\" viewBox=\"0 0 1200 230\" role=\"img\" aria-label=\"Expériences puis Information puis Décision puis Risque\"><rect x=\"8\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"120\" text-anchor=\"middle\">Expériences</text><path d=\"M275 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"308\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"120\" text-anchor=\"middle\">Information</text><path d=\"M575 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"608\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"120\" text-anchor=\"middle\">Décision</text><path d=\"M875 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"908\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"120\" text-anchor=\"middle\">Risque</text></svg><p>Le plan détermine les comparaisons possibles avant de connaître les résultats.</p><div class=\"frag\"><p>La précision dépend de la disposition des essais, de leur nombre et du bruit. Une bonne géométrie ne suffit pas si le modèle ou les mesures sont inadéquats.</p></div>",
      "pages": [
        2
      ],
      "source": "cours1.pdf, p. 2 · Michelle Sergent, AMU"
    },
    {
      "chapter": "fondements",
      "title": "Qu’appelle-t-on un plan d’expériences ?",
      "body": "<p>Une stratégie qui organise les expériences pour obtenir une information aussi efficacement et précisément que possible.</p><table class=\"annotated-matrix\"><thead><tr><th>Avant les essais</th><th>Question à poser</th></tr></thead><tbody><tr><td>Problème</td><td>Quelle décision voulons-nous éclairer ?</td></tr><tr><td>Mesures</td><td>Quelles réponses observer ?</td></tr><tr><td>Réglages</td><td>Quels facteurs maîtriser ?</td></tr><tr><td>Limites</td><td>Quels niveaux sont réalisables ?</td></tr></tbody></table>",
      "pages": [
        3,
        4
      ],
      "source": "cours1.pdf, p. 3–4 · Michelle Sergent, AMU"
    },
    {
      "chapter": "fondements",
      "title": "La réponse : ce que l’on mesure à la sortie",
      "body": "<svg class=\"science-svg\" viewBox=\"0 0 1200 230\" role=\"img\" aria-label=\"Réglages puis Procédé puis Mesures puis Interprétation\"><rect x=\"8\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"120\" text-anchor=\"middle\">Réglages</text><path d=\"M275 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"308\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"120\" text-anchor=\"middle\">Procédé</text><path d=\"M575 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"608\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"120\" text-anchor=\"middle\">Mesures</text><path d=\"M875 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"908\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"120\" text-anchor=\"middle\">Interprétation</text></svg><p>Nous voulons augmenter, réduire ou stabiliser une caractéristique mesurable. Nous agissons sur les facteurs pour modifier cette réponse.</p><div class=\"frag\"><p>Soudure : nombre de soufflures à réduire. Céramique : densité, porosité et résistance à la flexion.</p></div>",
      "pages": [
        5
      ],
      "source": "cours1.pdf, p. 5 · Michelle Sergent, AMU"
    },
    {
      "chapter": "fondements",
      "title": "Les facteurs : les leviers de l’expérimentation",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Type</th><th>Ce qu’il implique</th></tr></thead><tbody><tr><td>Contrôlé</td><td>Le niveau est choisi et consigné.</td></tr><tr><td>Parasite</td><td>Il peut agir sans être l’objet de l’étude.</td></tr><tr><td>Ignoré</td><td>Son influence éventuelle reste hors du modèle.</td></tr></tbody></table><p class=\"takeaway\">Un facteur est une variable ; un niveau est l’une de ses modalités. Choisir les facteurs fait partie du raisonnement scientifique.</p>",
      "pages": [
        6
      ],
      "source": "cours1.pdf, p. 6 · Michelle Sergent, AMU"
    },
    {
      "chapter": "fondements",
      "title": "Domaine expérimental : autorisé ne signifie pas déjà testé",
      "body": "<div class=\"v3-columns\"><div><svg class=\"science-svg\" viewBox=\"0 0 650 430\" role=\"img\" aria-label=\"Domaine température 150 à 180 degrés et concentration 10 à 30 pour cent\"><rect x=\"120\" y=\"80\" width=\"380\" height=\"250\" fill=\"#edf3f7\"/><path d=\"M120 50V330H555\" stroke=\"#536b80\" stroke-width=\"3\" fill=\"none\"/><text x=\"320\" y=\"410\" text-anchor=\"middle\">Température (°C)</text><text x=\"20\" y=\"35\">Concentration (%)</text><text x=\"120\" y=\"365\" text-anchor=\"middle\">150</text><text x=\"310\" y=\"365\" text-anchor=\"middle\">165</text><text x=\"500\" y=\"365\" text-anchor=\"middle\">180</text><text x=\"100\" y=\"335\" text-anchor=\"end\">10</text><text x=\"100\" y=\"210\" text-anchor=\"end\">20</text><text x=\"100\" y=\"85\" text-anchor=\"end\">30</text><circle cx=\"310\" cy=\"205\" r=\"9\" fill=\"#b5591b\"/><text x=\"330\" y=\"195\">Centre</text></svg></div><div><p>Exemple du cours : température de 150 à 180 °C ; concentration de 10 à 30 %.</p><p>Le domaine décrit l’espace d’exploration. Les essais sont des points à l’intérieur de cet espace.</p><div class=\"frag\"><p>Définir des limites techniques et économiques, puis des niveaux permettant des comparaisons utiles.</p></div></div></div>",
      "pages": [
        7,
        8,
        9
      ],
      "source": "cours1.pdf, p. 7–9 · Michelle Sergent, AMU"
    },
    {
      "chapter": "fondements",
      "title": "Choisir un domaine compatible avec le modèle",
      "body": "<p>Un modèle doit décrire convenablement la réponse dans la région où il sert à prévoir.</p><svg class=\"science-svg\" viewBox=\"0 0 1200 230\" role=\"img\" aria-label=\"Domaine choisi puis Modèle supposé puis Contrôles puis Validité locale\"><rect x=\"8\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"120\" text-anchor=\"middle\">Domaine choisi</text><path d=\"M275 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"308\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"120\" text-anchor=\"middle\">Modèle supposé</text><path d=\"M575 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"608\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"120\" text-anchor=\"middle\">Contrôles</text><path d=\"M875 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"908\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"120\" text-anchor=\"middle\">Validité locale</text></svg><div class=\"frag\"><p>Si les variations changent fortement dans le domaine, réduire ce domaine ou enrichir le modèle. Aucune formule ne garantit sa propre validité physique.</p></div>",
      "pages": [
        8
      ],
      "source": "cours1.pdf, p. 8 · Michelle Sergent, AMU"
    },
    {
      "chapter": "fondements",
      "title": "Passer des unités naturelles aux codes",
      "body": "<div class=\"eq\">\\[x_j=\\frac{U_j-U_j^0}{\\Delta U_j}\\]</div><table class=\"annotated-matrix\"><thead><tr><th>Facteur du cours</th><th>Centre U⁰</th><th>Demi-étendue ΔU</th><th>Codes des bornes</th></tr></thead><tbody><tr><td>Température</td><td>165 °C</td><td>15 °C</td><td>−1 ; +1</td></tr><tr><td>Concentration</td><td>20 %</td><td>10 points</td><td>−1 ; +1</td></tr></tbody></table><div class=\"frag\"><div class=\"eq\">\\[U_T=180\\Rightarrow x_T=1,\\qquad U_C=10\\Rightarrow x_C=-1\\]</div></div><p>Le codage change les repères, pas les conditions physiques.</p>",
      "pages": [
        9
      ],
      "source": "cours1.pdf, p. 9 · Michelle Sergent, AMU"
    },
    {
      "chapter": "fondements",
      "title": "Une boîte noire, plusieurs réponses",
      "body": "<div class=\"v3-columns\"><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d10_image8.jpeg\" alt=\"Géométrie du produit étudié\"><figcaption>Géométrie du produit étudié · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div><div><p>Le support prend aussi l’exemple d’un produit métallique : position, bombé, hauteur et rayon sont reliés à des performances.</p><table class=\"annotated-matrix\"><thead><tr><th>Entrées</th><th>Sorties</th></tr></thead><tbody><tr><td>Géométrie</td><td>Volume utile, résistance au remplissage</td></tr><tr><td>Fabrication</td><td>Tenue au choc, masse de métal</td></tr></tbody></table></div></div>",
      "pages": [
        10
      ],
      "source": "cours1.pdf, p. 10 · Michelle Sergent, AMU"
    },
    {
      "chapter": "fondements",
      "title": "Transformer le problème en stratégie",
      "body": "<svg class=\"science-svg\" viewBox=\"0 0 1200 230\" role=\"img\" aria-label=\"Propriétés mesurées puis Facteurs maîtrisés puis Domaine puis Stratégie\"><rect x=\"8\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"120\" text-anchor=\"middle\">Propriétés mesurées</text><path d=\"M275 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"308\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"120\" text-anchor=\"middle\">Facteurs maîtrisés</text><path d=\"M575 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"608\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"120\" text-anchor=\"middle\">Domaine</text><path d=\"M875 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"908\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"120\" text-anchor=\"middle\">Stratégie</text></svg><p>La liste des réponses, celle des facteurs et leurs domaines se construisent ensemble. Le plan vient ensuite, en fonction de la question.</p>",
      "pages": [
        11
      ],
      "source": "cours1.pdf, p. 11 · Michelle Sergent, AMU"
    },
    {
      "chapter": "fondements",
      "title": "Des objectifs différents, des expériences différentes",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Objectif du cours</th><th>Information recherchée</th></tr></thead><tbody><tr><td>Explorer</td><td>Répartir les essais dans le domaine.</td></tr><tr><td>Cribler</td><td>Repérer les facteurs probablement influents.</td></tr><tr><td>Étudier plus finement</td><td>Examiner notamment les interactions.</td></tr></tbody></table><p class=\"takeaway\">On choisit un ensemble d’expériences conformément aux objectifs.</p>",
      "pages": [
        12,
        13
      ],
      "source": "cours1.pdf, p. 12–13 · Michelle Sergent, AMU"
    },
    {
      "chapter": "fondements",
      "title": "Le criblage : beaucoup de facteurs, quelques candidats actifs",
      "body": "<p>Détecter, comparer et hiérarchiser les facteurs dans les niveaux choisis.</p><div class=\"eq\">\\[h\\ll k\\]</div><p>k facteurs potentiellement influents ; h facteurs réellement actifs, supposés peu nombreux.</p><div class=\"frag\"><p>Une étude préliminaire prépare le choix des facteurs et de leurs niveaux. Le criblage organise ensuite leur comparaison.</p></div>",
      "pages": [
        14,
        15
      ],
      "source": "cours1.pdf, p. 14–15 · Michelle Sergent, AMU"
    },
    {
      "chapter": "soudure",
      "title": "Deux niveaux : que mesure le « poids » d’un facteur ?",
      "body": "<div class=\"eq\">\\[b_j=\\frac{\\bar y_{j+}-\\bar y_{j-}}2\\]</div><p>Convention du support : ce coefficient est appelé « effet » ou « poids ».</p><div class=\"frag\"><div class=\"eq\">\\[\\Delta_j=\\bar y_{j+}-\\bar y_{j-}=2b_j\\]</div></div><p class=\"takeaway\">Le coefficient codé est une demi-différence ; le changement entre les deux niveaux vaut 2bⱼ.</p>",
      "pages": [
        16
      ],
      "source": "cours1.pdf, p. 16 · Michelle Sergent, AMU"
    },
    {
      "chapter": "soudure",
      "title": "Soudure laser : réduire le nombre de défauts",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Facteur</th><th>Niveau −</th><th>Niveau +</th></tr></thead><tbody><tr><td>Vitesse de déplacement</td><td>20 cm/min</td><td>30 cm/min</td></tr><tr><td>Hélium dans le mélange</td><td>30 %</td><td>50 %</td></tr><tr><td>Puissance</td><td>650 W</td><td>750 W</td></tr></tbody></table><p>Réponse : nombre de soufflures. Un coefficient positif augmente les défauts ; il ne signifie pas une amélioration.</p>",
      "pages": [
        17
      ],
      "source": "cours1.pdf, p. 17 · Michelle Sergent, AMU"
    },
    {
      "chapter": "soudure",
      "title": "Changer un facteur à la fois : trois comparaisons",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Facteur modifié</th><th>Réponse au niveau −</th><th>Réponse au niveau +</th></tr></thead><tbody><tr><td>Vitesse</td><td>18</td><td>29</td></tr><tr><td>Hélium</td><td>31</td><td>15</td></tr><tr><td>Puissance</td><td>25</td><td>22</td></tr></tbody></table><p>Chaque comparaison garde les autres réglages fixés. Six expériences pour trois contrastes locaux.</p><div class=\"frag\"><p>Avant le calcul : quel facteur paraît réduire le plus les défauts quand son niveau augmente ?</p></div>",
      "pages": [
        18,
        19,
        20
      ],
      "source": "cours1.pdf, p. 18–20 · Michelle Sergent, AMU"
    },
    {
      "chapter": "soudure",
      "title": "Décomposer le calcul des trois poids",
      "body": "<div class=\"eq\">\\[b_V=\\frac{29-18}{2}=5{,}5\\]</div><div class=\"frag\"><div class=\"eq\">\\[b_{He}=\\frac{15-31}{2}=-8\\]</div></div><div class=\"frag\"><div class=\"eq\">\\[b_P=\\frac{22-25}{2}=-1{,}5\\]</div></div><p>Les signes orientent la décision ; les amplitudes se rapportent aux intervalles choisis.</p>",
      "pages": [
        18,
        19,
        20,
        21
      ],
      "source": "cours1.pdf, p. 18–21 · Michelle Sergent, AMU"
    },
    {
      "chapter": "soudure",
      "title": "Un facteur à la fois : un résultat local",
      "body": "<p>Cette stratégie isole le changement d’un facteur à des réglages fixés des autres facteurs.</p><p>Elle répond à une question locale et peut être imposée par des contraintes pratiques.</p><div class=\"frag\"><p class=\"takeaway\">Étendre ce résultat à tous les réglages suppose que les autres facteurs ne modifient pas son effet.</p></div>",
      "pages": [
        21,
        22,
        23
      ],
      "source": "cours1.pdf, p. 21–23 · Michelle Sergent, AMU"
    },
    {
      "chapter": "soudure",
      "title": "Changer la disposition des expériences",
      "body": "<div class=\"v3-columns\"><div><table class=\"annotated-matrix\"><thead><tr><th>Approche</th><th>Essais</th><th>Organisation</th></tr></thead><tbody><tr><td>Un facteur à la fois</td><td>6</td><td>Deux réponses par contraste</td></tr><tr><td>Plan proposé</td><td>4</td><td>Variation simultanée</td></tr></tbody></table></div><div><p>Le cours propose de calculer les trois poids à partir de quatre expériences bien choisies.</p><div class=\"frag\"><p>Il faut des colonnes permettant de séparer les contributions : changer plusieurs facteurs au hasard ne suffit pas.</p></div></div></div>",
      "pages": [
        22,
        23,
        24
      ],
      "source": "cours1.pdf, p. 22–24 · Michelle Sergent, AMU"
    },
    {
      "chapter": "soudure",
      "title": "La matrice indique les niveaux codés",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Essai</th><th>x₁ vitesse</th><th>x₂ hélium</th><th>x₃ puissance</th></tr></thead><tbody><tr><td>1</td><td>+1</td><td>+1</td><td>−1</td></tr><tr><td>2</td><td>−1</td><td>+1</td><td>+1</td></tr><tr><td>3</td><td>+1</td><td>−1</td><td>+1</td></tr><tr><td>4</td><td>−1</td><td>−1</td><td>−1</td></tr></tbody></table><p>Une ligne décrit une expérience ; une colonne suit un facteur. Ces quatre lignes sont la matrice proposée dans le cours.</p>",
      "pages": [
        24,
        25
      ],
      "source": "cours1.pdf, p. 24–25 · Michelle Sergent, AMU"
    },
    {
      "chapter": "soudure",
      "title": "Traduire la matrice en réglages physiques",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Essai</th><th>Vitesse (cm/min)</th><th>Hélium (%)</th><th>Puissance (W)</th><th>Défauts</th></tr></thead><tbody><tr><td>1</td><td>30</td><td>50</td><td>650</td><td>22</td></tr><tr><td>2</td><td>20</td><td>50</td><td>750</td><td>8</td></tr><tr><td>3</td><td>30</td><td>30</td><td>750</td><td>35</td></tr><tr><td>4</td><td>20</td><td>30</td><td>650</td><td>27</td></tr></tbody></table><p class=\"takeaway\">Matrice codée → plan d’expérimentation en unités réelles → réponses observées.</p>",
      "pages": [
        26
      ],
      "source": "cours1.pdf, p. 26 · Michelle Sergent, AMU"
    },
    {
      "chapter": "soudure",
      "title": "Calculer la vitesse par les moyennes de niveaux",
      "body": "<div class=\"eq\">\\[\\bar y_{V+}=\\frac{22+35}{2}=28{,}5\\]</div><div class=\"frag\"><div class=\"eq\">\\[\\bar y_{V-}=\\frac{8+27}{2}=17{,}5\\]</div></div><div class=\"frag\"><div class=\"eq\">\\[b_V=\\frac{28{,}5-17{,}5}{2}=5{,}5\\]</div></div><p>Chaque réponse contribue maintenant au calcul du poids.</p>",
      "pages": [
        27
      ],
      "source": "cours1.pdf, p. 27 · Michelle Sergent, AMU"
    },
    {
      "chapter": "soudure",
      "title": "La même opération pour l’hélium et la puissance",
      "body": "<div class=\"eq\">\\[b_{He}=\\frac{(22+8)-(35+27)}4=-8\\]</div><div class=\"frag\"><div class=\"eq\">\\[b_P=\\frac{(8+35)-(22+27)}4=-1{,}5\\]</div></div><div class=\"eq\">\\[b_0=\\frac{22+8+35+27}4=23\\]</div><p>La concordance avec les poids précédents ne démontre pas l’absence d’interaction.</p>",
      "pages": [
        27
      ],
      "source": "cours1.pdf, p. 27 · Michelle Sergent, AMU"
    },
    {
      "chapter": "soudure",
      "title": "Interpréter le graphique de soudure d’origine",
      "body": "<figure class=\"original-figure\"><img src=\"figures/INTRO_d28_image19.png\" alt=\"Graphique des poids — soudure laser\"><figcaption>Graphique des poids — soudure laser · Figure originale : Michelle Sergent, AMU.</figcaption></figure><p class=\"takeaway\">Dans ces niveaux, augmenter l’hélium réduit les défauts ; augmenter la vitesse les augmente.</p>",
      "pages": [
        28
      ],
      "source": "cours1.pdf, p. 28 · Michelle Sergent, AMU"
    },
    {
      "chapter": "precision",
      "title": "Pourquoi comparer la précision des deux stratégies ?",
      "body": "<p>Une mesure varie d’une répétition à l’autre. Les coefficients calculés à partir des mesures varient aussi.</p><div class=\"eq\">\\[Y_i=\\mu_i+\\varepsilon_i,\\quad E(\\varepsilon_i)=0,\\quad\\operatorname{Var}(\\varepsilon_i)=\\sigma^2\\]</div><p>Pour les calculs suivants : erreurs non corrélées et variance commune. Un biais systématique ne disparaît pas dans ce calcul.</p>",
      "pages": [
        29
      ],
      "source": "cours1.pdf, p. 29 · Michelle Sergent, AMU"
    },
    {
      "chapter": "precision",
      "title": "Deux observations : calculer la variance du poids",
      "body": "<div class=\"eq\">\\[\\hat b_V=\\tfrac12Y_2-\\tfrac12Y_1\\]</div><div class=\"frag\"><div class=\"eq\">\\[\\operatorname{Var}(\\hat b_V)=(\\tfrac12)^2\\sigma^2+(-\\tfrac12)^2\\sigma^2\\]</div></div><div class=\"frag\"><div class=\"eq\">\\[\\operatorname{Var}(\\hat b_V)=\\frac{\\sigma^2}{2}\\]</div></div><p>Les poids se mettent au carré. L’absence de covariance entre les erreurs permet d’additionner les contributions.</p>",
      "pages": [
        29
      ],
      "source": "cours1.pdf, p. 29 · Michelle Sergent, AMU"
    },
    {
      "chapter": "precision",
      "title": "Quatre observations : chacune apporte un quart",
      "body": "<div class=\"eq\">\\[\\hat b_V=\\frac{Y_1-Y_2+Y_3-Y_4}{4}\\]</div><div class=\"frag\"><div class=\"eq\">\\[\\operatorname{Var}(\\hat b_V)=4\\times(\\tfrac14)^2\\sigma^2=\\frac{\\sigma^2}{4}\\]</div></div><p class=\"takeaway\">Ici le plan de quatre essais divise la variance du poids par deux par rapport à la comparaison de deux mesures.</p>",
      "pages": [
        30
      ],
      "source": "cours1.pdf, p. 30 · Michelle Sergent, AMU"
    },
    {
      "chapter": "precision",
      "title": "Variance divisée par deux, écart-type par √2",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Calcul du poids</th><th>Variance</th><th>Écart-type</th></tr></thead><tbody><tr><td>Deux observations</td><td>σ²/2</td><td>σ/√2</td></tr><tr><td>Quatre observations du plan</td><td>σ²/4</td><td>σ/2</td></tr></tbody></table><p>On compare l’incertitude du coefficient, pas la dispersion des observations brutes.</p><div class=\"frag\"><p>Doubler tout le plan par des répétitions indépendantes divise les variances par deux, sans créer de nouvelle direction.</p></div>",
      "pages": [
        29,
        30
      ],
      "source": "cours1.pdf, p. 29–30 · Michelle Sergent, AMU"
    },
    {
      "chapter": "precision",
      "title": "Combien de facteurs peut-on séparer ?",
      "body": "<div class=\"eq\">\\[p=k+1,\\qquad N\\ge k+1\\]</div><p>Le modèle contient une constante et k poids. Il faut au moins autant d’observations que d’inconnues et des colonnes indépendantes.</p><div class=\"frag\"><p>Trois facteurs : quatre inconnues, au moins quatre essais. Onze facteurs : douze inconnues, au moins douze essais.</p></div>",
      "pages": [
        31
      ],
      "source": "cours1.pdf, p. 31 · Michelle Sergent, AMU"
    },
    {
      "chapter": "precision",
      "title": "La borne de précision du cours : ses conditions",
      "body": "<div class=\"eq\">\\[\\operatorname{Var}(\\hat b_j)\\ge\\frac{\\sigma^2}{N}\\]</div><p>Modèle linéaire identifiable, niveaux codés bornés par ±1, erreurs centrées non corrélées de variance commune.</p><div class=\"frag\"><p>L’égalité est atteinte pour des colonnes de norme au carré N, orthogonales aux autres. « Optimal » se rapporte à ce modèle, ce critère et ce domaine.</p></div>",
      "pages": [
        31,
        32
      ],
      "source": "cours1.pdf, p. 31–32 · Michelle Sergent, AMU"
    },
    {
      "chapter": "precision",
      "title": "Hadamard : les colonnes ne se mélangent pas",
      "body": "<div class=\"eq\">\\[X^TX=NI\\]</div><p>Ajouter une colonne de 1 pour la constante. Les produits de colonnes différentes se somment à zéro.</p><div class=\"frag\"><div class=\"eq\">\\[\\hat\\beta=\\frac1N X^Ty,\\qquad\\operatorname{Cov}(\\hat\\beta)=\\frac{\\sigma^2}{N}I\\]</div></div><p class=\"takeaway\">Une construction orthogonale simplifie les calculs ; elle n’élimine pas les interactions physiques.</p>",
      "pages": [
        32,
        33
      ],
      "source": "cours1.pdf, p. 32–33 · Michelle Sergent, AMU"
    },
    {
      "chapter": "precision",
      "title": "Construire le plan à partir de la ligne génératrice",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>N</th><th>Ligne initiale du cours</th></tr></thead><tbody><tr><td>4</td><td>+ + −</td></tr><tr><td>8</td><td>+ + + − + − −</td></tr><tr><td>12</td><td>+ + − + + + − − − + −</td></tr></tbody></table><p>Décaler circulairement la ligne, puis ajouter une ligne de signes −. Ces lignes sont des constructions disponibles, pas une preuve d’existence pour toute taille.</p><p class=\"takeaway\">Pour l’étude suivante, N = 12 fournit onze colonnes de facteurs.</p>",
      "pages": [
        33,
        34
      ],
      "source": "cours1.pdf, p. 33–34 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Frittage : comprendre un cycle industriel",
      "body": "<p>Le traitement thermique densifie un aggloméré de poudres en dessous de sa température de fusion.</p><svg class=\"science-svg\" viewBox=\"0 0 1200 230\" role=\"img\" aria-label=\"Poudre puis Température puis Compression puis Céramique\"><rect x=\"8\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"120\" text-anchor=\"middle\">Poudre</text><path d=\"M275 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"308\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"120\" text-anchor=\"middle\">Température</text><path d=\"M575 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"608\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"120\" text-anchor=\"middle\">Compression</text><path d=\"M875 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"908\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"120\" text-anchor=\"middle\">Céramique</text></svg><p>La compression à chaud et le cycle thermique agissent sur la densification et la porosité. Le cours cherche les réglages influents avant une étude plus fine.</p>",
      "pages": [
        35
      ],
      "source": "cours1.pdf, p. 35 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Trois réponses, trois critères",
      "body": "<div class=\"v3-columns\"><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d36_image23.png\" alt=\"Étude de compression de la céramique\"><figcaption>Étude de compression de la céramique · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div><div><table class=\"annotated-matrix\"><thead><tr><th>Réponse</th><th>Objectif</th></tr></thead><tbody><tr><td>Y₁ · Densité relative (%)</td><td>Proche de 100 %</td></tr><tr><td>Y₂ · Porosité ouverte (%)</td><td>Proche de 0 %</td></tr><tr><td>Y₃ · Résistance à la flexion</td><td>Maximiser</td></tr></tbody></table></div></div>",
      "pages": [
        36
      ],
      "source": "cours1.pdf, p. 36 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Deux paliers de température, un cycle de pression",
      "body": "<svg class=\"science-svg\" viewBox=\"0 0 1200 230\" role=\"img\" aria-label=\"Montée puis Palier 1 puis Palier 2 puis Descente\"><rect x=\"8\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"120\" text-anchor=\"middle\">Montée</text><path d=\"M275 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"308\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"120\" text-anchor=\"middle\">Palier 1</text><path d=\"M575 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"608\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"120\" text-anchor=\"middle\">Palier 2</text><path d=\"M875 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"908\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"120\" text-anchor=\"middle\">Descente</text></svg><table class=\"annotated-matrix\"><thead><tr><th>Partie du cycle</th><th>Facteurs du cours</th></tr></thead><tbody><tr><td>Température</td><td>U₁, U₂ : palier 1 ; U₃, U₄ : palier 2</td></tr><tr><td>Vitesses thermiques</td><td>U₅ : montée ; U₆ : descente</td></tr><tr><td>Pression</td><td>U₇ : niveau ; U₈–U₁₁ : instants et vitesses</td></tr></tbody></table><p>Ces choix visent la densification en limitant la croissance des grains.</p>",
      "pages": [
        37,
        38
      ],
      "source": "cours1.pdf, p. 37–38 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Domaine : les six facteurs thermiques",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Facteur</th><th>Réglage</th><th>Niveau −</th><th>Niveau +</th></tr></thead><tbody><tr><td>U₁</td><td>Température palier 1 (°C)</td><td>1700</td><td>1800</td></tr><tr><td>U₂</td><td>Durée palier 1 (min)</td><td>15</td><td>45</td></tr><tr><td>U₃</td><td>Température palier 2 (°C)</td><td>U₁ + 50</td><td>U₁ + 150</td></tr><tr><td>U₄</td><td>Durée palier 2 (min)</td><td>5</td><td>15</td></tr><tr><td>U₅</td><td>Montée température (°C/min)</td><td>10</td><td>30</td></tr><tr><td>U₆</td><td>Descente température (°C/min)</td><td>10</td><td>30</td></tr></tbody></table><p class=\"takeaway\">U₃ est relatif à U₁ : le troisième facteur codé représente le supplément de température du second palier.</p>",
      "pages": [
        39
      ],
      "source": "cours1.pdf, p. 39 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Domaine : les cinq facteurs de pression",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Facteur</th><th>Réglage</th><th>Niveau −</th><th>Niveau +</th></tr></thead><tbody><tr><td>U₇</td><td>Pression (MPa)</td><td>20</td><td>40</td></tr><tr><td>U₈</td><td>Mise en pression</td><td>Mp1</td><td>Mp2</td></tr><tr><td>U₉</td><td>Relâchement pression</td><td>Rp1</td><td>Rp2</td></tr><tr><td>U₁₀</td><td>Montée pression (MPa/s)</td><td>0,1</td><td>1,0</td></tr><tr><td>U₁₁</td><td>Descente pression (MPa/s)</td><td>0,1</td><td>1,0</td></tr></tbody></table><p>Mp1/Mp2 et Rp1/Rp2 sont des modalités du protocole original, à définir opérationnellement avant de reproduire les essais ; le support ne les décrit pas davantage.</p>",
      "pages": [
        39
      ],
      "source": "cours1.pdf, p. 39 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "La démarche de criblage en cinq étapes",
      "body": "<svg class=\"science-svg\" viewBox=\"0 0 1200 230\" role=\"img\" aria-label=\"Matrice codée puis Plan réel puis Mesures puis Interprétation\"><rect x=\"8\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"120\" text-anchor=\"middle\">Matrice codée</text><path d=\"M275 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"308\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"120\" text-anchor=\"middle\">Plan réel</text><path d=\"M575 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"608\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"120\" text-anchor=\"middle\">Mesures</text><path d=\"M875 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"908\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"120\" text-anchor=\"middle\">Interprétation</text></svg><p>Vérifier les objectifs et les contraintes avant les expériences. Calculer ensuite les poids, puis examiner leur incertitude et leur portée.</p>",
      "pages": [
        40,
        41,
        42
      ],
      "source": "cours1.pdf, p. 40–42 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Onze facteurs : sélectionner la matrice à douze essais",
      "body": "<div class=\"eq\">\\[k=11\\Rightarrow p=12\\Rightarrow N=12\\]</div><p>Le cours choisit la ligne génératrice :</p><div class=\"eq\">\\[(+,+,-,+,+,+,-,-,-,+,-)\\]</div><div class=\"frag\"><p>Douze lignes et onze facteurs ; avec la constante, la matrice du modèle devient 12 × 12.</p></div>",
      "pages": [
        43,
        44
      ],
      "source": "cours1.pdf, p. 43–44 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Voir les permutations circulaires",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Essai</th><th>Onze signes de la matrice</th></tr></thead><tbody><tr><td>1</td><td>+  +  −  +  +  +  −  −  −  +  −</td></tr><tr><td>2</td><td>−  +  +  −  +  +  +  −  −  −  +</td></tr><tr><td>3</td><td>+  −  +  +  −  +  +  +  −  −  −</td></tr><tr><td>…</td><td>…</td></tr><tr><td>12</td><td>−  −  −  −  −  −  −  −  −  −  −</td></tr></tbody></table><p>Chaque ligne déplace les signes d’une position. La dernière ligne est entièrement au niveau −.</p><p class=\"takeaway\">Le tableau complet original est accessible par le lien de provenance en bas de la slide.</p>",
      "pages": [
        45
      ],
      "source": "cours1.pdf, p. 45 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Matrice d’expériences et matrice du modèle",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Objet</th><th>Lignes</th><th>Colonnes</th></tr></thead><tbody><tr><td>Matrice d’expériences</td><td>12 essais</td><td>11 facteurs codés</td></tr><tr><td>Matrice du modèle X</td><td>12 essais</td><td>1 constante + 11 facteurs</td></tr></tbody></table><div class=\"eq\">\\[y_i=b_0+\\sum_{j=1}^{11}b_jx_{ij}+\\varepsilon_i\\]</div><p>Le support appelle « matrice des effets » le tableau incluant la constante. Distinguer ces deux tableaux évite de perdre une inconnue.</p>",
      "pages": [
        46,
        47,
        48
      ],
      "source": "cours1.pdf, p. 46–48 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Du signe à la consigne de fabrication",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Première ligne</th><th>Code</th><th>Réglage naturel</th></tr></thead><tbody><tr><td>U₁</td><td>+</td><td>1800 °C</td></tr><tr><td>U₂</td><td>+</td><td>45 min</td></tr><tr><td>U₃</td><td>−</td><td>U₁ + 50 = 1850 °C</td></tr><tr><td>U₇</td><td>−</td><td>20 MPa</td></tr></tbody></table><p>Chaque signe devient une consigne avec unité ou une modalité. Le codage n’est pas la fiche opératoire.</p>",
      "pages": [
        49,
        50
      ],
      "source": "cours1.pdf, p. 49–50 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Une ligne complète du plan réel",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Essai 1 · thermique</th><th>U₁</th><th>U₂</th><th>U₃</th><th>U₄</th><th>U₅</th><th>U₆</th></tr></thead><tbody><tr><td>Réglages</td><td>1800</td><td>45</td><td>1850</td><td>15</td><td>30</td><td>30</td></tr></tbody></table><table class=\"annotated-matrix\"><thead><tr><th>Essai 1 · pression</th><th>U₇</th><th>U₈</th><th>U₉</th><th>U₁₀</th><th>U₁₁</th></tr></thead><tbody><tr><td>Réglages</td><td>20</td><td>Mp1</td><td>Rp1</td><td>1,0</td><td>0,1</td></tr></tbody></table><p>Unités : °C, min, °C/min ; MPa, modalités, MPa/s. Le second palier se calcule à partir du premier, ligne par ligne.</p>",
      "pages": [
        51
      ],
      "source": "cours1.pdf, p. 51 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Faire les essais et conserver les trois réponses",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Essai</th><th>Densité Y₁ (%)</th><th>Porosité Y₂ (%)</th><th>Flexion Y₃</th></tr></thead><tbody><tr><td>1</td><td>91,2</td><td>1,79</td><td>845</td></tr><tr><td>2</td><td>92,7</td><td>0,03</td><td>1022</td></tr><tr><td>3</td><td>99,2</td><td>0,23</td><td>1067</td></tr><tr><td>4</td><td>90,6</td><td>1,49</td><td>878</td></tr><tr><td>5</td><td>80,3</td><td>3,63</td><td>715</td></tr><tr><td>6</td><td>90,6</td><td>1,75</td><td>911</td></tr></tbody></table><p>Six premières lignes des données originales ; les six autres suivent. Aucune réponse n’est fabriquée par le modèle.</p>",
      "pages": [
        52,
        53,
        54
      ],
      "source": "cours1.pdf, p. 52–54 · Michelle Sergent, AMU"
    },
    {
      "chapter": "frittage",
      "title": "Les six autres observations",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Essai</th><th>Densité Y₁ (%)</th><th>Porosité Y₂ (%)</th><th>Flexion Y₃</th></tr></thead><tbody><tr><td>7</td><td>96,9</td><td>2,21</td><td>1020</td></tr><tr><td>8</td><td>92,2</td><td>1,09</td><td>891</td></tr><tr><td>9</td><td>99,1</td><td>0,47</td><td>1076</td></tr><tr><td>10</td><td>77,3</td><td>4,13</td><td>774</td></tr><tr><td>11</td><td>92,7</td><td>0,09</td><td>987</td></tr><tr><td>12</td><td>77,4</td><td>0,49</td><td>640</td></tr></tbody></table><p class=\"takeaway\">Les mêmes douze conditions produisent trois vecteurs de réponses, donc trois interprétations.</p>",
      "pages": [
        53,
        54
      ],
      "source": "cours1.pdf, p. 53–54 · Michelle Sergent, AMU"
    },
    {
      "chapter": "contrastes",
      "title": "Commencer par regarder les données",
      "body": "<figure class=\"original-figure\"><img src=\"figures/INTRO_d56_image25.png\" alt=\"Distribution des douze porosités\"><figcaption>Distribution des douze porosités · Figure originale : Michelle Sergent, AMU.</figcaption></figure><p>Porosité : moyenne 1,45 %, minimum 0,03 %, maximum 4,13 %. La dispersion entre conditions contient des effets possibles ; ce n’est pas une mesure pure du bruit.</p>",
      "pages": [
        55,
        56
      ],
      "source": "cours1.pdf, p. 55–56 · Michelle Sergent, AMU"
    },
    {
      "chapter": "contrastes",
      "title": "Ajouter la constante, puis associer X et y",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Une ligne i de X</th><th>Observation correspondante</th></tr></thead><tbody><tr><td>1 ; xᵢ₁ ; … ; xᵢ₁₁</td><td>yᵢ</td></tr></tbody></table><div class=\"eq\">\\[\\mathbf y=X\\mathbf b+\\boldsymbol\\varepsilon\\]</div><p>Pour la porosité, y reprend les douze mesures dans l’ordre exact des lignes de X.</p><p class=\"takeaway\">Le tableau est saturé : douze essais, douze coefficients, aucun degré de liberté résiduel.</p>",
      "pages": [
        57
      ],
      "source": "cours1.pdf, p. 57 · Michelle Sergent, AMU"
    },
    {
      "chapter": "contrastes",
      "title": "Le contraste : une colonne signée et les mesures",
      "body": "<div class=\"eq\">\\[\\hat b_j=\\frac1{12}\\sum_{i=1}^{12}x_{ij}y_i\\]</div><p>Multiplier chaque réponse par +1 ou −1 selon la colonne du facteur ; sommer ; diviser par douze.</p><div class=\"frag\"><div class=\"eq\">\\[\\hat b_0=\\frac1{12}\\sum_i y_i=1{,}45\\]</div></div><p>La constante représente ici la moyenne des porosités.</p>",
      "pages": [
        57,
        58
      ],
      "source": "cours1.pdf, p. 57–58 · Michelle Sergent, AMU"
    },
    {
      "chapter": "contrastes",
      "title": "Calcul complet : le poids de la pression",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Pression</th><th>Six porosités (%)</th><th>Somme</th></tr></thead><tbody><tr><td>Niveau +</td><td>0,03 ; 0,23 ; 1,49 ; 1,75 ; 2,21 ; 0,47</td><td>6,18</td></tr><tr><td>Niveau −</td><td>1,79 ; 3,63 ; 1,09 ; 4,13 ; 0,09 ; 0,49</td><td>11,22</td></tr></tbody></table><div class=\"frag\"><div class=\"eq\">\\[b_7=\\frac{6,18-11,22}{12}=-0{,}42\\]</div></div><p class=\"takeaway\">De 20 à 40 MPa : différence moyenne 2b₇ = −0,84 point de porosité.</p>",
      "pages": [
        57,
        58
      ],
      "source": "cours1.pdf, p. 57–58 · Michelle Sergent, AMU"
    },
    {
      "chapter": "contrastes",
      "title": "Les onze poids de la porosité",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Facteur</th><th>Poids</th><th>Facteur</th><th>Poids</th></tr></thead><tbody><tr><td>b1</td><td>-0,47</td><td>b7</td><td>-0,42</td></tr><tr><td>b2</td><td>0,05</td><td>b8</td><td>0,68</td></tr><tr><td>b3</td><td>-0,02</td><td>b9</td><td>-0,03</td></tr><tr><td>b4</td><td>0,13</td><td>b10</td><td>0,88</td></tr><tr><td>b5</td><td>0,09</td><td>b11</td><td>0,10</td></tr><tr><td>b6</td><td>-0,03</td><td>b₀</td><td>1,45</td></tr></tbody></table><p>Poids négatif : passer au niveau + réduit la porosité moyenne, sous les hypothèses de criblage. Les valeurs retrouvent celles du support.</p>",
      "pages": [
        58
      ],
      "source": "cours1.pdf, p. 58 · Michelle Sergent, AMU"
    },
    {
      "chapter": "contrastes",
      "title": "Le graphique ne donne pas encore la significativité",
      "body": "<figure class=\"original-figure\"><img src=\"figures/INTRO_d60_image28.png\" alt=\"Poids des facteurs — porosité\"><figcaption>Poids des facteurs — porosité · Figure originale : Michelle Sergent, AMU.</figcaption></figure><p>Les amplitudes suggèrent une hiérarchie. Il faut encore une échelle d’incertitude pour distinguer variation plausible sous bruit et facteur probablement actif.</p>",
      "pages": [
        59,
        60
      ],
      "source": "cours1.pdf, p. 59–60 · Michelle Sergent, AMU"
    },
    {
      "chapter": "signification",
      "title": "D’où vient l’estimation du bruit ?",
      "body": "<p>Le plan saturé ne permet pas d’estimer le bruit à partir de ses résidus. Le cours utilise des mesures répétées à condition identique.</p><div class=\"eq\">\\[s^2=\\frac{\\sum_{i=1}^r(y_i-\\bar y)^2}{r-1},\\qquad \\nu=r-1\\]</div><p>Une variance estimée n’est pas exactement connue. Son usage pour le plan suppose notamment une variance commune crédible.</p>",
      "pages": [
        61
      ],
      "source": "cours1.pdf, p. 61 · Michelle Sergent, AMU"
    },
    {
      "chapter": "signification",
      "title": "De la variance des mesures à celle d’un poids",
      "body": "<div class=\"eq\">\\[s^2=0{,}06,\\qquad \\nu=3\\]</div><div class=\"frag\"><div class=\"eq\">\\[\\widehat{\\operatorname{Var}}(\\hat b_j)=\\frac{0{,}06}{12}=0{,}005\\]</div></div><div class=\"frag\"><div class=\"eq\">\\[\\operatorname{SE}(\\hat b_j)=\\sqrt{0{,}005}=0{,}07071\\]</div></div><p>La variance est en points de pourcentage au carré ; l’écart-type du poids est en points de pourcentage.</p>",
      "pages": [
        62,
        63
      ],
      "source": "cours1.pdf, p. 62–63 · Michelle Sergent, AMU"
    },
    {
      "chapter": "signification",
      "title": "Pourquoi un quantile de Student ?",
      "body": "<div class=\"eq\">\\[T_j=\\frac{\\hat b_j-0}{s/\\sqrt{12}}\\]</div><p>Sous H₀ : βⱼ = 0, erreurs normales indépendantes de variance commune et estimation s² indépendante, Tⱼ suit une loi de Student à ν degrés de liberté.</p><p class=\"takeaway\">Si σ² était vraiment connue, on utiliserait une loi normale. Ici la variance est estimée avec ν = 3.</p>",
      "pages": [
        61,
        62,
        63,
        64
      ],
      "source": "cours1.pdf, p. 61–64 · Michelle Sergent, AMU"
    },
    {
      "chapter": "signification",
      "title": "Lire le seuil bilatéral sans ambiguïté",
      "body": "<div class=\"eq\">\\[\\alpha=0{,}05,\\quad \\nu=3,\\quad t_{1-\\alpha/2;3}=t_{0{,}975;3}=3{,}1824\\]</div><p>La table originale donne les probabilités bilatérales : colonne 0,05 et ligne 3.</p><div class=\"frag\"><div class=\"eq\">\\[L=3{,}1824\\times0{,}07071\\simeq0{,}225\\]</div></div><p>Le support écrit parfois t₀,₉₅;₃. La valeur 3,18 correspond au quantile cumulé 0,975.</p>",
      "pages": [
        64,
        65
      ],
      "source": "cours1.pdf, p. 64–65 · Michelle Sergent, AMU"
    },
    {
      "chapter": "signification",
      "title": "Deux lectures du même test",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Lecture</th><th>Règle au seuil individuel de 5 %</th></tr></thead><tbody><tr><td>Comparer à zéro</td><td>|b̂ⱼ| > 0,225</td></tr><tr><td>Intervalle du coefficient</td><td>b̂ⱼ ± 0,225 exclut zéro</td></tr></tbody></table><div class=\"frag\"><p>Pour b₇ = −0,42 : intervalle ≈ [−0,645 ; −0,195]. La pression est un candidat actif pour la porosité.</p></div><p>Les lignes ±0,225 du graphique sont des limites autour de zéro, pas les intervalles de chaque coefficient.</p>",
      "pages": [
        65,
        66
      ],
      "source": "cours1.pdf, p. 65–66 · Michelle Sergent, AMU"
    },
    {
      "chapter": "signification",
      "title": "Porosité : quatre candidats ressortent",
      "body": "<figure class=\"original-figure\"><img src=\"figures/INTRO_d66_image29.png\" alt=\"Limites de signification — porosité\"><figcaption>Limites de signification — porosité · Figure originale : Michelle Sergent, AMU.</figcaption></figure><p>Premier palier (1), pression (7), mise en pression (8) et montée en pression (10).</p><p class=\"takeaway\">Non significatif ne signifie pas identique ou sans effet. Onze tests individuels ne donnent pas un risque global de 5 %.</p>",
      "pages": [
        66
      ],
      "source": "cours1.pdf, p. 66 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Effets totaux : revenir aux moyennes de niveaux",
      "body": "<figure class=\"original-figure\"><img src=\"figures/INTRO_d67_image30.png\" alt=\"Effets totaux — porosité\"><figcaption>Effets totaux — porosité · Figure originale : Michelle Sergent, AMU.</figcaption></figure><div class=\"eq\">\\[\\bar y_{j-}=b_0-b_j,\\qquad\\bar y_{j+}=b_0+b_j\\]</div><p>Le plan équilibré rend cette relation exacte pour les moyennes observées. Lire le sens de variation avant de recommander un niveau.</p>",
      "pages": [
        67
      ],
      "source": "cours1.pdf, p. 67 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Pareto : classer les poids par contribution quadratique",
      "body": "<div class=\"eq\">\\[p_j=100\\,\\frac{b_j^2}{\\sum_{\\ell=1}^{11}b_\\ell^2}\\]</div><p>On exclut la constante. Le carré retire le signe ; l’ordre compare les amplitudes dans les niveaux choisis.</p><div class=\"frag\"><p class=\"takeaway\">Ces parts décrivent les contrastes du plan. Elles ne sont pas des probabilités d’activité ni, sans hypothèses, des parts causales.</p></div>",
      "pages": [
        68
      ],
      "source": "cours1.pdf, p. 68 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Pareto de porosité : calculer avant de classer",
      "body": "<div class=\"eq\">\\[\\sum_{j=1}^{11}b_j^2=1{,}6738\\]</div><table class=\"annotated-matrix\"><thead><tr><th>Facteur</th><th>bⱼ</th><th>bⱼ²</th><th>Part (%)</th></tr></thead><tbody><tr><td>10</td><td>0,88</td><td>0,7744</td><td>46,27</td></tr><tr><td>8</td><td>0,68</td><td>0,4624</td><td>27,63</td></tr><tr><td>1</td><td>−0,47</td><td>0,2209</td><td>13,20</td></tr><tr><td>7</td><td>−0,42</td><td>0,1764</td><td>10,54</td></tr></tbody></table><p>Les écarts d’un centième avec le tableau historique viennent des arrondis ou troncatures.</p>",
      "pages": [
        69
      ],
      "source": "cours1.pdf, p. 69 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Lire le Pareto original de porosité",
      "body": "<div class=\"v3-columns\"><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d70_image33.png\" alt=\"Pareto — porosité\"><figcaption>Pareto — porosité · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d70_image34.png\" alt=\"Pareto cumulé — porosité\"><figcaption>Pareto cumulé — porosité · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div></div><p>Les facteurs 10 et 8 représentent ensemble environ 73,9 % de la somme des carrés des poids. Revenir au signe pour choisir un niveau.</p>",
      "pages": [
        70
      ],
      "source": "cours1.pdf, p. 70 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Droite de Henry : le raisonnement sous H₀",
      "body": "<p>Si la plupart des poids vrais sont nuls, beaucoup de poids estimés reflètent surtout le bruit.</p><svg class=\"science-svg\" viewBox=\"0 0 1200 230\" role=\"img\" aria-label=\"Poids ordonnés puis Quantiles normaux puis Alignement puis Écarts\"><rect x=\"8\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"120\" text-anchor=\"middle\">Poids ordonnés</text><path d=\"M275 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"308\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"120\" text-anchor=\"middle\">Quantiles normaux</text><path d=\"M575 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"608\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"120\" text-anchor=\"middle\">Alignement</text><path d=\"M875 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"908\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"120\" text-anchor=\"middle\">Écarts</text></svg><p>Comparer les coefficients ordonnés à des quantiles normaux. Les grands écarts à l’alignement suggèrent des facteurs actifs.</p><p class=\"takeaway\">Diagnostic graphique sous hypothèse de parcimonie, pas test exact automatique.</p>",
      "pages": [
        71
      ],
      "source": "cours1.pdf, p. 71 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Normal et half-normal : deux points de vue",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Normal plot</th><th>Half-normal plot</th></tr></thead><tbody><tr><td>Coefficients signés ordonnés</td><td>Valeurs absolues ordonnées</td></tr><tr><td>Sens et extrêmes</td><td>Amplitudes</td></tr><tr><td>Quantiles de loi normale</td><td>Quantiles de la valeur absolue d’une normale</td></tr></tbody></table><p>La droite des effets inactifs est estimée visuellement. Peu de coefficients, des interactions ou beaucoup de facteurs actifs rendent la lecture fragile.</p>",
      "pages": [
        71,
        72
      ],
      "source": "cours1.pdf, p. 71–72 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Porosité : retrouver les candidats sur les figures originales",
      "body": "<div class=\"v3-columns\"><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d72_image35.png\" alt=\"Normal plot — porosité\"><figcaption>Normal plot — porosité · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d72_image36.png\" alt=\"Half-normal plot — porosité\"><figcaption>Half-normal plot — porosité · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div></div><p>Les candidats 1, 7, 8 et 10 se détachent. L’accord entre outils renforce une piste ; il ne valide pas toutes les hypothèses.</p>",
      "pages": [
        72
      ],
      "source": "cours1.pdf, p. 72 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "La même matrice, une nouvelle réponse : densité",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Poids de densité</th><th>Valeur</th><th>Lecture</th></tr></thead><tbody><tr><td>b₀</td><td>90,02</td><td>Densité moyenne (%)</td></tr><tr><td>b₁</td><td>5,20</td><td>Premier palier</td></tr><tr><td>b₇</td><td>4,83</td><td>Pression</td></tr><tr><td>b₆</td><td>1,02</td><td>Descente thermique</td></tr></tbody></table><p>Recalculer les coefficients sur les densités, avec les mêmes colonnes X. Le bruit de porosité ne fournit pas automatiquement celui de densité.</p>",
      "pages": [
        73,
        74
      ],
      "source": "cours1.pdf, p. 73–74 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Densité : ce que montrent les figures historiques",
      "body": "<div class=\"v3-columns\"><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d75_image37.png\" alt=\"Poids — densité\"><figcaption>Poids — densité · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d76_image38.png\" alt=\"Moyennes de niveaux — densité\"><figcaption>Moyennes de niveaux — densité · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div></div><p>Température du premier palier et pression élevées sont des pistes pour accroître la densité. Les limites historiques demandent une estimation de bruit propre à cette réponse.</p>",
      "pages": [
        75,
        76
      ],
      "source": "cours1.pdf, p. 75–76 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Densité : vérifier le diagnostic normal/half-normal",
      "body": "<div class=\"v3-columns\"><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d77_image39.png\" alt=\"Normal plot — densité\"><figcaption>Normal plot — densité · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d77_image40.png\" alt=\"Half-normal plot — densité\"><figcaption>Half-normal plot — densité · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div></div><p>Les facteurs 1 et 7 ressortent, en cohérence avec la hiérarchie des poids dans ce domaine.</p>",
      "pages": [
        77
      ],
      "source": "cours1.pdf, p. 77 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Densité : Pareto et arrondis",
      "body": "<div class=\"v3-columns\"><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d79_image41.png\" alt=\"Pareto — densité\"><figcaption>Pareto — densité · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d79_image42.png\" alt=\"Pareto cumulé — densité\"><figcaption>Pareto cumulé — densité · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div></div><p>Premier palier : environ 49,9 % ; pression : environ 43,1 %. Les deux dominent les contrastes. Les tableaux d’origine utilisent des poids arrondis.</p>",
      "pages": [
        78,
        79
      ],
      "source": "cours1.pdf, p. 78–79 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Trois réponses : comparer les combinaisons estimées",
      "body": "<table class=\"annotated-matrix\"><thead><tr><th>Facteur</th><th>Densité</th><th>Porosité</th><th>Flexion</th></tr></thead><tbody><tr><td>b₀</td><td>90,02</td><td>1,45</td><td>902,2</td></tr><tr><td>b₁</td><td>5,20</td><td>−0,47</td><td>78,8</td></tr><tr><td>b₇</td><td>4,83</td><td>−0,42</td><td>93,5</td></tr><tr><td>b₈</td><td>−0,60</td><td>0,68</td><td>−11,3</td></tr><tr><td>b₁₀</td><td>−0,78</td><td>0,88</td><td>−12,0</td></tr></tbody></table><p class=\"takeaway\">93,5 sur la flexion ne se compare pas directement à 0,42 point de porosité : unités et objectifs diffèrent.</p>",
      "pages": [
        80
      ],
      "source": "cours1.pdf, p. 80 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Flexion : lire les poids et le diagnostic graphique",
      "body": "<div class=\"v3-columns\"><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d82_image43.png\" alt=\"Poids — flexion\"><figcaption>Poids — flexion · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d83_image45.png\" alt=\"Half-normal plot — flexion\"><figcaption>Half-normal plot — flexion · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div></div><p>Pression et premier palier dominent ; second palier et descente en pression méritent aussi attention. Ce sont des candidats, pas une garantie d’optimalité.</p>",
      "pages": [
        81,
        82,
        83
      ],
      "source": "cours1.pdf, p. 81–83 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Flexion : conserver la hiérarchie et le signe",
      "body": "<div class=\"v3-columns\"><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d85_image46.png\" alt=\"Pareto — flexion\"><figcaption>Pareto — flexion · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div><div><figure class=\"original-figure\"><img src=\"figures/INTRO_d85_image47.png\" alt=\"Pareto cumulé — flexion\"><figcaption>Pareto cumulé — flexion · Figure originale : Michelle Sergent, AMU.</figcaption></figure></div></div><p>Pression ≈ 48,3 % ; premier palier ≈ 34,4 % ; second palier ≈ 8,0 % ; descente en pression ≈ 5,7 %.</p><p>Les poids 7 et 1 sont positifs : les niveaux hauts sont des candidats pour accroître la résistance.</p>",
      "pages": [
        84,
        85
      ],
      "source": "cours1.pdf, p. 84–85 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Des poids à une décision de procédé",
      "body": "<figure class=\"original-figure\"><img src=\"figures/INTRO_d86_image48.png\" alt=\"Effets totaux — flexion\"><figcaption>Effets totaux — flexion · Figure originale : Michelle Sergent, AMU.</figcaption></figure><p>Premier palier et pression vont dans le sens souhaité pour les trois réponses : densité et flexion augmentent, porosité diminue.</p><p class=\"takeaway\">Retenir ces pistes pour une étude de confirmation. Le criblage ne donne pas encore un optimum validé.</p>",
      "pages": [
        86
      ],
      "source": "cours1.pdf, p. 86 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Ce que ces poids ne permettent pas de séparer",
      "body": "<p>Douze essais ne peuvent pas séparer onze effets principaux et toutes leurs interactions.</p><div class=\"eq\">\\[\\text{12 observations}\\;\\neq\\;\\text{tous les effets identifiables}\\]</div><p>Les poids peuvent estimer des combinaisons d’effets. Les lire comme des effets principaux suppose notamment des interactions négligeables.</p><p class=\"takeaway\">Les conclusions valent d’abord pour les niveaux testés. Interpoler ou extrapoler demande un modèle supplémentaire validé.</p>",
      "pages": [
        80,
        81,
        82,
        83,
        84,
        85,
        86,
        87
      ],
      "source": "cours1.pdf, p. 80–87 · Michelle Sergent, AMU"
    },
    {
      "chapter": "interpretation",
      "title": "Conclure le cours 1 : une information adaptée à la décision",
      "body": "<svg class=\"science-svg\" viewBox=\"0 0 1200 230\" role=\"img\" aria-label=\"Objectifs et domaine puis Essais organisés puis Poids et incertitude puis Confirmation\"><rect x=\"8\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"140\" y=\"120\" text-anchor=\"middle\">Objectifs et domaine</text><path d=\"M275 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"308\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"440\" y=\"120\" text-anchor=\"middle\">Essais organisés</text><path d=\"M575 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"608\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"740\" y=\"120\" text-anchor=\"middle\">Poids et incertitude</text><path d=\"M875 110h24l-8-7m8 7l-8 7\" fill=\"none\" stroke=\"#1f4e79\" stroke-width=\"3\"/><rect x=\"908\" y=\"60\" width=\"265\" height=\"100\" rx=\"6\" fill=\"#edf3f7\" stroke=\"#1f4e79\"/><text x=\"1040\" y=\"120\" text-anchor=\"middle\">Confirmation</text></svg><table class=\"annotated-matrix\"><thead><tr><th>À retenir</th><th>Limite à conserver</th></tr></thead><tbody><tr><td>Disposition des essais</td><td>Le budget et le bruit comptent aussi.</td></tr><tr><td>Poids et variance</td><td>Amplitude et significativité diffèrent.</td></tr><tr><td>Hadamard et parcimonie</td><td>Orthogonal ne signifie pas sans interaction.</td></tr><tr><td>Pareto et Henry</td><td>Diagnostics ; conclusions à confirmer.</td></tr></tbody></table>",
      "pages": [
        87
      ],
      "source": "cours1.pdf, p. 87 · Michelle Sergent, AMU"
    }
  ]
};
