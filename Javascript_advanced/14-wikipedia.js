// Simple callback

function createElement(data) {
	// create a new p element
	const paragraph = document.createElement('p');
	paragraph.textContent = data;
	// append the paragraph to body
	document.body.appendChild(paragraph);
}

// wikipedia query function
function queryWikipedia(callback) {
	// XMLHttpRequest object
	const xhr = new XMLHttpRequest();
	// open request
	xhr.open('GET', "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
	// response => JSON
	xhr.responseType = 'json';
	// callback function when request is completed
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const extract = response.query.pages[Object.keys(response.query.pages)[0]].extract;
      callback(extract);
    }
	};
	xhr.send();
}
queryWikipedia(createElement);
