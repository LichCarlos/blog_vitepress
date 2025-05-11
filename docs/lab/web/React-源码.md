# React
React 是一个用于构建用户界面的开源 JavaScript 库，由 Facebook（现 Meta）于 2013 年首次发布。它专注于构建高效的、组件化的前端应用程序，广泛应用于现代 Web 开发中。

## React 学习资料/工具

 **访问官方站点**：前往 [React 官方网站](https://react.docschina.org/)。

 **JavaScript 框架语法特性对比-中文版**：前往 [JavaScript 框架语法特性对比-中文版](https://component-party.lainbo.com/)。

 **React 源码**：前往 [React 源码](https://github.com/facebook/react)。

 **babel**：前往 [巴别塔](https://babeljs.io/)

## React 哲学（Thinking in React）
react最核心概念。使用react来写react。
### 状态（state
 <h3 style= "display:flex flex:1">React UI = fn(state)</h3>

状态决定视图。state是变量、一般情况下，state改变后，组件也会更新。（useref）

 常见的三种管理状态的方法：useState、useReducer、第三方状态库。

#### 状态管理


<h4>组件内部状态</h4>

在React函数组件中使用可以使用useState、和useReducer定义组件内部的state，这个state是定义在组建的VDOM上的、即fiber节点（每个组件对应的js对象）
<h4>组件间的共享状态</h4>

<h5>组件状态提升</h5>
我们希望多个组件的state同步更新、可以将相关的state从组件上移除、将state房子公共父级组件、在通过props将state传递给每个组件
<h5>在React外部管理状态</h5>
即使React的状态管理库、如Redux、MobX、Zustand、Recoil等


以Redux为例

```javascript
export default function createStore(reducer, enhancer){
if (enhancer){
  return enhancer(createStore)(reducer);
}
let currentState;
let listenerIdCounter = 0;
let currentListeners = new Map();

function getState(){
  return currentState;
}
function dispatch(action){
  currentState = reducer (currentState, action);

  currentListeners.forEach((listener) =>())

  return action;
}

function subscribe (listener) {
  const listenerId = listenerIdCounter++;
  currentListeners.set(listenerId, listener);

  return () => {
    currentListeners.delete(listenerId);
  };
}


dispatch ({type:`@@redux/INIT${randomString()}`})

return {

  getState,
  dispatch,
  subscribe,
};
}
```

### 组件化

组件间通信使用props属性互相通信。在父子组件中用于父子通信、不可修改。

#### ReactDom组件
有对应DOM节点的组件、如div、span、img、a等。

#### 类组件


在react18中类组件归类在Legacy React APIs中。
```javascript
class App extends Component{
  render(){
    return (
      <h1>Hello World</h1>
    )
  }
}

```

#### 函数组件
在VDOM上渲染的函数，函数名就是组件名。是函数组件的子节点。本身没有节点。
```javascript
function App(){
  return (
    <img
    src="https://example.com/logo.png"  className= "Logo" alt="logo"
    />
  )
}
```
#### React内置组件
<Fragment></Fragment>可以写作<></>,可以将多个jsx节点组合在一起。
<Profiler></Profiler>可以以编程方式衡量  React  树渲染性能。
<Suspense></Suspense> 可以在子组件加载显示后备方案。(logining)
<StrictMode> </StrictMode> 严格模式，在开发模式下，会进行一些额外的检查，如：检查是否存在无效的组件、检查是否存在无效的属性等。

#### Some.Context.Provider/SomeContext.Consumer
在 React 中，Context 是一种用于跨组件层级传递数据的机制，避免了通过逐层 props 传递数据的繁琐操作。它特别适用于需要在多个组件之间共享全局状态（如主题、用户认证信息等）的场景。

React 提供了两种方式来使用 Context：

SomeContext.Provider：用于提供上下文数据。 
SomeContext.Consumer：用于消费上下文数据。
下面详细介绍它们的用法和原理。

1. 创建 Context
首先，你需要使用 React.createContext 创建一个 Context 对象：

```javascript

import React from 'react';

// 创建一个 Context 对象，默认值为 "light"
const ThemeContext = React.createContext('light');

export default ThemeContext;
React.createContext(defaultValue)：
```
如果某个组件没有被 Provider 包裹，则会使用 defaultValue 作为默认值。
2. 使用 Provider 提供数据
Provider 是用来提供上下文数据的组件。它的 value 属性可以是任何值（如字符串、对象、函数等）。

```javascript

import React from 'react';
import ThemeContext from './ThemeContext';

function App() {
  return (
    // 使用 Provider 提供 "dark" 主题
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  return <Button />;
}

export default App;
```
Provider 的 value 属性会向下传递给所有子组件。
子组件可以通过 Consumer 或 useContext 来访问这个值。
3. 使用 Consumer 消费数据
Consumer 是一种直接消费上下文数据的方式，适合在类组件中使用。

```javascript

import React from 'react';
import ThemeContext from './ThemeContext';

function Button() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#333' }}>
          I am styled by theme context!
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
export default Button;
```
Consumer 必须是一个函数子组件。
它接收当前的上下文值作为参数，并返回 JSX。
4. 使用 useContext（函数式组件）
如果你使用的是函数式组件，推荐使用 useContext Hook 来消费上下文数据。
```javascript

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Button() {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
      }}
    >
      I am styled by theme context!
    </button>
  );
}
```
useContext 是 React Hooks 提供的 API，更简洁易读。
5. 动态更新 Context
如果需要动态更新 Context 的值，可以将 state 和 setState 放入 value 中。

```javascript

import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  return <Button />;
}

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
      }}
    >
      Current Theme: {theme}
    </button>
  );
}

export default App;
```

在这个例子中，theme 和 setTheme 被放入 value 中，允许子组件动态更新主题。
总结

Provider：
用于提供上下文数据。
数据通过 value 属性传递给所有子组件。

Consumer：
用于消费上下文数据。
适合在类组件中使用。

useContext：
是 Consumer 的替代方案，更适合函数式组件。

动态更新：
可以通过将 state 和 setState 放入 value 中实现动态更新。

#### 函数：forwardRef/memo/lazy/

### 单向数据流
基础模型：修改数据不可以直接进行修改、而是使用setState函数进行修改。
## React设计原理
***<h4>组件化架构</h4>***

**定义**: React 应用是由多个独立的、可复用的组件组成的。每个组件都有自己的逻辑和控制，可以管理自身的状态。

**优势**: 组件化促进了代码重用，简化了调试和测试，并允许团队成员并行工作于不同的组件上。

***<h4>虚拟 DOM (Virtual DOM)</h4>***

**定义**: 虚拟 DOM 是内存中的一个轻量级副本，它代表了真实的 DOM 树。当应用的状态发生变化时，React 首先更新虚拟 DOM，然后通过高效的算法确定对真实 DOM 所需的最小更改集。

**优势**: 减少了直接操作真实 DOM 的开销，提高了性能，特别是对于大规模的应用程序、以及跨平台。如rn、泰罗。

***<h4>单向数据流（Unidirectional Data Flow）</h4>***

**定义**: 数据只能在一个方向上传播：从父组件到子组件。这意味着状态是自上而下流动的，确保了数据流向的一致性。

**优势**: 提供了更清晰的数据流，使得应用程序更容易理解和调试。

***<h4>JSX</h4>***

**定义**: JSX 是一种 JavaScript 的语法扩展，允许你在 JavaScript 中编写类似 HTML 的代码。它不是必须使用的，但极大地方便了 UI 的描述。

**优势**: JSX 结合了 JavaScript 和声明式 UI 编写方式，使得代码更加直观易懂。

***<h4>Hooks</h4>***

**定义**: Hooks 是 React 16.8 引入的新特性，允许你在不编写类的情况下使用 state 和其他 React 特性。例如，useState 可以让你在函数组件中添加状态逻辑。

**优势**: 简化了功能组件的逻辑处理，减少了代码复杂度，同时增强了代码的可读性和可维护性。

***<h4>声明式 UI</h4>***

**定义**: 在 React 中，你描述你的 UI 应该是什么样子的，而不是如何达到那种状态。当底层数据模型发生变化时，React 自动更新 UI。

**优势**: 开发者只需关注数据的变化，无需手动操作 DOM 来更新视图，这使得代码更加简洁、直观。

***<h4>高性能</h4>***

**定义**: 通过虚拟 DOM 和高效的 diffing 算法，React 能够最小化对真实 DOM 的操作次数，从而提高渲染效率。

**优势**: 即使在复杂的 UI 应用中也能保持良好的性能表现。



## JSX 语法
JSX 语法 是 React 中用于描述用户界面的一种声明式语法扩展。
虽然 JSX 看起来像 HTML，但它实际上是 JavaScript 的语法糖，最终会被编译成普通的 JavaScript 对象（React Element）。这些对象本质上是用来描述 DOM 结构的。

<h5>换言之 **jsx** （_jsxs、16.8版本前为createElement）就是为了生成elemnet对象的。</h5>

 **babel**：前往 [巴别塔](https://babeljs.io/)

 原代码
```javascript
function App(){
  return (
    <div className="App">
      <div>
      <p>123</p>
        <img src={logo}  className= "Logo" alt="logo"/>
      </a>
      <a calssName="link" 
        href="lichcarlos.top"
        target='_blank'
        rel="noopener noreferrer">
        我的网站
      </a>
    </div>
  )
}
```
babel转译后的代码
```javascript
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function App() {
  return /*#__PURE__*/_jsxs("div", {
    className: "App",
    children: [/*#__PURE__*/_jsx("p", {
      children: "123"
    }), /*#__PURE__*/_jsx("a", {
      calssName: "link",
      href: "lichcarlos.top",
      target: "_blank",
      rel: "noopener noreferrer"
    })]
  });
}
```
从转译后的代码可以看出jsx是采用了级组件的嵌套结构，每个组件都是一个对象，对象中包含组件的属性和子组件。以递归的形式构建出整个组件树。

/*#__PURE__*/ 

 /*#__PURE__*/ 这样的注释在 JavaScript 代码中，特别是在使用 Babel 等工具进行编译时，是一种特殊的标注，称为“纯注释”（pure annotation）。它的主要目的是向诸如 Babel、Terser 或其他编译/压缩工具传达信息，表明被标记的函数调用是“纯”的，即该函数不会产生任何***副作用***。


### tsx

## React 数据结构
React 由jsx语法介绍react对象组成的树形结构，同理react的数据结构也是一颗对象组成的树。其中每个对象都包含一些属性和子对象。

react的遍历是深度优先遍历   DFS

以下是一个简单的 React 数据结构示例：
```javascript
function ChildComponent(props) {
  return <p>{props.message}</p>;
}

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello from Parent" };
  }

  render() {
    return (
      <div>
        <h1>Welcome to our application</h1>
        <ChildComponent message={this.state.message} />
      </div>
    );
  }
}

ReactDOM.render(<ParentComponent />, document.getElementById('root'));
```
在这个例子中，我们有两个组件：ParentComponent 和 ChildComponent。ParentComponent 包含了 ChildComponent，并通过 props 将信息传递给它。
### element对象
_jsxs执行后返回一个对象，该对象包含了组件的属性和子元素。即为element对象。element对象就是_jsxs执行后的结果。
```javascript
const App: any = function () {
  return (
    <div className="App">
      <h2>
        <a> Hello React </a>
      </h2>
    </div>
  )
}
const app = App()
console.log(app)
```
### fiber对象
<h2>react渲染过程</h2>

<h4>第一步</h4>

**element对象**
   - 描述ui的方法
     - JSX
     - 模板语法      

  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; \ &nbsp;/

 &nbsp;《-编译优化-》

  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; \ &nbsp;/
<h4>第二步</h4>

**fiber对象**
 - 运行时的核心模块
     - reconciler
     - renderer 

 &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; \ &nbsp;/

   &nbsp; &nbsp;&nbsp;《-调用-》

  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; \ &nbsp;/

<h4>第三步</h4>

  &nbsp; &nbsp;  **宿主环境API**

  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; \ &nbsp;/

  &nbsp; &nbsp; &nbsp;《-显示-》

  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;|

  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; \ &nbsp;/

<h4>第四步</h4>

  &nbsp; &nbsp;   &nbsp; &nbsp;**真实ui**

fiber对象是React的运行时数据结构，是react执行过程中元素状态的描述。
## 合成事件
React 的合成事件（SyntheticEvent）是 React 提供的一种跨浏览器的事件系统。它对原生 DOM 事件进行了封装，确保了不同浏览器之间的行为一致性，并提供了一套统一的 API。

合成事件的核心概念
事件池机制：React 使用事件池来管理合成事件对象。事件对象在触发后会被回收到事件池中，以便复用，从而减少垃圾回收的压力。
跨浏览器兼容性：React 对底层的 DOM 事件进行了标准化处理，屏蔽了浏览器之间的差异。
批量更新：React 的事件处理函数会在 React 的调度系统中执行，可以与状态更新和生命周期方法很好地配合。
dispatchEvent 的作用
dispatchEvent 是原生 DOM API 中的一个方法，用于手动触发一个事件。React 的合成事件系统并不直接暴露 dispatchEvent，但可以通过原生 DOM 节点调用它。

原生 dispatchEvent 示例
```javascript

const button = document.getElementById('myButton');
const event = new Event('click', { bubbles: true, cancelable: true });
button.dispatchEvent(event);
```
在这个例子中，我们创建了一个 click 事件，并通过 dispatchEvent 手动触发了该事件。

在 React 中使用 dispatchEvent
虽然 React 的合成事件系统不直接依赖于 dispatchEvent，但我们可以通过以下方式在 React 应用中触发事件：

方法 1：直接操作 DOM
通过 ref 获取 DOM 节点，然后调用 dispatchEvent：

```javascript


import React, { useRef } from 'react';

function App() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    console.log('Button clicked!');
  };

  const triggerClick = () => {
    const event = new Event('click', { bubbles: true });
    buttonRef.current.dispatchEvent(event);
  };

  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>
        Click Me
      </button>
      <button onClick={triggerClick}>Trigger Click</button>
    </div>
  );
}

export default App;
```
在这个例子中：

第一个按钮绑定了 onClick 事件。
第二个按钮通过 dispatchEvent 触发第一个按钮的点击事件。
方法 2：模拟事件（推荐）
如果不需要直接操作 DOM，可以通过调用事件处理函数来模拟事件触发，而不是使用 dispatchEvent：


```javascript
import React, { useRef } from 'react';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const triggerClick = () => {
    handleClick(); // 直接调用事件处理函数
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={triggerClick}>Trigger Click</button>
    </div>
  );
}

export default App;
```
这种方式更符合 React 的设计理念，因为它避免了直接操作 DOM。

注意事项
不要滥用 dispatchEvent：React 的设计哲学是尽量避免直接操作 DOM，因此应优先使用 React 提供的事件处理机制。
事件池机制的影响：React 的合成事件对象在事件处理函数执行完毕后会被回收，因此不能异步访问事件对象的属性。如果需要保存事件数据，可以使用 event.persist() 或者手动拷贝所需数据。
```javascript
const handleClick = (event) => {
  event.persist(); // 阻止事件对象被回收
  setTimeout(() => {
    console.log(event.target.value);
  }, 1000);
};
```
总结

dispatchEvent 是原生 DOM API，用于手动触发事件。
在 React 中，可以通过 ref 获取 DOM 节点并调用 dispatchEvent，但这不是最佳实践。
推荐直接调用事件处理函数来模拟事件触发，以保持代码的 React 风格。

## Diff
比较元素的三大原则
1. 更新前后，层级一致
2. 更新前后，类型一致
3. 更新前后 key相同


## Hooks
### useState


useState 是 React 中的一个核心 Hook，用于在函数组件中管理状态。它允许你在函数组件中声明一个状态变量，并提供更新该状态的函数。

useState是异步的、为了性能优化：调用set函数会重新渲染、在队列中选取最后一次的值（天然自带防抖。  

基本用法
```jsx

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>当前计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(count - 1)}>减少</button>
    </div>
  );
}

export default Counter;
```
在这个例子中：

useState(0) 初始化了一个状态变量 count，初始值为 0。


setCount 是更新状态的函数。

每次调用 setCount，React 都会重新渲染组件，并将新的状态值传递给 count。

### useReducer


集中管理数据。  

useState和useReducer差异对比

```js

import {  useState} from 'react'


export const App = () =>{
  return (
      const [count, setCount] = useState()
    <>
    <div>
      <button onClick = {()= > setCount( count +1 )} >+1</button>
      <p>{count}</p>
    </div>
    </> 
  )
}



``````js

import {useReducer} from 'react'
  //默认值
  const initState = {
    count: -1
  }

  type State = type initState

  //初始化函数，只走一次
  const initFn = (state:State) => {
    return {count:Math.abs(state.count)}}
  }
  //处理函数reducer,默认不执行
  const reducer = (state:State,action:{type : 'add' | 'sub'}) = >{
    switch (action.type) {
      case "add":
        return {count: state.count +1} 
      case "sub" :
        return {count: state.count -1 }
        default:
          return state
    }
  }

export const App = () =>{
  const [state, dispatch] = useReducer (reducer, initState, initFn)

  return (
    <>

    <div>
      <button onClick = { () => dispatch({type:'add'}) } >+1</button>
      <button onClick = { () => dispatch({type:'sub'}) } >-1</button>
      <p>{count}</p>
    </div>
    </> 
  )
}
```
### useSyncExternalStore
const res = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)