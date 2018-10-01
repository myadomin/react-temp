### websocket tips
* socket.io 特殊封装 服务端用这个客户端也必须用这个，不能用原生websocket。
* ws 可以服务端用这个，客户端用原生websocket，本项目用的就是这个
* 原生websocket需要自己实现心跳 重连等 具体参考此demo `src/websocket/index`
* nodemon 热更新nodejs文件

