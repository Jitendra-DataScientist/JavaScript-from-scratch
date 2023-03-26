// Logical Operators
var isRaining = true, goByWalk = true, takeCar = false;
var takeUmbrella = isRaining && goByWalk;
console.log(takeUmbrella);                                               // true

var phonePrice = 10000, bankBalance = 60000, willingToBuy = true;
var didIBuyPhone = phonePrice <= bankBalance  &&  willingToBuy;
console.log(didIBuyPhone);                                               // true


// All logical operators have lower precedence than relational operators. So that means that logical
// operators always get evaluated after relational operators.
// The order of operations for Boolean algebra, from highest to lowest priority is NOT, then AND, then OR.


var phonePrice = 10000, bankBalance = 5000, friendBankBalance = 40000;
var didIBuyPhone = phonePrice <= bankBalance  ||  phonePrice <= friendBankBalance;
console.log(didIBuyPhone);                                               // true

console.log(!didIBuyPhone);  //negation                                  // false
