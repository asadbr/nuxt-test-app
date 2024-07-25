module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "@vue/typescript/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint"],
  ignorePatterns: ["public/metrics/*.js"],
  rules: {
    "vue/script-setup-no-uses-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "vue/attribute-hyphenation": "off",
    "vue/v-on-event-hyphenation": "off",
    "vue/no-v-html": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-var": "off",
  },
};
