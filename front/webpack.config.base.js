import ESLintWebpackPlugin from 'eslint-webpack-plugin';


const CODE_LOADERS = {
  js: 'babel-loader',
  ts: 'ts-loader',
};


export default (env, args, options) => {
  const IS_DEV = args.mode === 'development';

  return {
    mode: args.mode,
    output: {
      filename: '[name].js'
    },
    plugins: [
      new ESLintWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /.tsx?$/,
          exclude: /node_modules/,
          use: CODE_LOADERS[IS_DEV ? 'js' : 'ts'],
        },
        {
          test: /.js$/,
          exclude: file => (
            /node_modules/.test(file) &&
            !/\.vue\.js/.test(file)
          ),
          use: CODE_LOADERS.js,
        },
        {
          test: /.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    devServer: {
      open: 'Chrome',
    }
  };
};
