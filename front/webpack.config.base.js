const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


const CODE_LOADERS = {
  js: 'babel-loader',
  ts: 'ts-loader',
};
const BASE_PLUGINS = [
	new CopyPlugin({
		patterns: [
			{ from: './src/index.html' }
		]
	})
];


module.exports = (env, args, options) => {
  const IS_DEV = args.mode === 'development';
	const isBabelLoader = IS_DEV && !options?.alwaysTs;
	const tsLoaderUsed = {
		loader: CODE_LOADERS[isBabelLoader ? 'js' : 'ts'],
		options: isBabelLoader
			? { rootMode: 'upward' }
			: { appendTsSuffixTo: [/\.vue$/] },
	};
  return {
    mode: args?.mode ?? 'development',
    output: {
      filename: '[name].js',
    },
		plugins: BASE_PLUGINS.concat(IS_DEV ? [] : [
			new ESLintWebpackPlugin({
				files: ['src'],
				extensions: ['vue', 'ts', 'tsx', 'js', 'jsx'],
				failOnError: true,
				failOnWarning: true,
				lintDirtyModulesOnly: false,
				outputReport: true,
			}),
		]),
    module: {
      rules: [
        {
          test: /.tsx?$/,
          exclude: /node_modules/,
          use: tsLoaderUsed,
        },
        {
          test: /.js$/,
          exclude: file => (
            /node_modules/.test(file)
						&& !/\.vue\.js/.test(file)
          ),
          use: CODE_LOADERS.js,
        },
        {
          test: /.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    devServer: {
      open: 'Chrome',
			hot: true,
    },
  };
};
