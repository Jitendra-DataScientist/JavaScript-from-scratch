'use strict'
var quantity;
quantitu = 5;    // suppose I happen to mispell a variable accidentally.
console.log(quantity);


// 'use strict' at the start enables Strict Mode.
// Strict Mode removes few JS silent errors and fixes mistakes that make it difficult for
// javascript engines to perform optimizations.

// Without strict mode this script gives output "undefined". Try executing the script after commenting 1st line.
// With strict mode the script errors out with 'ReferenceError: quantitu is not defined'.
