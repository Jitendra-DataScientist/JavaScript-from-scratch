//Miscellaneous operators
//concatenate strings
var x = 'Hello '
var y = 'Hi'
var z = 3
console.log(x+y);                                                       // Hello Hi
console.log(x+z);                                                       // Hello 3

console.log(typeof true);  // returns a string 'boolean'                // boolean
console.log(typeof typeof true);  // returns string                     // string

//ternary condition operator
var temp = 50, pressure = 34;
var sootBlow = temp*pressure >= 100   ?   true : false;
console.log(sootBlow);                                                  // true


var city = 'Mysore';
var isCityCrowded = city === 'Bangalore'   ?   true : false;
console.log(isCityCrowded);                                             // false

// BODMAS precedence of operators holds true in javascript also.
