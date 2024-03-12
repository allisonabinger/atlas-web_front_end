// Math functions using closures

function divideBy(firstNumber) {
	return function(secondNumber) {
		return secondNumber / firstNumber;
	}
}

function addBy(firstNumber) {
	return function(secondNumber) {
		return firstNumber + secondNumber;
	}
}

var addBy100 = addBy(100);
var addBy1000 = addBy(1000);
var divideBy10 = divideBy(10);
var divideBy100 = divideBy(100);


// test: console.log(addBy100(20));
// test: console.log(divideBy10(20));
// test: console.log(divideBy100(200));
// test: console.log(addBy1000(20));
