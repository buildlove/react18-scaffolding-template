const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const findIndexWebpackPlugin = (plugins, pluginName) => plugins.findIndex((plugin) => plugin.constructor.name === pluginName);
const overrideHTMLPlugin =
  (raw = {}) =>
  (config) => {
    const index = findIndexWebpackPlugin(config.plugins, 'InterpolateHtmlPlugin');
    config.plugins.splice(index, 0, new InterpolateHtmlPlugin(HtmlWebpackPlugin, raw));

    return config;
  };

module.exports = overrideHTMLPlugin;
