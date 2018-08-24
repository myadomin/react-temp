const path = require('path')
const webpack = require('webpack')

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

const webpackConfigBase = {
  entry: {
    // vendor
    vendor: ["react","react-dom", "redux", "react-redux"],
    // 入口文件
    main: resolve('../src/main.js')
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@src': path.join(__dirname, '../src')
    },
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        include: [resolve('../src')],
        loaders: ['eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader',]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ],
  },
  plugins: [
    // https://www.jb51.net/article/131865.htm
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor"]
    }),
    // 如果不配置下面 只有main.js和vendor.js 每次修改代码后打包 这两个js的hash值都变化了 不利于vendor.js的缓存
    // 配置了下面 每次修改代码后打包 只变化main mainfest的hash, vendor hash不变化 利用缓存
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
}

module.exports = webpackConfigBase
