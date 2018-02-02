const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugion = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugion({
      template: './index.ejs',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        include: [/main.css/],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /main.css/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[folder]_[local]_[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
};
