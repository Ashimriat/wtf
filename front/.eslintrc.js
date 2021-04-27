export default {
  extends: ['airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'dot-notation': 0,
    'linebreak-style': 0,
    'no-multiple-empty-lines': 0,
    'no-tabs': 0,
    'no-trailing-spaces': 0,
    '@typescript-eslint/indent': 0
  }
};
