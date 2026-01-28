import js from "@eslint/js";
import globals from "globals";
import stylistic from '@stylistic/eslint-plugin';
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "template-curly-spacing" : "off",
      "no-nested-ternary": 0,
      "react/no-unstable-nested-components": 0,
      "import/no-unresolved": 0,
      "import/no-named-as-default": 0,
      "no-unused-expressions": 0,
      "comma-dangle": 0,  // not sure why airbnb turned this on. gross!
      "no-console": 0,
      "no-alert": 0,
      "react/jsx-no-bind": 0,
      "id-length": 0,
      "no-script-url": 0,
      "import/no-extraneous-dependencies": 0,
      "no-underscore-dangle": 0,
      "react/jsx-filename-extension": 0,
      "global-require": 0,
      "import/newline-after-import": 0,
      "import/extensions": 0,
      "prefer-template": 0,
      "max-len": 0,
      "react/prefer-stateless-function": 0,
      "react/forbid-prop-types": 0,
      "react/function-component-definition": 0,
      "react/destructuring-assignment": 0,
      "react/jsx-fragments": 0,
      "react/jsx-props-no-spreading": 0,
      "jsx-a11y/href-no-hash": "off",
      "function-paren-newline": 0,
      "no-restricted-exports": 0,
      "react/no-typos": 0,
      "jsx-a11y/anchor-is-valid": 0,
      "react/default-props-match-prop-types": 0,
      "arrow-parens": 0,
      "jsx-a11y/label-has-for": [ 2, {
          "required": {
              "every": [ "id" ]
          },
      }],
    }
  }
]);

export default eslintConfig;
