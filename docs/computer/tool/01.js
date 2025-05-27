function add(a, b) {
  // let carry = 0;
  // let i = a.length - 1;
  // let j = b.length - 1;
  // let result = '';

  // while (i >= 0 || j >= 0 || carry > 0) {
  //   const digitA = i > 0 ? parseInt(a[i--]) : 0;
  //   const digitB = j > 0 ? parseInt(b[j--]) : 0;
  //   const sum = digitA + digitB + carry;
  //   result = (sum % 10) + result;
  //   carry = Math.floor(sum / 10);
  // }
  // return result;

  return (a + b).toString();
}
console.log(add(98765432123456789n, 12345678987654321n));

// console.log(Math.random());