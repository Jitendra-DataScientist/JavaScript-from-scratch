// a function to sum up all the arguments passed to it

function total_sum() {
	for ( var i = 0, result = 0 ; i < arguments.length ; i++ ) {
		result += arguments[i];
	}
	return result;
}

console.log ( total_sum ( 10, 20 ) );                      // 30
console.log ( total_sum ( 1, 2, 3 ) );                     // 6
console.log ( total_sum ( 10, 20, 50, 100 ) );             // 180
console.log ( total_sum ( 10 ) );                          // 10