const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfigCreator = require('../../webpack.config.base.js');


const repoConfig = {
	entry: {
		main: path.resolve(__dirname, './src/bootstrap/index.tsx'),
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: './src/index.html' }
			]
		})
	],
	devServer: {
		port: '8081',
	},
};


module.exports = (env, args) => merge(
	baseConfigCreator(env, args, { alwaysTs: true }),
	repoConfig
);
