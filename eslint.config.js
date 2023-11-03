export default [
  {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:vue/vue3-essential",
      "plugin:vue/base",
      "@pnpm/eslint-config",
    ],
    overrides: [
      {
        env: {
          node: true,
        },
        files: [".eslintrc.{js,cjs}"],
        parserOptions: {
          sourceType: "script",
        },
      },
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
      ecmaVersion: "latest",
      parser: "@typescript-eslint/parser",
      sourceType: "module",
    },
    ignores: ["**/*config.{cjs,json,js,ts}"],
    plugins: ["@stylistic", "vue"],
    rules: {
      quotes: "off",
      "@stylistic/quotes": "off"
    },
  },
];
