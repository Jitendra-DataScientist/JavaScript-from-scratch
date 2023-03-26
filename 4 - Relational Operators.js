// Relational Operators
isBefore = 'hello' < 'abacus';   // checks if 'hello' is before 'abacus' in dictionary, which is false.
console.log(isBefore);                        // false

isAfter = 'hello' > 'abacus';   // checks if 'hello' is after 'abacus' in dictionary, which is true.
console.log(isAfter);                         // true

isgreater = 10>9;
islesser = 9<3;
console.log(isgreater,islesser);              // true false


var x=10,y=5;
console.log(x<=y);                            // false
console.log(x>=y);                            // true
console.log(x==y);                            // false
console.log(x!=y);                            // true


console.log( 1 == '1');  //returns true, as javascript coerces the string. When comparing a string with a number,
// JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0.
// A non-numeric string converts to NaN which is always false . When comparing two strings,
// "2" will be greater than "12", because (alphabetically) 1 is less than 2.

console.log( '12' > '1');                     // true
console.log( '12' > '15');                    // false
console.log( '12' > '');                      // true    // as empty string converts to 0

// ===  :  type safe equality operator (strict comparision)
console.log( 1 === 1 );                       //true
console.log( 1 === '1' );                     // false


console.log( 1 != '1' );                      // false
console.log( 1 !== '1' );                     // true
