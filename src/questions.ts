export type QuestionType = "VE" | "VI" | "QSER" | "FirstAid";
export type Question = {
  id: number;
  type: QuestionType;
  question: string;
  answer: string;
  checked?: boolean;
  context?: string;
};
export const questions = [
  {
    id: 1,
    type: "VI",
    question: "Montrez la commande De réglage de hauteur des feux.",
    answer: "Dispositif situé en général à gauche du volant.",
  },
  {
    id: 2,
    type: "QSER",
    question: "Pourquoi doit-on régler la hauteur des feux ?",
    answer: "Pour ne pas éblouir les autres usagers.",
  },
  {
    id: 3,
    type: "FirstAid",
    question:
      "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
    answer:
      "En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident.",
  },
  {
    id: 4,
    type: "VE",
    question: "Montrez où s'effectue le remplissage du produit lave-glace.",
    answer:
      "Le candidat ouvre le capot et montre le bocal. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
  },
  {
    id: 5,
    type: "QSER",
    question:
      "Pourquoi est-il préférable d'utiliser un liquide spécial en hiver ?",
    answer: "Pour éviter le gel du liquide.",
  },
  {
    id: 6,
    type: "FirstAid",
    question:
      "Quels comportements adopter en cas de diffusion du signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) ?",
    answer:
      "- Se mettre en sécurité. - S'informer grâce aux médias et sites internet des autorités dès que leur consultation est possible. - Respecter les consignes des autorités.",
  },
  {
    id: 7,
    type: "VI",
    question:
      "Mettez le rétroviseur intérieur en position \"nuit\". Si le rétroviseur de l'accompagnateur gène la manipulation du dispositif, l'explication suffit.",
    answer:
      'Si le véhicule possède un système automatique de mise en position "nuit" du rétroviseur intérieur, le candidat l\'indique.',
  },
  {
    id: 8,
    type: "QSER",
    question: "Quel est l'intérêt de la position nuit ?",
    answer: "Ne pas être ébloui par les feux du véhicule suiveur.",
    context: "(du rétroviseur intérieur)",
  },
  {
    id: 9,
    type: "FirstAid",
    question:
      "Comment est composé le signal d'alerte du Système d'alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
    answer:
      "Il se compose de deux codes distincts : - le Signal National d'alerte (SNA), variation du signal sur trois cycles successifs. - Le signal de fin d'alerte, signal continu.",
  },
  {
    id: 10,
    type: "VE",
    question: "Contrôlez l'état du flanc sur l'un des pneumatiques.",
    answer: "En bon état (toute anomalie doit être signalée).",
  },
  {
    id: 11,
    type: "QSER",
    question:
      "Citez un endroit où l'on peut trouver les pressions préconisées pour les pneumatiques ?",
    answer:
      "Elles sont indiquées : - soit sur une plaque sur une portière. - soit dans la notice d'utilisation du véhicule. - soit au niveau de la trappe à carburant.",
  },
  {
    id: 12,
    type: "le sens de circulation et le point kilométrique.",
    question:
      "Sur autoroute, comment indiquer avec précision les lieux de l'accident depuis un téléphone portable ?",
    answer: "En indiquant le numéro de l'autoroute",
  },
  {
    id: 13,
    type: "VI",
    question:
      "Faites fonctionner les essuie-glaces avants du véhicule sur la position la plus rapide.",
    answer: "",
  },
  {
    id: 14,
    type: "QSER",
    question: "Comment détecter leur usure en circulation ?",
    answer: "En cas de pluie lorsqu'ils laissent des traces sur le pare brise.",
    context: "(des essuie-glaces)",
  },
  {
    id: 15,
    type: "FirstAid",
    question: "Comment vérifier la respiration d'une victime ?",
    answer:
      "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration.",
  },
  {
    id: 16,
    type: "VE",
    question: "Vérifiez l'état et la propreté des plaques d'immatriculation.",
    answer:
      "Vérification des plaques à l'avant et à l'arrière, propres et en bon état (toute anomalie doit être signalée).",
  },
  {
    id: 17,
    type: "QSER",
    question:
      "Quelles sont les précautions à prendre en cas d'installation d'un porte vélo ?",
    answer: "La plaque d'immatriculation et les feux doivent être visibles.",
  },
  {
    id: 18,
    type: "FirstAid",
    question: "Qu'est ce qu'une perte de connaissance ?",
    answer:
      "C'est lorsque la victime ne répond pas et ne réagit pas mais respire.",
  },
  {
    id: 19,
    type: "VI",
    question: "Vérifiez la présence du gilet de haute visibilité.",
    answer:
      'Le candidat doit indiquer où il se trouve sans obligation de le sortir. Le terme " gilet jaune" peut être utilisé si le candidat ne comprend pas.',
  },
  {
    id: 20,
    type: "QSER",
    question:
      "En cas de panne ou d'accident, quel autre accessoire de sécurité est obligatoire ?",
    answer: "Le triangle de pré-signalisation.",
    context: "(que le gilet jaune)",
  },
  {
    id: 21,
    type: "FirstAid",
    question:
      "Si un dégagement d'urgence de la victime est nécessaire, où doit-elle être déplacée ?",
    answer:
      "Dans un endroit suffisamment éloigné du danger et de ses conséquences.",
  },
  {
    id: 22,
    type: "VE",
    question:
      "Montrez où s'effectue le contrôle du niveau du liquide de frein.",
    answer:
      "Le candidat montre que le niveau est entre le mini et le maxi. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
  },
  {
    id: 23,
    type: "QSER",
    question:
      "Quelle est la conséquence d'un niveau insuffisant du liquide de frein ?",
    answer: "Une perte d'efficacité du freinage.",
  },
  {
    id: 24,
    type: "FirstAid",
    question:
      "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
    answer:
      'Il faut porter le gilet de haute visibilité avant de sortir du véhicule. Le terme " gilet jaune" peut être utilisé par le candidat.',
  },
  {
    id: 25,
    type: "VI",
    question:
      "Vérifiez la présence du certificat d'immatriculation du véhicule (ou carte grise).",
    answer: "La photocopie est acceptée.",
  },
  {
    id: 26,
    type: "QSER",
    question:
      "Quels sont les deux autres documents obligatoires à présenter en cas de contrôle par les forces de l'ordre ?",
    answer: "L'attestation d'assurance et le permis de conduire.",
  },
  {
    id: 27,
    type: "FirstAid",
    question:
      "Pourquoi l'alerte auprès des services de secours doit-elle être rapide et précise ?",
    answer:
      "Pour permettre aux services de secours d'apporter les moyens adaptés aux victimes dans le délai le plus court.",
  },
  {
    id: 28,
    type: "VE",
    question: "Contrôlez l'état de tous les balais d'essuie-glace du véhicule.",
    answer: "",
  },
  {
    id: 29,
    type: "QSER",
    question:
      "Quel est le risque de circuler avec des balais d'essuie glace défectueux ?",
    answer: "Une mauvaise visibilité en cas d'intempéries.",
  },
  {
    id: 30,
    type: "FirstAid",
    question: "Quels sont les numéros d'urgence à composer ?",
    answer:
      "- Le 18, numéro d'appel des sapeurs-pompiers. - Le 15, numéro d'appel des SAMU. - Le 112, numéro de téléphone réservé aux appels d'urgence et valide dans l'ensemble de l'Union Européenne.",
  },
  {
    id: 31,
    type: "VI",
    question: "Montrez l'indicateur de niveau de carburant.",
    answer: "",
  },
  {
    id: 32,
    type: "QSER",
    question:
      "Quelles sont les précautions à prendre lors du remplissage du réservoir ?",
    answer: "Arrêter le moteur, ne pas fumer, ne pas téléphoner.",
  },
  {
    id: 33,
    type: "FirstAid",
    question:
      "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
    answer:
      "- La placer en position stable sur le côté ou position latérale de sécurité. - Alerter les secours. - Surveiller la respiration de la victime jusqu'à l'arrivée des secours.",
  },
  {
    id: 34,
    type: "VE",
    question:
      "Montrez où s'effectue le remplissage du liquide de refroidissement.",
    answer:
      "Le candidat ouvre le capot et montre le bocal. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
  },
  {
    id: 35,
    type: "QSER",
    question:
      "Quel est le danger si l'on complète le niveau du liquide lorsque le moteur est chaud ?",
    answer: "Un risque de brûlure.",
  },
  {
    id: 36,
    type: "FirstAid",
    question: "Comment arrêter une hémorragie ?",
    answer:
      "En appuyant fortement sur l'endroit qui saigne avec les doigts ou avec la paume de la main en mettant un tissu propre sur la plaie.",
  },
  {
    id: 37,
    type: "VI",
    question:
      "Actionnez le dégivrage de la lunette arrière et montrez le voyant ou le repère correspondant.",
    answer: "",
  },
  {
    id: 38,
    type: "QSER",
    question:
      "Quelle peut être la conséquence d'une panne de dégivrage de la lunette arrière ?",
    answer: "Une insuffisance ou une absence de visibilité vers l'arrière.",
  },
  {
    id: 39,
    type: "FirstAid",
    question:
      "Hors autoroute ou endroit dangereux, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
    answer:
      "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage, ou un sommet de côte.",
  },
  {
    id: 40,
    type: "VE",
    question:
      "Contrôlez l'état, la propreté et le fonctionnement de tous les clignotants côté trottoir.",
    answer:
      "Vérification des clignotants propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
  },
  {
    id: 41,
    type: "QSER",
    question: "Quelle est la signification d'un clignotement plus rapide ?",
    answer: "Non fonctionnement de l'une des ampoules.",
  },
  {
    id: 42,
    type: "FirstAid",
    question:
      "Quelles sont les conditions pour réaliser le dégagement d'urgence d'une victime en présence d'un danger réel, immédiat et non contrôlable ?",
    answer:
      "La victime doit être visible, facile à atteindre et rien ne doit gêner son dégagement. Il faut être sûr(e) de pouvoir réaliser le dégagement de la victime.",
  },
  {
    id: 43,
    type: "VI",
    question:
      "Montrez le voyant d'alerte signalant une pression insuffisante d'huile dans le moteur.",
    answer: "",
  },
  {
    id: 44,
    type: "QSER",
    question:
      "Quelles sont les conditions à respecter pour contrôler le niveau d'huile ?",
    answer: "Moteur froid et sur un terrain plat.",
  },
  {
    id: 45,
    type: "FirstAid",
    question:
      "Quelles sont les trois informations à transmettre aux services de secours ?",
    answer:
      "Le numéro de téléphone à partir duquel l'appel est émis, la nature et la localisation la plus précise du problème.",
  },
  {
    id: 46,
    type: "VE",
    question:
      "Contrôlez l'état, la propreté et le fonctionnement du ou des feux de brouillard arrière.",
    answer:
      "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
  },
  {
    id: 47,
    type: "QSER",
    question: "Dans quels cas les utilise-t-on ?",
    answer: "Par temps de brouillard et neige.",
    context: "(les feux de brouillard)",
  },
  {
    id: 48,
    type: "FirstAid",
    question: "Par quels moyens doit être réalisée l'alerte des secours ?",
    answer:
      "L'alerte doit être donnée à l'aide d'un téléphone portable ou, à défaut, d'un téléphone fixe ou d'une borne d'appel d'urgence.",
  },
  {
    id: 49,
    type: "VI",
    question: "Vérifiez la présence de l'éthylotest.",
    answer: "",
  },
  {
    id: 50,
    type: "QSER",
    question:
      "A partir de quel taux d'alcoolémie, en période de permis probatoire, est-on en infraction ?",
    answer:
      "0,2 g /l, c'est à dire 0 verre, car dès le 1er verre ce seuil peut être dépassé.",
  },
  {
    id: 51,
    type: "FirstAid",
    question:
      "Quel comportement doit-on adopter en présence d'une victime en arrêt cardiaque ?",
    answer:
      "- ALERTER: alerter immédiatement les secours. - MASSER: pratiquer une réanimation cardio-pulmonaire. - DEFIBRILLER: utiliser un défibrillateur automatique (DAE) si possible.",
  },
  {
    id: 52,
    type: "VE",
    question:
      "Contrôlez l'état, la propreté et le fonctionnement des feux de détresse à l'avant et à l'arrière.",
    answer:
      "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
  },
  {
    id: 53,
    type: "QSER",
    question: "Dans quels cas doit-on les utiliser ?",
    answer: "En cas de panne, d'accident ou de ralentissement important.",
    context: "(les feux de détresse)",
  },
  {
    id: 54,
    type: "FirstAid",
    question:
      "Dans quel cas peut-on positionner une victime en Position Latérale de Sécurité (PLS) ?",
    answer: "Si la victime ne répond pas, ne réagit pas et respire.",
  },
  {
    id: 55,
    type: "VI",
    question: "Montrez la commande de réglage du volant.",
    answer:
      "Le candidat montre l'emplacement. Il ne lui est pas demandé de changer son réglage.",
  },
  {
    id: 56,
    type: "QSER",
    question:
      "Pourquoi est-il important de bien régler son volant ? Citez deux exemples.",
    answer:
      "- Le confort de conduite. - L'accessibilité aux commandes. - La visibilité du tableau de bord. - L'efficacité des airbags.",
  },
  {
    id: 57,
    type: "FirstAid",
    question: "Dans quelle situation peut-on déplacer une victime ?",
    answer:
      "En présence d'un danger réel, immédiat, non contrôlable. Le déplacement de la victime doit rester exceptionnel.",
  },
  {
    id: 58,
    type: "VE",
    question:
      "Contrôlez l'état, la propreté et le fonctionnement des feux de route.",
    answer:
      "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
  },
  {
    id: 59,
    type: "QSER",
    question: "Citez un cas d'utilisation de l'appel lumineux.",
    answer:
      "- Pour avertir de son approche. - En cas de danger. - A la place de l'avertisseur sonore.",
  },
  {
    id: 60,
    type: "VI",
    question: "Positionnez la commande pour diriger l'air vers le pare-brise.",
    answer:
      "La position auto (désembuage automatique) peut être utilisée si le véhicule en est équipé.",
  },
  {
    id: 61,
    type: "QSER",
    question:
      "Citez deux éléments complémentaires permettant un désembuage efficace.",
    answer:
      "- La commande de vitesse de ventilation. - La commande d'air chaud. - La climatisation.",
  },
  {
    id: 62,
    type: "FirstAid",
    question:
      "Quel est l'objectif du Signal d'alerte et d'Information des Populations (SAIP) ?",
    answer:
      "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire.",
  },
  {
    id: 63,
    type: "VE",
    question:
      "Montrez où doit s'effectuer le contrôle du niveau d'huile moteur.",
    answer:
      "Le candidat montre la jauge. Pas de manipulation exigée. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
  },
  {
    id: 64,
    type: "QSER",
    question: "Quel est le principal risque d'un manque d'huile moteur ?",
    answer: "Un risque de détérioration ou de casse du moteur.",
  },
  {
    id: 65,
    type: "FirstAid",
    question:
      "Comment est diffusée l'alerte émise par le Signal d'alerte et d'Information aux Populations (SAIP) ?",
    answer:
      "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP.",
  },
  {
    id: 66,
    type: "VI",
    question: "Montrez le voyant d'alerte signalant un défaut de batterie.",
    answer: "",
  },
  {
    id: 67,
    type: "QSER",
    question:
      "Qu'est-ce qui peut provoquer la décharge de la batterie, moteur éteint ?",
    answer: "Les feux ou accessoires électriques en fonctionnement.",
  },
  {
    id: 68,
    type: "FirstAid",
    question:
      "A partir de quel âge peut-on suivre une formation aux premiers secours ?",
    answer: "A partir de 10 ans.",
  },
  {
    id: 69,
    type: "VE",
    question: "Montrez l'emplacement de la batterie du véhicule.",
    answer:
      "Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
  },
  {
    id: 70,
    type: "QSER",
    question:
      "Quelle est la solution en cas de panne de batterie pour démarrer le véhicule sans le déplacer ?",
    answer:
      'Brancher une deuxième batterie en parallèle (ou les "+" ensemble et les "-" ensemble) ou la remplacer.',
  },
  {
    id: 71,
    type: "FirstAid",
    question:
      "Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire sur une victime en arrêt cardiaque ?",
    answer:
      "Car les lésions du cerveau, surviennent dès les premières minutes.",
  },
  {
    id: 72,
    type: "VI",
    question:
      "De quelle couleur est le voyant qui indique une défaillance du système de freinage ?",
    answer: "",
  },
  {
    id: 73,
    type: "QSER",
    question:
      "Quel est le risque de circuler avec un frein de parking mal desserré ?",
    answer: "Une dégradation du système de freinage.",
  },
  {
    id: 74,
    type: "VE",
    question:
      "Contrôlez l'état, la propreté et le fonctionnement des feux de croisement.",
    answer:
      "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
  },
  {
    id: 75,
    type: "QSER",
    question:
      "Quelles sont les conséquences d'un mauvais réglage de ces feux ?",
    answer:
      "Une mauvaise vision vers l'avant et un risque d'éblouissement des autres usagers.",
    context: "(Les feux de croisement)",
  },
  {
    id: 76,
    type: "VI",
    question:
      "Montrez le voyant d'alerte signalant une température trop élevée du liquide de refroidissement.",
    answer: "",
  },
  {
    id: 77,
    type: "QSER",
    question:
      "Quelle est la conséquence d'une température trop élevée de ce liquide ?",
    answer: "Une surchauffe ou une casse moteur.",
    context: "(Le liquide de refroidissement)",
  },
  {
    id: 78,
    type: "FirstAid",
    question:
      "Lors d'un appel avec les services de secours, pourquoi devez-vous attendre que votre correspondant vous autorise à raccrocher ?",
    answer:
      "Car il peut nous conseiller ou nous guider dans la réalisation des gestes à faire, ou ne pas faire, jusqu'à l'arrivée des secours.",
  },
  {
    id: 79,
    type: "VE",
    question: "Vérifiez l'état et la propreté des dispositifs réfléchissants.",
    answer:
      "Vérification des dispositifs, propres et en bon état (toute anomalie doit être signalée).",
  },
  {
    id: 80,
    type: "QSER",
    question: "Quelle est l'utilité des dispositifs réfléchissants ?",
    answer: "Rendre visible le véhicule la nuit.",
  },
  {
    id: 81,
    type: "FirstAid",
    question:
      "A quel moment pouvez-vous mettre fin à un appel avec les secours ?",
    answer: "Uniquement lorsque notre correspondant nous invite à le faire.",
  },
  {
    id: 82,
    type: "VI",
    question:
      "Montrez le voyant signalant la mauvaise fermeture d'une portière.",
    answer: "",
  },
  {
    id: 83,
    type: "QSER",
    question:
      "Quelle précaution dois-je prendre pour que les enfants installés à l'arrière ne puissent pas ouvrir leur portière ?",
    answer: "Actionner la sécurité enfant sur les deux portières arrière.",
  },
  {
    id: 84,
    type: "FirstAid",
    question:
      "Citez les trois manières d'évaluer l'état de conscience d'une victime.",
    answer:
      '- Lui poser des questions simples ("comment ça va ?", "vous m\'entendez ?"). - Lui secouer doucement les épaules. - Lui prendre la main en lui demandant d\'exécuter un geste simple ("serrez-moi la main").',
  },
  {
    id: 85,
    type: "VE",
    question:
      "Contrôlez l'état, la propreté et le fonctionnement des feux de position à l'avant et à l'arrière du véhicule.",
    answer:
      "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
  },
  {
    id: 86,
    type: "QSER",
    question: "Par temps clair, à quelle distance doivent-ils être visibles ?",
    answer: "A 150 mètres.",
  },
  {
    id: 87,
    type: "FirstAid",
    question:
      "Quels sont les risques pour une personne en perte de connaissance qui est allongée sur le dos ?",
    answer: "L'arrêt respiratoire et l'arrêt cardiaque.",
  },
  {
    id: 88,
    type: "VI",
    question: "Actionnez les feux de détresse.",
    answer: "",
  },
  {
    id: 89, //duplicate of 53
    type: "QSER",
    question: "Quand les utilise-t-on ?",
    answer: "En cas de panne, d'accident ou de ralentissement important.",
    context: "(les feux de détresse)",
  },
  {
    id: 90,
    type: "VE",
    question:
      "Sur le flanc d'un pneumatique, désignez le repère du témoin d'usure de la bande de roulement.",
    answer: "",
  },
  {
    id: 91,
    type: "QSER",
    question:
      "Qu'est-ce que l'aquaplanage, et quelle peut être sa conséquence ?",
    answer:
      "La présence d'un film d'eau entre le pneumatique et la chaussée pouvant entraîner une perte de contrôle du véhicule.",
  },
  {
    id: 92,
    type: "VI",
    question:
      "Montrez la commande permettant d'actionner le régulateur de vitesse.",
    answer: "",
  },
  {
    id: 93,
    type: "QSER",
    question:
      "Sans actionner la commande du régulateur, comment le désactiver rapidement ?",
    answer: "En appuyant sur la pédale de frein ou d'embrayage.",
  },
  {
    id: 94,
    type: "FirstAid",
    question:
      "Sur autoroute, comment indiquer avec précision les lieux de l'accident depuis un téléphone portable ?",
    answer:
      "En indiquant le numéro de l'autoroute, le sens de circulation et le point kilométrique.",
  },
  {
    id: 95,
    type: "VE",
    question:
      "Ouvrez la trappe à carburant et/ou vérifiez la bonne fermeture du bouchon.",
    answer: "",
  },
  {
    id: 96,
    type: "VI",
    question: "Sans l'actionner, montrez la commande de l'avertisseur sonore.",
    answer: "",
  },
  {
    id: 97,
    type: "QSER",
    question:
      "Dans quel cas peut-on utiliser l'avertisseur sonore en agglomération ?",
    answer: "En cas de danger immédiat.",
  },
  {
    id: 98,
    type: "FirstAid",
    question:
      "Pourquoi ne faut-il pas laisser une personne en perte de connaissance allongée sur le dos ?",
    answer:
      "Car elle risque un étouffement par : - Des liquides présents dans la gorge. - La chute de la langue en arrière.",
  },
  {
    id: 99,
    type: "VE",
    question: "Montrez où s'effectue le remplissage de l'huile moteur.",
    answer:
      "Le candidat montre le bouchon de remplissage. Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
  },
  {
    id: 100,
    type: "QSER",
    question: "Quel est le risque d'un manque d'huile moteur ?",
    answer: "Un risque de détérioration ou de casse du moteur.",
  },
  {
    id: 101,
    type: "FirstAid",
    question:
      "L'utilisation d'un Défibrillateur Automatisé (DAE) sur une victime qui n'est pas en arrêt cardiaque présente-t-elle un risque ?",
    answer:
      "Non, car le défibrillateur se déclenche uniquement quand la victime est en arrêt cardiaque.",
  },
  {
    id: 102,
    type: "VI",
    question:
      "Montrez la commande permettant de désactiver l'airbag du passager avant.",
    answer: "",
  },
  {
    id: 103,
    type: "QSER",
    question: "Dans quelle situation doit-on le désactiver ?",
    answer:
      "Lors du transport d'un enfant à l'avant dans un siège auto, dos à la route.",
    context: "(L'airbag du passager avant)",
  },
  {
    id: 104,
    type: "VE",
    question:
      "A l'aide de la plaque indicative, donnez la pression préconisée pour les pneumatiques arrières, véhicule chargé.",
    answer: "",
  },
  {
    id: 105,
    type: "QSER",
    question:
      "A quelle fréquence est-il préconisé de vérifier la pression des pneus ?",
    answer:
      "Chaque mois, pour une utilisation normale de son véhicule, et avant chaque long trajet.",
  },
  {
    id: 106,
    type: "VI",
    question:
      "Montrez le voyant signalant l'absence de bouclage de la ceinture de sécurité du conducteur.",
    answer: "",
  },
  {
    id: 107,
    type: "QSER",
    question:
      "En règle générale, à partir de quel âge un enfant peut-il être installé sur le siège passager avant du véhicule ?",
    answer: "10 ans.",
  },
  {
    id: 108,
    type: "FirstAid",
    question:
      "Comment est composé le signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
    answer:
      "Il se compose de deux codes distincts : - Le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. - Le signal de fin d'alerte, signal continu.",
  },
  {
    id: 109,
    type: "VE",
    question:
      "Vérifiez le fonctionnement de l'éclairage de la plaque d'immatriculation à l'arrière.",
    answer: "Toute anomalie doit être signalée.",
  },
  {
    id: 110,
    type: "QSER",
    question:
      "Un défaut d'éclairage de la plaque lors du contrôle technique entraîne-t-il une contre-visite ?",
    answer: "Oui.",
  },
  {
    id: 111,
    type: "VI",
    question:
      "Vérifiez la présence de l'attestation d'assurance du véhicule et de sa vignette sur le pare-brise.",
    answer: "",
  },
  {
    id: 112,
    type: "QSER",
    question:
      "Quels sont les deux autres documents obligatoires à présenter en cas de contrôle par les forces de l'ordre ?",
    answer:
      "Le certificat d'immatriculation et le permis de conduire. Le terme « carte grise » est accepté.",
  },
  {
    id: 113,
    type: "FirstAid",
    question: "Qu'est ce qu'une hémorragie ?",
    answer:
      "C'est une perte de sang prolongée qui ne s'arrête pas. Elle imbibe de sang un mouchoir en quelques secondes.",
  },
  {
    id: 114,
    type: "VE",
    question:
      "Indiquez où se situe la sécurité enfant sur l'une des portières à l'arrière du véhicule.",
    answer: "",
  },
  {
    id: 115,
    type: "QSER",
    question:
      "Si la sécurité enfant est enclenchée, est-il possible d'ouvrir la portière arrière depuis l'extérieur ?",
    answer: "Oui.",
  },
  {
    id: 116,
    type: "FirstAid",
    question:
      "Quels sont les risques pour une personne victime d'une hémorragie ?",
    answer:
      "Entraîner pour la victime une détresse circulatoire ou un arrêt cardiaque.",
  },
  {
    id: 117,
    type: "VI",
    question:
      "Allumez le(s) feu(x) de brouillard arrière(s) et montrez le voyant correspondant.",
    answer: "",
  },
  {
    id: 118,
    type: "QSER",
    question: "Pouvez-vous les utiliser par forte pluie ?",
    answer: "Non.",
    context: "(Les feux de brouillard)",
  },
  {
    id: 119,
    type: "FirstAid",
    question: "Quels sont les signes d'un arrêt cardiaque ?",
    answer:
      "La victime ne répond pas, ne réagit pas et ne respire pas ou présente une respiration anormale.",
  },
  {
    id: 120,
    type: "VE",
    question:
      "Avec l'assistance de l'accompagnateur, contrôlez l'état, la propreté et le fonctionnement du ou des feux de recul.",
    answer:
      "Vérification des feux, propres, en bon état et qui fonctionnent (toute anomalie doit être signalée).",
  },
  {
    id: 121,
    type: "QSER",
    question: "Quelles sont leurs deux utilités ?",
    answer:
      "- Éclairer la zone de recul la nuit. - Avertir les autres usagers de la manœuvre.",
    context: "(Les feux de recul)",
  },
  {
    id: 122,
    type: "FirstAid",
    question: "Qu'est ce qu'un défibrillateur automatisé externe (DAE) ?",
    answer:
      "C'est un appareil qui peut permettre de rétablir une activité cardiaque normale à une victime en arrêt cardiaque.",
  },
  {
    id: 123,
    type: "VI",
    question:
      "Montrez comment régler la hauteur de l'appui-tête du siège conducteur.",
    answer: "",
  },
  {
    id: 124,
    type: "QSER",
    question: "Quelle est son utilité ?",
    answer:
      "Permet de retenir le mouvement de la tête en cas de choc et de limiter les blessures.",
    context: "(L'appui-tête du siège conducteur)",
  },
  {
    id: 125,
    type: "FirstAid",
    question: "Par quels moyens doit être réalisée l'alerte des secours ?",
    answer:
      "L'alerte doit être donnée à l'aide d'un téléphone portable ou, à défaut, d'un téléphone fixe, ou d'une borne d'appel d'urgence.",
  },
  {
    id: 126,
    type: "VE",
    question:
      "Avec l'assistance de l'accompagnateur, contrôlez l'état, la propreté et le fonctionnement des feux de stop.",
    answer:
      "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
  },
  {
    id: 127,
    type: "QSER",
    question: "Quelle est la conséquence en cas de panne des feux de stop ?",
    answer:
      "Un manque d'information pour les usagers suiveurs et un risque de collision.",
  },
  {
    id: 128,
    type: "FirstAid",
    question:
      "Lors d'un appel avec les services de secours, pourquoi devez-vous attendre que votre correspondant vous autorise à raccrocher ?",
    answer:
      "Car il peut nous conseiller ou nous guider dans la réalisation des gestes à faire, ou ne pas faire, jusqu'à l'arrivée des secours.",
  },
  {
    id: 129,
    type: "VI",
    question:
      "De quelle couleur est le voyant qui indique au conducteur que le feu de brouillard arrière est allumé ?",
    answer: "",
  },
  {
    id: 130,
    type: "QSER",
    question:
      "Quelle est la différence entre un voyant orange et un voyant rouge ?",
    answer:
      "- Rouge : Une anomalie de fonctionnement ou un danger. - Orange : un élément important.",
  },
  {
    id: 131,
    type: "FirstAid",
    question: "Qu'est ce qu'un arrêt cardiaque ?",
    answer: "Le cœur ne fonctionne plus ou fonctionne d'une façon anarchique.",
  },
  {
    id: 132,
    type: "VE",
    question: "Ouvrez et refermez le capot, puis vérifiez sa bonne fermeture.",
    answer: "",
  },
  {
    id: 133,
    type: "QSER",
    question:
      "En roulant, quel est le risque d'une mauvaise fermeture du capot ?",
    answer: "Un risque d'ouverture du capot pouvant entraîner un accident.",
  },
  {
    id: 134,
    type: "FirstAid",
    question:
      "Quel est le risque principal d'un arrêt cardiaque sans intervention des secours ?",
    answer: "La mort de la victime qui survient en quelques minutes.",
  },
  {
    id: 135,
    type: "VI",
    question: "Montrez la commande de recyclage de l'air.",
    answer: "",
  },
  {
    id: 136,
    type: "QSER",
    question:
      "Quel peut être le risque de maintenir le recyclage de l'air de manière prolongée ?",
    answer:
      "Un risque de mauvaise visibilité par l'apparition de buée sur les surfaces vitrées.",
  },
  {
    id: 137,
    type: "VE",
    question: "Montrez l'orifice de remplissage du produit lave-glace.",
    answer:
      "Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
  },
  {
    id: 138,
    type: "QSER",
    question:
      "Quel est le principal risque d'une absence de liquide lave-glace ?",
    answer: "Une mauvaise visibilité.",
  },
  {
    id: 139,
    type: "FirstAid",
    question:
      "Pourquoi faut-il pratiquer immédiatement une réanimation cardio-pulmonaire sur une victime en arrêt cardiaque ?",
    answer: "Car les lésions du cerveau surviennent dès les premières minutes.",
  },
  {
    id: 140,
    type: "VI",
    question: "Allumez les feux de route et montrez le voyant correspondant.",
    answer: "",
  },
  {
    id: 141,
    type: "QSER",
    question:
      "Quel est le risque de maintenir les feux de route lors d'un croisement avec d'autres usagers ?",
    answer: "Un risque d'éblouissement des autres usagers.",
  },
  {
    id: 142,
    type: "FirstAid",
    question:
      "Quel est l'objectif du Signal d'Alerte et d'Information des Populations (SAIP) ?",
    answer:
      "Avertir la population d'un danger imminent ou qu'un événement grave est en train de se produire.",
  },
  {
    id: 143,
    type: "VE",
    question:
      "Vérifiez l'état, la propreté et le fonctionnement des feux diurnes.",
    answer:
      "Vérification des feux, propres, en bon état et qui fonctionnent (toute anomalie doit être signalée).",
  },
  {
    id: 144,
    type: "QSER",
    question: "Quelle est leur utilité ?",
    answer: "Rendre le véhicule plus visible le jour.",
    context: "(Les feux diurnes)",
  },
  {
    id: 145,
    type: "VI",
    question: "Vérifiez la présence du constat amiable dans le véhicule.",
    answer: "",
  },
  {
    id: 146,
    type: "QSER",
    question:
      "En cas d'accident, dans quel délai doit-il être transmis à l'assureur ?",
    answer: "5 jours.",
  },
  {
    id: 147,
    type: "VE",
    question: "Vérifiez la présence du triangle de pré-signalisation.",
    answer: "",
  },
  {
    id: 148,
    type: "QSER",
    question: "Utilise-t-on le triangle de pré-signalisation sur autoroute ?",
    answer: "Non.",
  },
  {
    id: 149,
    type: "VI",
    question:
      "De quelle couleur est le voyant qui indique une défaillance du système de freinage.",
    answer: "",
  },
  {
    id: 150,
    type: "VE",
    question:
      "Montrez où s'effectue le changement d'une ampoule à l'avant du véhicule.",
    answer:
      "Si le candidat a des difficultés pour ouvrir le capot, l'accompagnateur peut lui indiquer comment procéder.",
  },
  {
    id: 151,
    type: "QSER",
    question:
      "Quelles sont les conséquences en cas de panne d'un feu de croisement ?",
    answer:
      "Une mauvaise visibilité et le risque d'être confondu avec un deux roues.",
  },
  {
    id: 152,
    type: "FirstAid",
    question:
      "Citez les trois manières d'évaluer l'état de conscience d'une victime ?",
    answer:
      '- Lui poser des questions simples ("comment ça va ?", "vous m\'entendez ?"). - Lui secouer doucement les épaules. - Lui prendre la main en lui demandant d\'exécuter un geste simple ("serrez-moi la main").',
  },
  {
    id: 153,
    type: "VI",
    question:
      "Si le véhicule en est équipé, montrez la commande du limiteur de vitesse.",
    answer: "",
  },
  {
    id: 154,
    type: "QSER",
    question: "Quelle est l'utilité d'un limiteur de vitesse ?",
    answer: "Ne pas dépasser la vitesse programmée par le conducteur.",
  },
  {
    id: 155,
    type: "FirstAid",
    question: "Quels sont les numéros d'urgence à appeler ?",
    answer:
      "- Le 18, numéro d'appel des sapeurs-pompiers. - Le 15, numéro d'appel des SAMU. - Le 112, numéro de téléphone réservé aux appels d'urgence et valide dans l'ensemble de l'Union Européenne.",
  },
  {
    id: 156,
    type: "VE",
    question:
      "Montrez où s'effectue le changement d'une ampoule à l'arrière du véhicule.",
    answer: "",
  },
  {
    id: 157,
    type: "QSER",
    question:
      "Quelles sont les conséquences en cas de panne d'un feu de position arrière ?",
    answer: "Être mal vu et un risque de collision.",
  },
  {
    id: 158,
    type: "FirstAid",
    question:
      "Comment est diffusée l'alerte émise par le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
    answer:
      "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP.",
  },
  {
    id: 159,
    type: "VI",
    question: "Faites fonctionner l'essuie-glace arrière du véhicule.",
    answer: "",
  },
  {
    id: 160,
    type: "QSER",
    question:
      "Pour une bonne visibilité vers l'arrière, en plus de l'utilisation de l'essuie-glace, quelle commande pouvez-vous actionner par temps de pluie ?",
    answer:
      "La commande de désemblage arrière. Le terme dégivrage peut remplacer celui de désemblage.",
  },
  {
    id: 161,
    type: "FirstAid",
    question:
      "Quels comportements adopter en présence d'une victime qui ne répond pas et ne réagit pas, mais respire ?",
    answer:
      "- La placer en position stable sur le côté ou position latérale de sécurité. - Alerter les secours. - Surveiller la respiration de la victime jusqu'à l'arrivée des secours.",
  },
  {
    id: 162,
    type: "VE",
    question: "Ouvrez et refermez le coffre, puis vérifiez sa bonne fermeture.",
    answer: "",
  },
  {
    id: 163,
    type: "QSER",
    question:
      "Lorsque vous transportez un poids important dans le coffre, quelles sont les précautions à prendre en ce qui concerne les pneumatiques et l'éclairage avant ?",
    answer:
      "Augmenter la pression des pneumatiques et régler la hauteur des feux avants.",
  },
  {
    id: 164,
    type: "FirstAid",
    question:
      "L'utilisation d'un Défibrillateur Automatisé (DAE) sur une victime qui n'est pas en arrêt cardiaque présente-t-elle un risque ?",
    answer:
      "Non car le défibrillateur se déclenche uniquement quand la victime est en arrêt cardiaque.",
  },
  {
    id: 165,
    type: "VI",
    question:
      "Indiquez où se situe les attaches de type Isofix dans le véhicule.",
    answer:
      "Pour info : les attaches de type Isofix sont obligatoires sur les véhicules neufs depuis 2011.",
  },
  {
    id: 166,
    type: "QSER",
    question:
      "Peut-on fixer tous les sièges enfant sur des attaches de type Isofix ?",
    answer: "Non (uniquement ceux compatibles avec ce type d'attache).",
  },
  {
    id: 167,
    type: "FirstAid",
    question: "Comment vérifier la respiration d'une victime ?",
    answer:
      "Regarder si le ventre et la poitrine se soulèvent et sentir de l'air à l'expiration.",
  },
  {
    id: 168,
    type: "QSER",
    question:
      "Quels sont les risques de circuler avec des objets sur la plage arrière ?",
    answer:
      "Une mauvaise visibilité vers l'arrière et un risque de projection en cas de freinage brusque ou de choc.",
  },
  {
    id: 169,
    type: "FirstAid",
    question: "Qu'est ce qu'une hémorragie ?",
    answer:
      "C'est une perte de sang prolongée qui ne s'arrête pas. Elle imbibe de sang un mouchoir en quelques secondes.",
  },
  {
    id: 170,
    type: "VI",
    question:
      "Montrez sur le tableau de bord le voyant indiquant une baisse de pression d'air d'un pneumatique.",
    answer:
      "Pour info: obligatoire sur tous les véhicules neufs mis en circulation à compter du 01/11/2014.",
  },
  {
    id: 171,
    type: "QSER",
    question:
      "A quelle fréquence est-il préconisé de vérifier la pression d'air des pneumatiques ?",
    answer: "Tous les mois.",
  },
  {
    id: 172,
    type: "FirstAid",
    question: "Qu'est ce qu'un arrêt cardiaque ?",
    answer: "Le cœur ne fonctionne plus ou fonctionne d'une façon anarchique.",
  },
  {
    id: 173,
    type: "VI",
    question:
      "Procédez à l'ouverture du capot puis à sa fermeture en vous assurant de son verrouillage.",
    answer: "",
  },
  {
    id: 174,
    type: "QSER",
    question:
      "Pour un capot s'ouvrant depuis l'avant du véhicule, quelle est l'utilité du dispositif de sécurité ?",
    answer:
      "Empêcher l'ouverture du capot en circulation en cas de mauvais verrouillage.",
  },
  {
    id: 175,
    type: "VI",
    question: "Montrez la commande de réglage de hauteur des feux.",
    answer: "Dispositif situé en général à gauche du volant.",
  },
  {
    id: 176,
    type: "FirstAid",
    question:
      "Comment et pourquoi protéger une zone de danger en cas d'accident de la route ?",
    answer:
      "En délimitant clairement et largement la zone de danger de façon visible pour protéger les victimes et éviter un sur-accident",
  },
  {
    id: 177,
    type: "VE",
    question: "Montrez où se situent les gicleurs de lave-glace avant.",
    answer: "",
  },
  {
    id: 178,
    type: "QSER",
    question:
      "Quelle est la principale conséquence d'un dispositif de lave-glace défaillant ?",
    answer:
      "Une mauvaise visibilité due à l'impossibilité de nettoyer le pare-brise.",
  },
  {
    id: 179,
    type: "FirstAid",
    question:
      "Comment est composé le signal d'alerte du Système d'Alerte et d'Information des Populations (SATP) diffusé par les sirènes ?",
    answer:
      "Il se compose de deux codes distincts : - le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. - Le signal de fin d'alerte, signal continu.",
  },
  {
    id: 180,
    type: "QSER",
    question: "Comment détecte-t-on leur usure en circulation ?",
    answer:
      "En cas de pluie, lorsqu'ils laissent des traces sur le pare brise.",
    context: "(Les essuie glaces avant)",
  },
  {
    id: 181,
    type: "FirstAid",
    question:
      "En cas de panne ou d'accident, quel équipement de sécurité doit être porté avant de quitter le véhicule ?",
    answer:
      'Il faut porter le gilet de haute visibilité avant de sortir du véhicule. Le terme "gilet jaune" peut être utilisé par le candidat.',
  },
  {
    id: 182,
    type: "VI",
    question: "Vérifiez la présence du gilet de haute visibilité.",
    answer:
      'Le candidat doit montrer où il se trouve sans obligation de le sortir. Le terme "gilet jaune" peut être utilisé si le candidat ne comprend pas.',
  },
  {
    id: 183,
    type: "QSER",
    question:
      "Quelle peut être la conséquence d'une panne de dégivrage de la lunette arrière ?",
    answer: "L'insuffisance ou l'absence de visibilité vers l'arrière.",
  },
  {
    id: 184,
    type: "VE",
    question:
      "Contrôlez l'état, la propreté et le fonctionnement de tous les clignotants côté trottoir.",
    answer:
      "Vérification des clignotants, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
  },
  {
    id: 185,
    type: "FirstAid",
    question:
      "Quelles sont les précautions à prendre pour réaliser le dégagement d'urgence d'une victime en présence d'un danger réel, immédiat et non contrôlable ?",
    answer:
      "La victime doit être visible, facile à atteindre et rien ne doit gêner son dégagement. Il faut être sûr(e) de pouvoir réaliser le dégagement de la victime.",
  },
  {
    id: 186,
    type: "QSER",
    question:
      "Quelles sont les conditions à respecter pour compléter le niveau d'huile ?",
    answer: "Moteur froid et sur un terrain plat.",
  },
  {
    id: 187,
    type: "QSER",
    question: "Citez un cas d'utilisation d'un appel lumineux.",
    answer:
      "- Pour avertir de son approche. - En cas de danger. - A la place de l'avertisseur sonore.",
  },
  {
    id: 188,
    type: "VE",
    question: "Positionnez la commande pour diriger l'air vers le pare-brise.",
    answer:
      "La position auto (désemblage automatique) peut être utilisée si le véhicule en est équipé.",
  },
  {
    id: 189,
    type: "QSER",
    question:
      "Citez deux éléments complémentaires permettant un désemblage efficace ?",
    answer:
      "La commande de vitesse de ventilation. - La commande d'air chaud. - La climatisation.",
  },
  {
    id: 190,
    type: "FirstAid",
    question:
      "Comment est diffusée l'alerte émise par Le Signal d'Alerte et d'Information aux Populations (SAIP) ?",
    answer:
      "Grâce aux sirènes, aux médias tels que Radio France et France Télévision ou encore grâce à l'application SAIP.",
  },
  {
    id: 191,
    type: "FirstAid",
    question:
      "En général, en cas de panne ou d'accident, où doit être placé le triangle de pré-signalisation ?",
    answer:
      "Le triangle de pré-signalisation doit être placé à une distance d'environ 30 m de la panne ou de l'accident, ou avant un virage ou un sommet de côte.",
  },
  {
    id: 192,
    type: "FirstAid",
    question: "Dans quelle situation peut-on déplacer une victime ?",
    answer:
      "En présence d'un danger réel, immédiat, non contrôlable. Ce déplacement doit rester exceptionnel.",
  },
  {
    id: 193,
    type: "QSER",
    question:
      "Quelle est la conséquence d'une température trop élevée de ce liquide ?",
    answer: "La surchauffe ou la casse moteur.",
  },
  {
    id: 194,
    type: "FirstAid",
    question:
      "Quels comportements adopter en cas de diffusion du signal d'alerte du Système d'alerte et d'Information des Populations (SAIP) ?",
    answer:
      "- Se mettre en sécurité. - S'informer grâce aux médias et sites internet des autorités dès que leur consultation est possible. - Respecter les consignes des autorités.",
  },
  {
    id: 195,
    type: "QSER",
    question:
      "A quelle fréquence est-il préconisé de vérifier la pression des pneus ?",
    answer:
      "Chaque mois pour une utilisation normale de son véhicule et avant chaque long trajet.",
  },
  {
    id: 196,
    type: "VE",
    question:
      "Montrez la commande permettant de désactiver l'airbag du passager avant.",
    answer: "",
  },
  {
    id: 197,
    type: "QSER",
    question: "Dans quelle situation doit-on le désactiver ?",
    answer: "Lors du transport d'un enfant dans un siège auto dos à la route.",
    context: "(L'airbag du passager avant)",
  },
  {
    id: 198,
    type: "FirstAid",
    question:
      "Comment est composé le signal d'alerte du Système d'Alerte et d'Information des Populations (SAIP) diffusé par les sirènes ?",
    answer:
      "Il se compose de deux codes distincts : - le Signal National d'Alerte (SNA), variation du signal sur trois cycles successifs. - Le signal de fin d'alerte, signal continu.",
  },
  {
    id: 199,
    type: "FirstAid",
    question: "Quels sont les signes d'un arrêt cardiaque ?",
    answer:
      "La victime ne répond pas, ne réagit pas et ne respire pas, ou présente une respiration anormale.",
  },
  {
    id: 200,
    type: "VE",
    question:
      "Vérifiez l'état, la propreté et le fonctionnement des feux diurnes.",
    answer:
      "Vérification des feux, propres, en bon état et fonctionnent (toute anomalie doit être signalée).",
  },
  {
    id: 201,
    type: "QSER",
    question:
      "Pour une bonne visibilité vers l'arrière, en plus de l'utilisation de l'essuie-glace, quelle commande pouvez-vous actionner par temps de pluie ?",
    answer:
      "La commande de désembuage arrière. Le terme dégivrage peut remplacer celui de désembuage.",
  },
  {
    id: 202,
    type: "VI",
    question:
      "Montrez le voyant indiquant une baisse de pression d'air d'un pneumatique ?",
    answer:
      "Pour info : obligatoire sur tous les véhicules neufs mis en circulation à compter du 01/11/2014.",
  },
  {
    id: 203,
    type: "VE",
    question: "Montrez où se situent les gicleurs de lave-glace avant ?",
    answer: "",
  },
];
