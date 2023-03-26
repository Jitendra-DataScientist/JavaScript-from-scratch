// There are 2 ways of writing functions in Javascript:
// 1. Function declaration
// 2. Function expression


// Function Declaration Syntax

function sum( x, y ) {
	var result = x + y;
	return result;
}

var result = sum( 12, 13 );
console.log( 'Result is ', result );                        // Result is 25



// Function Expression Syntax (more like variable declaration and assignment)
var sum2 = function( x, y ) {
		var result = x + y;
		return result;
};

console.log( 'Result of sum2 : ', sum2( 13, 14));          // Result of sum2 : 27

// In  javascript, function expression is used to define a funtion inside
// any expression. It allows us to create anonymous function that does not
// have any function name.

var square = (function(x) {return x*x;}(5));
console.log( square );                                     // 25

