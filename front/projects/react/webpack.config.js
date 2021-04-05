const path = require('path');
const {
	module: {
		rules: {
			tsAndTsxProd
		},
	},
} = require('../../webpack.config.base.js');


module.exports = (env, args) => {
	// const IS_DEV = args && args.mode === 'development';
	
	return {
		mode: (args && args.mode) || 'development',
		entry: {
			main: path.resolve(__dirname, './src/bootstrap/index.tsx'),
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		module: {
			rules: [
				// rules[`tsAndTsx${IS_DEV ? 'Dev' : 'Prod'}`],
				tsAndTsxProd,
			],
		},
		devServer: {
			port: '8081',
			open: 'Chrome',
			hot: true,
		},
	};
};
