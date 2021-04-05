const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = (env, arg) => {
	const mode = arg && arg.mode || 'development';
	const entryOutput = {
		entry: {
			background: './src/extension/background/index.js',
			// popup: './src/extension/popup/index.ts',
			// options: './src/extension/options/index.ts',
			// canvas: './src/three/index.ts'
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
			new CopyWebpackPlugin({
				patterns: [
					{
						from: 'manifest.json',
						context: __dirname
					}
				]
			})
			/*
			new CopyWebpackPlugin({
				patterns: [
					{
						from: './src/canvas/playground.html'
					}
				]
			})
			
			 */
		];
	}
	
	return {
		...entryOutput,
		mode,
		resolve: {
			extensions: ['.ts', '.tsx', '.vue', '.js',],
		},
		// devtool: 'source-map',
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
				{
					test: /\.js?$/,
					use: {
						loader: 'babel-loader',
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
			],
		},
		plugins
	};
};
