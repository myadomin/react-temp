
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve (relatedPath) {
  return path.join(__dirname, relatedPath)
}

const webpackConfigProd = {
  output: {
    // 必须用chunkhash 否则manifest每次打包后hash都会变化就无法缓存了
    filename: '[name].[hash].js',
    // 部署到生产 path不能是根目录 都是打包出的index.html的同级目录
    publicPath: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      IS_DEVELOPMETN: false
    }),
    /* 压缩优化代码开始 */
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
    // 分析代码
    // new BundleAnalyzerPlugin({ analyzerPort: 3011 })
  ],
  devtool: 'source-map'
}

module.exports = merge(webpackConfigBase, webpackConfigProd)
