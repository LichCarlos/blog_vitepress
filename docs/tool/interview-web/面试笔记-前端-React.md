# React面试题

## React基本概念

### React的核心设计理念是什么？列举三大核心特性

**完全拥抱函数式编程**

**Fiber架构**

**调度器为什么重构为lans模型**

回答SOP:
```
 - 声明式 UI
 - JSX
 - 组件化
 - 单向数据流
 - 虚拟DOM
 - Hooks
JSX编译而后通过API来执行，编译时与运行时处理
组件化其实简化了代码组织，充分提高代码可读性和可维护性，团队成员更好一起操作
Redux, React 跟 Vue最大的区别，Redux是单向数据流。React更关注组件化，Vue更关注数据驱动
虚拟 DOM,Vapor Mode想要抛弃掉虚拟Dom
Hooks，函数式编程思想，引出UI与状态的充分解耦（以前是不是只能高阶组件解决复用问题）【函数式组合】
```

### 虚拟DOM的工作原理与性能优化

1．抛出概念
2. 抛出背景
3. 实现
4.细节
5.最优方案?
概念
```js
const App =<div>123</div>
```
对象，DSL（领域特定语言，低代码结构），AST（语言抽象语法树）jsx->转变为ast->虚拟DOM->DOM



### jsx的本质是什么

jsx（JavaScript xml）本质是**拓展**语法，本质是迎合**声明式ui**设计理念。
jsx全称是JavaScript XML。
因为浏览器支持的是ECMAScript，在此基础上，通过babel-preset-react来编译jsx，最终编译成js代码。

### 什么是合成事件，合成事件和原生事件的区别
合成事件，是react自己封装的，原生事件是浏览器原生的，合成事件是react自己封装的。
