// roomDimensions with three attributes, width, length, and getArea

const roomDimensions = {
	width: 50,
	length: 100,
	getArea: function() {
		return this.width * this.length;
	}
};

// Binds the object roomDimensions to the getArea function
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(boundGetArea()); // since the method was bound, 'this' was not lost upon calling.
