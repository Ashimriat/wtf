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
		extraFileExtensions: ['.vue'],
		project: 'tsconfig.json',
		vueFeatures: {

		},
	},
	ignorePatterns: [
		'./.storybook/*',
		'./vetur.config.js'
	],
};
