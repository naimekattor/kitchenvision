/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: "de", // your default language
    locales: ["en", "de"], // all supported languages
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
