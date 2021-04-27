import path from 'node:path';
import { VueLoaderPlugin } from 'vue-loader';
import { merge } from '../../node_modules/webpack-merge/dist/index.js';
import baseConfigCreator from '../../webpack.config.base.js';


const __dirname = path.resolve();
const config = {
	entry: {
		main: path.resolve(__dirname, 'src/index.ts'),
	},
	resolve: {
		extensions: ['.vue', '.ts', '.js'],
	},
	plugins: [
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.pug$/,
				use: 'pug-plain-loader'
			},
			{
				test: /\.(eot|svg|ttf|woff|png)$/,
				use: 'file-loader'
			}
		]
	},
	devServer: {
		port: 5050,
	}
};


export default (env, args) => merge(baseConfigCreator(env, args), config);
