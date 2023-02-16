const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const Dotenv = require('dotenv-webpack');

const REPO_NAME = 'WBPortfolio';

module.exports = {

  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: `/${REPO_NAME}/`,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new Dotenv()
  ],
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /^\/*/, to: '/index.html' }],
    },
  }
}