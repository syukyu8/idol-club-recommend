const path = require('path')
const dotenv = require('dotenv-webpack')
const html = require('html-webpack-plugin')
const css = require('mini-css-extract-plugin')
const notifier = require('webpack-build-notifier')

const __rootdir = process.cwd()

module.exports = {
  mode: 'development',
  devtool: '#eval-cheap-module-source-map',
  entry: path.resolve(__rootdir, 'src'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__rootdir, 'build'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [css.loader, 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ttf|otf|woff|woff2)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new dotenv(),
    new css(),
    new html({
      template: path.resolve(__rootdir, 'src', 'index.html')
    }),
    new notifier({
      suppressSuccess: true
    })
  ],
  devServer: {
    contentBase: path.resolve(__rootdir, 'build'),
    historyApiFallback: true,
    open: true
  }
}
