module.exports = {
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true
      }
  },
  "env": {
    "jest": true,
    "browser": true,
    "es6": true
  },
  "extends": "airbnb-base",
  "rules": {
    "arrow-parens": ["warn", "as-needed"],
    "no-console": "warn",
    "curly": ["error", "multi"]
  }
}
