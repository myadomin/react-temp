const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const resolve = (relatedPath) => path.resolve(__dirname, relatedPath)

const webpackConfigBase = {
  entry: {
    main: resolve('../src/main.js')
  },
  output: {
    path: resolve('../dist')
  },
  optimization: {
    minimizer: [
      // 开启打包文件压缩
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false
        }
      })
    ],
    splitChunks: {
      // async异步代码分割 initial同步代码分割 all同步异步分割都开启
      chunks: 'all',
      minSize: 30000, // 字节 引入的文件大于30kb才进行分割
      minChunks: 1, // 模块至少使用次数
      maxAsyncRequests: 5, // 同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
      maxInitialRequests: 3, // 首页加载的时候引入的文件最多3个
      cacheGroups: {
        // 默认打包模块 commons.js
        commons: {
          name: 'commons',
          // 优先级，先打包到哪个组里面，值越大，优先级越高
          priority: 0
        },
        // node_modules的包打成vendor.js
        vendors: {
          name: 'vendor',
          priority: 10,
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@src': resolve('../src')
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve('../src')],
        // 一定要加这个 否则检测不到
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: {
            // 不符合Eslint规则时只console warning(默认false 直接error)
            // emitWarning: true
          }
        }]
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        exclude: [resolve('../node_modules')],
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            // less modules
            modules: true,
            localIdentName: '[name]__[local]__[hash:base64:5]'
          }
        }, 'less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            // prod的publicPath是'./', 所以build后所有的img src、background url等图片引用目录变为./
            // 例如开发时background: url('../../assets/logo.png')，打包后url会变成./static/logo.png
            name: 'static/[hash:8].[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../src/index.html')
    })
  ]
}

module.exports = webpackConfigBase
