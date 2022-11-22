module.exports = {
  root: true,
  extends: ["react-app", "react-app/jest", "airbnb", "prettier"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: { project: ["./tsconfig.json"] },
      extends: [
        "react-app",
        "react-app/jest",
        "airbnb",
        "airbnb-typescript",
        "plugin:jsx-a11y/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
      ],
      plugins: ["@typescript-eslint/eslint-plugin", "jsx-a11y", "prettier"],
      rules: {
        "@typescript-eslint/no-use-before-define": "off",
        "import/no-unresolved": "error",
        "react/jsx-no-useless-fragment": "off",
        "no-use-before-define": "off",
      },
    },
  ],
};
