import path from "node:path";
import VueLoaderPlugin from "vue-loader/lib/plugin";


const config = {
	entry: {
		main: ''
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
		]
	}
};

export default (env, arg) => {

};
