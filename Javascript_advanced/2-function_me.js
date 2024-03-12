// Using closures to let a variable be assigned to a function, and not have it be executed immediately.

function welcomeMessage(fullName) {
	return function() {
		alert("Welcome " + fullName);
	}
}

var guillaume = welcomeMessage("Guillaume");
var alex = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");
