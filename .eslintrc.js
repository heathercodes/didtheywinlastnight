// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true
  },
  extends: "airbnb-base",
  // required to lint *.vue files
  plugins: ["html"],
  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js"
      }
    }
  },
  // add your custom rules here
  rules: {
    indent: "off",
    "no-tabs": "off",
    "object-shorthand": "off",
    "no-unused-vars": "warn",
    "func-names": "off",
    "space-before-function-paren": "off",
    "space-before-blocks": "off",
    "no-console": "off",
    "prefer-template": "off",
    "no-mixed-spaces-and-tabs": "off",
    "arrow-body-style": "off",
    "space-in-parens": "off",
    "padded-blocks": "off",
    radix: "off",
    "comma-dangle": "off",
    "key-spacing": "off",
    "no-mixed-operators": "off",
    quotes: "off",
    "spaced-comment": "off",
    "no-trailing-spaces": "off",
    "import/newline-after-import": "off",
    "no-new-func": "off",
    "import/first": "off",
    "no-unused-vars": "warn",
    "no-unused-expressions": "off",
    "wrap-iife": "off",
    "comma-spacing": "off",
    "block-spacing": "off",
    "no-var": "warn",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "space-infix-ops": "off",
    "semi-spacing": "off",
    "keyword-spacing": "off",
    "block-spacing": "warn",
    "no-underscore-dangle": "off",
    "max-len": "off",
    "global-require": "off",
    "no-useless-concat": "off",
    "dot-notation": "off",
    "quote-props": "off",
    "no-useless-escape": "off",
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never"
      }
    ],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"]
      }
    ],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
};
