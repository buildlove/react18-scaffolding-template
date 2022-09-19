## 环境

react18 + antd + less

## 运行

```
pnpm install  
pnpm run start
```

## 如何创建的脚手架

### react官网创建基本模板
```
yarn create react-app my-app  
```

### 进入项目安装插件
```
cd my-app && yarn  
```

### 安装启动插件改造框架
```
yarn add react-app-rewired --save-dev  
```

### webpack常用插件

```
yarn add customize-cra --save-dev  
```

### 修改package.json的scripts为  

```
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
```

### 使用 react-app-rewired 启动时可通过 config-overrides.js 覆盖webpack配置

> 具体的按照自己的喜好来配置

```

新建 config-overrides.js 写入支持 less 的配置(其他相关配置查看customize-cra文档)
const addLessLoader = require('customize-cra-less-loader');

module.exports = {
  addLessLoader
}

```

### 启动项目

```
npm run start
```

