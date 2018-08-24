### eslint 应用
1. `npm --save-dev install eslint`然后`npm --save-dev install eslint-loader`
2. 配置`eslint-loader`
```
// webpack.base.config.js
module: {
  loaders: [
    {
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    },
    {
      test: /\.js$/,
      // 只检测src文件夹下面的js
      include: [resolve('../src')],
      loaders: ['eslint-loader']
    },
    ....
  ]
},
```
3. 根目录新建.eslintrc.js
```
// .eslintrc.js
module.exports = {
  // 需要安装 babel-eslint
  "parser": "babel-eslint",
  // 需要安装 eslint-config-standard eslint-plugin-promise
  // eslint-plugin-node eslint-plugin-import eslint-plugin-jsx-a11y
  // 如果需要 "extends": "airbnb"
  // 安装 eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y
  extends": "standard",
  // 需要安装 eslint-plugin-react
  "plugins": [
    "react"
  ],
  "rules": {
    // 自定义规则
    // 关闭统一换行符，"\n" unix(for LF) and "\r\n" for windows(CRLF)，默认unix
    "linebreak-style": "off",
    // 某些变量未引用不报错
    "no-unused-vars": "off"
  }
}
```
5. 忽略eslint规则
```
/*eslint-disable*/
import * as types from '../constants/ActionTypes';
/*eslint-disable*/
```
6. vscode设置
```
{ 
  // 保存自动修正
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    // vue文件需要
    { "language": "vue", "autoFix": true }
  ]
  ......
}
 ```
