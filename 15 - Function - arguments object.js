// Arguments are array-like objects accessible inside functions. It contains the values
// of the arguments passed to that function.
// Arguments have a length property starting with index 0.

// If one can pass more arguments than what the function expects, then one can access
// the extra arguments using the 'arguments' object of the function.

function foo1( x, y, z ) {
	console.log( x, y, z );
	console.log( arguments );
	console.log( arguments[0], arguments[1], arguments[2], arguments[3] );
	console.log( arguments.length );
	
}


foo1( 'Hi', 'how', 'are', 'you' );
// Output:
// Hi how are
// [Arguments] { '0': 'Hi', '1': 'how', '2': 'are', '3': 'you' }
// Hi how are you
// 4

