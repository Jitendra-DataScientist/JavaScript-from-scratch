// JavaScript is a loosely/weakly typed language. Here it is not required
// to correctly predict the kind of data that will be assigned to a variable.
// Loosely typed languages make it easier to debug, test code and provide
// more flexibility.

function foo() {
	console.log( 'foo was called' );
}

foo();                                                   // foo was called


// Function foo doesn't expect arguments, but doesn't return any error if
// one passes some arguments.
foo('hello');                                            // foo was called
foo('hey',3);                                            // foo was called



// Also, one can pass more or less arguments than what the function expects:

function foo1( x, y, z ) {
	console.log( x, y, z );
}

foo1( 2, 3 );                                            // 2 3 undefined
foo1( 5, 6, 7, 8 );                                      // 5 6 7
