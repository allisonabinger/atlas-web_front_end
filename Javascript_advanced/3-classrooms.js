// createClassRoom creates an array of student seats when passed a number of students
function createClassRoom(numberOfStudents) {
	
	function studentSeat(seat) {
		return function() {
			return seat;
		}
	}
	var students = [];
	for (var i = 0; i < numberOfStudents; i++) {
		students.push(studentSeat(i + 1))
	}

	return students;
}

var classRoom = createClassRoom(10);


// test: console.log(classRoom[0]());
// test: console.log(classRoom[3]());
// test: console.log(classRoom[9]());
