
const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfigProd = {
  mode: 'production',
  output: {
    // 必须用chunkhash 否则vendor每次打包后hash都会变化就无法缓存了
    filename: '[name].[chunkhash].js',
    // 打包后 引用任何文件都是./(index.html的同级目录)
    publicPath: './'
  },
  plugins: [
    // 分析代码
    // new BundleAnalyzerPlugin({ analyzerPort: 3011 })
  ],
  // 打包界面不出现性能建议warning
  performance: {
    hints: false
  }
}

module.exports = (env) => {
  webpackConfigProd.plugins.push(new webpack.DefinePlugin({
    // npm run dev 进入webpack.dev.config, SERVER是localhost
    // npm run build-test，通过--env=testserver传参 SERVER是testserver
    // npm run build-www，通过--env=prodserver传参 SERVER是wwwserver
    // 在业务代码中通过 SERVER 判断是本地开发还是测试服环境还是生产服环境
    SERVER: JSON.stringify(env)
  }))
  return merge(webpackConfigBase, webpackConfigProd)
}
