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
      context.commit("increment");
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
