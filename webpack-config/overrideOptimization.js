const overrideOptimization = () => (config) => {
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };
  return config;
};

module.exports = overrideOptimization;
