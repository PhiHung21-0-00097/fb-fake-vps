module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    // ❌ Không cho phép khai báo biến không dùng
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
