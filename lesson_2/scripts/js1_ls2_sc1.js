function task1() {
	let a = 1, b = 2, c, d;
	alert("Declaring the variables: a=" + a + ', b = ' + b + ', c and d');
	// c = ++a;
	alert("Using the per-increment as c = ++a. a = " + a + " now. After" +
		" that c = " + (c = ++a) + " and a = " + a);
	alert('Using the post-increment as d = b++. There is b = ' + b + " after" +
		" using this variable d = " + (d = b++) + ", but b = " + b);
	alert("The similar situation with next expression: c = (2+ ++a). Now a =" +
		" " + a + " After operation c = " + (c = (2+ ++a)) + " where a = " + a);
	alert("And with the next expression d = (2+ b++), where b = " + b +
		" now and after iteration will be d = " + (d = (2+ b++)) +
		", but b became b = " + b + " right now!");
	alert("Thank you for you attention!");
	return;
}

function task2() {
	let a = 2;
	alert("a = " + a);
	x = 1 + (a *= 2);
	alert("After expression x = 1 + (a *= 2) we got x = " + x + " and a = " + a);
	return;
}

function task3() {
	let a = +prompt("Enter the numeric value for variable a = ");
	let b = +prompt("Enter the numeric value for variable b = ");

	if ((a >= 0) && (b >= 0)) {
		alert("a - b = " + (a - b));
	} else if ((a < 0) && (b < 0)) {
		alert("a * b = " + (a * b));
	} else {
		alert("a + b = " + (a + b));
	}

	return;
}

function task4() {
	let a = +prompt("Enter the any numeric value from 0 to 15:");
	let res = '';

	switch (a) {
		default:
			alert('You was entering wrong data! Try to do it else!');
			break;
		case 0:
			res += '0 ';
		case 1:
			res += '1 ';
		case 2:
			res += '2 ';
		case 3:
			res += '3 ';
		case 4:
			res += '4 ';
		case 5:
			res += '5 ';
		case 6:
			res += '6 ';
		case 7:
			res += '7 ';
		case 8:
			res += '8 ';
		case 9:
			res += '9 ';
		case 10:
			res += '10 ';
		case 11:
			res += '11 ';
		case 12:
			res += '12 ';
		case 13:
			res += '13 ';
		case 14:
			res += '14 ';
		case 15:
			res += '15';
			alert(res);
			break;
	}

	return;
}

function task5() {
	let a = +prompt("Enter the first value: ");
	let b = +prompt("Enter the second value: ");
	let c = prompt("Enter the arithmetical operation (+, -, /, *)");
	alert(mathOperation(a, b, c));
	return;
}

function mathOperation(frst, scnd, sign) {
	switch (sign) {
		case '+':
			return frst + scnd;
		case '-':
			return frst - scnd;
		case '*':
			return frst * scnd;
		case '/':
			return frst / scnd;
		default:
			return ('You did mistake! Check your data, please!')
	}
}

function task7() {
	alert('Boolean result expression of null == 0 is ' + (null == 0) +
		" because null and 0 is the different data's type.");
	alert('The strict equality null === 0 is ' + (null === 0) + ' too');
	alert('But null == undefined is ' + (null == undefined) +
	" because it's a exception for JavaScript!");
	return;
}

function task8() {
	let v = +prompt("Enter the number what you want raise to a power: ");
	let p = +prompt("Enter the powers value: ");
	let r = power(v, p);
	alert(v + " ^ " + p + " = " + r);
	return;
}

function power(val, pow) {
	if (pow > 1) {
		val *= power(val, --pow);
	}
	return val;
}