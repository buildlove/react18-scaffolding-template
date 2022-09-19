const overrideProcessEnv = require('./overrideProcessEnv');
const overrideOutput = require('./overrideOutput');
const overrideOutputDesktop = require('./overrideOutputDesktop');
const overrideExternals = require('./overrideExternals');
const overrideOptimization = require('./overrideOptimization');
const overrideMiniCssExtractPlugin = require('./overrideMiniCssExtractPlugin');
const importBabelPlugins = require('./importBabel');
const overrideDevServer = require('./overrideDevServer');
const overrideHTMLPlugin = require('./overrideHTMLPlugin');
const addLessLoader = require('customize-cra-less-loader');

module.exports = {
  overrideProcessEnv,
  overrideOutput,
  overrideOutputDesktop,
  overrideExternals,
  overrideOptimization,
  overrideMiniCssExtractPlugin,
  overrideDevServer,
  overrideHTMLPlugin,
  importBabelPlugins,
  addLessLoader,        // 添加less
};
