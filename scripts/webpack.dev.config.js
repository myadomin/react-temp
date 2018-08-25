const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')

function resolve (relatedPath) {
  return path.join(__dirname, relatedPath)
}
const webpackConfigDev = {
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      IS_DEVELOPMETN: true
    }),
    // 将打包后的资源注入到html文件内
    new HtmlWebpackPlugin({
      template: resolve('../src/index.html'),
      mapConfig: 'http://41.196.99.30/tgram-pgisbase/config/qdkjdsj_map_config.js'
    }),
    // 控制台打印
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        // package.json cross-env传参
        messages: [`PROXY_ENV: ${process.env.PROXY_ENV}`],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: function (severity, errors) {
      }
    }),
    // 编译完成动态通知是否有error
    new WebpackNotifierPlugin({
      title: 'Notify',
      excludeWarnings: true,
      skipFirstNotification: true
    })
  ],
  // dev环境用eval-source-map prod环境用source-map
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 8200,
    // 自动打开网页
    open: true,
    // necessary for FriendlyErrorsPlugin
    quiet: true,
    proxy: {
      // '/api/index.php/*': {
      //     target: 'http://beeossdev.egtest.cn:7777',
      //     changeOrigin: true
      //     pathRewrite: {
      //       '^/api': ''
      //     }
      // }
    }
  }
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
