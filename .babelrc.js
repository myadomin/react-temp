module.exports = {
  presets: [
    // mobx支持装饰器语法
    ["env", "mobx"],
    "stage-0",
    "react"
  ],
  plugins: [
    // antd
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }],
    "transform-runtime",
    "transform-decorators-legacy"
  ]
}