# HTML中的JavaScript

## 本章内容
 1. 使用script标签
 2. 行内脚本与外部脚本的比较
 3. 文档模式对JavaScript有什么影响
 4. 确保JavaScript不可用时，用户的体验

## script标签

将JavaScript插入HTML中，是使用script标签插入由网景公司创造。

### script标签属性
script标签的属性：
 1. async
 **可选**

 表示立即开始下载脚本，不阻止其他页面动作，如资源下载或等待其他脚本加载，只对外部脚本文件有效。（完成立即执行，会受到网速等影响，不按顺序来）

 2. charset
 **可选**

 表示编码方式，如utf-8。很少用，因为浏览器不在乎。
 
 3. crossorigin
 **可选**

 表示跨域资源，如CORS（默认不使用）。crossorigin="anonymous"配置文件请求不必设置请求凭证标志。

 4. defer
  **可选**

  表示脚本延迟加载，脚本会延迟加载，直到页面完成加载。只对外部脚本有效。

 5. integrity
 **可选**

 表示资源的完整性，如CDN。如果收到的资源签名与属性指定不同页面报错住，浏览器将拒绝加载资源。（确保cnd不提供恶意内容）

 6. language
 **废弃**
 表示脚本语言是那种类型。浏览器会忽略弃使用，避免使用。

 7. src
 **可选**

 表示脚本的源文件。

 8. type
 **可选**

 代替language属性。表示代码块的脚本语言类型，只有当type属性为text/javascript时，浏览器才会执行脚本（废弃，但默认值，会被忽略），当type属性为module时，浏览器会识别为es6模块，并执行，代码内才能出现import和export。

```html
<!--  要在HTML执行待执行js函数 -->
<script>
function test(){
  alert("hello world");
}
</script>

<!-- 要包含外部文件时必须使用src,注意！！！
 当使用了src后，script标签将内部代码不会执行，必须使用外部文件
 -->
 <script src="test.js"></script>

 <!-- src可以指向外部资源，会默认发送get请求（get请求不受同源限制）
  但返回的JavaScript内容是受限制的
  -->

  <!--请求文件应当请求本地优先，如果外域文件，应当确保可信。
  如果不可信会被恶意替换文件内容。
  可以配合integrity属性，对文件进行签名，保证文件内容不会被恶意替换。
  但不是全部浏览器支持。
  -->
```
因为js是**单线程**的，在不使用defer和async属性时，script标签是按出现顺加载的，并且是第一个完成，在加载第二个。



### script属性位置
过去，script放在head标签内，下载资源，会阻塞HTML的解析（下载完成后页面才开始渲染），导致页面加载速度变慢。

现代开发，将script放在body标签后，优先加载页面，减少白屏时间。

#### 异步执行脚本**不推荐**:

async属性**浏览器内部的网络线程**负责下载，不会阻塞 HTML 的解析。（依托浏览器环境的多进程机制内下载资源，本身在js的主线程内执行）。

#### 同步执行脚本:

defer属性是立即下载，但等待**JavaScript主线程**将 HTML 文档解析完成后，在 DOMContentLoaded 事件触发之前按顺序执行。它不会阻塞 HTML 解析，并且会等待 JavaScript 主线程中的其他任务执行完毕后再运行。

#### 动态加载脚本:
通过DOM动态创建script标签，并添加到页面中。

## 行内代码和外部文件
使用外部文件是推荐做法。
外部文件的好处：
 1. 可维护性

 将代码拆分出来，方便管理，可维护，可扩展。
 2. 缓存

 两个页面用到同一份代码，只需要下载一次
 3. 适应未来

 不必考虑html还是xhtml。

## 文档格式

## noscript


## 小结
JavaScript通过script元素将js代码插入HTML页面中，要包含外部文件，src：属性指定文件名。

