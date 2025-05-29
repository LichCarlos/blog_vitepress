## 数据类型
### 概念
<h4>基础数据类型</h4>
undefined  null boolean number string symbol biggint

存储：基础类型存储在栈内存中、引用或拷贝，会创建一个完全相等的变量

<h4>Object</h4>
Array   Function  Date  RegExp  Math

存储：对象存储在堆内存中、存储的是地址，多个引用指向同一个地址。（涉及共享的概念）

示例：
```js
let a = {
  name: 'zhangsan'
  age: 18
}

let b = a
console.log(a.name);// zzhangsan
b.name = 'lisi'
console.log(a.name);//lisi
console.log(b.name);//lisi
```
示例2：
```js
let a = {
  name: 'zhangsan'
  age: 18
}

function change(obj){
  obj.age = 19
  obj = {name: 'lisi'
    age: 20
  }
  return obj
}
let b = change(a)
console.log(a.name);// zzhangsan

console.log(a.name);//lisi
console.log(b.name);//lisi
```
### 数据类型检测

#### typeof
<h4>typeof</h4>

```javascript
console.log(typeof 1);//number
console.log(typeof '1');//string
console.log(typeof undefined);//undefined
console.log(typeof true);//boolean
console.log(typeof Symbol());//symbol
console.log(typeof null);//object
console.log(typeof []);//object
console.log(typeof {});//object
console.log(typeof console);//object
console.log(typeof console.log)//function
```
#### instaceof
<h4>instanceof</h4>

```js
let  car = function(){}
let benz = new car()
console.log(benz instanceof car) //true

let  car = new String('Merceds Benz')
console.log(car instanceof String)//true

let str = 'hello world'
console.log(str instanceof String) // false
```


实现instaceof方法

```js
function myInstanceof(left, right) { 
  //判断是否为基础数据类型
  if (typeof left !== 'object' || left === null) return false;

  let proto = Object.getPrototypeOf(left);
  while (true) { 
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

console.log(myInstanceof(new Number(123), Number));//true
console.log(myInstanceof(123, Number));//false
```

#### Object.prototype.toString.call()
<h4> Object.prptptype.toString</h4>
<p>Object.prototype.toString() 方法返回一个表示该对象的字符串。</p>

```javascript
Object.prototype.toString({})//'[object Object]'
Object.prototype.toString.call({})//'[object Object]' 
Object.prototype.toString.call(123)//'[object Number]'  
```

实现数据类型的判断

```javascript
function getTtype(obj) {
let type = typeof obj;
if (type !== 'object') {
  return type;
}

return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}
```
### 数据类型转化
```javascript
'123' == 123//true
'' == null//false

let obj = {
  [Symbol.toPrimitive](){
    return 200;
  }
  valueOf(){
    return 300;
  },
  toString(){
    return 'hello';
  }
}

console.log(obj + 100);
```

####  强制类型转换
Number()  String()  Boolean()  等

<h4>Number()</h4>
转换规则：布尔值：true和false转换为1/0

数字：返回本身

null：返回0

undefined：返回NaN

字符串：字符串包含数字转换为10进制
字符串包含有效浮点，转换为浮点数值
空串返回0，不是以上返回NaN

symbol：抛出错误

对象：部署了[Symbol.toPrimitive]方法，调用并返回结果,否则返回valueOf()

#### 隐式类型转换

```js
```

## 深浅拷贝
**浅拷贝**：浅拷贝是指创建一个新对象，这个新对象的属性是原对象属性的引用。浅拷贝只复制对象的第一层属性，如果属性是对象，则只复制其引用，原对象和新对象共享同一块内存空间。
**深拷贝**：深拷贝是指创建一个新对象，并递归地复制所有嵌套对象的属性，使得新对象和原对象完全独立，互不影响。
<h4>浅拷贝</h4>
创建一个新对象，复制原有对象的基本数据类型的值

object.assign() 

它不拷贝对象的继承属性、他不会拷贝对象的不可枚举属性、可以拷贝Symbol类型的属性

扩展运算符方法
```js
let obj = {a:1,b:2}
let obj1 = {...obj}
```

concat()方法拷贝数组

slice拷贝数组


代码实现：

```js

```
<h4>深拷贝</h4>
对于复制引用数据类型，在堆内存中开辟一块内存地址、并将原有对象完全复制过来存放。

1. JSON.parse(JSON.stringify(obj))  拷贝对象、数组、函数、正则、Date、Symbol


2.structuredClone(obj)  



## 继承的实现

## 继承进阶
### new
new 关键词作用是、执行一个构造函数，返回一个实例对象，根据构造函数，确定是否接收参数。

### apply
### call
### bind

## 闭包
闭包是指有权访问另外一个函数作用域中变量的函数（红宝书定义）

闭包就是一个可以访问其他函数内部变量的函数，是个内嵌函数。使函数变量的值始终保存在内存里

闭包的本质是：当前环境中存在指向父级作用域的引用

```js
function fun(){
  var a = 1
  return function(){
    console.log(a);
  }
}

fun();
var result = fun();
result();//1
```
### 块级作用域

