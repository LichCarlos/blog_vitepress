
# 浏览器API 

蓝桥杯Web组 省赛备赛 

## 浏览器API

+ CSS选择器

+ 文档结构与遍历

+ 属性

+ 元素内容

+ 操作节点

+ 操作样式


---

## CSS选择器


浏览器提供了 `document.querySelector` 和 `document.querySelectorAll` 两个方法，可以用来根据 CSS 选择器来获取 DOM 元素。

### 通过标签名、id、class

```js
div
#nav
.warning
```

### 通过属性

```js
p[lang="fr"]
*[name="x"]
```

### 组合

```js
span.fatal.error // 取交集，同时满足
img, video  // 取并集，满足其一
```

```js
#log span  // 后代
#log > span  // 子代
body > h1 :first-child  // 伪类
img + p.caption  // 紧邻
img ~ p.caption  // 兄弟
```



---

## 练习

```html{all|2-7|2,3,7|2-7|2,3,7|3,7|3,7|5|5,6}{lines:true}
<h2>
  <img />
  <div>
    <p id="p1"></p>
    <p id="p2"></p>
    <p id="p3"></p>
  </div>
</h2>
```

1. `h2 img`
2. `h2 > img`
3. `h2 #p1`
4. `h2 > #p1`
5. `img + div`
6. `img ~ div`
7. `#p1 + #p3`
8. `#p1 ~ #p3`


---

### 文档结构与遍历


**`Element`对象**上的方法：

- `parentElement`
- `children`
- `firstElementChild`
- `lastElementChild`
- `nextElementSibling`
- `previousElementSibling`

这些方法都是不带Text节点、Comment节点的，如果想学习**Node对象上定义**的节点树属性，可参阅https://developer.mozilla.org/en-US/docs/Web/API/Node。


---

### 属性



#### HTML属性 {.!mt-4}

```js{hide|1-3|1-7|all}
let image = document.querySelector('#main_img');
let url = image.src;
image.id == 'main_img';

let f = document.querySelector('#form');
f.action = ""//测试的网址
f.method = 'POST';

let button = document.querySelector('#submit');
button.onclick = function() { // 更推荐使用`addEventListener`
  alert('Button clicked');
}
```

注意：`class`映射到`classList`, `for`映射到`htmlFor`。`classList`是一个可迭代的**类数组对象**，可以使用数组方法来操作。

```js{hide|1|1-2|1-4|1-5}
let spinner = document.querySelector('#spinner');
spinner.classList.has('show') === true;
spinner.classList.add('show');
spinner.classList.remove('show');
spinner.classList.toggle('show');
```

---

### 通用属性管理 {.!mb-4}



- `getAttribute(name)`：获取属性值
- `setAttribute(name, value)`：设置属性值
- `removeAttribute(name)`：移除属性
- `hasAttribute(name)`：检查属性是否存在



---

### 元素内容 {.!mb-4}

````md magic-move
```html{hide|all|2}
<div id="target">
  This is the element content.
</div>
```

```html
<div id="target">
  Inserted here
  This is the element content.
</div>
```

```html
<div id="target">
  This is the element content.
  Inserted here
</div>
```

```html
<div id="target">
  This is the element content.
</div>
```

```html
Inserted here
<div id="target">
  This is the element content.
</div>
```

```html
<div id="target">
  This is the element content.
</div>
Inserted here
```

````
1. `innerHTML`
2. `ele.innerHTML = "Inserted here" + ele.innerHTML`
3. `ele.innerHTML += "Inserted here"`
4. `outerHTML`
5. `ele.outerHTML = "Inserted here" + ele.outerHTML`
6. `ele.outerHTML += "Inserted here"`

`textContent`用于获取元素中的纯文本内容，或者向文档中插入纯文本内容。


---

### 创建、插入和删除节点



使用`document.createElement(tagName)`创建一个新元素；

使用`append(node)`, `prepend(node)`, `before(node)`, `after(node)`, `replaceWith(node)`插入元素或文本；

使用`remove()`删除元素。



````md magic-move
```js{hide|1-2|1,4-5|all}
let para = document.createElement('p');
let img = document.createElement('img');

para.append("World!")
para.prepend("Hello, ")

```

```js{1-5|1-6|1-7|all}
let para = document.createElement('p');
let img = document.createElement('img');

para.after(img);
para.before(img);
para.replaceWith(img);
para.remove();  // 删除自己
para.removeChildren();  // 删除所有子节点；还可以怎样操作？
```

````



---

## 操作CSS



### 基于class的样式

见[属性 —— classList](6?clicks=11)。

## 基于style的样式

常用的CSS属性都挂在了`Element.style`上，⚠️ 使用**小驼峰**命名，⚠️ 且**包含单位**。

```js{hide|1-3|1-5|all}
function displayAt(tooltip, x, y) {
  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
  tooltip.style.display = 'block';
  tooltip.style.position = 'absolute';
  tooltip.style.backgroundColor = 'white';
}
```

如果要对一个带单位的style做数值计算，需要做**两次转换**。


---

### 计算样式



⚠️ 计算属性是**只读**的，任何指定大小的属性都将以**像素**度量，且**包含单位**。


```js
let title = document.querySelector('h1');
let fontSize = window.getComputedStyle(title).fontSize;
console.log(fontSize);  // "16px"
```


