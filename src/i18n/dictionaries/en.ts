import { BRAND } from "@/config/site";
import type { Dictionary } from "./fr";

export const en: Dictionary = {
  meta: {
    title: `${BRAND} — African investing, within reach`,
    titleTemplate: `%s · ${BRAND}`,
    description: `${BRAND} is building a digital experience to discover companies listed on the BRVM, understand African financial markets and prepare investment decisions.`,
  },

  common: {
    skipToContent: "Skip to main content",
    demo: "Demo",
    demoData: "Demonstration data",
    demoDisclaimer: "Simulated prices and changes. They do not reflect actual BRVM prices and are not market information.",
    comingSoon: "Coming soon",
    inDevelopment: "In development",
    learnMore: "Learn more",
    readArticle: "Read the guide",
    backHome: "Back to home",
    backToResources: "Back to the learning center",
    draft: "Draft document",
    draftLegal: "This text is a draft. It has not yet been reviewed by legal counsel and must be approved before any public launch.",
    lastUpdated: "Last updated:",
    toComplete: "[To be completed]",
    onThisPage: "On this page",
    close: "Close",
    previous: "Previous",
    goTo: "Go to card {n}",
    next: "Next",
  },

  notice: {
    banner: `${BRAND} is under development. No investment service is available at this time.`,
    bannerLink: "Learn more",
  },

  nav: {
    label: "Main navigation",
    home: `${BRAND} home`,
    openMenu: "Open menu",
    closeMenu: "Close menu",
    login: "Log in",
    signup: "Create an account",
    groups: {
      markets: "Markets",
      invest: "Invest",
      solutions: "Solutions",
      resources: "Resources",
    },
    items: {
      overview: { label: "Overview", description: "Explore the market with demonstration data" },
      brvm: { label: "BRVM-listed shares", description: "Browse a sample of listed companies" },
      companies: { label: "Companies", description: "Company profiles, coming soon" },
      howInvesting: { label: "How investing works", description: "The steps, from first look to stock order" },
      discoverShares: { label: "Discover shares", description: "What a share represents and how its price moves" },
      dividends: { label: "Understand dividends", description: "How a company shares its profits" },
      journey: { label: "Investment journey", description: "The planned journey with an authorized partner" },
      individuals: { label: "Individual investors", description: "Discover and understand the market at your own pace" },
      partners: { label: "Financial partners", description: "SGIs, banks and authorized institutions" },
      professionals: { label: "Business solutions", description: "Companies and organizations" },
      learning: { label: "Learning center", description: "Guides to understand the stock market" },
      guides: { label: "Beginner guides", description: "Key concepts before investing" },
      faq: { label: "FAQ", description: "Answers to common questions" },
      about: { label: `About ${BRAND}`, description: "Our mission and approach" },
    },
  },

  language: {
    label: "Language",
    change: "Change language",
  },

  theme: {
    label: "Theme",
    toDark: "Switch to dark theme",
    toLight: "Switch to light theme",
  },

  home: {
    hero: {
      eyebrow: "African financial markets · BRVM",
      title: "African investing, within reach.",
      titleLead: "Invest in",
      titleHighlight: "Africa's future,",
      titleTail: "with confidence.",
      lead: `${BRAND} will open up African financial markets to you. Analyze, follow listed companies and prepare your investments, simply.`,
      storeSoon: "Coming soon on",
      stores: ["iOS", "Android"],
      cards: {
        trustTitle: "Transparency",
        trustText: "Fees and risks shown before every decision.",
        learnTitle: "Learn before investing",
        learnText: "4 guides to get started.",
      },
      eyebrowMain: "African financial markets",
      eyebrowTag: "BRVM · WAEMU",
      join: "Get started",
      privacy: "No data is stored at this time.",
      text: "Discover listed companies, explore African financial markets and prepare your investment decisions through a digital experience designed for you.",
      primary: "Explore the markets",
      secondary: `Understand ${BRAND}`,
      points: ["Clear information", "Financial education", "Transparency about risk"],
      formNote: "Early access: hear when registrations open.",
    },
    panel: {
      title: "Market overview",
      chartLabel: "Simulated curve, no market value",
      listTitle: "Followed companies",
      footnote: "Interface in development. All values shown are simulated.",
    },
    phone: {
      greeting: "Hello",
      portfolio: "Demonstration portfolio",
      positions: "Positions",
      search: "Search for a company",
      marketsTitle: "Markets",
      periods: ["1D", "1W", "1M", "3M", "1Y"],
      actions: ["Invest", "Watch", "History", "More"],
      seeAll: "See all",
      tabs: { home: "Home", markets: "Markets", invest: "Invest", portfolio: "Portfolio", profile: "Profile" },
    },
    floating: {
      simulatedTitle: "Simulated data",
      simulatedText: "None of the values shown are real.",
      guideMeta: "Guide · 4 min",
    },
    ticker: {
      label: "Simulated prices",
      region: "Simulated price ticker",
    },
    facts: {
      items: [
        { value: 8, from: 0, label: "WAEMU countries" },
        { value: 1998, from: 1960, label: "BRVM launch year" },
        { value: 4, from: 0, label: "free guides" },
      ],
    },
    app: {
      eyebrow: "App",
      title: "The whole stock market in your pocket.",
      text: "Simple navigation, identical on mobile and desktop, to follow the market and understand every decision.",
      badge: "App in development",
      chips: ["Mobile and web", "One navigation, 5 tabs"],
      features: [
        { title: "Home", text: "The essentials of the market and what you follow, at a glance." },
        { title: "Markets", text: "Listed companies, with the nature of every data point shown." },
        { title: "Invest", text: "A guided journey, with fees and risks shown before any confirmation." },
        { title: "Portfolio", text: "Available balance, amount invested and gains, never mixed up." },
      ],
      cta: "Get notified at launch",
    },
    markets: {
      eyebrow: "Markets",
      title: "Explore companies listed on the BRVM",
      text: "A sample of companies from the Bourse Régionale des Valeurs Mobilières, shown with demonstration values to illustrate the upcoming experience.",
      cta: "Explore the market",
      featured: "Followed company",
      price: "Price (demo)",
      change: "Change (demo)",
      sector: "Sector",
    },
    features: {
      eyebrow: "Discover",
      title: "Designed to understand before investing",
    },
    faqBlock: {
      title: "Frequently asked questions",
      text: "Answers to the questions we are asked most often.",
      cta: "All questions",
    },
    how: {
      eyebrow: "How it works",
      title: `How ${BRAND} supports you`,
      steps: [
        { title: "Discover", text: "Explore listed companies and learn how the market works." },
        { title: "Analyze", text: "Review company information, market indicators and educational resources." },
        { title: "Prepare your investment", text: "Understand the process and, once the service is available, follow the steps with the authorized financial partner." },
      ],
      cta: "See how it works in detail",
    },
    why: {
      eyebrow: `Why ${BRAND}`,
      title: "An approach built on clarity",
      items: [
        { title: "A simple, accessible experience", text: "An interface designed for beginners and experienced investors alike, on mobile and desktop." },
        { title: "A better understanding of markets", text: "Guides and explanations so you know what you are looking at before making a decision." },
        { title: "Information presented clearly", text: "Every data point states its nature: real, delayed, simulated or unavailable." },
        { title: "An approach grounded in transparency", text: "Fees and risks are shown where decisions are made, not only at the bottom of the page." },
      ],
      mock: {
        natures: ["Real", "Delayed", "Simulated", "Unavailable"],
        devices: ["Mobile", "Web"],
        summaryTitle: "Summary before confirmation",
        summaryRows: ["Amount", "Fees", "Total"],
        riskNote: "Risk of capital loss",
      },
    },
    education: {
      eyebrow: "Learn",
      title: "The learning center",
      text: "Short guides to understand the key concepts before investing.",
      cta: "See all guides",
    },
    partners: {
      eyebrow: "Partnerships",
      title: "Let's build access to African financial markets together.",
      text: `${BRAND} is developing a digital experience to make financial markets easier to discover and to prepare investment journeys with authorized partners.`,
      points: ["Sociétés de Gestion et d'Intermédiation (SGIs)", "Banks and financial institutions", "Financial education organizations"],
      cta: "Contact our team",
      secondary: "Discover our solutions",
    },
    final: {
      title: "The next step in your financial literacy starts here.",
      text: `Join early access to follow the launch of ${BRAND}.`,
      cta: `Discover ${BRAND}`,
      secondary: "Read the guides",
    },
  },

  market: {
    searchLabel: "Search for a company",
    searchPlaceholder: "Company name",
    filterLabel: "Filter by sector",
    all: "All",
    results: "{count} companies shown",
    resultsOne: "1 company shown",
    columns: {
      company: "Company",
      sector: "Sector",
      country: "Country",
      price: "Price (demo)",
      change: "Change (demo)",
      trend: "Simulated trend",
    },
    up: "up",
    down: "down",
    flat: "unchanged",
    empty: {
      title: "No matching company",
      text: "Change your search or clear the sector filter.",
      reset: "Reset",
    },
    tickerNote: "Ticker symbols will be shown once verified against an official source.",
  },

  sectors: {
    telecom: "Telecommunications",
    finance: "Financial services",
    agriculture: "Agriculture",
    consumer: "Consumer goods",
    utilities: "Utilities",
  },

  countries: {
    BJ: "Benin",
    BF: "Burkina Faso",
    CI: "Côte d'Ivoire",
    SN: "Senegal",
    TG: "Togo",
  },

  marketsPage: {
    title: "Markets",
    intro: "A first look at companies listed on the Bourse Régionale des Valeurs Mobilières (BRVM). Prices and changes are simulated: no real market data is connected yet.",
    listTitle: "BRVM-listed shares",
    listText: "A sample of listed companies. Search for a company or filter by sector.",
    sourceTitle: "About this data",
    sourceItems: [
      "Names refer to companies listed on the BRVM.",
      "Prices, changes and charts are generated for demonstration.",
      "Real data will be shown once an official market data source is integrated, with its timestamp and nature (real-time or delayed).",
    ],
    learnTitle: "Understanding the BRVM",
    learnText: "How it works, member countries, the role of SGIs: the essentials in a few minutes.",
  },

  companiesPage: {
    title: "Companies",
    intro: "Detailed profiles for each listed company are in preparation.",
    contentTitle: "What the profiles will include",
    contentItems: [
      "Business and sector overview",
      "Information published by the issuer",
      "Price history, once an official source is integrated",
      "History of announced dividends",
    ],
    cta: "See the market overview",
  },

  howPage: {
    title: `How ${BRAND} works`,
    intro: `${BRAND} wants to make the stock market understandable before making it accessible. Here is the journey as it is currently planned.`,
    stepsTitle: "Three steps",
    journeyTitle: "Planned investment journey",
    journeyIntro: "This journey depends on partnerships and authorizations that are yet to be concluded. It is shown for information only.",
    journey: [
      { title: "Create an account", text: `Open a ${BRAND} account to access content and follow companies.` },
      { title: "Verify your identity", text: "Provide the documents required by the authorized financial partner, in line with regulations." },
      { title: "Open a securities account", text: "The securities account is opened with a partner Société de Gestion et d'Intermédiation (SGI)." },
      { title: "Place an order", text: "The order is sent to the SGI, with a summary of fees and risks before any confirmation." },
      { title: "Track your portfolio", text: "Operations are shown with their status: pending, confirmed, rejected or failed." },
    ],
    todayTitle: "What you can do today",
    todayItems: [
      "Explore a market overview with demonstration data",
      "Read the learning center guides",
      "Sign up for early access",
    ],
    notYetTitle: "What is not available yet",
    notYetItems: [
      "Account opening and identity verification",
      "Deposits, withdrawals and order placement",
      "Real-time or delayed market data",
    ],
    cta: "Join early access",
  },

  solutionsPage: {
    title: "Solutions",
    intro: `${BRAND} is for individuals who want to understand markets, and for institutions that want to make them more accessible.`,
    individuals: {
      title: "Individual investors",
      text: "Discover listed companies, understand key concepts and prepare your decisions at your own pace, without unnecessary jargon.",
      items: ["Market overview", "Beginner guides", "Clear information on fees and risks"],
      cta: "Explore the markets",
    },
    partners: {
      title: "Financial partners",
      text: `${BRAND} aims to work with SGIs, banks and authorized institutions to offer a digital and compliant investment journey.`,
      items: ["Digital client onboarding journey", "Mobile and web experience", "Educational content for new investors"],
      note: "No partnership has been concluded to date.",
      cta: "Contact our team",
    },
    professionals: {
      title: "Business solutions",
      text: "For companies and organizations that want to introduce their teams or members to investing. The offering is being defined.",
      items: ["Financial education programs", "Content adapted to the WAEMU context"],
      cta: "Write to us",
    },
  },

  resourcesPage: {
    title: "Learning center",
    intro: "Short, factual guides to understand the stock market before investing.",
    guidesTitle: "Beginner guides",
    readingTime: "{minutes} min read",
    faqTitle: "A specific question?",
    faqText: "Check the frequently asked questions.",
    faqCta: "See the FAQ",
  },

  articles: {
    "comprendre-la-brvm": {
      title: "Understanding the BRVM",
      summary: "The shared stock exchange of the eight WAEMU countries: what it is for and how to access it.",
      minutes: 4,
      sections: [
        {
          title: "A regional exchange",
          paragraphs: [
            "The Bourse Régionale des Valeurs Mobilières (BRVM) is the shared stock exchange of the eight member states of the West African Economic and Monetary Union (WAEMU/UEMOA): Benin, Burkina Faso, Côte d'Ivoire, Guinea-Bissau, Mali, Niger, Senegal and Togo.",
            "It is headquartered in Abidjan and began operating in 1998. Securities are traded in CFA francs (FCFA).",
          ],
        },
        {
          title: "What is traded",
          paragraphs: [
            "It lists shares, which are stakes in the capital of listed companies, and bonds, which are debt securities issued by governments or companies.",
            "Listed companies operate in various sectors, including telecommunications, financial services, agriculture, retail and utilities.",
          ],
        },
        {
          title: "How to access it",
          paragraphs: [
            "Individuals do not place orders directly on the exchange. They go through a Société de Gestion et d'Intermédiation (SGI), an intermediary authorized by the regional financial market regulator, the AMF-UMOA.",
            "The SGI opens the securities account, transmits orders and holds securities on behalf of its clients.",
          ],
        },
        {
          title: "Key takeaway",
          paragraphs: [
            "Investing in the stock market carries a risk of capital loss. Before any decision, it is important to understand the securities you buy, the fees charged and your own investment horizon.",
          ],
        },
      ],
    },
    "comment-fonctionne-une-action": {
      title: "How does a share work?",
      summary: "What you are really buying, why the price moves and what that implies.",
      minutes: 4,
      sections: [
        {
          title: "A stake in a company",
          paragraphs: [
            "A share is a portion of a company's capital. By holding it, you become a shareholder, meaning a co-owner of a small fraction of the company.",
          ],
        },
        {
          title: "Shareholder rights",
          paragraphs: [
            "Shareholders may receive part of the profits as dividends, when the company decides to distribute them. They can also vote at general meetings and access the information the company publishes.",
          ],
        },
        {
          title: "Why the price moves",
          paragraphs: [
            "A share price results from the meeting of buyers and sellers. It changes with the company's results, its outlook, the economic situation and investor behavior.",
            "A price can go up as well as down. Past performance is not a guide to future performance.",
          ],
        },
        {
          title: "Liquidity",
          paragraphs: [
            "Some shares trade often, others much less. When a security is thinly traded, it can be hard to buy or sell it quickly at the desired price.",
          ],
        },
      ],
    },
    dividendes: {
      title: "What are dividends?",
      summary: "How a company shares its profits, and why it is never guaranteed.",
      minutes: 3,
      sections: [
        {
          title: "A share of profits",
          paragraphs: [
            "A dividend is an amount paid by a company to its shareholders, generally out of its profits. The amount is proposed by management and voted on at the general meeting.",
          ],
        },
        {
          title: "Never guaranteed",
          paragraphs: [
            "A company can reduce, suspend or cancel its dividend, for example if its results decline or if it prefers to invest. A past dividend does not guarantee a future one.",
          ],
        },
        {
          title: "Yield",
          paragraphs: [
            "Dividend yield is calculated by dividing the annual dividend by the share price. A high yield can also reflect a falling price: it should always be interpreted with care.",
          ],
        },
        {
          title: "Taxation",
          paragraphs: [
            "Dividends may be taxed in ways that vary by country and personal situation. Seek information from a professional or the relevant tax authority.",
          ],
        },
      ],
    },
    risques: {
      title: "Which risks should you understand before investing?",
      summary: "The main risks to know in order to invest with full understanding.",
      minutes: 5,
      sections: [
        {
          title: "Risk of capital loss",
          paragraphs: [
            "The value of an equity investment can fall. You may get back less than you invested, or lose it entirely.",
          ],
        },
        {
          title: "Liquidity risk",
          paragraphs: [
            "It is not always possible to sell a security quickly or at the expected price, especially for thinly traded securities.",
          ],
        },
        {
          title: "Concentration risk",
          paragraphs: [
            "Putting all your money in a single company or sector exposes you heavily to its difficulties. Spreading investments limits this effect without removing it.",
          ],
        },
        {
          title: "Fees",
          paragraphs: [
            "Brokerage, account-keeping and transaction fees reduce the final return. They should be known before each operation.",
          ],
        },
        {
          title: "Investment horizon",
          paragraphs: [
            "Shares are generally suited to a long horizon. Do not invest money you may need in the short term, and never invest under the pressure of a promise of quick gains.",
          ],
        },
      ],
    },
  },

  faqPage: {
    title: "Frequently asked questions",
    intro: `Answers to the questions we are asked most often about ${BRAND}.`,
    items: [
      {
        q: `Can I invest with ${BRAND} today?`,
        a: `No. ${BRAND} is under development. No account opening, deposit, withdrawal or order placement service is available at this time.`,
      },
      {
        q: `Is ${BRAND} an authorized intermediary?`,
        a: `No. ${BRAND} is not a Société de Gestion et d'Intermédiation (SGI). Actual market access will, where applicable, go through authorized partners, subject to the necessary agreements and authorizations.`,
      },
      {
        q: "Are the prices shown on the site real?",
        a: "No. The prices, changes and charts shown are simulated for demonstration. They are labeled \"Demo\" and must not be used to make an investment decision.",
      },
      {
        q: `How much will ${BRAND} cost?`,
        a: "Pricing has not been defined yet. Applicable fees will be shown clearly before any operation.",
      },
      {
        q: "Which markets will be covered?",
        a: "The first planned market is the BRVM, the shared stock exchange of the eight WAEMU countries. Other markets may be considered later.",
      },
      {
        q: "What do you do with my data?",
        a: "The site's forms are not yet connected to any storage service: nothing you enter is transmitted or kept. The privacy policy will be finalized before registrations open.",
      },
      {
        q: "How can I hear about the launch?",
        a: "The early access page will let you leave your email address as soon as the sign-up service is in place.",
      },
    ],
    contactTitle: "Can't find your answer?",
    contactCta: "Contact the team",
  },

  aboutPage: {
    title: `About ${BRAND}`,
    intro: `${BRAND} is a platform under development that aims to make African financial markets more accessible and easier to understand, starting with the BRVM.`,
    missionTitle: "Our mission",
    mission: [
      "Much of the region's population has never had access to clear stock market information or a simple investment journey.",
      `${BRAND} aims to combine a modern digital experience with serious financial education, so everyone can understand before investing.`,
    ],
    principlesTitle: "Our principles",
    principles: [
      { title: "Transparency", text: "We always state the nature of a data point and the actual status of our service." },
      { title: "Education", text: "Understanding comes before investing. Our content explains without promising." },
      { title: "Long term", text: "We favor thoughtful investing over speculation." },
      { title: "Security", text: "Protecting data and funds guides every design decision." },
    ],
    statusTitle: "Where are we?",
    status: [
      `${BRAND} is a temporary name. The product is being designed.`,
      `${BRAND} is not an authorized intermediary and offers no investment service to date. No partnership with an SGI has been concluded at this stage.`,
    ],
    cta: "Contact the team",
  },

  contactPage: {
    title: "Contact",
    intro: "A question, a partnership idea or feedback? Write to us.",
    formTitle: "Send a message",
    topics: {
      label: "Topic",
      general: "General question",
      partnership: "Financial partnership",
      press: "Press",
      other: "Other",
    },
    emailTitle: "By email",
    noEmail: "Our public contact address will be shared soon.",
    unavailableTitle: "Message not sent",
    unavailableText: "The form is not yet connected to a delivery service. Your message was not transmitted and no data was kept.",
  },

  earlyAccessPage: {
    title: "Early access",
    intro: `Be among the first to hear about the launch of ${BRAND}.`,
    benefits: ["News about registrations opening", "Access to new guides", "No marketing solicitation"],
    unavailableTitle: "Sign-up opening soon",
    unavailableText: "The early access list is not active yet. Your address was not saved.",
  },

  auth: {
    social: {
      label: "Sign in with an existing account",
      continueWith: "Continue with {provider}",
      divider: "or",
      emailCta: "Continue with email",
      unavailableTitle: "{provider} sign-in not available yet",
      unavailableText: `${BRAND} accounts are not open yet. No data was requested from or sent to {provider}.`,
    },
    unavailableBanner: "Accounts are not open yet. You can explore this flow, but no data is transmitted or stored.",
    login: {
      title: "Log in",
      subtitle: `Access your ${BRAND} space.`,
      remember: "Stay signed in",
      forgot: "Forgot password?",
      submit: "Log in",
      noAccount: "No account yet?",
      signupLink: "Create an account",
      emailBack: "Back to sign-in options",
      emailNote: "Enter your email address and password.",
      unavailableTitle: "Log in unavailable",
      unavailableText: "Accounts are not open yet: logging in is not possible for now.",
    },
    register: {
      title: "Create an account",
      subtitle: `Get ready to join ${BRAND}.`,
      termsBefore: "I accept the ",
      termsLink: "terms of use",
      termsMiddle: " and the ",
      privacyLink: "privacy policy",
      submit: "Create my account",
      hasAccount: "Already have an account?",
      loginLink: "Log in",
      emailBack: "Back to sign-up options",
      emailNote: "Enter your details to create your account.",
      unavailableTitle: "Registrations not open yet",
      unavailableText: "No account was created and no data was stored. Join early access to hear when registrations open.",
      earlyAccessCta: "Join early access",
    },
    forgot: {
      title: "Forgot password",
      subtitle: "Enter your email address to receive a reset link.",
      submit: "Send the link",
      back: "Back to log in",
      unavailableTitle: "Service unavailable",
      unavailableText: "Password reset is not active yet. No email was sent.",
    },
    aside: {
      title: "Your security first",
      items: [
        `${BRAND} will never ask for your password by email, phone or message.`,
        "Always check the site address before logging in.",
        "Choose a unique password that you do not use anywhere else.",
      ],
    },
  },

  forms: {
    fullName: "Full name",
    email: "Email address",
    emailPlaceholder: "name@example.com",
    password: "Password",
    passwordHint: "At least 10 characters, with letters and numbers.",
    confirmPassword: "Confirm password",
    showPassword: "Show password",
    hidePassword: "Hide password",
    name: "Name",
    message: "Message",
    submit: "Send",
    submitting: "Sending…",
    join: "Sign me up",
    required: "required",
    errorSummary: "The form contains errors. Please correct the highlighted fields.",
    errors: {
      required: "This field is required.",
      emailInvalid: "Enter a valid email address, for example name@example.com.",
      passwordTooShort: "Password must be at least 10 characters long.",
      passwordWeak: "Password must contain at least one letter and one number.",
      passwordMismatch: "The two passwords do not match.",
      nameTooShort: "Name must be at least 2 characters long.",
      termsRequired: "You must accept the terms to continue.",
      messageTooShort: "Message must be at least 20 characters long.",
    },
    genericError: "Something went wrong. Please try again shortly.",
  },

  legal: {
    privacy: {
      title: "Privacy policy",
      updated: "Draft — October 2026",
      sections: [
        { title: "Purpose", paragraphs: [`This policy will describe how ${BRAND} collects, uses and protects the personal data of users of its website and services.`] },
        { title: "Data collected today", paragraphs: ["The site's forms (log in, sign up, contact, early access) are not connected to any service: the information entered is neither transmitted nor kept.", "The site does not use advertising cookies or audience measurement tools at this stage."] },
        { title: "Data collected in the future", paragraphs: ["Once services open, some data will be required: identity, contact details, documents required by regulations, login information. Their purpose, legal basis and retention period will be specified here."] },
        { title: "Your rights", paragraphs: ["You will have rights of access, rectification, objection and deletion, in accordance with the data protection regulations applicable in your country."] },
        { title: "Data controller", paragraphs: ["[To be completed: company name, address and contact of the data controller.]"] },
      ],
    },
    terms: {
      title: "Terms of use",
      updated: "Draft — October 2026",
      sections: [
        { title: "Purpose", paragraphs: [`These terms will govern the use of the ${BRAND} website and, eventually, its services.`] },
        { title: "Nature of the service", paragraphs: [`The site presents a project under development. It provides no investment service, investment advice, or order reception and transmission. ${BRAND} is not an authorized intermediary.`] },
        { title: "Published information", paragraphs: ["Market data shown is simulated and labeled as such. Educational content is provided for information only and is neither advice nor an investment recommendation."] },
        { title: "Liability", paragraphs: ["[To be completed after legal review.]"] },
        { title: "Governing law", paragraphs: ["[To be completed after legal review.]"] },
      ],
    },
    risks: {
      title: "Risk information",
      updated: "Draft — October 2026",
      sections: [
        { title: "General warning", paragraphs: ["Investing in financial markets carries risks, including the risk of partial or total loss of the capital invested. Past performance is not a guide to future performance."] },
        { title: "Main risks", paragraphs: ["Market risk: the value of securities goes up and down.", "Liquidity risk: some securities may be hard to sell quickly.", "Concentration risk: a poorly diversified portfolio is more exposed.", "Fees: fees reduce the final return."] },
        { title: "Demonstration data", paragraphs: ["Prices and changes shown on this site are simulated. They do not reflect actual prices and must not be used to make an investment decision."] },
        { title: `${BRAND} status`, paragraphs: [`${BRAND} is not an authorized intermediary and offers no investment service to date.`] },
      ],
    },
    legalNotice: {
      title: "Legal notice",
      updated: "Draft — October 2026",
      sections: [
        { title: "Site publisher", paragraphs: ["[To be completed: company name, legal form, share capital, registered office, registration number.]", "[To be completed: publication director.]"] },
        { title: "Hosting", paragraphs: ["[To be completed: host name, address and contact.]"] },
        { title: "Intellectual property", paragraphs: [`${BRAND} is a temporary name. Names of listed companies mentioned on the site belong to their respective owners and are cited for information.`] },
      ],
    },
  },

  notFound: {
    title: "Page not found",
    text: "The page you requested does not exist or has been moved.",
  },

  footer: {
    description: `${BRAND} is building a digital experience to discover African financial markets, starting with the BRVM.`,
    columns: {
      explore: "Explore",
      company: "Company",
      legal: "Information",
    },
    links: {
      markets: "Markets",
      companies: "Companies",
      howItWorks: "How it works",
      resources: "Resources",
      about: "About",
      contact: "Contact",
      partnerships: "Partnerships",
      faq: "FAQ",
      privacy: "Privacy policy",
      terms: "Terms of use",
      risks: "Risk information",
      legalNotice: "Legal notice",
    },
    disclaimer: `${BRAND} is a project under development. ${BRAND} is not an authorized intermediary and provides no investment, advisory or order transmission service. Market data shown on this site is simulated. Investing carries a risk of capital loss.`,
    rights: "All rights reserved.",
  },
};
