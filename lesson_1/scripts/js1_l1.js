function task1() {
	let tCels = +prompt("Enter the temperature of Celsius degrees:");

	if (isNaN(tCels)) {
		alert("Enter the numeric value!");
		return
	}

	let tFer = (9 / 5) * tCels + 32;
	alert("This is " + tFer + " degrees on Fahrenheit!");

	return tFer;
}

function task2() {
	let name = prompt("Enter the name to 'name' variable:");
	let admin = name;
	alert("Variable 'admin' contain the value: " + admin);
	return
}

function task3() {
	alert("The result of work this function you can see in console. Please," +
		" open the console into your browser!");

	console.log("10 + 10 + '10' = " + (10+ 10+ "10"));
	console.log("10 + '10' + 10 = " + (10+ '10'+ 10));
	console.log("10 + 10 + +'10' = " + (10+ 10+ +'10'));
	console.log("10 / -'' = " + (10/ -''));
	console.log("10 / +'2.5' = " + (10/ +'2.5'));

	return
}

function task4() {
	alert("We can use variables names as: mode, my_valu3, __hello__, $$$")
	alert("but we can't use the variables names as: !0_world and 3my_value3")
	return
}