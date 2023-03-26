// Function Declarations are hoisted to the top of code.

console.log( sum( 12, 13 ) );                             // 25

function sum( x, y ) {
	var result = x + y;
	return result;
}




// Function Expressions aren't hoisted, so below line errors out:

// console.log( 'Result of sum2 : ', sum2( 13, 14));      // TypeError: sum2 is not a function

var sum2 = function( x, y ) {
		var result = x + y;
		return result;
};


// Function Declaration vs Function Expression:
// Function declarations are loaded before any code is executed.
// Function expression loads only when interpreter reaches that
// line of code.
// Function declarations are HOISTED to the top of other code.
// Functions expressions aren't HOISTED.
