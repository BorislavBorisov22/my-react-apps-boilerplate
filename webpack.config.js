const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const { getAliasesForDir, isDevMode } = require('./webpack.utils')

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  devtool: envDep('inline-source-map', 'source-map'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: envDep('[name.css]', '[name].[hash].css'),
      chunkFilename: envDep('[id].css', '[id].[hash].css'),
    }),
    new StyleLintPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.s?css$/,
        use: [envDep('style-loader', MiniCssExtractPlugin.loader), 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: Object.assign({}, getAliasesForDir('./src')),
  },
}

function envDep(devMode, prodMode) {
  return isDevMode() ? devMode : prodMode
}
