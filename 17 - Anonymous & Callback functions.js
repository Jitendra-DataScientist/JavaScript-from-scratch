// Anonymous means without a name.
// A function that does not have any name associated with it is called an anonymous function.
// To define a function, use the 'function' keyword before the function name.
// Function expressions are also anonymous functions.

const sum = function ( x, y ) {
				return x + y;
				}
console.log( sum ( 10, 20 ) );                                                       // 30



// A callback is a function passed as an argument to another function.

const sum1 = function ( x, y, call_back ) {
				var result = x + y;
				call_back( result );
				}

function log_result ( to_print ) {
	console.log ( to_print );
}

sum1 ( 10, 30, log_result );                                                         // 40



// The callback function need not be defined explicitly and can be defined while calling
// the main function. For example, above function call can be re-written as:

sum1 ( 30, 20, function log_result_1 ( to_print ) {
									console.log ( to_print );
				}
);                                                                                   // 50



// one need not give any name to the function while declaring it in the call to other,
// function, so above further reduces to:

sum1 ( 10, 50, function log_result ( to_print ) {
									console.log ( to_print );
				}
);                                                                                   // 60



// trying in the same line, though below is not recommended:

sum1 ( 30, 50, function log_result ( to_print ) { console.log ( to_print ); } );     // 80










