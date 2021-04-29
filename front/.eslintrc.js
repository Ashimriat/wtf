const path =  require('path');


module.exports = {
  extends: ['airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: path.resolve(__dirname, 'tsconfig.json'),
  },
  rules: {
    'dot-notation': 0,
    'linebreak-style': 0,
    'no-multiple-empty-lines': 0,
    'no-tabs': 0,
    'no-trailing-spaces': 0,
    '@typescript-eslint/indent': 0
  },
	ignorePatterns: [
		'./**/webpack.config.js',
		'./**/*.d.ts'
	]
};
