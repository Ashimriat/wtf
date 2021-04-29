import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import path from 'path';
import { VueLoaderPlugin } from 'vue-loader';
import { merge } from '../../node_modules/webpack-merge/dist/index.js';
import baseConfigCreator from '../../webpack.config.base.js';


const dirName = path.resolve();
const staticConfig = {
	entry: {
		main: path.resolve(dirName, 'src/index.ts'),
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
		port: 5050,
	},
};


export default async (env, args) => {
	const IS_DEV = args.mode === 'development';
	return merge(
		baseConfigCreator(env, args),
		staticConfig,
		{
			plugins: IS_DEV ? [] : [
				new ESLintWebpackPlugin({
					files: ['src'],
					extensions: ['vue', 'ts', 'js'],
					failOnError: true,
					failOnWarning: true,
					lintDirtyModulesOnly: false,
					outputReport: true,
				}),
			],
		},
	);
};
