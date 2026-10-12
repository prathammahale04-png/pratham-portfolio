/**
 * Production-safe public URLs for portfolio images.
 * Files live in /public/images so Vite copies them to dist/images on Vercel.
 * Prefix with BASE_URL so a non-root deploy still resolves.
 */
const imagesDir = `${import.meta.env.BASE_URL}images`;

export const IMAGES = {
  rose: `${imagesDir}/signature_crimson_rose_1791784030984.jpg`,
  carenova: `${imagesDir}/carenova_ui_mockup_1791784044827.jpg`,
  sonderAi: `${imagesDir}/sonder_ai_interface_1791784057744.jpg`,
  auraSound: `${imagesDir}/aura_sound_interface_1791784072597.jpg`,
  portrait: `${imagesDir}/editorial_designer_portrait_1791784084309.jpg`,
} as const;
