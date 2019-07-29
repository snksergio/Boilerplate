module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "react-app",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "prettier",
    "react"
  ],
  "env": {
    "node": true,
    "browser": true
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
      }
    ],
    "jsx-a11y/no-autofocus": "off",
    "react/forbid-prop-type":  "off",
    "react/prop-types":  "off",
    "react/forbid-prop-types": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": "off",
    "no-use-before-define": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off"
  }
}