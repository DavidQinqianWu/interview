# 常用设计模式

[作者文章 git](https://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html)

## 创建型模式

### 简单工厂模式

> 通过不同的入参, 来生产不同的实例化对象

```ts
import ProductA from './ProductA';
import ProductB from './ProductB';

class Factory {
  static createProduct(para) {
    if (para === 'a') {
      return new ProductA();
    } else if ((para = 'b')) {
      return new ProductB();
    }
  }
}
// 构建不一样的产品
let productA = Factory.createProduct('a');
let productB = Factory.createProduct('b');
```

### 抽象工厂模式

> 在简单工厂模式的基础上在把工厂给抽象化, 这样做的好处就是我们的工厂也就能各种各样的变化, 创造出不通的子工厂,这样就无形之中创建出来很多个不一样的工厂, 实现工厂的多态


## 结构型模式

## 行为型模式
