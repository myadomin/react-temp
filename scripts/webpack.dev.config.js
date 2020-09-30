const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const webpackConfigDev = {
  // 定义process.env.NODE_ENV=development 让react源码和webpack读取 做优化处理
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      SERVER: JSON.stringify('localhost')
    }),
    // 控制台打印
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: function (severity, errors) {
      }
    })
  ],
  devServer: {
    port: 8200,
    open: true,
    // 后续热更新需要
    // hot: true,
    // 本地开发跨域请求设置
    proxy: {
      // '/api/*': {
      //     target: 'http://beeossdev.egtest.cn:7777',
      //     changeOrigin: true
      // }
    }
  }
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
