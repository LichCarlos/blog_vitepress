# 什么是 JavaScript

## 本章内容
 1. JavaScript 历史回顾
 2. JavaScript 是什么
 3. JavaScript 与 ECMAScript
 4. JavaScript 不同版本

## JavaScript 历史回顾
随着web发展，客户端脚本语言需求强烈。1995年，网景公司开发了，计划是在**客户端**与**服务器端**都是用这门语言。

## JavaScript实现
JavaScript组成:
  - 核心：ECMAScript
  - 文档对象模型：DOM
  - 浏览器对象模型：BOM

### ECMAScript
**ECMAScript是什么？**

ECMAScript即ECMA-262定义的语言，不局限于web浏览器，web浏览器只是ECMAScript的一种**宿主环境**，如浏览器有DOM等拓展，node.js有FS等模块。

**ECMAScript定义了什么？**

不涉及浏览器的话

1. 语法
2. 类型
3. 语句
4. 关键字
5. 保留字
6. 操作符
7. 全局对象


**ECMAScript与JavaScript**
ECMAScript是JavaScript的规范。
如JavaScript实现了EcmaScript的所有功能，并且添加了一些新的功能。AdobeActionScript也实现了ECMAScript。
### DOM
文档对象模型，是一个**应用编程接口API**用于在HTML中使用拓展的XML。
如：
```html
<html>
  <head>
    <title>DOM</title>
  </head>
  <body>
    <h1>DOM</h1>
  </body>
</html>
```
DOM通过创建表现文档的树，来操作网页内容与结构样式。
#### 为什么DOM是必须的？
因为不同的公司，采取了不同的HTML/DHTML标准，使得web的跨平台性本质遇到了挑战，为了**避免**导向面向浏览器编程的问题，引入了DOM。

### BOM
浏览器对象模型，是**浏览器**的API，用于操作浏览器的窗口。但BOM是一个广泛的定义将弹出窗口，导航，cookie，屏幕，浏览器，历史，等也添加到BOM中。

### JavaScript 版本
可以初步粗略认为es6以前的JavaScript都是es5，es6以后都是es6。