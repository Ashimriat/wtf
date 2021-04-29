module.exports = {
	extends: [
		'../../.eslintrc.js',
		'plugin:vue/vue3-recommended',
	],
	parser: 'vue-eslint-parser',
	env: {
		es2021: true,
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
		project: '../../tsconfig.json',
		extraFileExtensions: ['.vue'],
		vueFeatures: {}
	},
	ignorePatterns: [
		'.eslintrc.cjs',
		'.storybook/*',
		'webpack.config.js'
	],
};
