import { BRAND } from "@/config/site";

/**
 * French dictionary — the reference language. Its shape defines `Dictionary`;
 * every other language must provide exactly the same keys.
 * Placeholders in braces ({count}) are replaced at render time.
 */
export const fr = {
  meta: {
    title: `${BRAND} — L'investissement africain, à portée de main`,
    titleTemplate: `%s · ${BRAND}`,
    description: `${BRAND} prépare une expérience digitale pour découvrir les entreprises cotées à la BRVM, comprendre les marchés financiers africains et préparer ses décisions d'investissement.`,
  },

  common: {
    skipToContent: "Aller au contenu principal",
    demo: "Démo",
    demoData: "Données de démonstration",
    demoDisclaimer: "Cours et variations simulés. Ils ne reflètent pas les cours réels de la BRVM et ne constituent pas une information de marché.",
    comingSoon: "Bientôt disponible",
    inDevelopment: "En développement",
    learnMore: "En savoir plus",
    readArticle: "Lire le guide",
    backHome: "Retour à l'accueil",
    backToResources: "Retour au centre d'apprentissage",
    draft: "Projet de document",
    draftLegal: "Ce texte est un projet. Il n'a pas encore été relu par un conseil juridique et doit être validé avant tout lancement public.",
    lastUpdated: "Dernière mise à jour :",
    toComplete: "[À compléter]",
    onThisPage: "Sur cette page",
    close: "Fermer",
    previous: "Précédent",
    goTo: "Aller à la carte {n}",
    next: "Suivant",
  },

  notice: {
    banner: `${BRAND} est en cours de développement. Aucun service d'investissement n'est disponible pour le moment.`,
    bannerLink: "En savoir plus",
  },

  nav: {
    label: "Navigation principale",
    home: `Accueil ${BRAND}`,
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    login: "Connexion",
    signup: "Créer un compte",
    groups: {
      markets: "Marchés",
      invest: "Investir",
      solutions: "Solutions",
      resources: "Ressources",
    },
    items: {
      overview: { label: "Vue d'ensemble", description: "Explorer le marché avec des données de démonstration" },
      brvm: { label: "Actions cotées à la BRVM", description: "Parcourir un échantillon de sociétés cotées" },
      companies: { label: "Entreprises", description: "Fiches entreprises, bientôt disponibles" },
      howInvesting: { label: "Comment fonctionne l'investissement", description: "Les étapes, du premier pas à l'ordre de bourse" },
      discoverShares: { label: "Découvrir les actions", description: "Ce que représente une action et comment elle évolue" },
      dividends: { label: "Comprendre les dividendes", description: "Comment une entreprise partage ses bénéfices" },
      journey: { label: "Parcours d'investissement", description: "Le parcours envisagé avec un partenaire agréé" },
      individuals: { label: "Investisseurs particuliers", description: "Découvrir et comprendre le marché à son rythme" },
      partners: { label: "Partenaires financiers", description: "SGI, banques et institutions habilitées" },
      professionals: { label: "Solutions professionnelles", description: "Entreprises et organisations" },
      learning: { label: "Centre d'apprentissage", description: "Guides pour comprendre la bourse" },
      guides: { label: "Guides pour débutants", description: "Les notions essentielles avant d'investir" },
      faq: { label: "FAQ", description: "Réponses aux questions fréquentes" },
      about: { label: `À propos de ${BRAND}`, description: "Notre mission et notre démarche" },
    },
  },

  language: {
    label: "Langue",
    change: "Changer de langue",
  },

  theme: {
    label: "Thème",
    toDark: "Activer le thème sombre",
    toLight: "Activer le thème clair",
  },

  home: {
    hero: {
      eyebrow: "Marchés financiers africains · BRVM",
      title: "L'investissement africain, à portée de main.",
      titleLead: "Investissez dans",
      titleHighlight: "l'avenir africain,",
      titleTail: "en toute confiance.",
      lead: `${BRAND} vous ouvrira les marchés financiers africains. Analysez, suivez les sociétés cotées et préparez vos investissements, simplement.`,
      storeSoon: "Bientôt sur",
      stores: ["iOS", "Android"],
      cards: {
        trustTitle: "Transparence",
        trustText: "Frais et risques affichés avant chaque décision.",
        learnTitle: "Apprendre avant d'investir",
        learnText: "4 guides pour bien commencer.",
      },
      eyebrowMain: "Marchés financiers africains",
      eyebrowTag: "BRVM · UEMOA",
      join: "Commencer maintenant",
      privacy: "Aucune donnée n'est enregistrée pour le moment.",
      text: "Découvrez les entreprises cotées, explorez les marchés financiers africains et préparez vos décisions d'investissement depuis une expérience digitale conçue pour vous.",
      primary: "Découvrir les marchés",
      secondary: `Comprendre ${BRAND}`,
      points: ["Information claire", "Éducation financière", "Transparence sur les risques"],
      formNote: "Accès anticipé : soyez informé de l'ouverture des inscriptions.",
    },
    panel: {
      title: "Aperçu du marché",
      chartLabel: "Courbe simulée, sans valeur de marché",
      listTitle: "Sociétés suivies",
      footnote: "Interface en développement. Toutes les valeurs affichées sont simulées.",
    },
    phone: {
      greeting: "Bonjour",
      portfolio: "Portefeuille de démonstration",
      positions: "Positions",
      search: "Rechercher une société",
      marketsTitle: "Marchés",
      periods: ["1J", "1S", "1M", "3M", "1A"],
      actions: ["Investir", "Suivre", "Historique", "Plus"],
      seeAll: "Voir tout",
      tabs: { home: "Accueil", markets: "Marchés", invest: "Investir", portfolio: "Portefeuille", profile: "Profil" },
    },
    floating: {
      simulatedTitle: "Données simulées",
      simulatedText: "Aucune valeur affichée n'est réelle.",
      guideMeta: "Guide · 4 min",
    },
    ticker: {
      label: "Cours simulés",
      region: "Bandeau de cours simulés",
    },
    facts: {
      items: [
        { value: 8, from: 0, label: "pays de l'UEMOA" },
        { value: 1998, from: 1960, label: "lancement de la BRVM" },
        { value: 4, from: 0, label: "guides gratuits" },
      ],
    },
    app: {
      eyebrow: "Application",
      title: "Toute la bourse dans votre poche.",
      text: "Une navigation simple, identique sur mobile et sur ordinateur, pour suivre le marché et comprendre chaque décision.",
      badge: "Application en développement",
      chips: ["Mobile et web", "Une seule navigation, 5 onglets"],
      features: [
        { title: "Accueil", text: "L'essentiel du marché et de votre suivi en un coup d'œil." },
        { title: "Marchés", text: "Les sociétés cotées, avec la nature de chaque donnée affichée." },
        { title: "Investir", text: "Un parcours guidé, avec frais et risques présentés avant toute confirmation." },
        { title: "Portefeuille", text: "Solde disponible, montant investi et plus-values, sans les confondre." },
      ],
      cta: "Être informé du lancement",
    },
    markets: {
      eyebrow: "Marchés",
      title: "Explorez les sociétés cotées à la BRVM",
      text: "Un échantillon de sociétés de la Bourse Régionale des Valeurs Mobilières, présenté avec des valeurs de démonstration pour illustrer l'expérience à venir.",
      cta: "Explorer le marché",
      featured: "Société suivie",
      price: "Cours (démo)",
      change: "Variation (démo)",
      sector: "Secteur",
    },
    features: {
      eyebrow: "Découvrir",
      title: "Pensé pour comprendre avant d'investir",
    },
    faqBlock: {
      title: "Questions fréquentes",
      text: "Les réponses aux questions que l'on nous pose le plus souvent.",
      cta: "Toutes les questions",
    },
    how: {
      eyebrow: "Fonctionnement",
      title: `Comment ${BRAND} vous accompagne`,
      steps: [
        { title: "Découvrez", text: "Explorez les sociétés cotées et apprenez comment fonctionne le marché." },
        { title: "Analysez", text: "Consultez les informations sur les entreprises, les indicateurs de marché et les ressources pédagogiques." },
        { title: "Préparez votre investissement", text: "Comprenez le processus et, lorsque le service sera disponible, suivez les étapes prévues avec le partenaire financier agréé." },
      ],
      cta: "Voir le fonctionnement en détail",
    },
    why: {
      eyebrow: `Pourquoi ${BRAND}`,
      title: "Une approche construite sur la clarté",
      items: [
        { title: "Une expérience simple et accessible", text: "Une interface pensée pour les débutants comme pour les investisseurs avertis, sur mobile comme sur ordinateur." },
        { title: "Une meilleure compréhension des marchés", text: "Des guides et des explications pour savoir ce que l'on regarde avant de prendre une décision." },
        { title: "Une information présentée avec clarté", text: "Chaque donnée indique sa nature : réelle, retardée, simulée ou indisponible." },
        { title: "Une approche fondée sur la transparence", text: "Les frais et les risques sont affichés là où la décision se prend, pas seulement en bas de page." },
      ],
      mock: {
        natures: ["Réel", "Retardé", "Simulé", "Indisponible"],
        devices: ["Mobile", "Web"],
        summaryTitle: "Récapitulatif avant confirmation",
        summaryRows: ["Montant", "Frais", "Total"],
        riskNote: "Risque de perte en capital",
      },
    },
    education: {
      eyebrow: "Apprendre",
      title: "Le centre d'apprentissage",
      text: "Des guides courts pour comprendre les notions essentielles avant d'investir.",
      cta: "Voir tous les guides",
    },
    partners: {
      eyebrow: "Partenariats",
      title: "Construisons ensemble l'accès aux marchés financiers africains.",
      text: `${BRAND} développe une expérience digitale destinée à faciliter la découverte des marchés financiers et à préparer des parcours d'investissement avec des partenaires habilités.`,
      points: ["Sociétés de Gestion et d'Intermédiation (SGI)", "Banques et institutions financières", "Acteurs de l'éducation financière"],
      cta: "Contacter notre équipe",
      secondary: "Découvrir nos solutions",
    },
    final: {
      title: "La prochaine étape de votre culture financière commence ici.",
      text: `Inscrivez-vous à l'accès anticipé pour suivre le lancement de ${BRAND}.`,
      cta: `Découvrir ${BRAND}`,
      secondary: "Lire les guides",
    },
  },

  market: {
    searchLabel: "Rechercher une société",
    searchPlaceholder: "Nom de la société",
    filterLabel: "Filtrer par secteur",
    all: "Tous",
    results: "{count} sociétés affichées",
    resultsOne: "1 société affichée",
    columns: {
      company: "Société",
      sector: "Secteur",
      country: "Pays",
      price: "Cours (démo)",
      change: "Variation (démo)",
      trend: "Tendance simulée",
    },
    up: "en hausse",
    down: "en baisse",
    flat: "stable",
    empty: {
      title: "Aucune société ne correspond",
      text: "Modifiez votre recherche ou retirez le filtre de secteur.",
      reset: "Réinitialiser",
    },
    tickerNote: "Les symboles boursiers seront affichés après vérification auprès d'une source officielle.",
  },

  sectors: {
    telecom: "Télécommunications",
    finance: "Services financiers",
    agriculture: "Agriculture",
    consumer: "Consommation",
    utilities: "Services publics",
  },

  countries: {
    BJ: "Bénin",
    BF: "Burkina Faso",
    CI: "Côte d'Ivoire",
    SN: "Sénégal",
    TG: "Togo",
  },

  marketsPage: {
    title: "Marchés",
    intro: "Une première vue des sociétés cotées à la Bourse Régionale des Valeurs Mobilières (BRVM). Les cours et variations sont simulés : aucune donnée de marché réelle n'est encore connectée.",
    listTitle: "Actions cotées à la BRVM",
    listText: "Échantillon de sociétés cotées. Recherchez une société ou filtrez par secteur.",
    sourceTitle: "À propos de ces données",
    sourceItems: [
      "Les noms correspondent à des sociétés cotées à la BRVM.",
      "Les cours, variations et courbes sont générés pour la démonstration.",
      "Les données réelles seront affichées une fois une source de marché officielle intégrée, avec leur horodatage et leur nature (temps réel ou différé).",
    ],
    learnTitle: "Comprendre la BRVM",
    learnText: "Fonctionnement, pays membres, rôle des SGI : l'essentiel en quelques minutes.",
  },

  companiesPage: {
    title: "Entreprises",
    intro: "Des fiches détaillées pour chaque société cotée sont en préparation.",
    contentTitle: "Ce que contiendront les fiches",
    contentItems: [
      "Présentation de l'activité et du secteur",
      "Informations publiées par l'émetteur",
      "Historique des cours, une fois une source officielle intégrée",
      "Historique des dividendes annoncés",
    ],
    cta: "Voir l'aperçu du marché",
  },

  howPage: {
    title: `Comment fonctionne ${BRAND}`,
    intro: `${BRAND} veut rendre la bourse plus compréhensible avant de la rendre accessible. Voici le parcours tel qu'il est envisagé aujourd'hui.`,
    stepsTitle: "Trois étapes",
    journeyTitle: "Parcours d'investissement envisagé",
    journeyIntro: "Ce parcours dépend des partenariats et des autorisations qui restent à conclure. Il est présenté à titre indicatif.",
    journey: [
      { title: "Créer un compte", text: `Ouvrir un compte ${BRAND} pour accéder aux contenus et suivre des sociétés.` },
      { title: "Vérifier son identité", text: "Fournir les justificatifs demandés par le partenaire financier agréé, conformément à la réglementation." },
      { title: "Ouvrir un compte titres", text: "Le compte titres est ouvert auprès d'une Société de Gestion et d'Intermédiation (SGI) partenaire." },
      { title: "Transmettre un ordre", text: "L'ordre est transmis à la SGI, avec un récapitulatif des frais et des risques avant toute confirmation." },
      { title: "Suivre son portefeuille", text: "Les opérations sont affichées avec leur statut : en attente, confirmée, rejetée ou échouée." },
    ],
    todayTitle: "Ce que vous pouvez faire aujourd'hui",
    todayItems: [
      "Explorer un aperçu du marché avec des données de démonstration",
      "Lire les guides du centre d'apprentissage",
      "Vous inscrire à l'accès anticipé",
    ],
    notYetTitle: "Ce qui n'est pas encore disponible",
    notYetItems: [
      "Ouverture de compte et vérification d'identité",
      "Dépôts, retraits et passage d'ordres",
      "Données de marché en temps réel ou différé",
    ],
    cta: "Rejoindre l'accès anticipé",
  },

  solutionsPage: {
    title: "Solutions",
    intro: `${BRAND} s'adresse aux particuliers qui veulent comprendre les marchés, et aux institutions qui souhaitent les rendre plus accessibles.`,
    individuals: {
      title: "Investisseurs particuliers",
      text: "Découvrir les sociétés cotées, comprendre les notions clés et préparer ses décisions à son rythme, sans jargon inutile.",
      items: ["Aperçu du marché", "Guides pour débutants", "Information claire sur les frais et les risques"],
      cta: "Découvrir les marchés",
    },
    partners: {
      title: "Partenaires financiers",
      text: `${BRAND} souhaite travailler avec des SGI, des banques et des institutions habilitées pour proposer un parcours d'investissement digital et conforme.`,
      items: ["Parcours d'entrée en relation digitalisé", "Expérience mobile et web", "Contenus pédagogiques pour les nouveaux investisseurs"],
      note: "Aucun partenariat n'est conclu à ce jour.",
      cta: "Contacter notre équipe",
    },
    professionals: {
      title: "Solutions professionnelles",
      text: "Pour les entreprises et organisations qui souhaitent sensibiliser leurs équipes ou leurs membres à l'investissement. L'offre est en cours de définition.",
      items: ["Programmes d'éducation financière", "Contenus adaptés au contexte de l'UEMOA"],
      cta: "Nous écrire",
    },
  },

  resourcesPage: {
    title: "Centre d'apprentissage",
    intro: "Des guides courts et factuels pour comprendre la bourse avant d'investir.",
    guidesTitle: "Guides pour débutants",
    readingTime: "{minutes} min de lecture",
    faqTitle: "Une question précise ?",
    faqText: "Consultez la foire aux questions.",
    faqCta: "Voir la FAQ",
  },

  articles: {
    "comprendre-la-brvm": {
      title: "Comprendre la BRVM",
      summary: "La bourse commune aux huit pays de l'UEMOA : à quoi elle sert et comment on y accède.",
      minutes: 4,
      sections: [
        {
          title: "Une bourse régionale",
          paragraphs: [
            "La Bourse Régionale des Valeurs Mobilières (BRVM) est la bourse commune aux huit États membres de l'Union Économique et Monétaire Ouest-Africaine (UEMOA) : le Bénin, le Burkina Faso, la Côte d'Ivoire, la Guinée-Bissau, le Mali, le Niger, le Sénégal et le Togo.",
            "Son siège est à Abidjan. Elle a démarré ses activités en 1998. Les titres y sont négociés en francs CFA (FCFA).",
          ],
        },
        {
          title: "Ce qu'on y échange",
          paragraphs: [
            "On y trouve des actions, c'est-à-dire des parts du capital d'entreprises cotées, et des obligations, qui sont des titres de dette émis par des États ou des entreprises.",
            "Les sociétés cotées appartiennent à différents secteurs : télécommunications, services financiers, agriculture, distribution, services publics, entre autres.",
          ],
        },
        {
          title: "Comment y accéder",
          paragraphs: [
            "Un particulier ne passe pas d'ordre directement à la bourse. Il passe par une Société de Gestion et d'Intermédiation (SGI), un intermédiaire agréé par l'autorité de régulation du marché financier régional, l'AMF-UMOA.",
            "La SGI ouvre le compte titres, transmet les ordres et conserve les titres pour le compte de ses clients.",
          ],
        },
        {
          title: "À retenir",
          paragraphs: [
            "Investir en bourse comporte un risque de perte en capital. Avant toute décision, il est important de comprendre les titres achetés, les frais appliqués et son propre horizon de placement.",
          ],
        },
      ],
    },
    "comment-fonctionne-une-action": {
      title: "Comment fonctionne une action ?",
      summary: "Ce que l'on achète vraiment, pourquoi le prix varie et ce que cela implique.",
      minutes: 4,
      sections: [
        {
          title: "Une part d'entreprise",
          paragraphs: [
            "Une action est une part du capital d'une société. En la détenant, vous devenez actionnaire, c'est-à-dire copropriétaire d'une petite fraction de l'entreprise.",
          ],
        },
        {
          title: "Les droits de l'actionnaire",
          paragraphs: [
            "L'actionnaire peut recevoir une part des bénéfices sous forme de dividendes, lorsque l'entreprise décide d'en distribuer. Il peut aussi voter en assemblée générale et accéder aux informations publiées par la société.",
          ],
        },
        {
          title: "Pourquoi le cours varie",
          paragraphs: [
            "Le cours d'une action résulte de la rencontre entre les acheteurs et les vendeurs. Il évolue selon les résultats de l'entreprise, ses perspectives, la situation économique et le comportement des investisseurs.",
            "Un cours peut monter comme baisser. Les performances passées ne préjugent pas des performances futures.",
          ],
        },
        {
          title: "Liquidité",
          paragraphs: [
            "Certaines actions s'échangent souvent, d'autres beaucoup moins. Lorsqu'un titre est peu échangé, il peut être difficile de l'acheter ou de le vendre rapidement au prix souhaité.",
          ],
        },
      ],
    },
    dividendes: {
      title: "Que sont les dividendes ?",
      summary: "Comment une entreprise partage ses bénéfices, et pourquoi ce n'est jamais garanti.",
      minutes: 3,
      sections: [
        {
          title: "Une part des bénéfices",
          paragraphs: [
            "Un dividende est une somme versée par une entreprise à ses actionnaires, généralement prélevée sur ses bénéfices. Son montant est proposé par la direction et voté en assemblée générale.",
          ],
        },
        {
          title: "Jamais garanti",
          paragraphs: [
            "Une entreprise peut réduire, suspendre ou supprimer son dividende, par exemple si ses résultats baissent ou si elle préfère investir. Un dividende passé ne garantit pas un dividende futur.",
          ],
        },
        {
          title: "Le rendement",
          paragraphs: [
            "Le rendement d'un dividende se calcule en divisant le dividende annuel par le cours de l'action. Un rendement élevé peut aussi refléter une baisse du cours : il doit toujours être interprété avec prudence.",
          ],
        },
        {
          title: "Fiscalité",
          paragraphs: [
            "Les dividendes peuvent être soumis à une imposition qui varie selon les pays et la situation de chacun. Renseignez-vous auprès d'un professionnel ou de l'administration fiscale compétente.",
          ],
        },
      ],
    },
    risques: {
      title: "Quels risques faut-il comprendre avant d'investir ?",
      summary: "Les principaux risques à connaître pour investir de façon éclairée.",
      minutes: 5,
      sections: [
        {
          title: "Le risque de perte en capital",
          paragraphs: [
            "La valeur d'un investissement en actions peut baisser. Vous pouvez récupérer moins que la somme investie, voire la perdre en totalité.",
          ],
        },
        {
          title: "Le risque de liquidité",
          paragraphs: [
            "Il n'est pas toujours possible de vendre un titre rapidement ou au prix espéré, en particulier pour les titres peu échangés.",
          ],
        },
        {
          title: "Le risque de concentration",
          paragraphs: [
            "Placer tout son argent sur une seule entreprise ou un seul secteur expose fortement à leurs difficultés. Répartir ses investissements permet de limiter cet effet, sans le supprimer.",
          ],
        },
        {
          title: "Les frais",
          paragraphs: [
            "Les frais de courtage, de tenue de compte ou de transaction réduisent le rendement final. Ils doivent être connus avant chaque opération.",
          ],
        },
        {
          title: "L'horizon de placement",
          paragraphs: [
            "Les actions conviennent généralement à un horizon long. N'investissez pas l'argent dont vous pourriez avoir besoin à court terme, et n'investissez jamais sous la pression d'une promesse de gain rapide.",
          ],
        },
      ],
    },
  },

  faqPage: {
    title: "Questions fréquentes",
    intro: `Les réponses aux questions que l'on nous pose le plus souvent sur ${BRAND}.`,
    items: [
      {
        q: `Puis-je investir avec ${BRAND} aujourd'hui ?`,
        a: `Non. ${BRAND} est en cours de développement. Aucun service d'ouverture de compte, de dépôt, de retrait ou de passage d'ordres n'est disponible pour le moment.`,
      },
      {
        q: `${BRAND} est-elle un intermédiaire agréé ?`,
        a: `Non. ${BRAND} n'est pas une Société de Gestion et d'Intermédiation (SGI). L'accès réel au marché se fera, le cas échéant, par l'intermédiaire de partenaires agréés, sous réserve des accords et autorisations nécessaires.`,
      },
      {
        q: "Les cours affichés sur le site sont-ils réels ?",
        a: "Non. Les cours, variations et courbes affichés sont simulés pour la démonstration. Ils sont signalés par la mention « Démo » et ne doivent pas servir à prendre une décision d'investissement.",
      },
      {
        q: `Combien coûtera ${BRAND} ?`,
        a: "La tarification n'est pas encore définie. Les frais applicables seront affichés clairement avant toute opération.",
      },
      {
        q: "Quels marchés seront couverts ?",
        a: "Le premier marché envisagé est la BRVM, la bourse commune aux huit pays de l'UEMOA. D'autres marchés pourront être étudiés plus tard.",
      },
      {
        q: "Que faites-vous de mes données ?",
        a: "Les formulaires du site ne sont pas encore reliés à un service d'enregistrement : aucune donnée saisie n'est transmise ni conservée. La politique de confidentialité sera finalisée avant l'ouverture des inscriptions.",
      },
      {
        q: "Comment être informé du lancement ?",
        a: "La page d'accès anticipé permettra de laisser son adresse e-mail dès que le service d'inscription sera en place.",
      },
    ],
    contactTitle: "Vous ne trouvez pas votre réponse ?",
    contactCta: "Contacter l'équipe",
  },

  aboutPage: {
    title: `À propos de ${BRAND}`,
    intro: `${BRAND} est une plateforme en développement qui veut rendre les marchés financiers africains plus accessibles et plus compréhensibles, en commençant par la BRVM.`,
    missionTitle: "Notre mission",
    mission: [
      "Une large partie de la population de la région n'a jamais eu accès à une information boursière claire, ni à un parcours d'investissement simple.",
      `${BRAND} veut combiner une expérience digitale moderne et une éducation financière sérieuse, pour que chacun puisse comprendre avant d'investir.`,
    ],
    principlesTitle: "Nos principes",
    principles: [
      { title: "Transparence", text: "Nous indiquons toujours la nature d'une donnée et l'état réel de notre service." },
      { title: "Éducation", text: "Comprendre passe avant investir. Nos contenus expliquent sans promettre." },
      { title: "Long terme", text: "Nous privilégions l'investissement réfléchi plutôt que la spéculation." },
      { title: "Sécurité", text: "La protection des données et des fonds guide chaque choix de conception." },
    ],
    statusTitle: "Où en sommes-nous ?",
    status: [
      `${BRAND} est un nom provisoire. Le produit est en cours de conception.`,
      `${BRAND} n'est pas un intermédiaire agréé et ne propose aucun service d'investissement à ce jour. Aucun partenariat avec une SGI n'est conclu à ce stade.`,
    ],
    cta: "Contacter l'équipe",
  },

  contactPage: {
    title: "Contact",
    intro: "Une question, un projet de partenariat ou une remarque : Écrivez-nous.",
    formTitle: "Envoyer un message",
    topics: {
      label: "Sujet",
      general: "Question générale",
      partnership: "Partenariat financier",
      press: "Presse",
      other: "Autre",
    },
    emailTitle: "Par e-mail",
    noEmail: "Notre adresse de contact publique sera communiquée prochainement.",
    unavailableTitle: "Message non envoyé",
    unavailableText: "Le formulaire n'est pas encore relié à un service d'envoi. Votre message n'a pas été transmis et aucune donnée n'a été conservée.",
  },

  earlyAccessPage: {
    title: "Accès anticipé",
    intro: `Soyez parmi les premiers informés du lancement de ${BRAND}.`,
    benefits: ["Information sur l'ouverture des inscriptions", "Accès aux nouveaux guides", "Aucune sollicitation commerciale"],
    unavailableTitle: "Inscription bientôt ouverte",
    unavailableText: "La liste d'accès anticipé n'est pas encore active. Votre adresse n'a pas été enregistrée.",
  },

  auth: {
    social: {
      label: "Connexion avec un compte existant",
      continueWith: "Continuer avec {provider}",
      divider: "ou avec votre adresse e-mail",
      unavailableTitle: "Connexion {provider} pas encore disponible",
      unavailableText: `Les comptes ${BRAND} ne sont pas encore ouverts. Aucune donnée n'a été demandée ni transmise à {provider}.`,
    },
    unavailableBanner: "Les comptes ne sont pas encore ouverts. Vous pouvez explorer ce parcours, mais aucune donnée n'est transmise ni enregistrée.",
    login: {
      title: "Connexion",
      subtitle: `Accédez à votre espace ${BRAND}.`,
      remember: "Rester connecté",
      forgot: "Mot de passe oublié ?",
      submit: "Se connecter",
      noAccount: "Pas encore de compte ?",
      signupLink: "Créer un compte",
      unavailableTitle: "Connexion indisponible",
      unavailableText: "Les comptes ne sont pas encore ouverts : la connexion n'est pas possible pour le moment.",
    },
    register: {
      title: "Créer un compte",
      subtitle: `Préparez votre arrivée sur ${BRAND}.`,
      termsBefore: "J'accepte les ",
      termsLink: "conditions d'utilisation",
      termsMiddle: " et la ",
      privacyLink: "politique de confidentialité",
      submit: "Créer mon compte",
      hasAccount: "Déjà un compte ?",
      loginLink: "Se connecter",
      unavailableTitle: "Inscriptions pas encore ouvertes",
      unavailableText: "Aucun compte n'a été créé et aucune donnée n'a été enregistrée. Rejoignez l'accès anticipé pour être informé de l'ouverture.",
      earlyAccessCta: "Rejoindre l'accès anticipé",
    },
    forgot: {
      title: "Mot de passe oublié",
      subtitle: "Saisissez votre adresse e-mail pour recevoir un lien de réinitialisation.",
      submit: "Envoyer le lien",
      back: "Retour à la connexion",
      unavailableTitle: "Service indisponible",
      unavailableText: "La réinitialisation n'est pas encore active. Aucun e-mail n'a été envoyé.",
    },
    aside: {
      title: "Votre sécurité d'abord",
      items: [
        `${BRAND} ne vous demandera jamais votre mot de passe par e-mail, téléphone ou message.`,
        "Vérifiez toujours l'adresse du site avant de vous connecter.",
        "Choisissez un mot de passe unique, que vous n'utilisez nulle part ailleurs.",
      ],
    },
  },

  forms: {
    fullName: "Nom complet",
    email: "Adresse e-mail",
    emailPlaceholder: "nom@exemple.com",
    password: "Mot de passe",
    passwordHint: "Au moins 10 caractères, avec des lettres et des chiffres.",
    confirmPassword: "Confirmer le mot de passe",
    showPassword: "Afficher le mot de passe",
    hidePassword: "Masquer le mot de passe",
    name: "Nom",
    message: "Message",
    submit: "Envoyer",
    submitting: "Envoi en cours…",
    join: "M'inscrire",
    required: "obligatoire",
    errorSummary: "Le formulaire contient des erreurs. Corrigez les champs signalés.",
    errors: {
      required: "Ce champ est obligatoire.",
      emailInvalid: "Saisissez une adresse e-mail valide, par exemple nom@exemple.com.",
      passwordTooShort: "Le mot de passe doit contenir au moins 10 caractères.",
      passwordWeak: "Le mot de passe doit contenir au moins une lettre et un chiffre.",
      passwordMismatch: "Les deux mots de passe ne correspondent pas.",
      nameTooShort: "Le nom doit contenir au moins 2 caractères.",
      termsRequired: "Vous devez accepter les conditions pour continuer.",
      messageTooShort: "Le message doit contenir au moins 20 caractères.",
    },
    genericError: "Une erreur est survenue. Réessayez dans quelques instants.",
  },

  legal: {
    privacy: {
      title: "Politique de confidentialité",
      updated: "Projet — octobre 2026",
      sections: [
        { title: "Objet", paragraphs: [`Cette politique décrira la manière dont ${BRAND} collecte, utilise et protège les données personnelles des utilisateurs de son site et de ses services.`] },
        { title: "Données collectées aujourd'hui", paragraphs: ["Les formulaires du site (connexion, inscription, contact, accès anticipé) ne sont reliés à aucun service : les informations saisies ne sont ni transmises ni conservées.", "Le site n'utilise pas de cookies publicitaires ni d'outil de mesure d'audience à ce stade."] },
        { title: "Données collectées à terme", paragraphs: ["Lorsque les services seront ouverts, certaines données seront nécessaires : identité, coordonnées, justificatifs exigés par la réglementation, informations de connexion. Leur finalité, leur base légale et leur durée de conservation seront précisées ici."] },
        { title: "Vos droits", paragraphs: ["Vous disposerez de droits d'accès, de rectification, d'opposition et de suppression, conformément à la réglementation applicable en matière de protection des données personnelles dans votre pays."] },
        { title: "Responsable du traitement", paragraphs: ["[À compléter : dénomination sociale, adresse et contact du responsable du traitement.]"] },
      ],
    },
    terms: {
      title: "Conditions d'utilisation",
      updated: "Projet — octobre 2026",
      sections: [
        { title: "Objet", paragraphs: [`Ces conditions encadreront l'utilisation du site ${BRAND} et, à terme, de ses services.`] },
        { title: "Nature du service", paragraphs: [`Le site présente un projet en développement. Il ne fournit aucun service d'investissement, de conseil en investissement ou de réception-transmission d'ordres. ${BRAND} n'est pas un intermédiaire agréé.`] },
        { title: "Informations publiées", paragraphs: ["Les données de marché affichées sont simulées et identifiées comme telles. Les contenus pédagogiques sont fournis à titre informatif et ne constituent ni un conseil ni une recommandation d'investissement."] },
        { title: "Responsabilité", paragraphs: ["[À compléter après revue juridique.]"] },
        { title: "Droit applicable", paragraphs: ["[À compléter après revue juridique.]"] },
      ],
    },
    risks: {
      title: "Informations sur les risques",
      updated: "Projet — octobre 2026",
      sections: [
        { title: "Avertissement général", paragraphs: ["Investir sur les marchés financiers comporte des risques, notamment un risque de perte partielle ou totale du capital investi. Les performances passées ne préjugent pas des performances futures."] },
        { title: "Principaux risques", paragraphs: ["Risque de marché : la valeur des titres varie à la hausse comme à la baisse.", "Risque de liquidité : certains titres peuvent être difficiles à vendre rapidement.", "Risque de concentration : un portefeuille peu diversifié est plus exposé.", "Frais : les frais réduisent le rendement final."] },
        { title: "Données de démonstration", paragraphs: ["Les cours et variations affichés sur ce site sont simulés. Ils ne reflètent pas les cours réels et ne doivent pas être utilisés pour prendre une décision d'investissement."] },
        { title: `Statut de ${BRAND}`, paragraphs: [`${BRAND} n'est pas un intermédiaire agréé et ne propose aucun service d'investissement à ce jour.`] },
      ],
    },
    legalNotice: {
      title: "Mentions légales",
      updated: "Projet — octobre 2026",
      sections: [
        { title: "Éditeur du site", paragraphs: ["[À compléter : dénomination, forme juridique, capital, siège social, numéro d'immatriculation.]", "[À compléter : directeur de la publication.]"] },
        { title: "Hébergement", paragraphs: ["[À compléter : nom, adresse et contact de l'hébergeur.]"] },
        { title: "Propriété intellectuelle", paragraphs: [`${BRAND} est un nom provisoire. Les noms des sociétés cotées cités sur le site appartiennent à leurs titulaires respectifs et sont mentionnés à titre d'information.`] },
      ],
    },
  },

  notFound: {
    title: "Page introuvable",
    text: "La page demandée n'existe pas ou a été déplacée.",
  },

  footer: {
    description: `${BRAND} prépare une expérience digitale pour découvrir les marchés financiers africains, en commençant par la BRVM.`,
    columns: {
      explore: "Explorer",
      company: "Entreprise",
      legal: "Informations",
    },
    links: {
      markets: "Marchés",
      companies: "Entreprises",
      howItWorks: "Fonctionnement",
      resources: "Ressources",
      about: "À propos",
      contact: "Contact",
      partnerships: "Partenariats",
      faq: "FAQ",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      risks: "Informations sur les risques",
      legalNotice: "Mentions légales",
    },
    disclaimer: `${BRAND} est un projet en développement. ${BRAND} n'est pas un intermédiaire agréé et ne fournit aucun service d'investissement, de conseil ou de transmission d'ordres. Les données de marché affichées sur ce site sont simulées. Investir comporte un risque de perte en capital.`,
    rights: "Tous droits réservés.",
  },
};

export type Dictionary = typeof fr;