```js
console.log(a);//a is not defined

if (true){
  let  a = 1;
  console.log(a);//1
}

console.log(a);//a is not defined
```

## JSON.stringify()


## 数组原理（上）
数组的原理是：数组是一个对象，对象是由键值对组成的，键是索引，值是数组中的元素。

vue和 react等mvvm框架都通过数据控制视图的更新。

### 数组的概念

### 数组的构造器
Array的构造器
<h4>Array.of和Array.from</h4>
Array.of将参数转换为数组的每一项，并返回新数组

Array.from的设计初衷是快捷的基于其他对象创建数组对象
从一个类数组的可迭代对象中并创建新数组实例

类数组对象、加工函数、this作用域

### Array的判断
Array.isArray()

### 改变数组自身的方法
pop、push、reverse、shift、unshift、sort、splice和ES6新增的fill和copyWithin
### 不改变数组自身的方法
concat、join、slice、toString、indexOf、lastIndexOf、toLocaleString、为形成标准的toSorurce、ES7的includes

### 数组遍历的方法有哪些

forEach、every、some、filter、map、reduce、reduceRight和ES6新增的entries、keys、values、find、findIndex

## 数组原理（中）
### 类数组对象

 1. arguments
 2. getElementsByTagName/getElementsByClassName/getElementByName获取到的HTMLCollection
 3. getSelectorAll获取到的NodeList
## 数组原理（下）
数组扁平化的六种方式

## 数组排序
数据结构中稳定的和不稳定的算法有哪些
时间复杂度和空间复杂度代表了什么
## 数组排序的  sort()方法


## 数组方法手写

## 异步编程
回调函数、事件监听、promise、Gennerator、async/await

## promise
promise是一个**容器**保存着未来结束事件的结果。语法上说，promise是一个对象，从它可以获取异步操作的消息。
### promise的三种状态
对象有三种状态：pending、fulfilled、rejected。

### promise如何解决回调地狱
promise采用里三大技术手段解决回调地狱，**回调函数延迟绑定**、**返回值穿透**、**错误冒泡**。

## Generator和async/await

### Generator生成器
带*号的函数，配合yield关键字暂停或执行函数
```javascript
function *generator(){
  console.log('hello world')
  let a = yiled 1;
  let b = yiled (function(){
    return 2;
  })();
  return 3;
}

ver  gen = generator();
console.log(typeof gen)//返回object而不是function
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
```

### Generator和thunk
### Generator和promise

## 实现一个EventEmitter

## 实现Promise/A+规范

## js垃圾回收机制
### 内存管理
 1. 分配系统的内存空间
 2. 使用分配到的内存进行读写操作
 3. 释放系统分配的内存空间

内存分配：
简单数据类型，内存保存在（stack）中

简单类型会占据固定的内存空间，通过值来访问

复杂数据类型，内存保存在（heap）中

引用类型大小不定，栈内存存放指向堆内存的对象，通过引用来访问



###  垃圾回收 
新生代内存回收：
在64位操作系统分配32mb
老生代内存回收：
新生代变量进过回收后依然存在，就会放在老生代内存中，进过Scavenge算法回收就会晋升为老生代的内存对象
采用Mark-Sweep、Mark-Compact策略进行回收

### 内存泄漏
 1. 过多的缓存未被释放
 2. 闭包太多未被释放
 3. 定时器/回调太多未释放
 4. 太多无效dom未释放
 5. 全局变量太多未释放

 ## 事件轮询 EventLoop
 事件循环机制是JavaScript引擎在单线程、非阻塞中执行异步操作的一种机制。
 ### 浏览器端
 1. 调用栈，负责跟踪所有要执行的代码
 1. 事件队列负责将新的function发送到队列中处理
 1. 每当调用事件队列（event queue）中的异步函数，都会发送到浏览器API

 javascript本身是单线程的，浏览器API充当独立的线程。

 EventLoop：通过内部两个队列实现Event Queue和放进来的异步任务。
 以setTimeout为例的宏任务（setTimeout，setInterval，setImmediate，I/O，UI。rendering，event listner）放在（macrotask queue）和以promise为代表的微任务（promise、nextTick、process、Object.observe，MutationObserver）放在（microtask queue）


一次Evebtloop循环会处理一个红任务和这次红任务产生的所有微任务

## JS代码是如何编译执行的
语言有编译型语言和解释型语言
编译型语言（java、c++）会先将代码编译成机器码，然后执行
解释型语言（JavaScript、ruby）会直接执行代码、但运行时需要转换
### v8引擎
 1. parse阶段：将代码转换成AST树
 2. lgnition阶段：将AST树转换成字节码
 3. TurboFan阶段：转换为机器码
 4. Orinco阶段：垃圾回收。

 ## 宏任务和微任务的运行机制

 在eventloop中每次循环被成为tick
 执行栈选择最先进入的宏任务，执行同步代码、检查是否有微任务，有微任务，将微任务栈执行至空、浏览器端渲染页面、开启下一轮循环（tick）执行宏任务的异步代码

 宏任务：
 渲染事件、用户交互事件、setTimeout、setInterval、网络请求，文件读写等

 ## Process.nextTick