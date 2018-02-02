const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve('./dist'),
    filename: 'react-modals.js',
    publicPath: '/dist/',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader'],
        }),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('react-modals.css'),
  ],
  externals: {
    'prop-types': 'prop-types',
    react: 'react',
    'react-dom': 'react-dom',
  },
};
