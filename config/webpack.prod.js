const path = require('path')
const dotenv = require('dotenv-webpack')
const html = require('html-webpack-plugin')
const copy = require('copy-webpack-plugin')
const clean = require('clean-webpack-plugin')
const css = require('mini-css-extract-plugin')
const webapp = require('webapp-webpack-plugin')

const __rootdir = process.cwd()

module.exports = {
  mode: 'production',
  entry: path.resolve(__rootdir, 'src'),
  output: {
    filename: '[name]-[contenthash].bundle.js',
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
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new dotenv(),
    new clean([path.resolve(__rootdir, 'build')], { root: path.resolve(__rootdir) }),
    new copy([path.resolve(__rootdir, 'public')]),
    new css(),
    new html({
      template: path.resolve(__rootdir, 'src', 'index.html')
    }),
    new webapp({
      cache: true,
      logo: path.resolve(__rootdir, 'resource', 'logo.png'),
      favicons: {
        lang: 'ja',
        background: '#2e3440',
        theme_color: '#2e3440',
        icons: {
          coast: false,
          yandex: false
        }
      }
    })
  ]
}
