// https://nodejs.org/en/download
// above link to download node.
// check from command line with 'node -v' and 'npm -v'.

// datatypes - number, boolean, string

var x = 1, y; // y is undefined

// there are only float types numerical values in javascript
// javascript is interpreted, there is no compilation phase

console.log(x);                                                    // 1
console.log(y);                                                    // undefined

console.log(typeof x);                                             // number
console.log(typeof y);                                             // undefined
console.log(typeof "qwe");                                         // string
console.log(typeof 'qwe');                                         // string

//boolean
var isRaining = true, isPouring=false;                             // boolean
console.log(typeof isPouring);                                     // boolean
console.log("isRaining: ",isRaining," isPouring: ",isPouring);     // isRaining:  true  isPouring:  false


//string
var str1 = "Hello",str2='Good Day';
console.log(str2);                                                 // Good Day
console.log(typeof str1);                                          // string
console.log(str1.length);                                          // 5
console.log(str1 + ' ' + str2);                                    // Hello Good Day


// undefined and null
var x;         
console.log(x);                                                    // 1
console.log(typeof x);                                             // number
console.log(undefined);                                            // undefined      
console.log(typeof undefined);                                     // undefined

var x=null;
console.log(x);                                                    // null
console.log(typeof x);                                             // object
console.log(null);                                                 // null
console.log(typeof null);                                          // object

var obj1 = {x:1,y:2};
console.log(obj1);                                                 // { x: 1, y: 2 }

obj1 = {
	x:3,
	y:4
       };
console.log(obj1);                                                 // { x: 3, y: 4 }

obj1 = null;
console.log(obj1);                                                 // null
console.log(typeof obj1);                                          // object
