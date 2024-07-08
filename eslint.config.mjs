import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [{
  ignores: ["**/dist", "**/.eslintrc.cjs"]
}, ...fixupConfigRules(compat.extends(
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:react-hooks/recommended",
  "plugin:react/recommended"
)), {
  plugins: {
    "react-refresh": reactRefresh
  },
  languageOptions: {
    globals: {
      ...globals.browser
    },
    parser: tsParser
  },

  rules: {
    "react-refresh/only-export-components": ["warn", {
      allowConstantExport: true
    }],

    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    eqeqeq: ["warn", "always"],
    indent: ["warn", 2],
    camelcase: ["warn", { properties: "never" }],
    yoda: ["warn", "never"],
    "quote-props": ["warn", "as-needed"],
    "comma-dangle": ["warn", "never"],
    "no-undef": "error",
    "no-unused-expressions": "warn",
    "no-multi-spaces": "warn",
    "consistent-return": "warn",
    "prefer-const": "warn",
    "eol-last": ["warn", "always"],
    "space-before-blocks": ["warn", "always"],
    "keyword-spacing": ["warn", { before: true, after: true }],
    "no-mixed-spaces-and-tabs": "warn",
    "no-unreachable": "warn",
    "no-multiple-empty-lines": ["warn", { max: 1 }],
    "padded-blocks": ["warn", "never"],
    "space-in-parens": ["warn", "never"],
    "no-console": "warn",
    "linebreak-style": ["warn", "unix"],
    "object-curly-spacing": ["warn", "always"],
    "array-bracket-spacing": ["warn", "never"],
    "no-else-return": ["warn", { allowElseIf: false }],

    "@typescript-eslint/no-unused-vars": "warn",

    "react/prop-types": "warn",
    "react/jsx-curly-spacing": ["warn", { when: "never", children: true }],
    "react/react-in-jsx-scope": "off"
  }
}];
