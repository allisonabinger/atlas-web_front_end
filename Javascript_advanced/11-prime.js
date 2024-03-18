// Logs the performance time of executing countPrimeNumbers 100 times

// isPrime helper function
function isPrime(num) {
	for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) // uses sqrt to reduce iterations to find factors of num
		if(num % i === 0) return false; // if num has a factor of anything except 1, it is not prime, returns false.
	return num > 1; // returns true not, meaning num is prime.
}

// countPrimeNumbers returns the number of prime numbers from 2 to 100.
function countPrimeNumbers() {
	let count = 0;
	for(let i = 2; i <= 100; i++) {
		if(isPrime(i)) count++;
	}
	return count;
}

// Measuring execution time

const startTime = performance.now(); // startTime to show difference before and after
Array.from({length: 100}).forEach(() => {
	setTimeout(countPrimeNumbers, 0); // creates an array with 100 undefined elements, executes countPrimeNumbers for each element.
});

setTimeout(() => {
	const endTime = performance.now(); // endTime to show difference before and after
	console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);

}, 0);
