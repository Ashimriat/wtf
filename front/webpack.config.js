import path from "node:path";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";


export default {
	plugins: [
		new ESLintWebpackPlugin({
			extensions: ['.js', '.ts']
		})
	]
}

/*
export default (env, arg) => {
	const mode = arg && arg.mode || 'development';
	const entryOutput = {
		entry: {
			background: './src/extension/background/index.ts',
			popup: './src/extension/popup/index.ts',
			options: './src/extension/options/index.ts',
			canvas: './src/three/index.ts'
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
		];
	}
*/

