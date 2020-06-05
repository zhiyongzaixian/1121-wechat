// >>> <<< 位移运算符
// 将目标数据转换成二进制数据，移动指定的位数

let num = 3;
// 0000 0011
//  0000 0011
// 00000 001
console.log(num >>> 1); // 1
console.log(num >>> 2); // 0

let str = '3'
console.log(typeof (str >>> 0));

// >>>0(右移0位)可以去绝对number

// 取绝对布尔值： !!

let arr = [1,2,3,4]
let arr2 = [2,3,4,5]
console.log(Object.prototype.toString.call(arr));  // [object Array]



console.log(arr.toString()); // 1,2,3,4
