// function moveZeroes(nums) {
//   let lastNonZeroFoundAt = 0;

//   // Move all the non-zero elements to the beginning of the array
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== 0) {
//           nums[lastNonZeroFoundAt++] = nums[i];
//       }
//   }

//   // Fill in the remaining positions with zeroes
//   for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
//       nums[i] = 0;
//   }
// }

// 示例用法：
// let nums = [0, 1, 0, 3, 12];
// moveZeroes(nums);
// console.log(nums); // 应输出: [1, 3, 12, 0, 0]


function moveZeroes(nums) {
  let left = 0;
  let right = 0;
  for (right; right < nums.length; right++) {
      if (nums[right] !== 0 && nums[left] === 0) {
          // 交换
          [nums[left], nums[right]] = [nums[right], nums[left]];
          left++;
      } else if (nums[left] !== 0) {
          // 只有当 left 指向 0 时才停下等待交换
          left++;
      }
  }
}

// 测试
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // 输出: [1, 3, 12, 0, 0]

console.log(Number.MAX_VALUE);