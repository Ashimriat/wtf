const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { merge } = require('webpack-merge');
const baseConfigCreator = require('../../webpack.config.base.js');


const repoConfig = {
	entry: {
		main: path.resolve(__dirname, 'src/index.ts'),
	},
	resolve: {
		extensions: ['.vue', '.ts', '.js'],
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.pug$/,
				use: 'pug-plain-loader',
			},
			{
				test: /\.(eot|svg|ttf|woff|png)$/,
				use: 'file-loader',
			},
		],
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 5050,
	},
};


module.exports = (env, args) => merge(
	baseConfigCreator(env, args, { alwaysTs: true }),
	repoConfig
);
