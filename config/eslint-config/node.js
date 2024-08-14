/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@rocketseat/eslint-config/node"],
  plugins: ["simple-import-sort"],
  rules: {
    "simples-import-sort/imports": "error",
  },
};
