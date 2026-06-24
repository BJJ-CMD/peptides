import { SITE_URL } from "@/lib/site-url"

export const INSTAGRAM_URL = "https://www.instagram.com/pure_amino_peptides_baku/"
export const INSTAGRAM_HANDLE = "@pure_amino_peptides_baku"

export const REGIONAL_SEO_LINKS = [
  {
    href: "/peptides-azerbaijan",
    labelEn: "Peptides in Azerbaijan",
    labelRu: "Пептиды в Азербайджане",
  },
  {
    href: "/peptides-baku",
    labelEn: "Peptides in Baku",
    labelRu: "Пептиды в Баку",
  },
  {
    href: "/ru/peptidy-azerbaijan",
    labelEn: "Peptides in Azerbaijan (RU)",
    labelRu: "Исследовательские пептиды в Азербайджане",
  },
  {
    href: "/ru/peptidy-baku",
    labelEn: "Peptides in Baku (RU)",
    labelRu: "Пептиды в Баку",
  },
] as const

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pure Amino Peptides",
  url: SITE_URL,
  sameAs: [INSTAGRAM_URL],
}
