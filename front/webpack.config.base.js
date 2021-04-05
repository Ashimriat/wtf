const ESLintWebpackPlugin = require('eslint-webpack-plugin');


module.exports = {
  plugins: [
    new ESLintWebpackPlugin({
      extensions: ['.js', '.ts'],
    }),
  ],
  module: {
    rules: {
      tsAndTsxDev: {
        test: /.tsx?/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      tsAndTsxProd: {
        test: /.tsx?/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    },
  },
};
