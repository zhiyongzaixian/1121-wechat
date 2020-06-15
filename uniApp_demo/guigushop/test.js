var a = 234;


var b = 345;
;(function(window){
	var a = 123;
	var b = 'abc'
	function fun(){
		console.log(a, b)
	}
	window.fun = fun;
})(window)