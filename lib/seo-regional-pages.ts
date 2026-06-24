import type { SeoRegionalLandingContent } from "@/components/seo-regional-landing"

const enLinks: SeoRegionalLandingContent["links"] = [
  { href: "/products", label: "Browse research peptide catalog" },
  { href: "/lab-reports", label: "Lab reports & COA information" },
  { href: "/faq", label: "Frequently asked questions" },
  { href: "/shipping", label: "Shipping information" },
  { href: "/contact", label: "Contact our team" },
]

const ruLinks: SeoRegionalLandingContent["links"] = [
  { href: "/products", label: "Каталог исследовательских пептидов" },
  { href: "/lab-reports", label: "Лабораторные отчеты и COA" },
  { href: "/faq", label: "Часто задаваемые вопросы" },
  { href: "/shipping", label: "Информация о доставке" },
  { href: "/contact", label: "Связаться с нами" },
]

export const peptidesAzerbaijanContent: SeoRegionalLandingContent = {
  overline: "Azerbaijan",
  h1: "Research Peptides in Azerbaijan",
  intro: [
    "Pure Amino Peptides supports laboratory and scientific workflows for researchers based in Azerbaijan, including Baku and across the country.",
    "Our catalog focuses on high-purity research-grade compounds with structured documentation, batch traceability, and clear handling standards for controlled research environments.",
  ],
  sections: [
    {
      title: "Lab Reports & Certificate of Analysis (COA)",
      paragraphs: [
        "Researchers often need documented batch information before selecting a compound for a study. We provide lab report and COA details on request so your team can review analytical data aligned with your internal quality requirements.",
        "If you need documentation for a specific catalog item, visit our lab reports page or contact us with the product name and batch reference.",
      ],
    },
    {
      title: "Purity Verification & Quality Documentation",
      paragraphs: [
        "Each listing is presented with purity specifications suitable for research use. Independent verification and Certificate of Analysis support help you confirm consistency before material enters your workflow.",
        "We emphasize transparent sourcing, clear labeling, and documentation that supports reproducible laboratory procedures—not consumer or clinical applications.",
      ],
    },
    {
      title: "Ordering & Support for Researchers in Azerbaijan",
      paragraphs: [
        "Browse the full catalog online, review shipping timelines for Azerbaijan, and reach our team through WhatsApp for availability questions or documentation requests.",
        "Whether you are coordinating from Baku or elsewhere in Azerbaijan, we aim to keep communication clear and documentation accessible throughout your inquiry.",
      ],
    },
  ],
  disclaimerTitle: "Research Use Only",
  disclaimer:
    "All products are intended strictly for laboratory and scientific research. Not for human or veterinary use. Not for household, cosmetic, or food applications. Purchasers are responsible for compliance with applicable local regulations.",
  linksTitle: "Helpful links",
  links: enLinks,
  ctaLabel: "View all products",
}

export const peptidesBakuContent: SeoRegionalLandingContent = {
  overline: "Baku, Azerbaijan",
  h1: "Research Peptides in Baku",
  intro: [
    "Researchers in Baku and the greater Baku metropolitan area can browse Pure Amino Peptides for laboratory-grade compounds supported by COA documentation and purity verification on request.",
    "We serve scientific teams who need reliable catalog information, structured batch details, and responsive support when planning research procurement in Azerbaijan’s capital.",
  ],
  sections: [
    {
      title: "Documentation for Baku-Based Research Teams",
      paragraphs: [
        "Lab reports and Certificates of Analysis (COA) help your laboratory confirm material specifications before use in controlled studies. Request documentation through our lab reports page or contact channel.",
        "Our team can clarify which analytical records are available for a given catalog entry so your Baku lab can align purchases with internal SOPs.",
      ],
    },
    {
      title: "Purity Standards & Analytical Transparency",
      paragraphs: [
        "Catalog items are described with research-appropriate purity targets and handling notes. We focus on verifiable quality signals—COA availability, batch documentation, and consistent presentation—not therapeutic or performance claims.",
        "Purity verification information is provided to support informed laboratory decisions, not human or animal consumption.",
      ],
    },
    {
      title: "Shipping & Contact from Baku",
      paragraphs: [
        "Review shipping information for delivery expectations within Azerbaijan, then explore the product catalog or message us on WhatsApp for sourcing questions.",
        "From initial inquiry to documentation follow-up, we keep the process straightforward for research coordinators working in Baku.",
      ],
    },
  ],
  disclaimerTitle: "Research Use Only",
  disclaimer:
    "All products are intended strictly for laboratory and scientific research. Not for human or veterinary use. Not for household, cosmetic, or food applications. Purchasers are responsible for compliance with applicable local regulations.",
  linksTitle: "Helpful links",
  links: enLinks,
  ctaLabel: "View all products",
}

