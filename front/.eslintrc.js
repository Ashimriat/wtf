module.exports = {
  extends: ['airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'dot-notation': 0
  }
};
