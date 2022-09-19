1 yarn create react-app my-app  
2 cd my-app && yarn  
3 yarn add react-app-rewired --save-dev  
4 yarn add customize-cra --save-dev  
5 修改package.json的scripts为  

```
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
```

6 使用 react-app-rewired 启动时可通过 config-overrides.js 覆盖webpack配置  

```

新建 config-overrides.js 写入支持 less 的配置
const addLessLoader = require('customize-cra-less-loader');

module.exports = {
  addLessLoader
}

```

7 npm run start