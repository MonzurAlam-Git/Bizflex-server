// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      // "no-unused-expression": "error",
      "no-undef": "error",
      "prefer-const": "error",
      "no-console": "warn",
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
);
