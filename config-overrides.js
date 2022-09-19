const { override, addWebpackAlias, adjustWorkbox, addDecoratorsLegacy } = require('customize-cra');
const configOverrides = require('./webpack-config');
const path = require('path');

const { 
  overrideProcessEnv, 
  addLessLoader, 
  overrideOutput, 
  overrideMiniCssExtractPlugin, 
  overrideHTMLPlugin, 
  overrideOptimization 
} = configOverrides;

module.exports = {
  webpack: override(
    configOverrides.importBabelPlugins.addAntdBabelPlugin,
    configOverrides.importBabelPlugins.addVidcBabelPlugin,
    configOverrides.importBabelPlugins.addMapdBabelPlugin,
    configOverrides.importBabelPlugins.addAhooksBabelPlugin,
    configOverrides.importBabelPlugins.addUtilsBabelPlugin,
    addDecoratorsLegacy(), // 配置装饰器
    overrideOutput(),
    addWebpackAlias({
      '@src': path.resolve('./src')
    }),
    addLessLoader({
      cssLoaderOptions: { sourceMap: true },
      lessLoaderOptions: { lessOptions: { strictMath: false, javascriptEnabled: true } },
    }),
    overrideOptimization(),
    overrideHTMLPlugin({ CACHE_ID: 'test' }),
    overrideMiniCssExtractPlugin(),
    adjustWorkbox((wb) => Object.assign(wb, { skipWaiting: true })),
    overrideProcessEnv({
      ROUTE_PERFIX: JSON.stringify('/'),
      APP_TYPE: JSON.stringify('VIDEO_CLOUD'),
    })
  ),
};
