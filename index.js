/*!
 * Copied from https://github.com/felixge/node-style-guide/blob/master/.eslintrc
 */
module.exports = {
  "extends": "eslint:recommended",

  "env": {
    "node": true
  },

  // See http://eslint.org/docs/rules/ for rule descriptions.
  "rules": {
    "array-bracket-spacing": [2, "never"],
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs"],
    "camelcase": 1,
    "comma-dangle": 0,
    "curly": 2,
    "eol-last": 2,
    "eqeqeq": [2, "smart"],
    "max-depth": [1, 3],
    "max-len": [1, 80],
    "max-statements": [1, 15],
    "new-cap": 1,
    "no-console": 0,
    "no-extend-native": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-trailing-spaces": 2,
    "no-unused-vars": 1,
    "no-use-before-define": [2, "nofunc"],
    "object-curly-spacing": [2, "never"],
    "quotes": [2, "single", "avoid-escape"],
    "semi": [2, "always"],
    "space-after-keywords": [2, "always"],
    "space-unary-ops": 2
  }
};

