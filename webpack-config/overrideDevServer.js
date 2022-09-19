const { overrideDevServer } = require('customize-cra');
module.exports = overrideDevServer((config) => {
  config.headers = {
    'Access-Control-Allow-Origin': '*',
  };
  config.historyApiFallback = true;
  config.hot = false;
  config.hotOnly = false;
  config.watchContentBase = false;
  // config.liveReload = false;
  return config;
});
