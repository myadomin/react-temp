const rewireMobX = require('react-app-rewire-mobx');

// https://github.com/timarney/react-app-rewired/tree/master/packages/react-app-rewire-mobx
// 支持装饰器语法 在create-react-app中用react-app-rewired react-app-rewire-mobx
module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  return config;
}