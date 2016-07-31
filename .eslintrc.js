module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "installedESLint": true,
  "plugins": [
    "react",
    "flowtype",
  ],
  "rules": {
    "no-console": "off",
    "flowtype/define-flow-type": 1,
    "flowtype/space-after-type-colon": [
      1,
      "always"
    ],
    "flowtype/space-before-type-colon": [
      1,
      "never"
    ],
    "flowtype/use-flow-type": 1
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  }
};
