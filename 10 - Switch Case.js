var chocolate = 'Hersheys', quantity;

switch( chocolate ) {
	case 'Dairy Milk':
		quantity = 5;
		break;
	case 'Hersheys':
		quantity = 3;
		break;
	case 'Toblerone':
		quantity = 10;
		break;
	default:
		quantity = 2;
}

console.log(quantity);

// 'break' statements are given at end of every case to break out of the switch case.
// At times, 'break' statements may be deliberately excluded to execute all cases regardless
// of any previous matching cases.

// 'default' case is not mandatory to give.
