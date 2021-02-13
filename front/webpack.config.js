const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = (env, arg) => {
	const mode = arg && arg.mode || 'development';
	const entryOutput = {
		entry: {
			// background: './src/background/index.ts',
			// popup: './src/popup/index.ts',
			// options: './src/options/index.ts',
			// canvas: './src/canvas/index.ts'
			background: './wix/background/index.js',
			content: './wix/content/index.js',
		}
	};
	let plugins = [];
	
	if (process.env.RUN_TESTS) {
		entryOutput.entry = path.resolve(__dirname, 'tests', 'asyncChrome.test.js');
		entryOutput.output = {
			path: path.resolve(__dirname, 'test-dist')
		};
	} else {
		
		plugins = [
			/*
			new VueLoaderPlugin(),
			new HtmlWebpackPlugin({
				title: 'Options',
				filename: 'options.html',
				templateParameters: {
					tags: {
						headTags: [],
						bodyTags: []
					}
				}
			}),
			new HtmlWebpackPlugin({
				title: 'Popup',
				filename: 'popup.html',
				templateParameters: {
					tags: {
						headTags: [],
						bodyTags: []
					}
				}
			}),
			*/
			/*
			new CopyWebpackPlugin({
				patterns: [
					{
						from: 'src/wix/manifest.json',
						context: __dirname
					}
				]
			}) */
			
			/*
			new CopyWebpackPlugin({
				patterns: [
					{
						from: './src/canvas/playground.html'
					}
				]
			})
			
			 */
			new CopyWebpackPlugin({
				patterns: [
					{
						from: './wix/assets',
						to: 'assets'
					},
					{
						from: './wix/manifest.json'
					}
				]
			})
		];
	}
	
	return {
		...entryOutput,
		mode,
		resolve: {
			extensions: ['.ts', '.tsx', '.vue', '.js',],
		},
		devtool: 'source-map',
		module: {
			rules: [
				// компоненты Vue
				{
					test: /\.vue$/,
					use: 'vue-loader',
				},
				// код
				{
					test: /\.tsx?$/,
					use: {
						loader: 'ts-loader',
						options: {
							appendTsSuffixTo: [/\.vue$/]
						}
					},
				},
				// шаблоны
				{
					test: /\.pug$/,
					use: 'pug-plain-loader'
				},
				// стили
				{
					test: /\.s[ac]ss$/,
					use: [
						'vue-style-loader',
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								sassOptions: {
									indentedSyntax: true,
									prependData: `$color: red;`
								}
							}
						}
						
					]
				},
				// тесты
				/*
				{
					test: /(\.test\.js)$/,
					exclude: /node-modules/,
					use: 'mocha-loader'
				} */
			],
		},
		plugins
	};
};
