vara=2; 
foo();
function foo() { 
	a=3;
	console.log( a ); 
	var a;
}
console.log( a ); // 2
// works because `foo()`
// declaration is "hoisted"
// 3
// declaration is "hoisted"
// to the top of `foo()`