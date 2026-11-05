/* =========================================================================
   BASE DE DONNÉES CLINIQUE DES 14 TEXTES (CE2 à 3ème)
   Chaque texte comporte :
   - Longueur calibrée (14 à 20 lignes)
   - Thématique moderne accrocheuse
   - Données psycholinguistiques (Manulex, LME, Flesch)
   - 5 Questions orales standardisées avec attendu clinique et étayage TDL
   ========================================================================= */
const DATABASE = {
  "ce2": [
    {
      "id": "ce2_t1",
      "theme": "Pat' Patrouille",
      "themeTag": "Pat' Patrouille & Drone",
      "title": "Pat' Patrouille en mission drone",
      "lines": [
        "Le soleil se lève sur la Grande Vallée et tout semble très calme.",
        "Soudain, la sonnerie du quartier général retentit dans la tour.",
        "Ryder appelle les chiots pour une mission d'urgence dans la forêt.",
        "Un petit faon a perdu sa maman près du ruisseau aux cailloux glissants.",
        "Pour cette opération délicate, Ryder active son tout nouveau drone jaune.",
        "L'appareil volant monte haut dans le ciel bleu sans faire de bruit.",
        "Sur l'écran de sa tablette, Ryder observe attentivement les cimes des arbres.",
        "Chase monte immédiatement dans sa voiture de police avec ses cônes de signalisation.",
        "Stella déploie ses ailes roses pour survoler la zone boisée.",
        "Grâce à la caméra du drone, Ryder repère une tache blanche sous les fougères.",
        "Le petit faon tremble doucement, effrayé par le bruit de l'eau vive.",
        "Chase pose rapidement une barrière pour sécuriser le passage glissant.",
        "Stella descend en douceur pour rassurer l'animal avec une voix très calme.",
        "Quelques minutes plus tard, la maman biche sort enfin des fourrés épais.",
        "Le faon court vers sa mère et frotte tendrement son museau contre elle.",
        "Ryder remercie la patrouille pour ce sauvetage rapide et sans danger."
      ],
      "psycho": {
        "flesch": 88,
        "fleschDesc": "Très facile (Optimal TDL CE2)",
        "lme": "8.2 mots / phrase",
        "manulex": "G1-G2 > 96%",
        "manulexDetails": "96,4% du lexique relève des échelons Manulex de très haute fréquence (G1-G2). Mots concrets d'action (monter, appeler, trembler, déployer).",
        "syntaxDetails": "Structure sujet-verbe-complément prépondérante. Pas de passif réversible ambigu. Connecteurs temporels explicites (Soudain, Pour cette opération, Quelques minutes plus tard).",
        "anaphoraDetails": "Repérage direct des protagonistes : 'le drone jaune' -> 'l'appareil volant' ; 'le petit faon' -> 'l'animal'. Les pronoms sujets restent collés à leurs antécédents."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quel nouvel appareil Ryder utilise-t-il pour retrouver le petit faon ?",
          "attendu": "Ryder utilise un drone jaune (qui s'envole dans le ciel et filme avec sa caméra).",
          "scaffold": "Amorce : 'Regarde la ligne 5 : quel objet volant jaune Ryder fait-il décoller ?'"
        },
        {
          "type": "Q2. Inférence causale / Théorie de l'esprit",
          "q": "Pourquoi le petit faon tremble-t-il quand il est seul sous les fougères ?",
          "attendu": "Il a peur parce qu'il a perdu sa maman et que le bruit de l'eau l'effraie.",
          "scaffold": "Relance : 'Est-ce qu'il est rassuré ou effrayé ? De qui est-il séparé ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte dit que la maman biche sort des 'fourrés'. Que sont des fourrés ?",
          "attendu": "Des buissons épais, des branches denses de la forêt où l'on peut se cacher.",
          "scaffold": "Indice : 'Dans les bois, quand il y a plein de petites branches et d'arbustes touffus, on appelle cela des...'"
        },
        {
          "type": "Q4. Inférence d'état émotionnel",
          "q": "Comment se sent le faon tout à la fin quand il frotte son museau contre sa mère ?",
          "attendu": "Il est soulagé, heureux, rassuré et en sécurité.",
          "scaffold": "Amorce : 'À la fin, quand il retrouve sa maman, que ressent-il dans son cœur ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte avec tes propres mots comment Ryder et ses chiots ont réussi cette mission.",
          "attendu": "L'enfant ordonne les faits : l'alerte -> le vol du drone -> le repérage du faon -> l'intervention de Stella et Chase -> les retrouvailles.",
          "scaffold": "Structure en 3 temps : 'D'abord Ryder utilise le drone, ensuite Stella et Chase arrivent, et à la fin...'"
        }
      ]
    },
    {
      "id": "ce2_t2",
      "theme": "Pokémon",
      "themeTag": "Pokémon Mystère",
      "title": "Pokémon : la découverte d'un œuf mystère",
      "lines": [
        "Ce matin, Sacha et son fidèle Pikachu se promènent dans le parc fleuri.",
        "L'herbe est encore mouillée par la rosée fraîche du début du jour.",
        "Pikachu s'arrête brusquement et dresse ses oreilles pointues vers un buisson.",
        "Le Pokémon jaune pousse un petit cri aigu pour attirer son dresseur.",
        "Au fond d'un nid d'herbes tressées repose un œuf ovale très surprenant.",
        "Sa coquille est blanche avec de jolis triangles bleus et rouges vifs.",
        "Sacha s'agenouille doucement pour ne pas effrayer ce fragile trésor.",
        "Soudain, une fine fissure apparaît sur le sommet de la coquille.",
        "Un léger craquement retentit et l'œuf commence à se balancer de gauche à droite.",
        "Pikachu retient son souffle et s'approche sans faire le moindre bruit.",
        "Un petit bout de coquille tombe sur la mousse verte du nid.",
        "Une minuscule tête ronde avec une couronne de petites pointes émerge lentement.",
        "C'est un bébé Togepi qui ouvre pour la toute première fois ses yeux noirs.",
        "Le petit Pokémon sourit et tend ses bras vers Sacha avec tendresse.",
        "Sacha prend le nouveau-né dans ses bras pour lui apporter de la chaleur.",
        "Une merveilleuse amitié commence sous la lumière dorée du matin."
      ],
      "psycho": {
        "flesch": 86,
        "fleschDesc": "Très facile (CE2 TDL)",
        "lme": "8.6 mots / phrase",
        "manulex": "G1-G2 > 95%",
        "manulexDetails": "Vocabulaire courant et imagé (fissure, fragile, se balancer, émerge, chaleur). Faible taux de mots abstraits.",
        "syntaxDetails": "Propositions juxtaposées et coordonnées. Absence de relatives complexes avec prépositions. Verbes au présent descriptif.",
        "anaphoraDetails": "Continuité thématique assurée : 'un œuf ovale' -> 'ce fragile trésor' -> 'le nouveau-né' -> 'un bébé Togepi'."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quelles couleurs décorent la coquille de l'œuf trouvé par Pikachu ?",
          "attendu": "La coquille est blanche avec des triangles bleus et rouges.",
          "scaffold": "Indice : 'Regarde la ligne 6 qui décrit les motifs sur l'œuf.'"
        },
        {
          "type": "Q2. Inférence causale / Intention",
          "q": "Pourquoi Sacha et Pikachu s'approchent-ils sans faire le moindre bruit ?",
          "attendu": "Pour ne pas faire peur au bébé qui va naître et ne pas le déranger pendant qu'il casse sa coquille.",
          "scaffold": "Amorce : 'Si Sacha crie fort, qu'est-ce que le bébé Pokémon va ressentir ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte dit que la tête du bébé 'émerge' de la coquille. Que veut dire 'émerger' ?",
          "attendu": "Sortir, apparaître de l'intérieur, pointer le bout de son nez.",
          "scaffold": "Mise en situation : 'Quand tu sors la tête hors de l'eau à la piscine, tu fais quoi ?'"
        },
        {
          "type": "Q4. Inférence d'état émotionnel",
          "q": "Que pense et ressent Togepi dès qu'il aperçoit Sacha ?",
          "attendu": "Il se sent en sécurité, il le prend sans doute pour son protecteur et lui sourit en lui tendant les bras.",
          "scaffold": "Indice : 'Il sourit et tend ses bras : est-il content ou fâché ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte la naissance du petit Togepi du début jusqu'à la fin.",
          "attendu": "L'enfant décrit l'œuf trouvé dans le nid, le craquement de la coquille, la tête qui sort et le câlin avec Sacha.",
          "scaffold": "Relance : 'Qu'a vu Pikachu d'abord, que s'est-il passé avec la coquille, et qui est sorti ?'"
        }
      ]
    },
    {
      "id": "ce2_t3",
      "theme": "Mario Kart",
      "themeTag": "Mario Kart & Entraide",
      "title": "Mario Kart : la carapace bleue surprise",
      "lines": [
        "Léo tient fermement sa manette rouge devant le grand téléviseur du salon.",
        "Sur l'écran brillant, son petit kart rouge roule à toute vitesse sur la piste.",
        "C'est le dernier virage dangereux du circuit du Château de Bowser.",
        "Sa petite sœur Mila conduit un kart rose juste devant lui en première position.",
        "Soudain, un sifflement aigu retentit dans les haut-parleurs de la console.",
        "Une carapace bleue aux ailes piquantes traverse le ciel sombre à vive allure.",
        "L'objet ailé menace directement le véhicule en tête de la course.",
        "Mila pousse un cri d'angoisse car elle craint de perdre sa belle victoire.",
        "Sans hésiter un seul instant, Léo appuie sur son bouton d'accélération maximale.",
        "Il dépasse sa sœur d'un coup de volant précis et courageux.",
        "L'explosion violette retentit dans un nuage d'étincelles et renverse le kart de Léo.",
        "Le kart rose de Mila reste indemne et franchit la ligne d'arrivée en tête.",
        "La petite fille saute de joie sur le canapé en applaudissant de bonheur.",
        "Léo redémarre son moteur en souriant avec fierté pour son sacrifice fraternel.",
        "Le grand frère a préféré le bonheur de sa sœur à sa propre médaille.",
        "Une vraie complicité reste plus forte que n'importe quelle coupe dorée."
      ],
      "psycho": {
        "flesch": 87,
        "fleschDesc": "Très facile (Optimal TDL CE2)",
        "lme": "8.4 mots / phrase",
        "manulex": "G1-G2 > 96%",
        "manulexDetails": "96,2% du lexique relève de la très haute fréquence d'usage (G1-G2). Mots concrets et familiers d'action (manette, volant, canapé, moteur, médaille).",
        "syntaxDetails": "Phrases simples canoniques (SVO). Connecteurs temporels explicites (Soudain, Sans hésiter, D'un coup). Aucune subordonnée enchâssée complexe.",
        "anaphoraDetails": "Désignations explicites évitant la surcharge de mémoire de travail : Léo (le grand frère, il) vs Mila (la petite sœur, la petite fille, elle). Carapace bleue (l'objet ailé)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Qui se trouve en première position de la course juste avant le dernier virage ?",
          "attendu": "C'est Mila, la petite sœur de Léo, dans son kart rose.",
          "scaffold": "Indice : 'Regarde la ligne 4 : qui conduit le kart rose juste devant Léo ?'"
        },
        {
          "type": "Q2. Inférence causale / Intention",
          "q": "Pourquoi Léo accélère-t-il pour dépasser Mila quand la carapace bleue arrive ?",
          "attendu": "Pour recevoir l'explosion à la place de sa sœur et lui permettre de gagner la course.",
          "scaffold": "Amorce : 'Qui la carapace bleue vise-t-elle toujours ? Que voulait Léo pour sa petite sœur ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte dit que le kart de Mila reste 'indemne'. Que veut dire 'indemne' ?",
          "attendu": "Intact, sans dégât, sans dommage, non abîmé par l'explosion.",
          "scaffold": "Indice : 'Le kart a-t-il été cassé ou est-il resté intact sans aucun problème ?'"
        },
        {
          "type": "Q4. Inférence d'état émotionnel",
          "q": "Que ressent Léo à la fin alors qu'il n'a pas gagné la médaille d'or ?",
          "attendu": "Il est heureux, fier de lui et satisfait d'avoir fait plaisir à sa sœur.",
          "scaffold": "Relance : 'Ligne 14 : il sourit avec fierté. Est-il triste d'avoir perdu ou content d'avoir aidé Mila ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte avec tes propres mots comment s'est terminée cette partie de jeu.",
          "attendu": "L'enfant restitue la menace de la carapace -> le dépassement volontaire de Léo -> l'explosion encaissée -> la victoire de Mila.",
          "scaffold": "Structure en 3 étapes : 'D'abord quel objet est arrivé, qu'a fait Léo pour protéger sa sœur, et qui a gagné ?'"
        }
      ]
    },
    {
      "id": "ce2_t4",
      "theme": "Animal Crossing",
      "themeTag": "Animal Crossing & Trésor",
      "title": "Animal Crossing : le secret de l'île aux fossiles",
      "lines": [
        "Le soleil d'été brille doucement sur l'île déserte de Lili.",
        "La fillette marche le long du rivage en écoutant le doux clapotis des vagues.",
        "Dans son sac à dos virtuel, elle transporte une petite pelle solide et son filet.",
        "Près d'un grand palmier chargé de noix de coco, une drôle d'étoile marque le sol.",
        "C'est une fissure en forme de croix dessinée dans le sable fin.",
        "Lili sort son outil et commence à creuser avec une grande attention.",
        "Le métal de sa pelle heurte soudain un objet très dur et mystérieux.",
        "La jeune joueuse dégage la terre avec ses mains pour ne rien abîmer.",
        "Elle extrait délicatement une gigantesque empreinte fossilisée dans la pierre grise.",
        "C'est l'empreinte de patte d'un grand dinosaure ayant vécu il y a des millions d'années.",
        "Lili court aussitôt vers le grand bâtiment blanc situé au centre de la colline.",
        "Le conservateur du musée, le vieux hibou Thibou, ouvre de grands yeux émerveillés.",
        "L'érudit nocturne pousse un cri d'admiration devant cette trouvaille exceptionnelle.",
        "Ce fossile rare était la dernière pièce manquante pour compléter la galerie préhistorique.",
        "Thibou remet à Lili un diplôme officiel d'exploratrice pour la remercier chaleureusement.",
        "La fillette admire fièrement sa découverte exposée sous les projecteurs du musée."
      ],
      "psycho": {
        "flesch": 86,
        "fleschDesc": "Très facile (Optimal TDL CE2)",
        "lme": "8.5 mots / phrase",
        "manulex": "G1-G2 > 95%",
        "manulexDetails": "95,6% en zone de haute disponibilité. Vocabulaire naturel et spatial (rivage, pelle, sable, empreinte, hibou, musée).",
        "syntaxDetails": "Juxtaposition et coordination élémentaires. Verbes d'action au présent de narration. Ordre linéaire respecté.",
        "anaphoraDetails": "Continuité thématique : Lili (la fillette, la jeune joueuse, elle) ; Thibou (le conservateur, le vieux hibou, l'érudit nocturne) ; le fossile (l'objet dur, l'empreinte fossilisée, la trouvaille)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Où Lili repère-t-elle la marque en forme d'étoile dans le sable ?",
          "attendu": "Près d'un grand palmier chargé de noix de coco, au bord de l'eau.",
          "scaffold": "Indice : 'Regarde la ligne 4 qui décrit l'arbre près duquel se trouve la fissure.'"
        },
        {
          "type": "Q2. Inférence causale / Déduction",
          "q": "Pourquoi Thibou le hibou pousse-t-il un cri d'admiration en voyant la pierre ?",
          "attendu": "Parce que c'est un fossile très rare et qu'il s'agissait du dernier morceau manquant pour terminer la galerie du musée.",
          "scaffold": "Amorce : 'Ligne 14 : que manquait-il au vieux hibou dans son musée ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte indique qu'elle extrait une empreinte 'fossilisée'. Que veut dire ce mot ?",
          "attendu": "Transformée en pierre avec le temps, conservée dans la roche depuis très longtemps.",
          "scaffold": "Étayage : 'Pense aux dinosaures : est-ce une trace fraîche faite hier ou une trace durcie devenue de la pierre ?'"
        },
        {
          "type": "Q4. Inférence d'état émotionnel",
          "q": "Comment se sent Lili à la fin quand son fossile est exposé sous les projecteurs ?",
          "attendu": "Elle se sent fière, heureuse et valorisée pour son travail de recherche.",
          "scaffold": "Relance : 'Ligne 16 : elle admire fièrement sa découverte. Que ressent son cœur d'exploratrice ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte l'aventure de Lili depuis la plage jusqu'au musée.",
          "attendu": "L'enfant récapitule : la découverte de l'étoile -> le creusement délicat -> l'identification de l'empreinte de dinosaure -> le don à Thibou et l'exposition.",
          "scaffold": "Trame en 3 temps : 'Qu'a-t-elle trouvé dans le sable, à qui l'a-t-elle apporté, et quelle récompense a-t-elle reçue ?'"
        }
      ]
    }
  ],
  "cm1": [
    {
      "id": "cm1_t1",
      "theme": "Roblox",
      "themeTag": "Roblox Aventure",
      "title": "Roblox : l'échappée du labyrinthe secret",
      "lines": [
        "Enzo et son amie Lina se connectent ensemble sur leur serveur favori.",
        "Ils ont décidé d'explorer un nouveau jeu d'aventure nommé le Labyrinthe Obscur.",
        "Leurs avatars virtuels se retrouvent devant une gigantesque porte en fer rouillé.",
        "Dès qu'ils franchissent l'entrée sombre, un lourd verrou se referme automatiquement derrière eux.",
        "Un message en lettres violettes s'affiche sur l'écran : vous avez dix minutes pour sortir.",
        "Les deux amis avancent prudemment entre de hauts murs couverts de vignes lumineuses.",
        "Au premier croisement, Enzo repère une flèche brillante dessinée sur les dalles de pierre.",
        "Lina hésite car elle remarque un bouton poussoir dissimulé sous un bloc gris.",
        "« Attends Enzo ! », prévient la fillette dans son micro, « cette flèche ressemble à un piège ! »",
        "Enzo s'arrête net juste avant de poser son pied virtuel sur la dalle suspecte.",
        "Lina appuie sur le bouton secret et une trappe dérobée s'ouvre dans la paroi.",
        "Un escalier doré s'illumine pour leur offrir un raccourci salvateur.",
        "Derrière eux, la dalle fléchée s'écroule bruyamment dans un ravin sans fond.",
        "Enzo souffle de soulagement et remercie son amie pour sa vigilance exemplaire.",
        "En courant côte à côte, les deux joueurs grimpent les marches en toute hâte.",
        "Ils franchissent l'arche de sortie alors que le compte à rebours indique vingt secondes."
      ],
      "psycho": {
        "flesch": 78,
        "fleschDesc": "Facile (Calibré CM1)",
        "lme": "10.4 mots / phrase",
        "manulex": "G2-G3 > 92%",
        "manulexDetails": "Lexique d'aventure moderne (avatars, dissimulé, vigilance, compte à rebours). 92% des lemmes sont en zone de confort de cycle 3.",
        "syntaxDetails": "Introduction de propositions temporelles ('Dès qu'ils franchissent...', 'alors que...'). Dialogue direct encadré.",
        "anaphoraDetails": "Distinction limpide des pronoms sujets : Lina (la fillette, elle) vs Enzo (le joueur, il). Évite les confusions d'action."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Combien de temps le jeu accorde-t-il aux deux amis pour s'échapper du labyrinthe ?",
          "attendu": "Le message violet indique qu'ils ont dix minutes au total.",
          "scaffold": "Indice : 'Regarde la ligne 5 : que dit le message en lettres violettes ?'"
        },
        {
          "type": "Q2. Inférence causale / Prévoyance",
          "q": "Pourquoi Lina crie-t-elle à Enzo d'attendre avant de marcher sur la flèche ?",
          "attendu": "Elle soupçonne un piège car elle a remarqué un bouton secret différent et se méfie des dalles trop voyantes.",
          "scaffold": "Amorce : 'Lina pense que la flèche facile est en fait un...'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Dans l'histoire, l'escalier doré offre un 'raccourci salvateur'. Que signifie 'salvateur' ?",
          "attendu": "Qui sauve la vie, qui délivre d'un grand danger.",
          "scaffold": "Lien de racine : 'Pense au verbe sauver : un objet salvateur sert à...'"
        },
        {
          "type": "Q4. Inférence prédictive",
          "q": "Que se serait-il passé si Enzo n'avait pas écouté son amie Lina ?",
          "attendu": "Il serait tombé au fond du ravin avec la dalle qui s'écroule et aurait perdu la partie.",
          "scaffold": "Indice : 'Regarde ce qui arrive à la dalle fléchée à la ligne 13.'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte comment Lina et Enzo ont réussi à éviter le piège et à sortir à temps.",
          "attendu": "L'enfant restitue la découverte de la trappe secrète, l'effondrement de la mauvaise dalle et la fuite rapide par l'escalier.",
          "scaffold": "Trame orale : 'Explique ce qu'Enzo allait faire, ce que Lina a découvert, et comment ils sont sortis.'"
        }
      ]
    },
    {
      "id": "cm1_t2",
      "theme": "Minecraft",
      "themeTag": "Minecraft Exploration",
      "title": "Minecraft : la cité engloutie sous la lave",
      "lines": [
        "Thomas descend prudemment les marches étroites d'une faille rocheuse très profonde.",
        "Son équipement de joueur brille d'une douce lueur bleue grâce à son armure en diamant.",
        "Dans sa main gauche, le jeune garçon tient fermement un seau d'eau fraîche.",
        "L'air devient de plus en plus chaud à mesure qu'il approche du fond de la crevasse.",
        "Soudain, une clarté orangée illumine la caverne : une immense cascade de lave s'écoule.",
        "Derrière ce rideau de feu liquide se cachent les ruines mystérieuses d'un ancien temple.",
        "Thomas sait qu'un bloc de magma brûlant peut détruire instantanément tout son matériel précieux.",
        "Il verse alors délicatement son eau sur le bord supérieur du fleuve ardent.",
        "Dans un puissant sifflement de vapeur blanche, la lave en fusion se transforme en obsidienne noire.",
        "Un pont de roche solide se crée sous ses yeux, bloquant la source dangereuse.",
        "Thomas avance avec courage sur ce pont improvisé et atteint la porte du sanctuaire.",
        "À l'intérieur, un coffre ancien repose sur un socle intact en pierre sculptée.",
        "Le garçon soulève le couvercle et découvre trois pommes dorées et un livre enchanté.",
        "Un grondement sourd retentit au loin, signalant qu'il ne doit pas s'attarder dans ce gouffre.",
        "Thomas range son trésor dans son sac à dos et entame sa remontée vers la surface.",
        "Sa préparation minutieuse lui a permis de braver le feu sans perdre un seul cœur."
      ],
      "psycho": {
        "flesch": 77,
        "fleschDesc": "Facile",
        "lme": "10.6 mots / phrase",
        "manulex": "G2-G3 > 91%",
        "manulexDetails": "Lexique descriptif riche mais ancré dans l'expérience pratique (crevasse, lave en fusion, vapeur, obsidienne, socle).",
        "syntaxDetails": "Propositions participiales simples ('signalant qu'il ne doit pas...'). Coordination claire.",
        "anaphoraDetails": "Repérage direct du héros : 'Thomas' -> 'son équipement' -> 'le jeune garçon'. Progression linéaire sans retour en arrière temporel."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Que trouve Thomas à l'intérieur du vieux coffre du sanctuaire ?",
          "attendu": "Il trouve trois pommes dorées et un livre enchanté.",
          "scaffold": "Indice : 'Regarde la ligne 13 qui décrit l'ouverture du couvercle.'"
        },
        {
          "type": "Q2. Inférence causale / Logique",
          "q": "Pourquoi Thomas verse-t-il son seau d'eau sur le bord du fleuve de lave ?",
          "attendu": "Pour refroidir la lave et la transformer en pierre solide (obsidienne) afin de traverser sans brûler.",
          "scaffold": "Amorce : 'Quand on met de l'eau sur de la lave brûlante, qu'est-ce que cela fabrique ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte parle d'un 'fleuve ardent'. Que veut dire le mot 'ardent' ?",
          "attendu": "Extrêmement brûlant, enflammé, très chaud comme du feu.",
          "scaffold": "Étayage : 'Est-ce un fleuve glacé ou un fleuve qui brûle tout sur son passage ?'"
        },
        {
          "type": "Q4. Inférence prédictive",
          "q": "Pourquoi Thomas ne reste-t-il pas plus longtemps dans la grotte après avoir pris le trésor ?",
          "attendu": "Parce qu'il entend un grondement sourd dangereux qui annonce un effondrement ou l'arrivée de monstres.",
          "scaffold": "Indice : 'Regarde la ligne 14 : quel bruit inquiétant entend-il ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte comment Thomas a utilisé son intelligence pour franchir la lave et récupérer le coffre.",
          "attendu": "L'enfant explique le rôle de l'eau, la création du pont d'obsidienne et la découverte du trésor avant la fuite.",
          "scaffold": "Aide à la structure : 'D'abord comment a-t-il traversé la lave ? Ensuite qu'a-t-il trouvé ?'"
        }
      ]
    },
    {
      "id": "cm1_t3",
      "theme": "Brawl Stars",
      "themeTag": "Brawl Stars & Tactique",
      "title": "Brawl Stars : l'embuscade dans les hautes herbes",
      "lines": [
        "Dans l'arène de pierre poussiéreuse, Lucas contrôle attentivement son brawler nommé Colt.",
        "Le chronomètre de la partie indique qu'il ne reste que quarante-cinq secondes de combat.",
        "Au centre du terrain, un puits de mine projette une dernière gemme violette scintillante.",
        "L'équipe adverse mène au score avec neuf cristaux contre huit pour celle de Lucas.",
        "Le garçon observe l'écran et remarque un léger mouvement suspect dans un buisson touffu.",
        "Son partenaire de jeu veut foncer tête baissée pour ramasser la pierre précieuse.",
        "« Reste en arrière ! », prévient aussitôt Lucas dans son casque de communication vocale.",
        "Au lieu de courir à découvert, Lucas tire une rafale de balles dans les feuillages denses.",
        "Ses tirs révèlent un colosse ennemi qui attendait patiemment pour bondir par surprise.",
        "Démasqué en plein jour, l'adversaire hésite et rate sa violente attaque d'ouverture.",
        "Le coéquipier de Lucas en profite pour contourner la zone et sécuriser le cristal violet.",
        "En combinant leurs tirs à distance, les deux camarades repoussent le joueur rival hors du ring.",
        "Le compteur de gemmes passe à dix et déclenche le compte à rebours de la victoire.",
        "Lucas protège son équipier jusqu'à la dernière seconde en esquivant les derniers tirs.",
        "L'avertisseur sonore retentit dans un tonnerre d'applaudissements sur le serveur.",
        "La patience et la synchronisation ont permis de renverser une défaite presque certaine."
      ],
      "psycho": {
        "flesch": 78,
        "fleschDesc": "Facile (Calibré CM1)",
        "lme": "10.4 mots / phrase",
        "manulex": "G2-G3 > 92%",
        "manulexDetails": "92,4% en zone de confort cycle 3. Lexique d'action (chronomètre, scintillante, rafale, démasqué, synchronisation).",
        "syntaxDetails": "Subordonnées circonstancielles d'opposition (Au lieu de...) et relatives simples. Dialogue direct inséré sans rupture de schéma textuel.",
        "anaphoraDetails": "Traitement des actants : Lucas (le garçon, le joueur) ; l'adversaire (le colosse ennemi, le joueur rival) ; le cristal (la gemme violette, la pierre précieuse)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quel est le score affiché avant que la dernière gemme ne soit récupérée ?",
          "attendu": "L'équipe adverse mène avec neuf cristaux contre huit pour l'équipe de Lucas.",
          "scaffold": "Indice : 'Regarde la ligne 4 qui donne le nombre de cristaux des deux équipes.'"
        },
        {
          "type": "Q2. Inférence causale / Prévoyance",
          "q": "Pourquoi Lucas ordonne-t-il à son ami de reculer au lieu de ramasser la gemme ?",
          "attendu": "Parce qu'il a repéré un mouvement dans les herbes et a compris qu'un ennemi leur tendait un piège.",
          "scaffold": "Amorce : 'Qu'a vu Lucas bouger dans le buisson à la ligne 5 ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte dit que le colosse ennemi est 'démasqué'. Que signifie 'démasqué' ici ?",
          "attendu": "Découvert, repéré, sorti de sa cachette au grand jour.",
          "scaffold": "Étayage : 'Pense au mot masque : quand on enlève la cachette de quelqu'un, que lui arrive-t-il ?'"
        },
        {
          "type": "Q4. Inférence d'évaluation tactique",
          "q": "Quelle compétence a permis aux deux garçons de remporter la manche ?",
          "attendu": "Le travail d'équipe, la patience, la communication et le calme plutôt que la précipitation.",
          "scaffold": "Relance : 'Ligne 16 : ont-ils foncé n'importe comment ou ont-ils joué calmement ensemble ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte comment Lucas et son coéquipier ont évité le piège pour gagner le match.",
          "attendu": "L'élève restitue : le tir d'exploration dans les buissons -> la neutralisation de l'embuscade -> la prise du dixième cristal -> la défense coordonnée.",
          "scaffold": "Structure : 'Qu'a fait Lucas avec son arme dans les herbes, qu'a fait son ami pendant ce temps, et comment le match a été gagné ?'"
        }
      ]
    },
    {
      "id": "cm1_t4",
      "theme": "Lego Ninjago",
      "themeTag": "Lego Ninjago & Mécanique",
      "title": "Lego Ninjago : le mécanisme du dragon de pierre",
      "lines": [
        "Dans l'atelier silencieux du monastère, le jeune apprenti Kai termine une maquette complexe.",
        "Sur sa table d'architecte s'élèvent les fondations d'un gigantesque dragon articulé en briques grises.",
        "Chaque pièce miniature doit s'emboîter au millimètre près pour supporter les lourdes ailes métalliques.",
        "Pour activer le système motorisé, le jeune bâtisseur doit raccorder un petit engrenage dentelé.",
        "Mais lorsqu'il enclenche le commutateur électrique, un grincement alarmant retentit dans l'armature.",
        "La roue crantée patine dans le vide et l'aile gauche du dragon retombe lourdement sur la table.",
        "Le garçon s'assoit, respire calmement et refuse de céder à l'énervement après trois heures d'efforts.",
        "Il saisit sa loupe de précision et scrute méthodiquement chaque axe de rotation du mécanisme.",
        "Une minuscule brique translucide s'est glissée par inadvertance entre deux roues crantées du moteur.",
        "À l'aide d'une fine pince en acier, Kai extrait délicatement l'obstacle sans démonter l'ensemble.",
        "Il réaligne l'engrenage principal et vérifie la tension de la courroie de transmission en caoutchouc.",
        "Cette fois, dès que le courant traverse le circuit, le mécanisme fonctionne dans une harmonie totale.",
        "Le dragon de pierre déploie ses grandes ailes d'un mouvement fluide et majestueux.",
        "Une diode verte s'allume sur le socle, confirmant le parfait équilibre de l'invention.",
        "Le maître d'apprentissage entre dans la pièce et salue la rigueur exemplaire de son jeune élève.",
        "La persévérance transforme toujours les difficultés techniques en de grandes leçons de réussite."
      ],
      "psycho": {
        "flesch": 77,
        "fleschDesc": "Facile (CM1)",
        "lme": "10.6 mots / phrase",
        "manulex": "G2-G3 > 91%",
        "manulexDetails": "91,5% des lemmes. Vocabulaire de technologie concrète (engrenage, commutateur, armature, translucide, inadvertance, persévérance).",
        "syntaxDetails": "Subordonnées temporelles (Mais lorsqu'il..., Dès que le courant...). Absence d'inversion verbe-sujet déstabilisante pour les enfants dysphasiques.",
        "anaphoraDetails": "Suivi rigoureux : Kai (le jeune apprenti, le jeune bâtisseur, le garçon, l'élève) ; le mécanisme (l'armature, le système motorisé, l'invention)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Que se passe-t-il lorsque Kai allume le moteur du dragon la première fois ?",
          "attendu": "Un grincement retentit, la roue patine et l'aile gauche retombe lourdement sur la table.",
          "scaffold": "Indice : 'Regarde les lignes 5 et 6 qui décrivent le bruit et la chute de l'aile.'"
        },
        {
          "type": "Q2. Inférence causale / Logique mécanique",
          "q": "Quelle était la cause exacte du blocage des roues du moteur ?",
          "attendu": "Une petite brique translucide était coincée par erreur entre deux roues crantées.",
          "scaffold": "Amorce : 'Ligne 9 : quel objet miniature bloquait les dents des engrenages ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte précise que la pièce s'est glissée 'par inadvertance'. Que signifie cette expression ?",
          "attendu": "Par inattention, sans faire exprès, de manière involontaire.",
          "scaffold": "Étayage : 'L'a-t-il mise là exprès pour casser son jouet ou est-ce arrivé par distraction involontaire ?'"
        },
        {
          "type": "Q4. Inférence d'attitude / Maîtrise de soi",
          "q": "Quelle attitude remarquable Kai adopte-t-il après l'échec de son premier essai ?",
          "attendu": "Il ne se met pas en colère : il respire calmement et cherche la cause de la panne avec sa loupe.",
          "scaffold": "Indice : 'Ligne 7 : Kai crie-t-il ou reste-t-il calme pour réfléchir ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Explique comment Kai a réussi à réparer sa maquette mécanique.",
          "attendu": "L'enfant synthétise : le constat de la panne -> l'observation minutieuse à la loupe -> le retrait de la pièce avec la pince -> le nouveau test réussi.",
          "scaffold": "Structure : 'Quel outil a-t-il utilisé pour voir le problème, comment a-t-il retiré la brique, et comment le dragon a-t-il bougé à la fin ?'"
        }
      ]
    }
  ],
  "cm2": [
    {
      "id": "cm2_t1",
      "theme": "Zelda",
      "themeTag": "Zelda & Énigme",
      "title": "Zelda : l'énigme du sanctuaire oublié",
      "lines": [
        "Le jeune chevalier Link pousse la lourde porte de pierre d'un temple ancestral.",
        "L'air intérieur est frais et sent la mousse humide accumulée depuis des siècles.",
        "Au centre de la vaste pièce se dresse une statue géante tenant une balance dorée.",
        "Pour ouvrir la grille du fond, il faut équilibrer parfaitement les deux plateaux métalliques.",
        "Le plateau de gauche contient une lourde sphère de plomb gravée de motifs étranges.",
        "Le plateau de droite est vide et suspendu très haut au-dessus du sol.",
        "Link utilise le pouvoir magnétique de sa tablette pour soulever un cube d'acier posé dans un coin.",
        "Il dépose délicatement le bloc sur le plateau de droite, mais cela ne suffit pas.",
        "Le plateau de gauche reste toujours plus lourd et la porte du sanctuaire demeure fermée.",
        "Le héros réfléchit et examine avec minutie chaque détail de la salle silencieuse.",
        "Il remarque alors qu'une mince cascade d'eau s'écoule le long du mur voisin.",
        "Link utilise son pouvoir de cryonis pour figer l'eau en un immense bloc de glace translucide.",
        "En plaçant ce glaçon géant sur le cube d'acier, la balance bascule avec lenteur.",
        "Les deux plateaux s'alignent enfin à la même hauteur dans un tintement mélodieux.",
        "Le mécanisme se débloque et la herse en métal s'élève dans le plafond.",
        "Link peut poursuivre sa quête légendaire grâce à son observation sans faille."
      ],
      "psycho": {
        "flesch": 74,
        "fleschDesc": "Accessible CM2",
        "lme": "11.5 mots / phrase",
        "manulex": "G3-G4 > 90%",
        "manulexDetails": "Lexique précis lié à la physique et aux objets (ancestral, équilibrer, sphère de plomb, magnétique, translucide, herse).",
        "syntaxDetails": "Emploi de subordonnées de but ('Pour ouvrir la grille...') et temporelles. Parallélisme de construction des phrases.",
        "anaphoraDetails": "Désignation stable : 'Link' -> 'le jeune chevalier' -> 'le héros'. Le mécanisme de balance est découpé sans équivoque (plateau gauche vs droit)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quel objet lourd se trouve déjà posé sur le plateau de gauche au début ?",
          "attendu": "Une lourde sphère de plomb gravée de motifs étranges.",
          "scaffold": "Indice : 'Regarde la ligne 5 qui décrit le plateau gauche de la balance.'"
        },
        {
          "type": "Q2. Inférence causale / Déduction",
          "q": "Pourquoi le cube d'acier ne suffisait-il pas à ouvrir la grille à lui tout seul ?",
          "attendu": "Parce qu'il n'était pas assez lourd par rapport à la sphère de plomb : la balance restait penchée.",
          "scaffold": "Amorce : 'Pour que la porte s'ouvre, les deux plateaux doivent être...'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte dit que Link fige l'eau en un bloc de glace 'translucide'. Que veut dire 'translucide' ?",
          "attendu": "Qui laisse passer la lumière, presque transparent comme du verre.",
          "scaffold": "Étayage : 'Est-ce un bloc complètement noir et opaque ou un glaçon clair à travers lequel passe le jour ?'"
        },
        {
          "type": "Q4. Inférence d'état d'esprit",
          "q": "Que fait Link lorsque sa première tentative échoue avec le cube d'acier ?",
          "attendu": "Il ne s'énerve pas : il prend le temps d'observer la salle avec calme et minutie pour trouver une autre idée.",
          "scaffold": "Indice : 'Regarde la ligne 10 : est-ce qu'il casse tout ou réfléchit-il ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte la démarche complète de Link pour résoudre l'énigme de la balance.",
          "attendu": "L'enfant récapitule : le cube en acier insuffisant -> l'idée du bloc de glace -> l'équilibre des plateaux -> l'ouverture de la herse.",
          "scaffold": "Structure : 'D'abord quel premier objet a-t-il posé, qu'a-t-il ajouté ensuite pour faire le bon poids ?'"
        }
      ]
    },
    {
      "id": "cm2_t2",
      "theme": "Rocket League",
      "themeTag": "Rocket League Compétition",
      "title": "Rocket League : la finale de la récréation",
      "lines": [
        "Le gymnase du collège est plongé dans une pénombre traversée de projecteurs néon.",
        "Sur le grand écran du club numérique, le match de Rocket League atteint ses dernières secondes.",
        "L'équipe d'Ilyas affronte celle de Mathis dans une partie intense et très disputée.",
        "Le tableau d'affichage indique un score d'égalité parfait : deux buts partout.",
        "Au centre de l'arène virtuelle, un ballon d'argent géant rebondit contre la vitre protectrice.",
        "Mathis fonce à pleine vitesse avec sa voiture bleue pour tenter une frappe violente.",
        "Ilyas sait que s'il rate son saut, ses propres cages resteront totalement sans défense.",
        "Au lieu de paniquer, le garçon utilise son boost de fusée pour s'élever dans les airs.",
        "Son véhicule effectue une vrille aérienne et percute la balle avec le toit renforcé.",
        "Le tir plongeant surprend le gardien adverse et termine sa trajectoire dans la lucarne.",
        "La sonnerie retentit tandis qu'une pluie de confettis virtuels inonde l'écran géant.",
        "Dans la salle, les élèves applaudissent avec enthousiasme cette acrobatie spectaculaire.",
        "Mathis pose sa manette, traverse l'allée et vient serrer chaleureusement la main d'Ilyas.",
        "« Ton envol était tout simplement imparable, bravo pour ce but magnifique ! », admet le rival.",
        "Ilyas sourit modestement et partage sa coupe avec son coéquipier de défense.",
        "La véritable victoire réside dans le plaisir du jeu et le respect entre adversaires."
      ],
      "psycho": {
        "flesch": 73,
        "fleschDesc": "Accessible",
        "lme": "11.9 mots / phrase",
        "manulex": "G3-G4 > 89%",
        "manulexDetails": "Vocabulaire sportif et dynamique (pénombre, arène, vrille aérienne, lucarne, imparable, modestement).",
        "syntaxDetails": "Subordonnées temporelles ('tandis qu'une pluie...'). Discours direct illustrant le fair-play.",
        "anaphoraDetails": "Repérage sans ambiguïté des deux collégiens rivaux : 'Ilyas' (le pilote vainqueur) face à 'Mathis' (l'adversaire fair-play)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quel était le score affiché sur le tableau avant le dernier but d'Ilyas ?",
          "attendu": "Le score était à égalité parfaite : deux buts partout.",
          "scaffold": "Indice : 'Regarde la ligne 4 qui décrit le tableau d'affichage.'"
        },
        {
          "type": "Q2. Inférence causale / Risque tactique",
          "q": "Pourquoi le saut aérien d'Ilyas était-il une manœuvre risquée ?",
          "attendu": "Parce que s'il manquait la balle en l'air, son but restait totalement vide et sans défense contre l'adversaire.",
          "scaffold": "Amorce : 'S'il rate son tir dans les airs, que peut faire la voiture bleue de Mathis ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Mathis dit à Ilyas que son tir était 'imparable'. Que veut dire 'imparable' ?",
          "attendu": "Qu'on ne peut pas arrêter, impossible à bloquer ou à stopper par le gardien.",
          "scaffold": "Racine : 'Pense au mot parer un coup : un tir qu'on ne peut pas parer est...'"
        },
        {
          "type": "Q4. Inférence d'attitude morale",
          "q": "Que pense et montre Mathis lorsqu'il vient serrer la main d'Ilyas après la défaite ?",
          "attendu": "Il fait preuve de fair-play, de respect et d'amitié sportive sans être mauvais perdant ni jaloux.",
          "scaffold": "Relance : 'Est-il en colère ou reconnaît-il le talent de son copain ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte la dernière action du match et la réaction des deux joueurs à la fin.",
          "attendu": "L'enfant résume le saut au boost d'Ilyas, le but dans la lucarne, et la poignée de main respectueuse de Mathis.",
          "scaffold": "Trame : 'Comment Ilyas a-t-il marqué ce but et qu'a fait Mathis juste après ?'"
        }
      ]
    },
    {
      "id": "cm2_t3",
      "theme": "Splatoon",
      "themeTag": "Splatoon & Peinture",
      "title": "Splatoon : la marée de peinture turquoise",
      "lines": [
        "Sous les verrières lumineuses du skatepark urbain, la manche décisive de guerre de territoire commence.",
        "Équipée de son grand rouleau à encre turquoise, Yuna s'élance sur les rampes incurvées en béton.",
        "Le sol grisâtre se recouvre instantanément d'une épaisse traînée fluorescente sous les passages de son équipe.",
        "En face, les rivaux projettent une marée d'encre orange éclatante pour bloquer l'accès au promontoire central.",
        "Le temps s'écoule rapidement sur le cadran digital : il ne reste qu'une minute avant le coup de sifflet.",
        "Yuna constate que ses trois partenaires se font coincer dans un coin par des tireurs d'élite adverses.",
        "Si elle se précipite dans la mêlée pour les secourir, elle se fera éliminer sans rien changer au résultat.",
        "La jeune fille plonge alors sous sa forme de calamar pour glisser furtivement dans les flaques amies.",
        "Elle contourne discrètement toute l'arène en longeant les rambardes métalliques sans tirer un seul projectile.",
        "Arrivée derrière le dos des adversaires trop occupés à tirer, elle déploie un réservoir pressurisé spécial.",
        "Une gigantesque tornade de bulles turquoises jaillit et repeint la totalité de la zone neutre en une seconde.",
        "Prise de court, la formation ennemie doit reculer pour recharger ses réserves complètement à sec.",
        "Les coéquipiers de Yuna profitent de cette opportunité inespérée pour se libérer et reprendre du terrain.",
        "La sirène finale retentit au moment où la caméra aérienne effectue le calcul des pourcentages de surface.",
        "L'équipe turquoise l'emporte d'une courte avance de trois pour cent sous les cris de joie du public.",
        "La ruse stratégique et le sang-froid ont permis de renverser une bataille presque perdue d'avance."
      ],
      "psycho": {
        "flesch": 74,
        "fleschDesc": "Accessible CM2",
        "lme": "11.6 mots / phrase",
        "manulex": "G3-G4 > 90%",
        "manulexDetails": "90,2% du lexique. Vocabulaire de coordination dynamique (verrières, promontoire, incurvées, furtivement, pressurisé, inespérée, sang-froid).",
        "syntaxDetails": "Subordonnées conditionnelles en si hypothétique (Si elle se précipite...), gérondifs de moyen (en longeant...).",
        "anaphoraDetails": "Dualité bien balisée : Yuna (la jeune fille, la joueuse au rouleau) vs les adversaires (les rivaux, la formation ennemie)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quel écart de score donne la victoire à l'équipe de Yuna à la fin du match ?",
          "attendu": "Une courte avance de trois pour cent.",
          "scaffold": "Indice : 'Regarde la ligne 15 qui donne le résultat calculé par la caméra.'"
        },
        {
          "type": "Q2. Inférence causale / Choix tactique",
          "q": "Pourquoi Yuna décide-t-elle de ne pas foncer directement aider ses camarades coincés ?",
          "attendu": "Parce qu'elle sait qu'elle se ferait abattre à son tour par les tireurs adverses sans aider son équipe.",
          "scaffold": "Amorce : 'Ligne 7 : qu'arriverait-il si elle sautait directement au milieu des tirs ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte indique qu'elle glisse 'furtivement'. Que veut dire 'furtivement' ?",
          "attendu": "En cachette, discrètement, sans bruit et sans se faire remarquer.",
          "scaffold": "Étayage : 'Fait-elle beaucoup de bruit ou se déplace-t-elle comme une ombre invisible ?'"
        },
        {
          "type": "Q4. Inférence d'état émotionnel",
          "q": "Quel sentiment les partenaires de Yuna éprouvent-ils quand la tornade turquoise éclate ?",
          "attendu": "Un grand soulagement et un regain d'énergie car ils étaient encerclés et sans issue.",
          "scaffold": "Relance : 'Ligne 13 : ils ont une chance inespérée. Étaient-ils en train de perdre ou de gagner ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte le plan de Yuna pour remporter la partie dans la dernière minute.",
          "attendu": "L'enfant résume : la fuite en calamar par les côtés -> le passage dans le dos des adversaires -> le déclenchement de la tornade -> la libération du terrain et la victoire finale.",
          "scaffold": "Trame : 'Par où est-elle passée, qu'a-t-elle lancé derrière les ennemis, et quel a été le score ?'"
        }
      ]
    },
    {
      "id": "cm2_t4",
      "theme": "Escape Game",
      "themeTag": "Escape Game Spatial",
      "title": "L'escape game spatial : l'énigme du sas pressurisé",
      "lines": [
        "Dans la station spatiale reconstituée de l'escape game, Noam et sa brigade d'explorateurs examinent la pièce close.",
        "Le décor simule une base lunaire en détresse : des alarmes rouges clignotent sur toutes les parois métalliques.",
        "Un haut-parleur robotique annonce que la réserve d'oxygène virtuel sera entièrement épuisée dans dix minutes.",
        "Pour déverrouiller la porte blindée du sas de secours, l'équipe doit résoudre une série de calculs géométriques.",
        "Au centre du panneau de commande clignotent quatre symboles représentant les phases successives de la Lune.",
        "Le premier joueur de l'équipe veut forcer le clavier numérique en tapant des chiffres au hasard.",
        "« Arrête immédiatement ! », intervient Noam avec fermeté, « trois mauvaises réponses bloqueraient le sas définitivement ! »",
        "Le garçon s'approche d'un hublot artificiel où sont dessinées des constellations d'étoiles avec des numéros dorés.",
        "En reliant les étoiles par ordre croissant de magnitude lumineuse, Noam fait apparaître la silhouette d'un croissant argenté.",
        "Il associe ce schéma céleste au tableau périodique accroché près de la couchette du pilote.",
        "Chaque phase de la Lune correspond en réalité au numéro atomique de l'élément gazeux nécessaire à la respiration.",
        "Noam saisit le code à quatre chiffres avec une concentration absolue tandis que le chronomètre s'emballe.",
        "Un bip sonore retentit dans la cabine, suivi du bruit caractéristique d'une décompression hydraulique contrôlée.",
        "Le sas s'ouvre lentement dans un jet de fumée blanche sous les acclamations enthousiastes des jeunes participants.",
        "Le maître du jeu pénètre dans le décor et remet à l'équipe le trophée des meilleurs scientifiques juniors.",
        "La méthode scientifique et la réflexion posée sont toujours plus puissantes que l'agitation précipitée."
      ],
      "psycho": {
        "flesch": 73,
        "fleschDesc": "Accessible CM2",
        "lme": "11.8 mots / phrase",
        "manulex": "G3-G4 > 89%",
        "manulexDetails": "89,6% des lemmes. Vocabulaire scientifique opératoire (reconstituée, pressurisé, magnitude, périodique, décompression hydraulique, atomique).",
        "syntaxDetails": "Périodes organisées avec gérondif explicatif (En reliant...), temporelles simultanées (tandis que...).",
        "anaphoraDetails": "Référenciation stable : Noam (le garçon, le jeune participant) ; le mécanisme de déblocage (le panneau de commande, le hublot artificiel, le sas blindé)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Combien d'erreurs sur le clavier numérique provoquent la fermeture définitive du sas ?",
          "attendu": "Trois mauvaises réponses bloquent définitivement la porte.",
          "scaffold": "Indice : 'Regarde la ligne 7 : quel avertissement Noam donne-t-il à son camarade ?'"
        },
        {
          "type": "Q2. Inférence causale / Déduction",
          "q": "Pourquoi Noam empêche-t-il son ami de taper des chiffres au hasard ?",
          "attendu": "Pour éviter d'atteindre le quota de trois erreurs qui les enfermerait pour toujours dans la pièce.",
          "scaffold": "Amorce : 'Si son ami se trompe trois fois, que se passe-t-il avec la porte ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte parle d'une 'décompression'. Que veut dire ce mot dans un sous-marin ou une navette ?",
          "attendu": "L'égalisation ou la baisse contrôlée de la pression de l'air pour pouvoir ouvrir une porte en toute sécurité.",
          "scaffold": "Étayage : 'Pense à la pression de l'air enfermée : quand on la relâche pour ouvrir, on fait une...'"
        },
        {
          "type": "Q4. Inférence d'évaluation intellectuelle",
          "q": "Quels indices Noam a-t-il combinés pour découvrir le code secret ?",
          "attendu": "Le tracé des constellations sur le hublot (qui dessinait un croissant) et les numéros du tableau d'éléments chimiques sur le mur.",
          "scaffold": "Indice : 'Regarde les lignes 9 à 11 : de quels dessins et de quel tableau s'est-il servi ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Résume comment Noam a sauvé son équipe avant que l'oxygène virtuel ne vienne à manquer.",
          "attendu": "L'élève restitue : l'arrêt du camarade imprudent -> l'analyse des étoiles et du tableau chimique -> la frappe du bon code -> la décompression du sas et la victoire.",
          "scaffold": "Trame : 'Quel geste dangereux a-t-il stoppé, comment a-t-il trouvé le code, et comment la porte s'est-elle ouverte ?'"
        }
      ]
    }
  ],
  "6eme": [
    {
      "id": "6eme_t1",
      "theme": "Manga Shonen",
      "themeTag": "Manga Shonen",
      "title": "L'attaque du Titan miniature",
      "lines": [
        "Au sommet des remparts de pierre, Soren ajuste nerveusement les lanières de son équipement.",
        "Le vent froid siffle entre les créneaux, apportant une odeur âcre de terre brûlée.",
        "Ce matin, la cloche d'alarme du village a résonné à trois reprises dans la vallée.",
        "Une créature insolite a été repérée près des cultures d'orge et de blé doré.",
        "Ce n'est pas un colosse ordinaire, mais un Titan miniature, pas plus grand qu'une maisonnette.",
        "Sa petite taille le rend toutefois deux fois plus rapide et imprévisible que les monstres géants.",
        "Le monstre court à travers le champ en détruisant les meules de foin sur son passage.",
        "Soren active les propulseurs à gaz de son harnais pour se jeter dans le vide.",
        "Ses câbles d'acier s'ancrent solidement dans le tronc d'un vieux chêne centenaire.",
        "L'adolescent tournoie dans les airs avec agilité pour contourner la trajectoire de l'ennemi.",
        "Le Titan pivote soudainement et tente de faucher le câble avec son bras massif.",
        "Soren anticipe le geste, détache son câble principal et glisse sous l'attaque brutale.",
        "D'un coup précis de ses lames en acier trempé, il tranche le point faible à la nuque.",
        "La créature s'effondre sans un bruit avant de s'évaporer dans un grand nuage de vapeur.",
        "Soren atterrit souplement sur ses pieds en rengainant ses armes étincelantes.",
        "Les paysans sortent de leurs abris et acclament le courage de leur jeune protecteur."
      ],
      "psycho": {
        "flesch": 71,
        "fleschDesc": "Standard 6ème (Adapté TDL)",
        "lme": "12.4 mots / phrase",
        "manulex": "G4-G5 > 88%",
        "manulexDetails": "Lexique littéraire et héroïque (créneaux, odeur âcre, insolite, meules de foin, centenaire, rengainer).",
        "syntaxDetails": "Emploi de la concession ('toutefois', 'mais'). Absence de tournures impersonnelles ambiguës pour préserver la compréhension du TDL.",
        "anaphoraDetails": "Réseau référentiel clair : 'un Titan miniature' -> 'ce n'est pas un colosse ordinaire' -> 'la créature' -> 'l'ennemi'."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quelle est la particularité de ce Titan par rapport aux géants habituels ?",
          "attendu": "Il est beaucoup plus petit (la taille d'une maisonnette) mais deux fois plus rapide et imprévisible.",
          "scaffold": "Indice : 'Regarde les lignes 5 et 6 qui comparent sa taille et sa vitesse.'"
        },
        {
          "type": "Q2. Inférence causale / Logique tactique",
          "q": "Pourquoi Soren détache-t-il son câble d'acier au milieu du combat ?",
          "attendu": "Pour éviter que le Titan ne coupe son fil ou ne l'attrape au vol, ce qui lui permet d'esquiver en dessous.",
          "scaffold": "Amorce : 'Si le monstre attrape le câble, que risque-t-il d'arriver à Soren ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte mentionne une 'odeur âcre'. Que veut dire le mot 'âcre' ?",
          "attendu": "Une odeur piquante, désagréable, âpre qui prend à la gorge comme de la fumée de brûlé.",
          "scaffold": "Étayage : 'Est-ce une odeur de parfum doux ou une fumée piquante de terre calcinée ?'"
        },
        {
          "type": "Q4. Inférence d'état émotionnel",
          "q": "Pourquoi les paysans sortent-ils de leurs abris en acclamant Soren à la fin ?",
          "attendu": "Ils étaient terrifiés et cachés, et ressentent un profond soulagement et une immense gratitude maintenant que le danger a disparu.",
          "scaffold": "Relance : 'Où étaient-ils pendant l'attaque et que ressentent-ils quand la vapeur s'élève ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Résume avec tes propres mots comment Soren a vaincu ce monstre agile.",
          "attendu": "L'élève restitue l'ancrage des câbles, la feinte sous l'attaque du bras et le coup précis à la nuque.",
          "scaffold": "Structure en 3 actions : 'Comment s'est-il élancé, comment a-t-il esquivé l'attaque, et où a-t-il frappé ?'"
        }
      ]
    },
    {
      "id": "6eme_t2",
      "theme": "Fortnite",
      "themeTag": "Fortnite Battle",
      "title": "Fortnite : la zone de tempête et le planeur doré",
      "lines": [
        "Un orage électrique violet gagne du terrain sur les collines verdoyantes de l'île.",
        "La barrière de tempête se resserre inexorablement, forçant les derniers participants à courir.",
        "Nour et son coéquipier Yanis ont franchi les faubourgs déserts d'une ville abandonnée.",
        "Leurs boucliers d'énergie sont presque épuisés par de précédentes escarmouches.",
        "Sur la colline centrale se dresse l'ultime forteresse en briques rouges encore debout.",
        "Une équipe rivale y est solidement retranchée, tirant des roquettes vers la plaine.",
        "Nour consulte sa carte : dans soixante secondes, toute la vallée sera engloutie par l'orage.",
        "Yanis fouille rapidement dans une cabane de bois et déniche un planeur doré légendaire.",
        "Cet objet précieux ne peut transporter qu'un seul joueur à travers les nuages.",
        "Yanis regarde sa barre de santé très basse et tend sans hésiter l'artefact à sa camarade.",
        "« Tu as encore des munitions de précision », dit-il calmement, « vole jusqu'au toit ! »",
        "Nour active les ailes étincelantes et s'élève au-dessus des fumées de combat.",
        "Tandis que Yanis attire les tirs adverses depuis le bas, Nour atterrit discrètement sur le dôme.",
        "Par une lucarne vitrée, elle neutralise le générateur d'énergie de la forteresse ennemie.",
        "L'écran des deux adolescents scintille enfin des lettres d'or de la Victoire Royale.",
        "Yanis et Nour se réjouissent : la confiance mutuelle a été leur plus grande protection."
      ],
      "psycho": {
        "flesch": 70,
        "fleschDesc": "Standard 6ème",
        "lme": "12.8 mots / phrase",
        "manulex": "G4-G5 > 87%",
        "manulexDetails": "Lexique d'action et d'anticipation (inexorablement, faubourgs, escarmouches, retranchée, artefact, générateur).",
        "syntaxDetails": "Emploi de la simultanéité ('Tandis que Yanis attire...'). Coordination bien ordonnée évitant les surcharges de mémoire de travail.",
        "anaphoraDetails": "Gestion de la dualité : Nour (la tireuse en vol) vs Yanis (le soutien au sol). Aucune hésitation référentielle."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Combien de joueurs le planeur doré trouvé par Yanis peut-il transporter ?",
          "attendu": "Il ne peut transporter qu'un seul joueur à la fois.",
          "scaffold": "Indice : 'Regarde la ligne 9 qui parle de la capacité de l'objet.'"
        },
        {
          "type": "Q2. Inférence intentionnelle / Stratégie",
          "q": "Pourquoi Yanis donne-t-il le planeur à Nour au lieu de fuir lui-même avec ?",
          "attendu": "Il sait qu'elle a encore des munitions pour tirer et que c'est la seule façon de neutraliser la forteresse d'en haut pour gagner à deux.",
          "scaffold": "Amorce : 'Yanis réfléchit : qui a le plus de chances de battre les ennemis d'en haut ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte mentionne de précédentes 'escarmouches'. Que signifie ce mot ?",
          "attendu": "De petits combats rapides, de brèves bagarres ou affrontements entre quelques soldats/joueurs.",
          "scaffold": "Étayage : 'Pense aux combats du jeu : est-ce une discussion tranquille ou des petits échanges de tirs ?'"
        },
        {
          "type": "Q4. Inférence d'attitude morale",
          "q": "Quel rôle héroïque joue Yanis pendant que Nour s'envole vers le toit ?",
          "attendu": "Il sert d'appât / de diversion en attirant les tirs sur lui pour protéger l'arrivée de son amie.",
          "scaffold": "Indice : 'Ligne 13 : que fait Yanis depuis le bas pendant que Nour vole ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte comment le travail d'équipe de Nour et Yanis leur a permis de décrocher la Victoire Royale.",
          "attendu": "L'enfant résume le don du planeur, l'envol de Nour, la diversion de Yanis au sol et la désactivation du générateur.",
          "scaffold": "Trame : 'Explique ce qu'a fait Yanis avec le planeur et comment Nour a terminé la mission.'"
        }
      ]
    },
    {
      "id": "6eme_t3",
      "theme": "Manga d'Aventure",
      "themeTag": "One Piece & Navigation",
      "title": "Le compas des tempêtes et l'île engloutie",
      "lines": [
        "À la proue de la caravelle secouée par les vagues, Robin scrute l'horizon embrumé de l'archipel oublié.",
        "Le vent océanique rabat des paquets d'écume salée contre la coque de chêne du navire d'exploration.",
        "Depuis le lever de l'aube, un étrange phénomène magnétique affole tous les instruments de bord habituels.",
        "L'aiguille de cuivre de la boussole ordinaire tourne sans arrêt sur son cadran de verre fissuré.",
        "Seul le compas des tempêtes, un globe de verre renfermant une goutte d'eau turquoise, pointe obstinément vers l'ouest.",
        "Selon les anciennes légendes de marins, cet artefact magique réagit exclusivement à la proximité d'une île immergée.",
        "L'équipage murmure d'inquiétude devant les récifs acérés qui émergent des remous écumeux comme des crocs menaçants.",
        "« Si nous faisons demi-tour, nous perdrons la trace du sanctuaire marin ! », rappelle fermement Robin à ses camarades.",
        "Le jeune navigateur monte le long des cordages jusqu'à la vigie pour repérer le moindre chenal navigable.",
        "Entre deux lames déferlantes, il aperçoit une trouée d'eau calme où le fond corallien scintille d'une lumière dorée.",
        "D'une voix claire qui domine le rugissement des éléments déchaînés, Robin transmet ses ordres au timonier.",
        "Le gouvernail pivote avec énergie, engageant le bateau dans l'étroit couloir rocheux avec une précision chirurgicale.",
        "La carlingue frôle les falaises d'ardoise avant de pénétrer dans un lagon parfaitement circulaire et protégé du vent.",
        "Sous la surface limpide, les toits d'un temple antique englouti apparaissent enfin aux yeux émerveillés des marins.",
        "L'équipage pousse des vivats enthousiastes en saluant le flair exceptionnel de son intrépide timonier en chef.",
        "L'audace calculée et la confiance en ses repères permettent de traverser les tempêtes les plus effrayantes."
      ],
      "psycho": {
        "flesch": 71,
        "fleschDesc": "Standard 6ème (Adapté TDL)",
        "lme": "12.5 mots / phrase",
        "manulex": "G4-G5 > 88%",
        "manulexDetails": "88,4% de lemmes de cycle 3 / collège. Lexique maritime soutenu (proue, caravelle, embrumé, artefact, chenal, timonier, carlingue).",
        "syntaxDetails": "Propositions circonstancielles de lieu et de temps antéposées (Entre deux lames..., À la proue...). Absence de ruptures anaphoriques ambiguës.",
        "anaphoraDetails": "Continuité référentielle limpide : Robin (le jeune navigateur, son intrépide timonier en chef) ; les instruments de bord opposés : la boussole ordinaire (affolée) vs le compas des tempêtes (l'artefact magique fiable)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Dans quelle direction cardinale le compas des tempêtes pointe-t-il obstinément ?",
          "attendu": "Il pointe obstinément vers l'ouest.",
          "scaffold": "Indice : 'Regarde la ligne 5 qui précise la direction indiquée par le globe de verre.'"
        },
        {
          "type": "Q2. Inférence causale / Détermination",
          "q": "Pourquoi Robin refuse-t-il d'ordonner le demi-tour malgré la peur de l'équipage ?",
          "attendu": "Parce qu'il sait que c'est leur seule opportunité de découvrir le sanctuaire englouti et qu'ils ne retrouveront jamais sa trace.",
          "scaffold": "Amorce : 'Ligne 8 : que perdraient-ils pour toujours s'ils rebroussaient chemin ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte indique que Robin donne ses ordres au 'timonier'. Quel est le rôle d'un timonier ?",
          "attendu": "C'est le marin qui tient la barre ou le gouvernail pour diriger la trajectoire du bateau.",
          "scaffold": "Étayage : 'Pense au gouvernail : la personne qui tourne la barre du navire est le...'"
        },
        {
          "type": "Q4. Inférence d'état émotionnel",
          "q": "Comment change le comportement des marins entre le passage des récifs et l'entrée dans le lagon ?",
          "attendu": "Ils passent de l'angoisse et du découragement à l'admiration, au soulagement et à l'enthousiasme triomphant.",
          "scaffold": "Relance : 'Au début ils murmurent d'inquiétude : que crient-ils à la ligne 15 quand ils découvrent le temple ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte comment Robin a franchi la barrière de récifs sans abîmer le navire.",
          "attendu": "L'élève synthétise : la confiance dans l'artefact -> l'ascension à la vigie -> le repérage de la trouée d'eau calme -> le guidage précis de la barre jusqu'au lagon.",
          "scaffold": "Structure : 'Où est-il monté pour voir le passage secret, quels ordres a-t-il donnés, et qu'ont-ils découvert sous l'eau ?'"
        }
      ]
    },
    {
      "id": "6eme_t4",
      "theme": "Super-Héros Urbain",
      "themeTag": "Spider-Man & Solidarité",
      "title": "L'éclair bioélectrique sur les toits enneigés",
      "lines": [
        "Une tempête de neige précoce paralyse la circulation sur les grandes avenues de la métropole new-yorkaise.",
        "Suspendu sous une arche métallique du pont de Brooklyn, le jeune justicier masqué Malik observe la ville assombrie.",
        "Une violente bourrasque givrée fait vaciller un pylône à haute tension alimentant l'hôpital pédiatrique du quartier.",
        "Le câble d'alimentation principal se rompt soudainement dans une gerbe d'étincelles bleutées qui s'éteint aussitôt.",
        "Les générateurs de secours du bâtiment médical s'activent péniblement, mais leurs batteries ne tiendront que vingt minutes.",
        "Malik projette un fil de toile synthétique renforcée pour s'élancer entre deux corniches recouvertes de glace.",
        "Le vent glacial fouette son masque thermique tandis qu'il rejoint le sommet enneigé du transformateur électrique.",
        "Le raccordement en cuivre est trop court de plusieurs mètres pour atteindre la borne de secours opposée.",
        "« Si personne ne rétablit la boucle immédiatement, les couveuses pédiatriques cesseront d'être chauffées », songe Malik.",
        "Le jeune héros comprend qu'il doit utiliser son pouvoir bioélectrique pour servir de pont conducteur vivant.",
        "Il agrippe le premier câble dénudé de sa main droite tout en tendant son bras gauche vers la borne d'entrée.",
        "Une décharge d'énergie jaune étincelante parcourt son costume renforcé dans un crépitement intense et douloureux.",
        "Malik serre les dents, puise dans toutes ses réserves d'endurance et maintient la connexion pendant dix longues minutes.",
        "Les équipes de techniciens municipaux arrivent enfin sur le toit et installent un pontage de dérivation permanent.",
        "Les lumières des couveuses se rallument à travers les fenêtres de l'hôpital sous les regards soulagés des soignants.",
        "Le véritable héroïsme ne consiste pas à vaincre des monstres, mais à mettre ses forces au service des plus vulnérables."
      ],
      "psycho": {
        "flesch": 70,
        "fleschDesc": "Standard 6ème",
        "lme": "12.7 mots / phrase",
        "manulex": "G4-G5 > 87%",
        "manulexDetails": "87,2% de vocabulaire accessible. Termes technologiques et moraux (pédiatrique, bioélectrique, transformateur, conducteur, dérivation, vulnérables).",
        "syntaxDetails": "Subordonnées circonstancielles de concomitance (tandis qu'il rejoint..., tout en tendant...). Progression dramatique soutenue.",
        "anaphoraDetails": "Référents du protagoniste : Malik (le jeune justicier masqué, le jeune héros) ; l'hôpital (le bâtiment médical, les couveuses pédiatriques)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quel bâtiment indispensable de la ville risque de manquer d'électricité à cause du câble rompu ?",
          "attendu": "L'hôpital pédiatrique pour enfants (où se trouvent les couveuses des bébés).",
          "scaffold": "Indice : 'Regarde les lignes 3 et 9 qui précisent quel hôpital est menacé par le froid.'"
        },
        {
          "type": "Q2. Inférence causale / Logique du sacrifice",
          "q": "Pourquoi Malik choisit-il d'utiliser son propre corps pour faire passer le courant ?",
          "attendu": "Parce que le câble de cuivre est trop court pour atteindre la borne et que les batteries allaient bientôt s'éteindre.",
          "scaffold": "Amorce : 'Ligne 8 : que manquait-il au câble pour être branché directement ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte indique que les techniciens posent un 'pontage'. Que veut dire ce mot ici ?",
          "attendu": "Un raccordement ou une dérivation pour faire passer le courant d'un fil à un autre.",
          "scaffold": "Racine : 'Pense au mot pont : un pontage sert à relier deux morceaux séparés pour que le courant passe.'"
        },
        {
          "type": "Q4. Inférence d'évaluation morale",
          "q": "Quelle leçon sur le courage et les héros ce récit nous donne-t-il à la fin ?",
          "attendu": "Être un héros ne consiste pas à se battre contre des monstres, mais à utiliser son pouvoir pour sauver et protéger les personnes vulnérables.",
          "scaffold": "Indice : 'Regarde la ligne 16 : que dit la morale sur la force et les gens vulnérables ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte comment Malik a sauvé les bébés de l'hôpital pendant la tempête de neige.",
          "attendu": "L'élève restitue : la rupture du câble par la tempête -> le risque d'extinction des couveuses -> le raccordement électrique avec son corps -> l'arrivée des réparateurs.",
          "scaffold": "Trame : 'Quel problème l'électricité posait-elle, comment Malik a-t-il utilisé ses mains, et comment les lumières se sont-elles rallumées ?'"
        }
      ]
    }
  ],
  "5eme": [
    {
      "id": "5eme_t1",
      "theme": "Réseaux Sociaux / Chimie",
      "themeTag": "TikTok & Sciences",
      "title": "Le challenge TikTok de chimie en cuisine",
      "lines": [
        "Sur le plan de travail de la cuisine, Rayan installe son smartphone sur un petit trépied articulé.",
        "L'adolescent s'apprête à tourner une courte vidéo pour son compte de vulgarisation scientifique.",
        "Depuis trois jours, un défi en ligne prétend qu'on peut créer un cristal phosphorescent en dix secondes.",
        "La recette virale préconise de mélanger du sel de table, du liquide vaisselle et de l'eau gazeuse.",
        "Rayan, curieux mais prudent, souhaite vérifier l'exactitude de cette manipulation devant ses abonnés.",
        "Il verse minutieusement les trois ingrédients dans une éprouvette graduée sous l'œil de la caméra.",
        "Une mousse grise et fade déborde lentement sur le torchon sans produire la moindre étincelle.",
        "Aucune lumière magique n'apparaît, contrairement aux montages trompeurs vus sur les réseaux.",
        "Une notification clignote sur son écran : un ami lui suggère d'ajouter un filtre fluo pour récolter des likes.",
        "Rayan marque une hésitation devant cette tentation facile de maquiller la réalité.",
        "Il se souvient alors de sa promesse : offrir du vrai contenu éducatif sans mensonge ni trucage.",
        "Le collégien reprend l'enregistrement et prend le temps d'expliquer pourquoi ce mélange est inoffensif mais inutile.",
        "Il détaille la réaction chimique réelle et démonte les illusions d'optique utilisées par d'autres créateurs.",
        "Publiée le soir même, sa vidéo honnête recueille plus de cinquante mille partages bienveillants.",
        "Les commentaires félicitent sa rigueur et son courage d'avoir osé briser une fausse légende d'Internet.",
        "Ce jour-là, la vérité scientifique a remporté une éclatante victoire contre la course aux vues faciles."
      ],
      "psycho": {
        "flesch": 68,
        "fleschDesc": "Standard 5ème (Calibré TDL)",
        "lme": "13.8 mots / phrase",
        "manulex": "G5-Collège > 86%",
        "manulexDetails": "Vocabulaire relatif à l'esprit critique et aux médias (vulgarisation, phosphorescent, préconise, exactitude, trucage, rigueur).",
        "syntaxDetails": "Emploi de la concession ('contrairement aux...', 'inoffensif mais inutile'). Phrases ordonnées soutenant le raisonnement déductif.",
        "anaphoraDetails": "Continuité sans rupture : 'Rayan' -> 'l'adolescent' -> 'le collégien' -> 'sa rigueur'. Les fausses astuces sont bien opposées à la vérité."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Que promettait la vidéo à la mode sur Internet avec le mélange de sel et d'eau gazeuse ?",
          "attendu": "Elle prétendait fabriquer un cristal phosphorescent et lumineux en dix secondes.",
          "scaffold": "Indice : 'Regarde la ligne 3 qui résume le défi vu sur les réseaux sociaux.'"
        },
        {
          "type": "Q2. Inférence causale / Dilemme éthique",
          "q": "Pourquoi Rayan hésite-t-il quand son ami lui propose d'ajouter un filtre fluorescent ?",
          "attendu": "Parce qu'il aimerait avoir des vues et des likes, mais il ne veut pas mentir à sa communauté.",
          "scaffold": "Amorce : 'D'un côté il a envie de succès, mais de l'autre côté qu'a-t-il promis à ses abonnés ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte dit que la recette 'préconise' de mélanger trois ingrédients. Que signifie 'préconiser' ?",
          "attendu": "Conseiller, recommander formellement, suggérer de faire quelque chose.",
          "scaffold": "Synonyme : 'Quand un médecin ou une recette te conseille quelque chose, elle le...'"
        },
        {
          "type": "Q4. Inférence d'évaluation critique",
          "q": "Pourquoi le public a-t-il autant aimé la vidéo de Rayan alors que son expérience a raté ?",
          "attendu": "Parce qu'il a été honnête, a dit la vérité scientifique et a expliqué le piège au lieu d'arnaquer les spectateurs.",
          "scaffold": "Relance : 'Les gens aiment-ils se faire tromper ou apprécient-ils qu'on leur explique le trucage ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte comment Rayan a transformé un échec en une vidéo utile et populaire.",
          "attendu": "L'élève exprime le test de l'astuce, le refus du filtre mensonger, les explications scientifiques réelles et le succès final.",
          "scaffold": "Trame : 'Que s'est-il passé quand il a mélangé les liquides, qu'a-t-il refusé de faire, et qu'a-t-il expliqué à la place ?'"
        }
      ]
    },
    {
      "id": "5eme_t2",
      "theme": "E-Sport au Collège",
      "themeTag": "E-Sport Tournoi",
      "title": "E-sport au collège : le tournoi d'Overwatch",
      "lines": [
        "Les gradins de la salle polyvalente résonnent des encouragements passionnés des élèves de cinquième.",
        "Pour la première fois, le collège organise une compétition interclasses de jeux vidéo sur grand écran.",
        "L'équipe d'Amel contrôle une formation défensive dans une manche décisive d'Overwatch.",
        "Leur objectif est d'escorter un véhicule blindé jusqu'au bout d'un hangar futuriste.",
        "Face à eux, les élèves de quatrième déploient une attaque coordonnée avec deux boucliers impénétrables.",
        "Maxime, le coéquipier d'Amel chargé des soins, commence à perdre patience sous la pression.",
        "« On n'y arrivera jamais, ils bloquent toutes les ouvertures ! », s'exclame le garçon dans son casque.",
        "Amel garde son calme et observe le compte à rebours : il reste moins de quarante secondes de match.",
        "Elle repère une passerelle métallique étroite suspendue juste au-dessus des adversaires.",
        "Au lieu de charger tout droit dans les boucliers, Amel ordonne un repli stratégique temporaire.",
        "Elle guide son équipe vers l'escalier latéral pour contourner la ligne ennemie par les hauteurs.",
        "Pris par surprise depuis le plafond, les défenseurs ne peuvent plus maintenir leur mur protecteur.",
        "Maxime retrouve toute sa concentration et soigne Amel au moment où elle repousse l'ultime assaut.",
        "Le convoi franchit la ligne d'arrivée au son d'un avertisseur victorieux sous les acclamations du public.",
        "Maxime retire son casque et félicite Amel pour sa lucidité sous le feu de l'action.",
        "Le sens tactique et la gestion du stress ont triomphé de la simple force brute."
      ],
      "psycho": {
        "flesch": 67,
        "fleschDesc": "Standard 5ème",
        "lme": "14.1 mots / phrase",
        "manulex": "G5-Collège > 85%",
        "manulexDetails": "Lexique contemporain de compétition (salle polyvalente, formation défensive, escorter, impénétrables, repli stratégique, lucidité).",
        "syntaxDetails": "Propositions infinitives de but ('pour contourner...'). Structure chronologique rigoureuse sans flashback.",
        "anaphoraDetails": "Alternance maîtrisée : 'Amel' (la capitaine posée) face à 'Maxime' (le coéquipier soignant stressé). Clarté des pronoms."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quelle mission l'équipe d'Amel doit-elle accomplir dans le jeu ?",
          "attendu": "Escorter un véhicule blindé jusqu'au bout d'un hangar futuriste.",
          "scaffold": "Indice : 'Regarde la ligne 4 qui décrit l'objectif du convoi.'"
        },
        {
          "type": "Q2. Inférence causale / Décision tactique",
          "q": "Pourquoi Amel choisit-elle de faire reculer son groupe au lieu de foncer tout droit ?",
          "attendu": "Parce que les ennemis ont deux boucliers impénétrables en face ; charger de front mènerait à la défaite.",
          "scaffold": "Amorce : 'Si elle fonce sur les deux gros boucliers de face, que va-t-il se passer ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Maxime remercie Amel pour sa 'lucidité'. Qu'est-ce que la lucidité ?",
          "attendu": "La clarté d'esprit, la capacité à bien réfléchir et à faire les bons choix même dans le stress.",
          "scaffold": "Sens opposé : 'Est-ce quelqu'un qui panique dans le brouillard ou quelqu'un qui garde les idées très claires ?'"
        },
        {
          "type": "Q4. Inférence d'état émotionnel",
          "q": "Comment évolue l'état d'esprit de Maxime entre le milieu et la fin de la partie ?",
          "attendu": "Il passe de la panique et du découragement au calme, à la concentration puis à la joie et la reconnaissance.",
          "scaffold": "Relance : 'Au début il crie qu'on n'y arrivera jamais. Comment est-il à la fin ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte comment Amel a retourné la situation pour remporter le match avec son équipe.",
          "attendu": "L'élève restitue le blocage de face, la décision de contourner par la passerelle en hauteur et la victoire finale.",
          "scaffold": "Trame : 'Quel était le problème en bas, par où Amel les a-t-elle fait passer, et quel a été le résultat ?'"
        }
      ]
    },
    {
      "id": "5eme_t3",
      "theme": "Cybersécurité",
      "themeTag": "Discord & Hameçonnage",
      "title": "Le piège du faux lien Discord",
      "lines": [
        "Dans la pénombre de sa chambre, Samy discute avec ses camarades sur le serveur Discord de leur guilde.",
        "Une notification privée surgit sur son écran, envoyée par le compte d'un modérateur habituellement respecté.",
        "Le message promet un abonnement premium gratuit à condition de cliquer sur une adresse web dans les cinq minutes.",
        "En observant le lien de plus près, Samy repère une minuscule faute d'orthographe dissimulée au milieu du nom de domaine.",
        "La supercherie est subtile : le caractère « o » du site officiel a été remplacé par le chiffre zéro.",
        "Au même moment, plusieurs membres du salon général annoncent joyeusement qu'ils viennent de valider l'offre miraculeuse.",
        "Samy comprend aussitôt le drame : le compte du modérateur a été piraté par un programme malveillant automatisé.",
        "L'adolescent ressent la tentation de se taire pour éviter de passer pour un rabat-joie auprès des autres joueurs.",
        "Pourtant, il sait que ce faux formulaire dérobe les mots de passe et contamine ensuite les contacts du répertoire.",
        "Prenant son courage à deux mains, Samy publie un avertissement immédiat avec une capture d'écran explicative.",
        "Il contacte en urgence les administrateurs du serveur par un canal sécurisé pour verrouiller les accès compromis.",
        "Grâce à sa réactivité, la propagation du script pirate est stoppée avant que les comptes bancaires ne soient piratés.",
        "Les camarades qui avaient cliqué remercient chaleureusement Samy de les avoir incités à changer leurs identifiants.",
        "Le vrai modérateur récupère son profil quelques heures plus tard et salue publiquement la perspicacité du collégien.",
        "La vigilance numérique et l'analyse minutieuse des détails constituent le meilleur bouclier contre la cybercriminalité.",
        "Dans l'espace virtuel, la curiosité naïve reste la première faiblesse exploitée par les fraudeurs modernes."
      ],
      "psycho": {
        "flesch": 68,
        "fleschDesc": "Standard 5ème (Calibré TDL)",
        "lme": "13.9 mots / phrase",
        "manulex": "G5-Collège > 86%",
        "manulexDetails": "86,3% du lexique. Vocabulaire de l'analyse critique numérique (supercherie, malveillant, rabat-joie, compromis, perspicacité, cybercriminalité).",
        "syntaxDetails": "Subordonnées de condition (à condition de...), d'opposition (Pourtant, il sait que...) et complétives. Raisonnement préventif structuré.",
        "anaphoraDetails": "Pronominalisation et désignation des entités : Samy (l'adolescent, le collégien) ; le piège (la supercherie, le programme malveillant, le script pirate) ; la communauté (les membres du salon, les camarades)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quelle anomalie graphique Samy remarque-t-il dans l'adresse internet du lien reçu ?",
          "attendu": "La lettre « o » du nom de domaine officiel a été remplacée par le chiffre zéro « 0 ».",
          "scaffold": "Indice : 'Regarde les lignes 4 et 5 qui décrivent l'adresse web de très près.'"
        },
        {
          "type": "Q2. Inférence causale / Danger numérique",
          "q": "Pourquoi ce message frauduleux était-il particulièrement trompeur pour les membres ?",
          "attendu": "Parce qu'il semblait provenir du compte d'un modérateur en qui tout le monde avait confiance.",
          "scaffold": "Amorce : 'Ligne 2 : qui semblait envoyer ce message au départ ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le modérateur félicite Samy pour sa 'perspicacité'. Que veut dire 'perspicacité' ?",
          "attendu": "La clairvoyance, la finesse d'esprit, le fait de remarquer des détails cachés que les autres ne voient pas.",
          "scaffold": "Étayage : 'Samy s'est-il fait avoir bêtement ou a-t-il eu l'esprit très aiguisé et malin ?'"
        },
        {
          "type": "Q4. Inférence d'évaluation relationnelle",
          "q": "Quelle crainte Samy a-t-il dû vaincre avant de lancer son alerte sur le chat général ?",
          "attendu": "La peur de gâcher la fête et de passer pour un rabat-joie auprès des autres joueurs qui croyaient recevoir un cadeau.",
          "scaffold": "Indice : 'Ligne 8 : de quoi avait-il peur par rapport au jugement des autres ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte comment Samy a sauvé les comptes de ses amis contre cette attaque pirate.",
          "attendu": "L'élève restitue : l'observation du faux lien -> le refus de se taire -> la publication de l'avertissement -> la fermeture du serveur par les administrateurs et le changement des mots de passe.",
          "scaffold": "Structure : 'Comment a-t-il vu l'arnaque, qu'a-t-il posté sur le groupe, et comment les amis ont réagi ?'"
        }
      ]
    },
    {
      "id": "5eme_t4",
      "theme": "Écologie & Robotique",
      "themeTag": "Océan & Drone sous-marin",
      "title": "Le robot sous-marin au chevet du récif de corail",
      "lines": [
        "À bord du navire océanographique ancré dans le Pacifique Sud, Inès pilote un drone sous-marin autonome.",
        "Grâce à des manettes à retour de force et un masque vidéo, la jeune fille explore les abysses turquoise.",
        "Sa mission consiste à cartographier une barrière de corail menacée par le réchauffement brutal des courants côtiers.",
        "Les écrans de télémétrie indiquent une profondeur de quarante mètres et une température anormalement élevée de l'eau.",
        "Devant les caméras haute définition de l'appareil submersible, un paysage sous-marin désolé se révèle peu à peu.",
        "Des branches coralliennes autrefois éclatantes de pourpre et d'émeraude ont blanchi sous le choc thermique.",
        "Pourtant, dans une anfractuosité rocheuse ombragée, le capteur thermique du robot signale une poche d'eau plus fraîche.",
        "Inès dirige prudemment le petit sous-marin jaune vers cette cavité obscure tapissée d'algues protectrices.",
        "À l'intérieur de cet abri naturel subsiste une colonie intacte de polypes multicolores aux teintes éclatantes.",
        "Ces organismes coralliens survivants possèdent une résistance génétique exceptionnelle face à la hausse des températures.",
        "L'adolescente déploie la pince articulée en titane du robot pour prélever délicatement un fragment sans briser la roche.",
        "L'échantillon vivant est placé en sécurité dans un caisson isotherme pressurisé étanche à l'eau de mer.",
        "Les chercheurs du laboratoire saluent cette découverte capitale qui permettra de bouturer et repeupler le récif dévasté.",
        "Inès ramène le drone à la surface tandis que le soleil couchant embrase les flots calmes de l'océan.",
        "La technologie de pointe devient un instrument précieux lorsqu'elle se met au service de la biodiversité marine.",
        "Chaque parcelle de vie préservée aujourd'hui représente une promesse d'équilibre pour la planète de demain."
      ],
      "psycho": {
        "flesch": 67,
        "fleschDesc": "Standard 5ème",
        "lme": "14.1 mots / phrase",
        "manulex": "G5-Collège > 85%",
        "manulexDetails": "85,5% de lemmes. Terminologie scientifique précise (océanographique, télémétrie, submersible, anfractuosité, polypes, isotherme, biodiversité).",
        "syntaxDetails": "Subordonnées circonstancielles de but (pour prélever...), temporelles (tandis que...). Cohérence chronologique linéaire sans rétrospection.",
        "anaphoraDetails": "Pôles référentiels : Inès (la jeune fille, l'adolescente) ; le robot (le drone autonome, l'appareil submersible, le petit sous-marin) ; le corail (les polypes multicolores, l'échantillon vivant)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "À quelle profondeur sous-marine le robot d'Inès navigue-t-il lors de sa mission ?",
          "attendu": "À une profondeur de quarante mètres.",
          "scaffold": "Indice : 'Regarde la ligne 4 qui donne la mesure affichée sur les écrans.'"
        },
        {
          "type": "Q2. Inférence causale / Déduction scientifique",
          "q": "Pourquoi certains coraux ont-ils survécu dans la fente rocheuse malgré le réchauffement marin ?",
          "attendu": "Parce qu'ils étaient protégés à l'ombre dans une poche d'eau plus fraîche tapissée d'algues.",
          "scaffold": "Amorce : 'Ligne 7 : qu'a détecté le capteur de température dans la cavité du rocher ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte indique que l'échantillon est placé dans un caisson 'isotherme'. Que signifie 'isotherme' ?",
          "attendu": "Qui maintient une température constante et protège contre les variations de chaleur.",
          "scaffold": "Étayage : 'Pense aux sacs isothermes pour transporter des glaces : à quoi servent-ils ?'"
        },
        {
          "type": "Q4. Inférence d'utilité écologique",
          "q": "Pourquoi le prélèvement de cette petite branche de corail est-il capital pour les chercheurs ?",
          "attendu": "Parce que ces coraux résistants permettront de faire des boutures pour replanter et régénérer le reste du récif dévasté.",
          "scaffold": "Indice : 'Ligne 13 : que vont faire les biologistes en laboratoire avec ce morceau vivant ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Raconte l'expédition d'Inès depuis la découverte du récif blanchi jusqu'au retour à bord.",
          "attendu": "L'élève reformule : le spectacle du corail mort -> la découverte de la cavité fraîche -> la découverte des polypes vivants -> le prélèvement au bras mécanique -> l'espoir de restauration.",
          "scaffold": "Structure : 'Qu'a-t-elle vu d'anormal sous l'eau, quel trésor a-t-elle trouvé dans la grotte, et à quoi cela servira-t-il ?'"
        }
      ]
    }
  ],
  "4eme": [
    {
      "id": "4eme_t1",
      "theme": "Réseaux Sociaux / Image de Soi",
      "themeTag": "Instagram & Clash",
      "title": "Instagram et les filtres trompeurs : le clash de Sarah",
      "lines": [
        "Assise sur son lit, Sarah fait défiler les publications sur l'écran lumineux de sa tablette.",
        "Le concours de photos du collège approche et chacun rivalise d'ingéniosité pour séduire le jury.",
        "Son amie Chloé vient de publier un autoportrait stupéfiant où son teint ressemble à de la porcelaine.",
        "Sous le cliché, des dizaines de commentaires dithyrambiques saluent une beauté prétendument naturelle.",
        "Sarah agrandit l'image et constate immédiatement un flou suspect autour des yeux et des joues.",
        "Ce visage parfait est le résultat manifeste d'une application d'intelligence artificielle de retouche extrême.",
        "Dans le groupe de discussion de la classe, plusieurs élèves commencent à se dévaloriser face à cette perfection factice.",
        "« Regardez sa peau impeccable, nous avons l'air ridicules à côté », déplore une camarade complexée.",
        "Sarah ressent une profonde colère devant cette tromperie qui mine l'estime de ses amies.",
        "Elle choisit alors de réagir de manière audacieuse sans recourir à l'insulte ni au mépris.",
        "L'adolescente capture un cliché d'elle-même en plein soleil, avec ses taches de rousseur et ses mèches indisciplinées.",
        "Elle l'accompagne d'une légende percutante : 'La vraie vie ne possède aucun curseur de lissage.'",
        "La publication produit une onde de choc immédiate dans la communauté du collège.",
        "En quelques heures, d'autres élèves publient à leur tour des portraits authentiques et sans artifices.",
        "Chloé finit par supprimer sa photo truquée et admet en privé le poids de ses propres insécurités.",
        "Cette initiative a rappelé à tous que la perfection numérique n'est qu'un mirage rassurant mais stérile."
      ],
      "psycho": {
        "flesch": 65,
        "fleschDesc": "Standard Collège 4ème",
        "lme": "14.6 mots / phrase",
        "manulex": "Collège > 84%",
        "manulexDetails": "Lexique abstrait de l'analyse sociologique et psychologique (dithyrambiques, prétendument, perfection factice, insécurités, mirage, stérile).",
        "syntaxDetails": "Emploi de subordonnées relatives ('qui mine l'estime...') et de participiales. Concaténation logique des causalités psychologiques.",
        "anaphoraDetails": "Gestion fine des attitudes : 'Chloé' (l'image trompeuse) vs 'Sarah' (la parole libératrice). Termes d'évaluation clairement rattachés."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quel détail anormal Sarah remarque-t-elle en agrandissant la photo de Chloé ?",
          "attendu": "Un flou suspect autour des yeux et des joues, preuve d'une retouche numérique par IA.",
          "scaffold": "Indice : 'Regarde la ligne 5 qui décrit ce que Sarah observe de près sur l'écran.'"
        },
        {
          "type": "Q2. Inférence causale / Psychologie",
          "q": "Pourquoi les messages des autres camarades complexées mettent-ils Sarah en colère ?",
          "attendu": "Parce qu'elle voit que ce faux portrait parfait fait souffrir ses amies et leur donne une mauvaise image d'elles-mêmes.",
          "scaffold": "Amorce : 'Que ressentent les autres filles en croyant que Chloé est naturellement parfaite ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte parle d'une 'perfection factice'. Que signifie l'adjectif 'factice' ?",
          "attendu": "Faux, artificiel, fabriqué pour tromper, qui n'existe pas dans la réalité.",
          "scaffold": "Étayage : 'Est-ce une perfection réelle ou un masque fabriqué par un filtre informatique ?'"
        },
        {
          "type": "Q4. Inférence d'état émotionnel / Empathie",
          "q": "Pourquoi Chloé utilisait-elle en réalité un filtre aussi exagéré sur son visage ?",
          "attendu": "Parce qu'elle-même avait de grands complexes et des insécurités sur son physique et avait peur du regard des autres.",
          "scaffold": "Piste à la ligne 15 : 'Que reconnaît Chloé en privé à propos de ses insécurités ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Explique comment la photo naturelle de Sarah a changé l'ambiance dans la classe.",
          "attendu": "L'élève reformule : le courage de montrer la réalité sans retouche a libéré les autres camarades et convaincu Chloé d'être plus sincère.",
          "scaffold": "Trame : 'Qu'a posté Sarah pour répondre, comment les autres ont réagi, et qu'a fait Chloé à la fin ?'"
        }
      ]
    },
    {
      "id": "4eme_t2",
      "theme": "Science-Fiction & IA",
      "themeTag": "Intelligence Artificielle",
      "title": "L'intelligence artificielle qui écrivait des fables",
      "lines": [
        "Dans la salle informatique désertée, Julien teste les capacités d'un modèle linguistique génératif.",
        "Pour le cours de français, le collégien a programmé une machine capable d'imiter le style poétique de La Fontaine.",
        "L'écran fait défiler des dizaines d'alexandrins impeccables évoquant des corbeaux robotiques et des renards cybernétiques.",
        "La rime est parfaite, la métrique ne souffre aucun défaut et le vocabulaire est d'une richesse éblouissante.",
        "Pourtant, en relisant la fable produite pour la remise des prix, Julien ressent un malaise grandissant.",
        "Les mots s'enchaînent avec une fluidité millimétrée, mais le récit ne dégage aucune chaleur ni aucune émotion.",
        "C'est une mécanique froide qui empile des formules élégantes sans comprendre la portée morale d'une seule phrase.",
        "Julien se rappelle la consigne de son professeur : exprimer ce que signifie grandir avec ses doutes d'adolescent.",
        "Une machine peut calculer la fréquence des métaphores, mais elle n'a jamais éprouvé la morsure de la déception.",
        "Le garçon éteint l'algorithme, s'assoit devant une feuille vierge et saisit un simple stylo à encre noire.",
        "Il écrit avec ses propres mots, raturant plusieurs lignes, hésitant sur un adjectif, cherchant sa propre vérité.",
        "Son texte n'a pas la perfection glaciale du logiciel, mais chaque strophe vibre d'une sincérité désarmante.",
        "Le lendemain, lorsque Julien donne lecture de sa création maladroite mais vibrante, un grand silence s'installe.",
        "Ses camarades sont profondément émus par des anecdotes dans lesquelles ils reconnaissent leurs propres fêlures.",
        "Le professeur lui décerne la meilleure note en soulignant que l'art n'est pas un calcul, mais une confidence.",
        "L'intelligence humaine réside dans sa vulnérabilité, là où aucun robot ne pourra jamais s'aventurer."
      ],
      "psycho": {
        "flesch": 64,
        "fleschDesc": "Standard 4ème",
        "lme": "14.9 mots / phrase",
        "manulex": "Collège > 83%",
        "manulexDetails": "Lexique littéraire et philosophique (alexandrins, métrique, désarmante, anecdotes, fêlures, vulnérabilité).",
        "syntaxDetails": "Emploi de structures contrastives ('Pourtant...', 'mais...', 'là où...'). Équilibre entre abstraction et description matérielle.",
        "anaphoraDetails": "Opposition rigoureuse : l'IA ('la machine', 'l'algorithme', 'la perfection glaciale') vs Julien ('le garçon', 'l'humain')."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quel célèbre auteur français la machine de Julien devait-elle imiter ?",
          "attendu": "Jean de La Fontaine (dans un style poétique de fable avec des rimes).",
          "scaffold": "Indice : 'Regarde la ligne 2 qui mentionne le poète classique.'"
        },
        {
          "type": "Q2. Inférence causale / Analyse de fond",
          "q": "Pourquoi Julien est-il déçu par le poème généré par l'ordinateur malgré des rimes parfaites ?",
          "attendu": "Parce que le texte est froid, sans âme, sans réelle émotion vécue : la machine assemble des mots sans rien ressentir.",
          "scaffold": "Amorce : 'Les rimes sont bien faites, mais que manque-t-il dans le cœur de la machine ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte dit que l'art est une 'confidence'. Que signifie ce mot ici ?",
          "attendu": "Un secret intime partagé avec confiance, une émotion sincère qu'on livre à quelqu'un.",
          "scaffold": "Étayage : 'Pense au mot confier : quand tu fais une confidence à un ami, que partages-tu ?'"
        },
        {
          "type": "Q4. Inférence d'évaluation esthétique",
          "q": "Pourquoi les camarades de classe sont-ils touchés par les ratures et les hésitations de Julien ?",
          "attendu": "Parce qu'ils sentent qu'il parle avec sincérité de vrais doutes et de vraies fêlures d'adolescents qu'eux aussi partagent.",
          "scaffold": "Indice : 'Ligne 14 : dans quoi ses camarades se reconnaissent-ils ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Explique avec tes mots pourquoi ce texte conclut que la vulnérabilité humaine est plus forte que l'IA.",
          "attendu": "L'élève exprime que l'émotion, l'expérience vécue et l'imperfection sensible donnent une vraie valeur aux textes, ce qu'aucun calcul ne peut copier.",
          "scaffold": "Trame : 'Qu'est-ce qu'une vraie personne peut ressentir qu'un ordinateur ne connaîtra jamais ?'"
        }
      ]
    },
    {
      "id": "4eme_t3",
      "theme": "Réseaux Sociaux",
      "themeTag": "WhatsApp & Effet de meute",
      "title": "Le message vocal de trop dans le groupe de classe",
      "lines": [
        "Un dimanche soir ordinaire se transforme en cauchemar silencieux sur le groupe de messagerie de la classe.",
        "Un élève influent vient de partager l'enregistrement audio volé d'un camarade bredouillant lors d'un exposé d'histoire.",
        "En quelques secondes, une avalanche d'émoticônes moqueuses et de commentaires sarcastiques déferle sur l'écran des téléphones.",
        "Chacun surenchérit dans la raillerie pour afficher son appartenance au groupe dominant et s'éviter les moqueries d'autrui.",
        "Dans sa chambre, Clara observe le lynchage numérique avec un serrement de gorge de plus en plus douloureux.",
        "La victime du dénigrement, un garçon réservé et timide, quitte précipitamment la conversation sans dire un mot.",
        "Le silence pesant qui suit son départ n'éteint pourtant pas la cruauté machinale des messages qui continuent d'affluer.",
        "Clara sait que poster un message de désapprobation risque de détourner l'agressivité de la meute contre elle-même.",
        "Elle relit les propos blessants et comprend que sa neutralité passive équivaut à une complicité coupable et lâche.",
        "L'adolescente rédige alors un message ferme et mesuré rappelant que tout le monde peut trébucher à l'oral.",
        "Elle dénonce le manque d'honneur d'une moquerie collective organisée dans le dos d'un camarade isolé et vulnérable.",
        "Son intervention courageuse produit un arrêt net dans le flux effréné des notifications moqueuses du tchat.",
        "Peu après, deux autres élèves écrivent publiquement pour approuver ses paroles et exprimer leur regret d'avoir ri.",
        "Clara envoie ensuite un message privé chaleureux à son camarade blessé pour lui assurer son soutien indéfectible.",
        "Le lendemain au collège, la dynamique d'intimidation s'est effondrée grâce à une seule voix qui a refusé la lâcheté.",
        "Le véritable courage citoyen commence au moment précis où l'on ose briser l'approbation silencieuse de la foule."
      ],
      "psycho": {
        "flesch": 65,
        "fleschDesc": "Standard Collège 4ème",
        "lme": "14.7 mots / phrase",
        "manulex": "Collège > 84%",
        "manulexDetails": "84,2% des lemmes. Vocabulaire abstrait de la psychologie et des dynamiques sociales (surenchérit, raillerie, lynchage numérique, dénigrement, désapprobation, indéfectible).",
        "syntaxDetails": "Subordonnées complétives, concessives (pourtant) et relatives complexes. Analyse des rapports de causalité psychologique.",
        "anaphoraDetails": "Pôles humains identifiés sans équivoque : Clara (l'adolescente, une seule voix) vs la victime (le camarade réservé, un camarade isolé) vs les harceleurs (le groupe dominant, la meute, la foule)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quel contenu précis est diffusé sur le groupe WhatsApp pour déclencher les moqueries ?",
          "attendu": "L'enregistrement audio volé d'un camarade qui bafouillait pendant son exposé d'histoire.",
          "scaffold": "Indice : 'Regarde la ligne 2 qui mentionne ce que l'élève populaire a publié.'"
        },
        {
          "type": "Q2. Inférence causale / Psychologie sociale",
          "q": "Pourquoi la majorité des élèves se mettent-ils à rire et à surenchérir au lieu d'intervenir ?",
          "attendu": "Par conformisme et par peur : pour montrer qu'ils appartiennent au groupe des forts et pour éviter de devenir la prochaine cible.",
          "scaffold": "Amorce : 'Ligne 4 : que cherchent-ils à prouver et de quoi ont-ils peur pour eux-mêmes ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte indique que Clara assure à son camarade un soutien 'indéfectible'. Que signifie ce mot ?",
          "attendu": "Solide, fidèle, qui ne faiblit jamais et sur lequel on peut compter sans réserve.",
          "scaffold": "Étayage : 'Pense au mot défaillir : un soutien indéfectible peut-il disparaître ou reste-t-il inébranlable ?'"
        },
        {
          "type": "Q4. Inférence d'évaluation éthique",
          "q": "Pourquoi Clara juge-t-elle que le simple fait de se taire ferait d'elle une complice ?",
          "attendu": "Parce que garder le silence devant une injustice revient à accepter le mal et à donner son accord passif aux harceleurs.",
          "scaffold": "Indice : 'Ligne 9 : comment qualifie-t-elle sa neutralité si elle ne dit rien ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Explique comment la prise de parole de Clara a désamorcé le cyberharcèlement dans sa classe.",
          "attendu": "L'élève restitue : l'arrêt immédiat des rires -> le ralliement d'autres camarades -> le réconfort privé à la victime -> le rétablissement d'un climat sain au collège.",
          "scaffold": "Structure : 'Qu'a-t-elle écrit sur le groupe, comment les autres ont réagi, et qu'a-t-elle fait en privé pour son camarade ?'"
        }
      ]
    },
    {
      "id": "4eme_t4",
      "theme": "Dystopie & IA",
      "themeTag": "IA & Notation sociale",
      "title": "Le bug de l'application de notation scolaire",
      "lines": [
        "Dans un collège expérimental hautement numérisé, chaque élève porte un bracelet connecté mesurant son assiduité quotidienne.",
        "Une application centrale baptisée Harmonie calcule en permanence un indice de conformité civique visible sur les téléphones.",
        "Ce matin-là, Mehdi constate avec stupéfaction que son score personnel a chuté brutalement de quatre-vingt-dix à quarante points.",
        "Cette sanction algorithmique injustifiée lui interdit immédiatement l'accès au foyer récréatif et aux activités du club de robotique.",
        "L'écran de la borne indique une pénalité sévère pour désobéissance active lors de la pause méridienne de la veille.",
        "Pourtant, Mehdi se souvient parfaitement d'avoir passé toute son après-midi à la bibliothèque municipale pour réviser un contrôle.",
        "En interrogeant l'agent technique responsable de la maintenance informatique, l'adolescent découvre l'origine absurde du dysfonctionnement.",
        "La caméra de surveillance de la cafétéria a confondu Mehdi avec un autre élève en raison d'un sweat-shirt identique.",
        "Le logiciel de reconnaissance faciale présentait un taux d'erreur avéré de quinze pour cent sur les profils en mouvement.",
        "Personne au sein de la direction n'avait osé remettre en cause le jugement automatique rendu par la machine infaillible.",
        "Armé du registre d'émargement de la bibliothécaire, Mehdi sollicite une audience exceptionnelle devant le conseil d'établissement.",
        "Il démontre calmement l'aberration d'un système qui punit des adolescents sur la base d'une équation probabiliste biaisée.",
        "Ses arguments frappent les enseignants qui reconnaissent la faillibilité des statistiques numériques face aux preuves matérielles tangibles.",
        "Le principal ordonne la suspension immédiate du barème de notation automatisé et présente ses excuses formelles à l'élève.",
        "Mehdi retrouve tous ses accès scolaires, mais son combat a ouvert les yeux de toute la communauté éducative.",
        "La dignité d'un être humain ne se résume jamais à un algorithme de probabilités enfermé dans un serveur."
      ],
      "psycho": {
        "flesch": 64,
        "fleschDesc": "Standard 4ème",
        "lme": "14.9 mots / phrase",
        "manulex": "Collège > 83%",
        "manulexDetails": "83,4% de lemmes. Vocabulaire technologique, juridique et institutionnel (assiduité, conformité civique, algorithmique, méridienne, probabiliste, faillibilité, émargement).",
        "syntaxDetails": "Périodes argumentatives denses avec participes passés épithètes et propositions complétives. Articulation déductive rigoureuse.",
        "anaphoraDetails": "Pôles en opposition : Mehdi (l'adolescent, l'élève) face à l'application Harmonie (le logiciel, la machine infaillible, l'équation probabiliste) et à l'institution (le conseil d'établissement, le principal)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "À quelle activité extrascolaire Mehdi se voit-il refuser l'accès après la baisse de sa note ?",
          "attendu": "Au club de robotique (ainsi qu'au foyer récréatif).",
          "scaffold": "Indice : 'Regarde la ligne 4 qui énumère les lieux qui lui sont interdits.'"
        },
        {
          "type": "Q2. Inférence causale / Erreur technologique",
          "q": "Quelle méprise exacte la caméra et l'algorithme ont-ils commise pour accuser Mehdi ?",
          "attendu": "La caméra l'a confondu avec un autre élève parce qu'ils portaient le même sweat-shirt, avec une marge d'erreur de 15 %.",
          "scaffold": "Amorce : 'Lignes 8 et 9 : que s'est-il passé avec le vêtement et le logiciel de reconnaissance faciale ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Mehdi dénonce 'l'aberration' du système. Que signifie le mot 'aberration' ?",
          "attendu": "Une absurdité totale, une faute grave de logique, un égarement contraire au bon sens.",
          "scaffold": "Étayage : 'Est-ce un système parfaitement juste ou une erreur absurde et insensée ?'"
        },
        {
          "type": "Q4. Inférence d'évaluation critique",
          "q": "Pourquoi les adultes de la direction n'avaient-ils pas vérifié l'erreur avant la plainte de Mehdi ?",
          "attendu": "Parce qu'ils faisaient une confiance aveugle à l'ordinateur en croyant que la machine ne pouvait pas se tromper.",
          "scaffold": "Indice : 'Ligne 10 : quelle croyance les adultes avaient-ils envers cette machine dite infaillible ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Résume comment Mehdi a convaincu le conseil d'établissement d'annuler sa punition et de suspendre l'application.",
          "attendu": "L'élève expose : la preuve de son alibi par la bibliothèque -> la démonstration des erreurs de la caméra -> la prise de conscience des professeurs -> la suppression du système.",
          "scaffold": "Structure : 'Quel papier a-t-il apporté comme preuve, quel défaut a-t-il montré sur le logiciel, et quelle a été la décision du principal ?'"
        }
      ]
    }
  ],
  "3eme": [
    {
      "id": "3eme_t1",
      "theme": "Réalité Virtuelle & Cybernétique",
      "themeTag": "VR & Réalité",
      "title": "Le dilemme du casque VR : immersion ou réalité ?",
      "lines": [
        "Dans le silence feutré de sa chambre, Thomas retire son casque de réalité virtuelle de dernière génération.",
        "Pendant trois heures consécutives, l'adolescent a exploré les cités suspendues d'un monde imaginaire nommé Néo-Sora.",
        "Dans cet univers artificiel, son avatar possède des ailes dorées et commande le respect de milliers d'explorateurs.",
        "Mais lorsque la lentille s'éteint, la réalité tangible reprend ses droits avec une brutalité désarmante.",
        "Les murs de sa petite chambre sont étroits, le papier peint se décolle et ses devoirs de mathématiques l'attendent.",
        "Son téléphone vibre sur le bureau : ses camarades de lycée l'invitent à partager une partie de football au parc municipal.",
        "Thomas regarde son écran de jeu qui propose une quête exclusive accessible seulement pendant les deux prochaines heures.",
        "S'il remet son casque, il obtiendra le titre légendaire d'archonte du ciel virtuel.",
        "S'il sort au parc, il devra affronter le froid piquant d'octobre et la maladresse de ses jambes réelles.",
        "Le jeune homme s'approche de la fenêtre et contemple les feuilles rousses qui tourbillonnent sous les bourrasques.",
        "Il réalise que l'éclat parfait des pixels n'égalera jamais l'odeur de la terre mouillée ni l'éclat de rire spontané de ses amis.",
        "Le monde virtuel lui offre la toute-puissance, mais lui dérobe le goût authentique de l'instant présent.",
        "D'un geste résolu, Thomas débranche le câble d'alimentation du simulateur et enfile son vieux sweat à capuche.",
        "Il dévale l'escalier quatre à quatre en glissant ses crampons de sport dans son sac de toile.",
        "Sur le terrain boueux, ses tirs ne sont pas guidés par un algorithme, mais chaque foulée le relie au monde vivant.",
        "Choisir la réalité avec ses aspérités imparfaites reste la plus courageuse des aventures humaines."
      ],
      "psycho": {
        "flesch": 62,
        "fleschDesc": "Exigeant / Collège 3ème",
        "lme": "15.4 mots / phrase",
        "manulex": "Collège fin de cycle 4 > 82%",
        "manulexDetails": "Lexique conceptuel et sensoriel avancé (feutré, tangible, archonte, bourrasques, dérobe, aspérités).",
        "syntaxDetails": "Emploi d'hypothétiques corrélatives ('S'il remet..., il obtiendra' vs 'S'il sort..., il devra'). Maîtrise des liens de causalité introspective.",
        "anaphoraDetails": "Dualité référentielle rigoureuse : l'univers virtuel ('Néo-Sora', 'cet univers artificiel', 'les pixels') vs le monde concret ('la réalité tangible', 'le terrain boueux')."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quelle récompense Thomas risque-t-il de rater dans le jeu vidéo s'il part rejoindre ses amis au parc ?",
          "attendu": "Une quête exclusive disponible seulement deux heures et le titre légendaire d'archonte du ciel virtuel.",
          "scaffold": "Indice : 'Regarde les lignes 7 et 8 qui précisent l'événement du jeu.'"
        },
        {
          "type": "Q2. Inférence causale / Choix existentiel",
          "q": "Pourquoi Thomas ressent-il un contraste violent dès qu'il enlève son casque VR ?",
          "attendu": "Parce que dans le jeu il est un héros tout-puissant admiré, alors que dans sa chambre il retrouve ses limites, le désordre et ses devoirs scolaires.",
          "scaffold": "Amorce : 'Compare ce qu'il est dans le jeu virtuel et ce qu'il retrouve dans sa vraie chambre.'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "La conclusion évoque les 'aspérités' de la réalité. Que signifie ce terme au sens figuré ?",
          "attendu": "Les difficultés, les imperfections, les rugosités de la vraie vie qui n'est pas lisse comme un écran.",
          "scaffold": "Métaphore : 'Une surface lisse ne frotte pas. Une surface avec des aspérités accroche. Dans la vraie vie, qu'est-ce qui accroche ?'"
        },
        {
          "type": "Q4. Inférence d'état émotionnel",
          "q": "Que comprend Thomas lorsqu'il regarde les feuilles d'automne par la fenêtre ?",
          "attendu": "Il comprend que la vraie vie avec ses sensations réelles (odeur, vent, amis) a bien plus de valeur que des pixels parfaits mais artificiels.",
          "scaffold": "Indice : 'Ligne 11 : que compare-t-il entre les pixels et l'odeur de la terre mouillée ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Résume le dilemme de Thomas et la décision courageuse qu'il a prise.",
          "attendu": "L'adolescent analyse la tentation du statut virtuel contre l'amitié réelle et la décision de débrancher la machine pour courir dehors.",
          "scaffold": "Trame : 'Entre quoi et quoi devait-il choisir, et pourquoi a-t-il choisi d'enfiler ses crampons ?'"
        }
      ]
    },
    {
      "id": "3eme_t2",
      "theme": "Streaming & Éthique",
      "themeTag": "Twitch & Dérapage",
      "title": "Le live Twitch caritatif qui a dérapé",
      "lines": [
        "Devant son studio de diffusion éclairé de néons violets, Yacine observe avec stupeur le compteur de son direct.",
        "À dix-sept ans, le jeune streamer anime un marathon caritatif de vingt-quatre heures au profit d'un refuge animalier.",
        "Plus de quarante mille spectateurs sont connectés simultanément et les dons s'accumulent à une vitesse vertigineuse.",
        "Cependant, l'épuisement accumulé après vingt heures de veille commence à obscurcir la lucidité de l'animateur.",
        "Pour pimenter le direct et franchir un nouveau palier financier, un internaute fortuné lance un défi provocateur.",
        "Il promet de verser cinq mille euros supplémentaires si Yacine accepte d'humilier publiquement un joueur débutant en ligne.",
        "Dans le salon de discussion, les messages défilent à un rythme frénétique : la foule réclame le spectacle et pousse au lynchage.",
        "Yacine sent la pression monter comme une marée irrésistible : cet argent permettrait de rénover l'ensemble des box du chenil.",
        "Le curseur de sa souris s'attarde sur le profil du jeune joueur novice qui ne soupçonne absolument rien.",
        "Le streamer prend une longue inspiration, ferme un instant les yeux et mesure la gravité morale de cet engrenage.",
        "D'une voix posée qui tranche avec l'agitation hystérique du tchat, Yacine prend la parole face à la caméra.",
        "« Cet argent est indispensable, mais nous ne financerons jamais le secours des animaux en piétinant la dignité d'un être humain. »",
        "Un lourd silence s'installe sur le chat avant qu'une déferlante de messages admiratifs ne submerge l'écran.",
        "D'autres donateurs anonymes prennent le relais et complètent la cagnotte sans exiger la moindre contrepartie cruelle.",
        "Yacine a prouvé que la popularité sur Internet n'a de sens que si elle s'accompagne d'un sens aigu de l'éthique.",
        "L'intégrité morale d'un individu se révèle toujours dans les moments où la tentation de compromis est la plus forte."
      ],
      "psycho": {
        "flesch": 60,
        "fleschDesc": "Exigeant (Palier 3ème TDL)",
        "lme": "15.8 mots / phrase",
        "manulex": "Fin Collège > 81%",
        "manulexDetails": "Lexique de haute tenue argumentative (simultanément, obscurcir, vertigineuse, frénétique, dignité, intégrité, compromis).",
        "syntaxDetails": "Périodes syntaxiques longues avec subordonnées temporelles, causales et concessives. Conçu pour le travail de l'argumentation orale et du débat d'idées.",
        "anaphoraDetails": "Gestion complexe : 'Yacine' -> 'le jeune streamer' -> 'l'animateur'. L'opinion publique ('la foule', 'le tchat', 'les donateurs') est articulée sans confusion."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quelle condition cruelle le donateur fortuné impose-t-il pour donner cinq mille euros de plus ?",
          "attendu": "Il exige que Yacine humilie publiquement un joueur débutant en direct devant tout le monde.",
          "scaffold": "Indice : 'Regarde la ligne 6 qui détaille le défi provocateur proposé.'"
        },
        {
          "type": "Q2. Inférence causale / Dilemme éthique",
          "q": "Pourquoi Yacine est-il tenté pendant un instant d'accepter ce défi honteux ?",
          "attendu": "Parce qu'il est épuisé et que cette somme importante permettrait de sauver les animaux et réparer les box du refuge.",
          "scaffold": "Amorce : 'À quoi devait servir tout cet argent pour les animaux du refuge ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte dit que Yacine a fait preuve d'une 'intégrité morale'. Que signifie 'intégrité' ?",
          "attendu": "L'honnêteté incorruptible, la droiture, le fait de refuser de faire le mal même lorsqu'on nous offre beaucoup d'argent.",
          "scaffold": "Étayage : 'Quelqu'un d'intègre est-il quelqu'un de pourri ou quelqu'un d'honnête et fidèle à ses valeurs ?'"
        },
        {
          "type": "Q4. Inférence d'impact social",
          "q": "Comment les spectateurs réagissent-ils quand Yacine refuse courageusement l'argent de la cruauté ?",
          "attendu": "Ils respectent son courage moral et donnent eux-mêmes l'argent manquant sans demander de violence en retour.",
          "scaffold": "Piste aux lignes 13 et 14 : 'Que font les autres donateurs anonymes juste après son discours ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "À la place de Yacine, aurais-tu eu le courage de refuser ? Explique tes arguments à l'oral.",
          "attendu": "L'adolescent formule une pensée structurée sur la fin et les moyens, en opposant le bien des animaux au respect de la personne humaine.",
          "scaffold": "Aide au débat : 'Peut-on faire une bonne action (aider un refuge) en commettant une mauvaise action (harceler un inconnu) ?'"
        }
      ]
    },
    {
      "id": "3eme_t3",
      "theme": "Deepfake",
      "themeTag": "IA générative & Manipulation",
      "title": "Le trucage vidéo de l'élection des délégués",
      "lines": [
        "À la veille du scrutin pour désigner les délégués généraux des classes de troisième, la tension est palpable.",
        "Nassim, un candidat investi et apprécié pour son écoute, découvre une vidéo dévastatrice circulant massivement sur TikTok.",
        "Le document audiovisuel semble le montrer en train de tenir des propos discriminatoires et méprisants envers les élèves boursiers.",
        "La synchronisation des lèvres est spectaculaire, le timbre vocal est indiscernable et l'éclairage de la cafétéria paraît authentique.",
        "En quelques heures, une vague d'indignation et d'insultes submerge le profil de Nassim, ruinant des mois d'engagement sincère.",
        "Au lieu de sombrer dans l'abattement ou de répliquer par des invectives stériles, le jeune homme réagit avec méthode.",
        "Accompagné de son amie Camélia, passionnée de programmation informatique, il examine le fichier vidéo image par image.",
        "En ralentissant la cadence d'affichage, ils identifient une pixellisation irrégulière autour des commissures des lèvres et des yeux.",
        "Les métadonnées de l'enregistrement révèlent en outre l'empreinte logicielle d'un générateur d'hypertrucage accessible en accès libre.",
        "Nassim convoque un rassemblement d'urgence au préau, en présence des enseignants, de la vie scolaire et de ses détracteurs.",
        "Sur un écran de projection, il décompose méthodiquement le trucage, dévoilant le modèle neuronal utilisé pour cloner son visage.",
        "L'auteur de la falsification, un partisan rival dépassé par la gravité de son geste, confesse publiquement sa culpabilité.",
        "L'indignation collective cède la place à un profond respect pour le sang-froid et la rigueur intellectuelle de Nassim.",
        "Le vote du lendemain consacre sa victoire électorale avec une majorité écrasante des suffrages exprimés par ses pairs.",
        "Cette épreuve a démontré que l'esprit critique et l'investigation rigoureuse restent les seuls remparts contre l'illusion numérique.",
        "À l'ère des vérités préfabriquées par les algorithmes, la vigilance citoyenne est le garant de la justice démocratique."
      ],
      "psycho": {
        "flesch": 61,
        "fleschDesc": "Exigeant / Collège 3ème",
        "lme": "15.4 mots / phrase",
        "manulex": "Fin Collège > 82%",
        "manulexDetails": "82,1% de vocabulaire conceptuel. Lexique civique, technique et juridique (scrutin, palpable, dévastatrice, indiscernable, invectives, métadonnées, hypertrucage, suffrages).",
        "syntaxDetails": "Périodes oratoires complexes, subordonnées participiales absolues (En ralentissant la cadence..., Sur un écran...), articulation causale et déductive rigoureuse.",
        "anaphoraDetails": "Réseau référentiel dense : Nassim (le candidat investi, le jeune homme) ; le faux document (la vidéo dévastatrice, le document audiovisuel, l'hypertrucage) ; le faussaire (l'auteur de la falsification, un partisan rival)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Quelle anomalie visuelle Nassim et Camélia repèrent-ils en décortiquant la vidéo au ralenti ?",
          "attendu": "Une pixellisation irrégulière autour des commissures des lèvres et du contour des yeux.",
          "scaffold": "Indice : 'Regarde la ligne 8 qui décrit ce qui apparaît quand on ralentit les images.'"
        },
        {
          "type": "Q2. Inférence causale / Stratégie d'action",
          "q": "Pourquoi Nassim organise-t-il une projection publique sous le préau au lieu de se défendre par écrit sur internet ?",
          "attendu": "Pour laver publiquement son honneur, apporter des preuves techniques irréfutables et faire œuvre de pédagogie face à tous ses détracteurs réunis.",
          "scaffold": "Amorce : 'Lignes 10 et 11 : quel impact la démonstration sur grand écran a-t-elle eu sur l'ensemble des élèves et sur le coupable ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte mentionne un 'hypertrucage'. De quel terme anglais courant ce mot est-il la traduction officielle ?",
          "attendu": "Du mot deepfake (une manipulation audio ou vidéo ultra-réaliste générée par intelligence artificielle).",
          "scaffold": "Étayage : 'Pense aux trucages par IA sur les visages sur Internet : comment appelle-t-on cela en anglais ?'"
        },
        {
          "type": "Q4. Inférence d'évaluation morale",
          "q": "Qu'est-ce qui pousse le créateur de la fausse vidéo à avouer publiquement sa culpabilité ?",
          "attendu": "La force incontestable des preuves techniques présentées et la honte de voir la lâcheté de son acte exposée au grand jour.",
          "scaffold": "Indice : 'Ligne 12 : comment le coupable se sent-il quand Nassim montre le programme utilisé ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Résume comment Nassim a retourné une calomnie destructrice en un triomphe démocratique.",
          "attendu": "L'adolescent analyse : le piège du deepfake -> le sang-froid face aux insultes -> l'enquête technique sur les pixels et métadonnées -> la démonstration publique menant à la victoire électorale.",
          "scaffold": "Structure : 'Quel mensonge a été créé, comment Nassim a-t-il prouvé le faux par la science, et comment l'élection s'est-elle terminée ?'"
        }
      ]
    },
    {
      "id": "3eme_t4",
      "theme": "Éco-responsabilité",
      "themeTag": "Fast fashion & Éthique",
      "title": "L'enquête sur les coulisses de la mode éphémère",
      "lines": [
        "Pour le concours de journalisme citoyen du collège, Éléonore décide d'enquêter sur les ravages de l'industrie textile.",
        "Attirée comme beaucoup de jeunes par les prix dérisoires des plateformes d'habillement en ligne, elle décide d'en percer les rouages.",
        "Elle achète un tee-shirt vendu pour une poignée d'euros et entreprend de remonter minutieusement sa filière de production.",
        "Les étiquettes de composition indiquent des fibres synthétiques dérivées du pétrole dont le tissage nécessite des solvants nocifs.",
        "En épluchant les rapports douaniers et les audits d'organisations non gouvernementales, l'adolescente découvre la dure réalité ouvrière.",
        "À des milliers de kilomètres, des ouvrières sous-payées travaillent quatorze heures par jour dans des hangars insalubres et dangereux.",
        "Les teintures toxiques non filtrées sont rejetées directement dans les fleuves locaux, détruisant tout écosystème fluvial.",
        "Pire encore, le vêtement n'est conçu que pour résister à trois ou quatre lavages avant de s'effilocher lamentablement.",
        "Cette obsolescence programmée pousse les consommateurs vers un cycle d'achat compulsif et destructeur pour l'environnement mondial.",
        "Éléonore synthétise ses données dans un reportage multimédia percutant intitulé « Le coût réel de nos vêtements à bas prix ».",
        "Lors de la restitution solennelle dans l'amphithéâtre, son exposé suscite une prise de conscience foudroyante parmi ses camarades.",
        "Elle propose des alternatives concrètes : la seconde main, la réparation textile solidaire et le boycott des marques prédatrices.",
        "Le club écologique de l'établissement décide dans la foulée d'organiser une friperie associative mensuelle au sein de l'école.",
        "Le jury décerne à Éléonore le grand prix départemental de la presse jeune pour son travail d'investigation sans concession.",
        "Acheter un objet n'est jamais un acte neutre, mais un choix politique et éthique qui impacte des vies lointaines.",
        "La lucidité citoyenne consiste à regarder au-delà de la vitrine pour mesurer l'empreinte humaine de nos consommations quotidiennes."
      ],
      "psycho": {
        "flesch": 60,
        "fleschDesc": "Exigeant (Palier 3ème TDL)",
        "lme": "15.8 mots / phrase",
        "manulex": "Fin Collège > 81%",
        "manulexDetails": "81,2% de vocabulaire conceptuel. Lexique économique, sociologique et environnemental de haut niveau (dérisoires, filière, solvants nocifs, insalubres, obsolescence programmée, prédatrices, concession).",
        "syntaxDetails": "Périodes syntaxiques longues avec subordonnées relatives, complétives et circonstancielles de concession. Favorise l'exercice du débat argumentatif et de la pensée critique.",
        "anaphoraDetails": "Réseau conceptuel articulé : Éléonore (la jeune enquêtrice, l'adolescente) ; le produit (le tee-shirt, le vêtement, les fibres synthétiques) ; le modèle industriel (la mode éphémère, l'industrie textile, les marques prédatrices)."
      },
      "questions": [
        {
          "type": "Q1. Repérage explicite / chronologique",
          "q": "Où sont rejetées les teintures toxiques non filtrées des usines de confection ?",
          "attendu": "Directement dans les fleuves locaux (détruisant les écosystèmes fluviaux).",
          "scaffold": "Indice : 'Regarde la ligne 7 qui décrit ce qui arrive aux cours d'eau voisins des usines.'"
        },
        {
          "type": "Q2. Inférence causale / Logique économique",
          "q": "Quel est le but des marques lorsqu'elles fabriquent des vêtements qui s'abîment après trois lavages ?",
          "attendu": "Forcer les clients à racheter constamment de nouveaux vêtements (obsolescence programmée pour alimenter la consommation permanente).",
          "scaffold": "Amorce : 'Ligne 9 : quel cycle sans fin cette mauvaise qualité crée-t-elle chez les clients ?'"
        },
        {
          "type": "Q3. Vocabulaire en contexte",
          "q": "Le texte parle d'« obsolescence programmée ». Que signifie cette expression ?",
          "attendu": "Le fait de concevoir délibérément un produit pour qu'il s'abîme ou devienne inutilisable rapidement, obligeant à en racheter un autre.",
          "scaffold": "Étayage : 'Pense à obsolète (qui ne fonctionne plus) et programmé (décidé à l'avance par le fabricant).'"
        },
        {
          "type": "Q4. Inférence d'impact collectif",
          "q": "Quelle initiative solidaire naît au collège immédiatement après la présentation d'Éléonore ?",
          "attendu": "La création d'une friperie associative mensuelle pour s'échanger et acheter des vêtements de seconde main au sein de l'établissement.",
          "scaffold": "Indice : 'Regarde la ligne 13 : qu'organise le club écologique du collège ?'"
        },
        {
          "type": "Q5. Reformulation synthétique libre",
          "q": "Explique pourquoi la conclusion affirme qu'acheter un vêtement 'n'est jamais un acte neutre'.",
          "attendu": "L'adolescent formule que chaque dépense d'argent valide des conditions de travail humaines et un impact écologique, reliant le consommateur aux ouvriers à l'autre bout de la planète.",
          "scaffold": "Aide au débat : 'Quand on achète un vêtement pas cher, qui paye le vrai prix avec sa santé ou la nature ?'"
        }
      ]
    }
  ]
};

// Export global pour compatibilité universelle
if (typeof window !== 'undefined') {
  window.DATABASE = DATABASE;
}
