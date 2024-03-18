// Binding + Closure

const user = {
	hobby: "Calligraphy",
	favoriteSport: "Hockey",
	astrologicalSign: "Aries",
	firstName: "Buillaume",
	lastName: "Johns",
	location: "Netherlands",
	occupation: "Engineer"
};

// Function to welcome the user
function logWelcomeUser(welcomeString) {
	console.log(`${welcomeString}, ${this.firstName}. Your occupation is ${this.occupation}`);
}

// varible to bind the logWelcomeUser function to the user object
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// calls the LogWelcomeUser function with string by calling the variable.
bindLogWelcomeUser('Welcome');
