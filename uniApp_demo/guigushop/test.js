// var a = 234;


// var b = 345;
// ;(function(window){
// 	var a = 123;
// 	var b = 'abc'
// 	function fun(){
// 		console.log(a, b)
// 	}
// 	window.fun = fun;
// })(window)

// let arr = [2,3,4,5]
// console.log(arr.find(item =>item === 3)) // 3
// console.log(arr.find(item =>item === 6)) // undefined

// // 判断当前数组的元素是否 都 大于3
// console.log(arr.every(item => item > 3)) // false
// console.log(arr.every(item => item > 1))
// // 判断当前数组的元素是否 有 大于3的
// console.log(arr.some(item => item > 3)) // true
// console.log(arr.some(item => item > 6)) // false


let arr = [2,3,4,5]
let result = arr.reduce((pre, next) => {
	console.log(pre, next)
	return pre += next
}, 0)

console.log(result)