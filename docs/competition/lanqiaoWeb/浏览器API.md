# 浏览器API

## 浏览器API 概述

在蓝桥杯Web组的省赛备赛中，了解浏览器API非常重要，以下是一些关键内容：

### 主要内容

- **CSS选择器**
- **文档结构与遍历**
- **属性操作**
- **元素内容操作**
- **节点操作**
- **样式操作**

---

## CSS选择器

浏览器提供了 `document.querySelector` 和 `document.querySelectorAll` 方法，可以根据 CSS 选择器获取 DOM 元素。

### 选择器示例

- **通过标签名、id、class**:
  ```
  div
  #nav
  .warning
  ```

- **通过属性**:
  ```
  p[lang="fr"]
  *[name="x"]
  ```

- **组合选择器**:
  ```
  span.fatal.error // 同时满足
  img, video      // 满足其一
  ```

- **层级选择**:
  ```
  #log span       // 后代
  #log > span     // 子代
  body > h1 :first-child  // 伪类
  img + p.caption // 紧邻
  img ~ p.caption // 兄弟
  ```

---

## 练习

给定以下 HTML 结构：

```
<h2>
  <img />
  <div>
    <p id="p1"></p>
    <p id="p2"></p>
    <p id="p3"></p>
  </div>
</h2>
```

### 选择器练习

1. `h2 img`
2. `h2 > img`
3. `h2 #p1`
4. `h2 > #p1`
5. `img + div`
6. `img ~ div`
7. `#p1 + #p3`
8. `#p1 ~ #p3`

---

## 文档结构与遍历

**Element对象**的方法：

- `parentElement`
- `children`
- `firstElementChild`
- `lastElementChild`
- `nextElementSibling`
- `previousElementSibling`

这些方法不包括文本节点和注释节点。有关 Node 对象的更多信息，请访问 [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node)。

---

## 属性操作

### HTML属性

```
let image = document.querySelector('#main_img');
let url = image.src; // 获取图片源
image.id === 'main_img'; // 检查id

let f = document.querySelector('#form');
f.action = "测试的网址"; // 设置表单的 action
f.method = 'POST'; // 设置表单方法

let button = document.querySelector('#submit');
button.onclick = function() {
  alert('Button clicked');
}
```

注意：`class` 映射到 `classList`，`for` 映射到 `htmlFor`。

### classList 操作

```
let spinner = document.querySelector('#spinner');
spinner.classList.has('show'); // 检查class是否存在
spinner.classList.add('show'); // 添加class
spinner.classList.remove('show'); // 移除class
spinner.classList.toggle('show'); // 切换class
```

---

### 通用属性管理

- `getAttribute(name)`：获取属性值
- `setAttribute(name, value)`：设置属性值
- `removeAttribute(name)`：移除属性
- `hasAttribute(name)`：检查属性是否存在

---

## 元素内容操作

### 示例

```
<div id="target">
  This is the element content.
</div>
```

### 操作方法

1. `innerHTML`
2. `ele.innerHTML = "Inserted here" + ele.innerHTML`
3. `ele.innerHTML += "Inserted here"`
4. `outerHTML`
5. `ele.outerHTML = "Inserted here" + ele.outerHTML`
6. `ele.outerHTML += "Inserted here"`

使用 `textContent` 获取或插入纯文本内容。

---

## 创建、插入和删除节点

### 创建节点

使用 `document.createElement(tagName)` 创建新元素。

### 插入节点

使用以下方法插入元素或文本：

- `append(node)`
- `prepend(node)`
- `before(node)`
- `after(node)`
- `replaceWith(node)`

### 删除节点

使用 `remove()` 删除元素。

```
let para = document.createElement('p');
let img = document.createElement('img');

para.append("World!");
para.prepend("Hello, ");
para.after(img);
para.before(img);
para.replaceWith(img);
para.remove(); // 删除自己
```

---

## 操作CSS

### 基于class的样式

参考 [classList](6?clicks=11)。

### 基于style的样式

常用的 CSS 属性在 `Element.style` 上，使用小驼峰命名，并包含单位。

```
function displayAt(tooltip, x, y) {
  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
  tooltip.style.display = 'block';
  tooltip.style.position = 'absolute';
  tooltip.style.backgroundColor = 'white';
}
```

### 计算样式

计算属性是只读的，任何指定大小的属性都将以像素度量。

```
let title = document.querySelector('h1');
let fontSize = window.getComputedStyle(title).fontSize;
console.log(fontSize); // "16px"
```

---


