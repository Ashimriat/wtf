import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import baseConfig from '../../webpack.config.base';


export default (env, arg) => ({
	mode: arg.mode,
  entry: {
    background: './src/background/index.ts',
		popup: './src/popup/index.ts',
		options: './src/options/index.ts',
	},
	output: {
		path: path.resolve(__dirname, '../../dist/extension'),
	},
	plugins: [
		...baseConfig.plugins,
		new HtmlWebpackPlugin({
			title: 'Options',
			filename: 'options.html',
			templateParameters: {
				tags: {
					headTags: [],
					bodyTags: [],
				},
			},
		}),
		new HtmlWebpackPlugin({
			title: 'Popup',
			filename: 'popup.html',
			templateParameters: {
				tags: {
					headTags: [],
					bodyTags: [],
				},
			},
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './manifest.json',
					to: path.resolve(__dirname, '../../dist/extension'),
				},
			],
		}),
	],
});
