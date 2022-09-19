const overrideExternals = (externals = {}) => {
  return (config) => {
    config.externals = externals;
    return config;
  };
};
module.exports = overrideExternals;
