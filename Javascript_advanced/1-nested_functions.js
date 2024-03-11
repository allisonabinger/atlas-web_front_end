// Create a variable named globalVariable with the value Welcome
var globalVariable = "Welcome";

// Function outer() that alerts the globalVariable, with function inner()
function outer() {
	var course = "Holberton";

	alert(globalVariable)

	function inner() {
		alert(globalVariable + " " + course);

		var exclamation = "!";

		function inception() {
			alert(globalVariable + " " + course + exclamation)
		}

		inception();
	}

	inner();
}

outer();
