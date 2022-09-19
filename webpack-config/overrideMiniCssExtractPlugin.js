const path = require('path');
const { name } = require(path.join(process.cwd(), './package.json'));
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const filterWebpackPlugin = (plugins, pluginName) => plugins.filter((plugin) => plugin.constructor.name !== pluginName);
const findIndexWebpackPlugin = (plugins, pluginName) => plugins.findIndex((plugin) => plugin.constructor.name === pluginName);

const overrideMiniCssExtractPlugin = () => (config) => {
  if (process.env.NODE_ENV === 'development') {
    return config;
  }
  const index = findIndexWebpackPlugin(config.plugins, 'MiniCssExtractPlugin');
  const plugins = filterWebpackPlugin(config.plugins, 'MiniCssExtractPlugin');
  const replacePlugin = new MiniCssExtractPlugin({ filename: `static/css/${name}.css` });
  if (index > -1) {
    plugins.splice(index, 0, replacePlugin);
  } else {
    plugins.push(replacePlugin);
  }
  config.plugins = plugins;

  return config;
};

module.exports = overrideMiniCssExtractPlugin;
