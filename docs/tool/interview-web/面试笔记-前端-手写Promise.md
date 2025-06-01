# 手写Promise
## Promise
Promise 是 JavaScript 中用于处理异步操作的对象，它代表了一个异步操作的最终结果。通过 Promise，我们可以更清晰地管理异步代码，避免了回调地狱（Callback Hell）的问题，并且提供了统一的方式来处理成功和失败的情况。
### 核心特性
状态机制：一个 Promise 对象有三种状态：

Pending（进行中）：初始状态，既不是成功也不是失败。

Fulfilled（已完成）：表示操作成功完成。

Rejected（已拒绝）：表示操作失败。

一旦 Promise 处于 Fulfilled 或 Rejected 状态，它将保持这个状态并且不会再改变。

链式调用：使用 .then() 方法可以注册在 Promise 成功时要执行的回调函数，使用 .catch() 方法可以捕获错误或处理被拒绝的状态。
不可取消：一旦创建了一个 Promise，它的状态只能从 Pending 变为 Fulfilled 或 Rejected，但不能被取消。

### 核心功能
#### 代码实现-构造函数
构造函数
 - 定义类
 - 添加构造函数
 - 定义resolve和reject
 - 执行回调函数
```javascript
//定义类
class MYPromise {
  //添加构造函数
  constructor(fn) {
    //定义resolve和reject
    const resolve = (result) => {}
    const reject = (result) => {}
    //执行回调函数
    fn(resolve, reject)
  }
}

//-------测试----------
const promise = new MYPromise((resolve, reject) => {
  resolve('成功')
  //reject('失败')
})
```
#### 代码实现-状态与原因
状态与原因
 - 添加状态(pending,fulfilled,rejected)
 - 添加原因
 - 调整resolve和reject
 - 状态不可逆

```javascript
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MYPromise {
  state = 'PENDING'
  result = undefind 
  constructor(fn) {
    //更改状态->fulfilled
    //记录原因
  const resolve = (result) => {
    //this指向上层
    if(this.state !== PENDING) return
    if(this.state === PENDING) {
    this.state = FULFILLED
    this.result = result
    }
  }
      //更改状态-> rejected
    //记录原因
  const reject = (result) => {
    if(this.state !== PENDING) return
    if(this.state === PENDING) {   
    this.state = REJECTED
    this.result = result
    }
  }
  fn(resolve, reject)
  }
}
const promise = new MYPromise((resolve, reject) => {
  resolve('成功')
  //reject('失败')
})
```
#### 代码实现-.then方法()
.then方法() 
 - 添加实例方法
 - 参数判断
   - 执行成功回调
   - 执行失败回调
 - 异步多次调用
```javascript
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MYPromise {
  state = 'PENDING'
  result = undefind 
  //定义属性
  #handler = []//[{onFulfilled,onRejected}...]
  constructor(fn) {

  const resolve = (result) => {
    if(this.state !== PENDING) return
    if(this.state === PENDING) {
    this.state = FULFILLED
    this.result = result
    //执行回调函数
    this.#handler.forEach(({onFulfilled}) => {
      onFulfilled(this.result)
    })
    }
  }
  const reject = (result) => {
    if(this.state !== PENDING) return
    if(this.state === PENDING) {   
    this.state = REJECTED
    this.result = result
        //执行回调函数
    this.#handler.forEach(({onRejected}) => {
      onRejected(this.result)
    })
    }
  }
  fn(resolve, reject)
  }

  then(onFulfilled, onRejected) {
     tyypeof onFulfilled = 'function' ? onFulfilled : x => x
     typeof onRejected = 'function' ? onRejected : x => x
      if(this.state === FULFILLED) {
        onFulfilled(this.result)
      }else if(this.state === REJECTED) {
        onRejected(this.result)
      }else if (this.state === PENDING) {
        //保存回调函数
        this.#handler.push({
          onFulfilled,onRejected
        })
      }

  }
}
const promise = new MYPromise((resolve, reject) => {
  setTimeout(() => {  
    resolve('成功')
  //reject('失败')}
  }, 1000)
})

promise.then(res => {
  console.log(res)
},err => {
  console.log(err)
})
promise.then(res => {
  console.log('then2:',res)
},err => {
  console.log('then2:',err)
})

```

#### 代码实现-异步任务
核心api
vue2：Promise.then、 MutationObserver、setTimeout、setImmediate、实现