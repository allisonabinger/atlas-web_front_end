// Hogwarts themed module with private and public methods.

class studentHogwarts {
	// initialize variables
	#privateScore = 0;
	#name = null;

	// methods to change score
	#changeScoreBy(points) {
		this.#privateScore += points;
	}

	setName(newName) {
		this.#name = newName;
	}

	rewardStudent() {
		this.#changeScoreBy(1);
	}

	penalizeStudent() {
		this.#changeScoreBy(-1);
	}

	// method to print student and their score
	getScore() {
		return `${this.#name}: ${this.#privateScore}`;
	}
}

// harry, instance of studentHogwarts.

const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

// draco, instance of studentHogwarts.
const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
