const CODE_LOADERS = {
  js: 'babel-loader',
  ts: 'ts-loader',
};


export default (env, args, options) => {
  const IS_DEV = args.mode === 'development';
	let tsCodeLoader = CODE_LOADERS[IS_DEV ? 'js' : 'ts'];
	if (options.alwaysTs) {
		tsCodeLoader = CODE_LOADERS.ts;
	}
  return {
    mode: args.mode,
    output: {
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          exclude: /node_modules/,
          use: {
						loader: tsCodeLoader,
						options: !IS_DEV ? { appendTsSuffixTo: [/\.vue$/] } : {},
					},
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
    },
  };
};
