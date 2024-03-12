// welcomeMessage accepts one argument fullName, which creates a closure for an alert displaying "Welcome <fullname>"

function welcomeMessage(fullName) {
	return function() {
		alert("Welcome " + fullName);
	}
}

var guillaume = welcomeMessage("Guillaume");
var alex = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");
