const { addBabelPlugin } = require('customize-cra');

module.exports = {
  addAntdBabelPlugin: addBabelPlugin(['import', { libraryName: 'antd', style: true }, 'antd']),
  addBcdBabelPlugin: addBabelPlugin([
    'import',
    { libraryName: '@leonwerth/basic-components', style: false, camel2DashComponentName: false, libraryDirectory: 'es' },
    'basic-components',
  ]),
  addVidcBabelPlugin: addBabelPlugin([
    'import',
    { libraryName: '@leonwerth/vidc', style: false, camel2DashComponentName: false, libraryDirectory: 'es' },
    'video-cloud-components',
  ]),
  addMapdBabelPlugin: addBabelPlugin(['import', { libraryName: '@leonwerth/util-map', style: false, camel2DashComponentName: false, libraryDirectory: 'es' }, 'map-components']),
  addAhooksBabelPlugin: addBabelPlugin(['import', { libraryName: 'ahooks', style: false, camel2DashComponentName: false, libraryDirectory: 'es' }, 'ahooks']),
  addUtilsBabelPlugin: addBabelPlugin(['import', { libraryName: '@leonwerth/utils', style: false, camel2DashComponentName: false, libraryDirectory: 'es' }, 'utils']),
};
