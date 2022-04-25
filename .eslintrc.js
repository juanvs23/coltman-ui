// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  files: ["*.ts", "*.tsx"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};
