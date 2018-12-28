# CORS
``` javascript
app.all('*', function(req, res, next) {
  // 允许跨域 后面设置了Access-Control-Allow-Credentials那这里就不能为'*'
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  // 允许cookie跨域通用
  res.header('Access-Control-Allow-Credentials', true)
  next();
});
```
* 前端做如下设置 axios示例
``` javascript
// 跨域的header头上可以附带cookie
axios.defaults.withCredentials = true
```
* [demo地址](https://github.com/myadomin/react-adomin-temp/tree/master/examples/corsCookie)
* demo使用
  * `npm run frontend` 启动前端服务器 地址localhost:4000
  * `npm run server` 启动后端服务器 地址localhost:3000
  * 查看同域及跨域下cookie的机制

