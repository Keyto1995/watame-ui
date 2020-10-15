module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.js",
      // etc.
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
