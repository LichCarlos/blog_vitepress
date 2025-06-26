function getDepth(root) {
  if (!root) return 0;
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}

const tree = {
  val: 1,
  left: { val: 2, left: { val: 4 }, right: { val: 5 } },
  right: { val: 3, left: { val: 6 }, right: { val: 7 } }
};
console.log(getDepth(tree));