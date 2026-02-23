/**
 * Context-appropriate images for each page/section.
 * All URLs are royalty-free (Pexels/Unsplash). Update paths if using local assets.
 */

const pex = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Home hero – already using local /hero.png in Hero.tsx */
export const homeHero = "/hero.png";

/** Kontakt / Kerko oferte – contact, communication, handshake */
export const kontaktHero = pex("7688327");

/** Projekte & Referenca – projects, teamwork, business success */
export const projekteHero = pex("3861969");

/** Shërbimet hub – hero: cleaning/services; support: "Si të filloni" assessment */
export const sherbimetHero = pex("5691584");
export const sherbimetSupport =
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800";

/** Per-service hero images (cleaning, facility, disinfection, facade, solar, on-call) */
export const serviceHeroImages: Record<string, string> = {
  "pastrim-profesional": pex("5691584"), // cleaning team
  "facility-management": pex("3184292"), // office building management
  "dezinfektim-sanitizim": pex("7578896"), // sanitization / medical cleaning
  "fasadash-lartesi": pex("7688336"), // window / facade cleaning
  "panelesh-solare": pex("356036"), // solar panels
  "on-call": pex("7048134"), // emergency / 24-7 readiness
};
export const serviceHeroDefault = pex("5691584");

/** Sektorët hub */
export const sektoretHero = pex("4483610"); // business / corporate
export const sektoretSupport = pex("3861969", 800);

/** Per-sector hero images */
export const sectorHeroImages: Record<string, string> = {
  banka: pex("4483610"), // bank interior
  "qendra-tregtare": pex("3252299"), // shopping mall / retail
  publike: pex("3861969"), // government / institutional building
  "shendetesi-arsim": pex("7578896"), // healthcare / school
  industri: pex("3184292"), // industry / commercial
};
export const sectorHeroDefault = pex("4483610");

/** Standardet & Siguria – safety, quality, certification */
export const standardetHero = pex("590041");
export const standardetSupport = pex("7659564", 800);

/** Teknologjia – technology, equipment, digital */
export const teknologjiaHero = pex("669619");
export const teknologjiaSupport = pex("3861969", 800);

/** Si operojmë – how we work, process, team */
export const siOperojmeHero = pex("3184292");
export const siOperojmeSupport = pex("3184418", 800);

/** Single project page (generic) */
export const projectSlugHero = pex("3861969");

/** Project card placeholder when project has no image */
export const projectCardPlaceholder =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80";

/** Project-specific images (case studies) – keyed by project slug */
export const projectImages: Record<string, string> = {
  kuvendi: pex("3861969"), // institution
  "banka-kombetare": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80", // bank
  eulex: pex("3861969"),
  osce: pex("3861969"),
};

/** Home page section images (when those sections are used) */
export const homeSectionImages = {
  processBreakdown: pex("3861969", 800), // facility / professional space
  whyUs: pex("5691584", 800), // cleaning team / professionalism
  references: pex("3184292", 800), // team / collaboration
  fullSolution: pex("3184292", 800), // modern office / services
  pillars: {
    pastrim: pex("5691584", 600),
    facility: pex("3184292", 600),
    oncall: pex("7048134", 600),
  },
  sectorsStrip: {
    banka: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
    qendraTregtare: "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?auto=format&fit=crop&w=600&q=80",
    publike: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
    shendetesiArsim: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    industri: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  },
};
