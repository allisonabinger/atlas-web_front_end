// Function; welcome(),takes firstName and lastNames as arguments, returns Welcome firstName lastName

function welcome(firstName, lastName) {
	var fullName = firstName + " " + lastName;

	function displayFullName() {
		alert("Welcome " + fullName + "!");
	}

	displayFullName();
}

// Usage: welcome("John", "Doe"); returns: "Welcome John Doe!"
