module.exports = {
  extends: ['airbnb-typescript/base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
		project: 'tsconfig.json'
  },
  rules: {
    'dot-notation': 0,
    'linebreak-style': 0,
    'no-multiple-empty-lines': 0,
    'no-tabs': 0,
    'no-trailing-spaces': 0,
    '@typescript-eslint/indent': 0,
		'@typescript-eslint/lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }]
  },
	ignorePatterns: [
		'webpack.config.base.js',
		'**/.eslintrc.js',
		'**/webpack.config.js',
		'**/*.d.ts',
		'**/babel.config.js'
	],
};
