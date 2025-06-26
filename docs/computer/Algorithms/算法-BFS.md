# BFS

## 代码实现

利用队列先进先出，层序遍历整颗树

```js
let root = document.querySelector(".parent");
let bfs = (root) => {
  let queue = [root];
  let nodes = [];

  while (q.length) {
    let item = q.shift();
    nodes.push(item);
    let children = item.children;
    for (let i = 0; i < children.length; i++) {
      queue.push(children[i]);
    }
  }
};
bfs(root);
```
