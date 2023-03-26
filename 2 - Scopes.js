// scope

var x = 'global variable';  //global variable
console.log('outside funtions, x: ',x);                                   // outside funtions, x:  global variable

function foo() {
	var y = 'local variable';
	console.log('inside function, x: ',x);                            // inside function, x:  global variable
	console.log('inside function, y: ',y);                            // inside function, y:  local variable
	}

foo();

//below line returns error as y is not in the global scope, it is within the scope of the function foo only.
//console.log('outside function, y: ',y);


// another example of scope

var x = 'global variable';  //global variable

function foo1() {
        var y = 'local variable foo';
	function fee() {
		var z = 'local variable fee';
	        console.log('inside function fee, x: ',x);                // inside function fee, x:  global variable
		console.log('inside function fee, y: ',y);                // inside function fee, y:  local variable foo
		console.log('inside fucntion fee, z: ',z);                // inside fucntion fee, z:  local variable fee
		}
	fee();
	//console.log(z);   //this would return error

        }

foo1();
//fee();   //this would return error



// Variables declared without 'var' keyword are global.
// Without 'var', javascript tries to reassign a value to a variable in current scope, if not present then in next outer scope, and so on.
// If it doesn't find even in the global scope, it creates a global variable.
function foo2() {
        function fee1() { 
                z = 'local variable fee becomes global';
                console.log('inside fucntion fee, z: ',z);              // inside fucntion fee, z:  local variable fee becomes global
                }
        fee1();
        console.log('inside foo: ',z);                                  // inside foo:  local variable fee becomes global
        }

foo2();
console.log('outside foo: ',z);                                         // outside foo:  local variable fee becomes global

// more on scope

z=5;
function foo3() {
	var z=4;
        function fee2() {
                var z = 3;  
                console.log('inside fucntion fee, z: ',z);              // inside fucntion fee, z:  3
                }
        fee2();
        console.log('inside foo: ',z);                                  // inside foo:  4
        }

foo3();
console.log('outside foo: ',z);                                         // outside foo:  5

