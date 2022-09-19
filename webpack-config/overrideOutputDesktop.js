const path = require('path');
const { name } = require(path.join(process.cwd(), './package.json'));

const overrideOutputDesktop = (pathStr) => (config) => {
  delete config.output.chunkFilename;
  config.output.path = path.resolve(__dirname, pathStr);
  config.output.filename = `static/js/${name}.js`;
  config.output.library = `${name}-[name]`;
  config.output.libraryTarget = 'umd';
  // config.output.jsonpFunction = `webpackJsonp_${name}`; webpack5中以删除
  //修改
  config.output.publicPath = process.env.NODE_ENV !== 'development' ? `/micro-apps/${name}/` : `/`;
  console.log('public-path ->', config.output.publicPath);
  return config;
};

module.exports = overrideOutputDesktop;
