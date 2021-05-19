# vue 系列面试题

## Vue eventBus

1. eventBus 是通过实例化 Vue 的对象, 构建一个有功能, 但是没有 html 模板的 vue 实例
2. 需要互相沟通的组件可以通过引入 eventBus, 来使用其中定义的 `$emit` 和 `$on`字段来进行数据之间的交互沟通

## Vue Router

1. Vue Router 中如何让未找到的页面自动的指向我们自己做的 404 页面

   :::tip

   1. 把 404 页面用 vue-router 中的 通配符 \* 表示路径
   2. 如果其他页面没有匹配到指定的路径, 那么自然而然会匹配到通配符路径, 那么就会自动指向我们的 404 页面
      :::

## vue 中的 `watch()` 和 `computed()`的区别

## Vuex

> Vuex 代码示例

```js
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutation: {
    increment(state) {
      state.count++;
    },
  },
  action: {
    increment(context) {
      context.commit('increment');
    },
  },
});
```

### mutations

1. mutations 主要是用来触发修改我们的全局 store 里面的存的全局变量
2. 如果有异步修改, 那么不应该放到 mutations 中, 发而应该在异步处理的东西,放在我们的 action
   中

### actions

1. actions 被 patch 调用, 然后 actions 去调用 mutations
2. 如果 vuex 中有异步获取数据的操作, 那么我们应该在`actions`处理异步,从中获取异步结果

### modules

1. modules 在 store 全局数据是可以来分模块管理的, 他可以用来区分每一个不同模块的数据

## Vue 中的 vue.config.js

> 注意我们可以利用 `process.env.NODE_ENV === 'production' / 'development'`可以来区分是什么环境,从而利用我们的服务
> vue 在构建的时候,会给我们的 node 变量 `process.env.NODE_ENV`来命名, 例如 `npm run build`, 此时的 NODE_ENV 就是 `production`模式

```js
const path = require('path');

module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // webpack配置
  chainWebpack: (config) => {},
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production';
    } else {
      // 为开发环境修改配置...
      config.mode = 'development';
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@p': path.resolve(__dirname, './src/pages'),
        }, // 别名配置
      },
    });
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // css相关配置
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      css: {}, // 这里的选项会传递给 css-loader
      postcss: {}, // 这里的选项会传递给 postcss-loader
    }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
    modules: false, // 启用 CSS modules for all css / pre-processor files.
  },
  parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0', // 允许外部ip访问
    port: 8022, // 端口
    https: false, // 启用https
    overlay: {
      warnings: true,
      errors: true,
    }, // 错误、警告在页面弹出
    proxy: {
      '/api': {
        target: 'http://www.baidu.com/api',
        changeOrigin: true, // 允许websockets跨域
        // ws: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    }, // 代理转发配置，用于调试环境
  },
  // 第三方插件配置
  pluginOptions: {},
};
```
