// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j]
//       }
//     }
//   }
//   return "err"
// };

// console.log(twoSum([2, 7, 11, 15], 9))



const LRUCache = function (capacity) {
  this.cacheQueue = new Map();
  this.capacity = capacity;

}

LRUCache.prototype.get = function (key) {
  if (this.cacheQueue.has(key)) {
    //找到this key对应的新鲜度缓存
    const value = this.cacheQueue.get(key);
    this.cacheQueue.delete(key);
    this.cacheQueue.set(key, value);//重新插入，确保新鲜度
  }
  console.log(this.cacheQueue);
  return -1;
}

LRUCache.prototype.put = function (key, value) {
  if (this.cacheQueue.has(key)) {
    this.cacheQueue.delete(key);
  }
  if (this.cacheQueue.size >= this.capacity) {
    //删除缓存队列中最老的缓存(第一个缓存)
    this.cacheQueue.delete(this.cacheQueue.keys().next().value);
    this.cacheQueue.set(key, value);
  } else {
    this.cacheQueue.set(key, value);
  }
  console.log(this.cacheQueue);
}
const lru = new LRUCache(2);

lru.put(1, 1);
lru.put(2, 2); //存储为  {1:1, 2:2} 
lru.get(1); //{2:2, 1:1}

lru.put(3, 3); //存储为  {1:1, 3:3}
lru.get(2); //返回 -1

lru.put(4, 4); //存储为  { 4:4，3:3 }