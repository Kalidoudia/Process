import globals from "globals";
import pluginJs from "@eslint/js";
import jsdocPlugin from "eslint-plugin-jsdoc"; // Import jsdoc plugin

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js", "**/*.html"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      jsdoc: jsdocPlugin, // Add jsdoc plugin here
    },
    rules: {
      // Google style rules
      "indent": ["error", 2], // 2-space indentation
      "quotes": ["error", "double"], // Use double quotes
      "semi": ["error", "always"], // Always use semicolons
      "no-trailing-spaces": "error", // No trailing spaces
      "block-spacing": ["error", "always"], // Space between blocks
      "curly": ["error", "all"], // Always use braces for control statements
      "comma-dangle": ["error", "never"], // No trailing commas
      "no-magic-numbers": ["error", { "ignoreArrayIndexes": true, "ignore": [0, 1] }], // Avoid magic numbers
      "object-curly-spacing": ["error", "always"], // Always space inside curly braces
      "array-bracket-spacing": ["error", "never"], // No spaces inside array brackets

      // Code Quality and Best Practices
      "eqeqeq": ["error", "always"], // Enforce strict equality
      "no-unused-vars": "warn", // Warn about unused variables
      "no-console": "warn", // Warn on console usage
      "no-var": "error", // Disallow `var` usage
      "prefer-const": "error", // Prefer `const` over `let`
      "prefer-arrow-callback": "error", // Prefer arrow functions
      "arrow-body-style": ["error", "as-needed"], // Arrow functions with concise body

      // Naming Conventions
      "camelcase": "error", // Enforce camelCase naming convention
      "no-underscore-dangle": "error", // Disallow dangling underscores
      "id-length": ["error", { "min": 2, "max": 30, "exceptions": ["i", "j", "x", "y"] }], // Variable name length limits

      // Commenting Style
      "spaced-comment": ["error", "always"], // Ensure spaces after comments
      "jsdoc/require-jsdoc": ["error", { // Require JSDoc comments for certain declarations
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
        },
      }],
      "valid-jsdoc": "off", // Disable `valid-jsdoc` rule to avoid conflicts with `require-jsdoc`

      // Code Formatting
      "max-len": ["error", { "code": 80 }], // Max line length of 80 characters
      "linebreak-style": ["error", "unix"], // Unix line breaks (LF)

      // Best Practices
      "consistent-return": "error", // Enforce consistent return
      "no-new-object": "error", // Disallow `new Object()`
      "no-eval": "error", // Disallow `eval()`
      "no-alert": "warn", // Warn about the use of `alert()`
      "no-implied-eval": "error", // Disallow `setTimeout()` and `setInterval()` with strings
      "no-duplicate-imports": "error", // Disallow duplicate imports

      // Google-specific rules
      "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }], // Allow short-circuit and ternary expressions
      "prefer-template": "error", // Prefer template literals
      "no-restricted-globals": ["error", "event"], // Restrict certain global variables

      // JSDoc rules using eslint-plugin-jsdoc
      "jsdoc/valid-types": "error", // Enforce valid types in JSDoc comments
    },
  },
  pluginJs.configs.recommended, // Use the recommended ESLint rules for JS
];
