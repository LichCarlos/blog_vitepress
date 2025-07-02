# JavaScript排序算法

## 数组相关

### 数组的定义
在JavaScript中，数组的定义和Java中的数组定义基本一致，即用`[]`来定义数组。
```js
var arr = [1,2,3,4,5];
var arr = [] 
```

集合：有些集合和对象是当作数组来遍历的

### 数组的遍历
`for` `while` `do while` 可以遍历数组。
```js
   var arr = [];
   arr["one"] = 'zhangsan';
   arr["two"] = 'lisi';
   arr["demo"] = 'wangwu';

   for (var key in arr) {
    console.log(key);//
    console.log(arr[key]);
   }
   //打印结果：arr[key]   zhangsan、lisi、wangwu
   //打印结果：key   one、two、dem
```
没有下标 for in
