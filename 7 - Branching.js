var priceOfPhone = 45000, bankBalance = 42000, creditLimit=60000;

if (priceOfPhone < bankBalance) {
	console.log('All OK. Process payment.');
} else if (priceOfPhone < creditLimit) {
	console.log('Bank payment failed, credit used');
} else {
	console.log('Insufficient funds');
}

// if statements can be standalone also, i.e, without followed by "else" or "else if".

if (true) {
	console.log('Transaction Complete');
}