export const peptidyAzerbaijanContent: SeoRegionalLandingContent = {
  overline: "Азербайджан",
  h1: "Исследовательские пептиды в Азербайджане",
  intro: [
    "Pure Amino Peptides предлагает исследовательские пептиды для лабораторных и научных задач в Азербайджане, включая Баку и другие регионы страны.",
    "Каталог ориентирован на соединения исследовательского класса с документированной чистотой, прозрачной информацией о партии и понятными стандартами обращения для контролируемых лабораторных условий.",
  ],
  sections: [
    {
      title: "Лабораторные отчеты и COA",
      paragraphs: [
        "Перед выбором соединения для исследования многим лабораториям нужны подтверждающие документы. Мы предоставляем информацию о лабораторных отчетах и сертификате анализа (COA) по запросу.",
        "Если вам нужны документы по конкретной позиции каталога, перейдите на страницу лабораторных отчетов или свяжитесь с нами, указав название продукта.",
      ],
    },
    {
      title: "Проверка чистоты и контроль качества",
      paragraphs: [
        "Каждая позиция представлена с параметрами чистоты, подходящими для исследовательского применения. Независимая проверка и COA помогают подтвердить соответствие перед вводом материала в рабочий процесс.",
        "Мы делаем акцент на прозрачности поставки и документации для воспроизводимых лабораторных процедур — не на потребительском или клиническом применении.",
      ],
    },
    {
      title: "Заказ и поддержка для исследователей в Азербайджане",
      paragraphs: [
        "Изучите каталог онлайн, ознакомьтесь со сроками доставки по Азербайджану и напишите нам в WhatsApp по вопросам наличия или документации.",
        "Независимо от того, координируете ли вы закупку из Баку или другого города, мы стремимся обеспечить понятную коммуникацию и доступ к нужным документам.",
      ],
    },
  ],
  disclaimerTitle: "Только для исследовательского использования",
  disclaimer:
    "Вся продукция предназначена исключительно для лабораторных и научных исследований. Не для использования человеком или животными. Не для бытового, косметического или пищевого применения. Покупатель несет ответственность за соблюдение применимых местных норм.",
  linksTitle: "Полезные ссылки",
  links: ruLinks,
  ctaLabel: "Смотреть все продукты",
}

export const peptidyBakuContent: SeoRegionalLandingContent = {
  overline: "Баку, Азербайджан",
  h1: "Пептиды в Баку для исследовательских лабораторий",
  intro: [
    "Исследовательские команды в Баку могут выбирать пептиды исследовательского класса в каталоге Pure Amino Peptides с запросом COA и подтверждением чистоты.",
    "Мы работаем с научными специалистами, которым важны понятные спецификации, документация по партии и оперативная поддержка при планировании закупок в столице Азербайджана.",
  ],
  sections: [
    {
      title: "Документация для лабораторий в Баку",
      paragraphs: [
        "Лабораторные отчеты и сертификат анализа (COA) помогают подтвердить характеристики материала до использования в контролируемых исследованиях. Запросите документы через страницу лабораторных отчетов или контактный канал.",
        "Мы уточним, какие аналитические данные доступны по выбранной позиции, чтобы ваша лаборатория в Баку могла согласовать закупку с внутренними процедурами.",
      ],
    },
    {
      title: "Проверка чистоты и аналитическая прозрачность",
      paragraphs: [
        "Позиции каталога описаны с целевыми показателями чистоты для исследовательского применения. Мы фокусируемся на проверяемых данных — доступности COA, документации по партии и единообразной подаче информации.",
        "Сведения о проверке чистоты предоставляются для обоснованных лабораторных решений, а не для потребления человеком или животными.",
      ],
    },
    {
      title: "Доставка и связь из Баку",
      paragraphs: [
        "Ознакомьтесь с информацией о доставке по Азербайджану, затем изучите каталог или напишите нам в WhatsApp по вопросам поставки.",
        "От первого запроса до уточнения документов мы стремимся сделать процесс понятным для координаторов исследований в Баку.",
      ],
    },
  ],
  disclaimerTitle: "Только для исследовательского использования",
  disclaimer:
    "Вся продукция предназначена исключительно для лабораторных и научных исследований. Не для использования человеком или животными. Не для бытового, косметического или пищевого применения. Покупатель несет ответственность за соблюдение применимых местных норм.",
  linksTitle: "Полезные ссылки",
  links: ruLinks,
  ctaLabel: "Смотреть все продукты",
}
