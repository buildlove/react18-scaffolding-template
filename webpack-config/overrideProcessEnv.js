const findWebpackPlugin = (plugins, pluginName) => plugins.find(plugin => plugin.constructor.name === pluginName);

const overrideProcessEnv = value => config => {
  const plugin = findWebpackPlugin(config.plugins, 'DefinePlugin');
  const processEnv = plugin.definitions['process.env'] || {};

  plugin.definitions['process.env'] = {
    ...processEnv,
    ...value
  };

  return config;
};

module.exports = overrideProcessEnv;
