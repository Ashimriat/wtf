module.exports = {
	extends: [
		'../../.eslintrc.cjs',
		'plugin:vue/vue3-recommended',
	],
	parser: 'vue-eslint-parser',
	env: {
		es2021: true,
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
		vueFeatures: {}
	},
	ignorePatterns: [
		'.eslintrc.cjs',
		'.storybook/*'
	],
};
