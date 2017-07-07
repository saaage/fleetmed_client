const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  plugins: [

    new webpack.HotModuleReplacementPlugin() // Enable HMR

  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },

  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true
  }
};