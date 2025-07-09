module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 2018,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
  "max-len": "off",
  "indent": "off",
  "comma-dangle": "off",
  "no-trailing-spaces": "off",
  "eol-last": "off",
  "require-jsdoc": "off",
  "quotes": ["error", "double", {"allowTemplateLiterals": true}],
},
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
