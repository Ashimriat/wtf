module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-typescript',
	],
	plugins: [
		[
			'@babel/plugin-proposal-decorators', { legacy: true },
		],
		'@babel/plugin-transform-typescript',
	],
	overrides: [
		{
			test: ['./projects/react'],
			presets: [
				'@babel/preset-react',
			],
			plugins: [
				'@babel/plugin-transform-react-jsx',
				'@babel/plugin-transform-react-jsx-self',
			],
		},
	],
};
