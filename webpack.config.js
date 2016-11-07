const path = require('path');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'sourcemap',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    hot: true,
    inline: true,
    noInfo: true,
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NpmInstallPlugin(),
  ],
};
