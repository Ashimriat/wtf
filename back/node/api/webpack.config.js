import path from 'node:path';


export default {
	entry: {
		main: './src/index'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(tj)s$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	}
}