// function changeMode to accept 5 arguments and manipulate DOM with closure. Also, switched to single quotes. 

function changeMode(size, weight, transform, background, color) {
	return function() {
		document.body.style.fontSize = size + 'px';
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	}
}

function main() {
	// declare three modes with specific styles
	var spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
	var darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
	var screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

	// Add a pararaph to the HTML document
	var pg = document.createElement('p')
	pg.innerHTML = 'Welcome Holberton!';
	document.body.appendChild(pg);

	// Create each of the buttons that will be used to implement the three modes and add to HTMl document

	// Spooky Mode Button
	let spookyButton = document.createElement('button');
	spookyButton.innerHTML = 'Spooky';
	spookyButton.addEventListener('click', spooky);
	document.body.append(spookyButton);

	// Dark Mode Button
	let darkModeButton = document.createElement('button');
	darkModeButton.innerHTML = 'Dark mode';
	darkModeButton.addEventListener('click', darkMode);
	document.body.append(darkModeButton);

	// Scream Mode Button
	let screamModeButton = document.createElement('button');
	screamModeButton.innerHTML = 'Scream mode';
	screamModeButton.addEventListener('click', screamMode);
	document.body.append(screamModeButton);

}

main();

// To test according to task prompt, open up a chrome window, select the profile as 'Guest', then paste this code in the console. 
