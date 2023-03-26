// Arithmetic operators
var x = 10.00000001;
var y = 20.00000005;
// floating values have sometimes inaccurate calculation on javascript
console.log(x+y);                                // 30.00000006
console.log(2+5.6);                              // 7.6
console.log(y-x);                                // 10.00000004
console.log(y*x);                                // 200.00000070000002
console.log(y/x);                                // 2.000000003
console.log(13/4);                               // 3.25
console.log(13%4);                               // 1


//Miscellaneous operators
//concatenate strings
var x = 'Hello '
var y = 'Hi'
var z = 3
console.log(x+y)                                 // Hello Hi
console.log(x+z)                                 // Hello 3

// Javascript has auto-semicolon-fill feature that works under the hood, but that feature is not completely reliable,
// so better to end statements, functions, loops etc, with semicolons
