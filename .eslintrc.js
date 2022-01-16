module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:markdown/recommended",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  rules: {
    "no-console": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
