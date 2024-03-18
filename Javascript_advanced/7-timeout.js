// Call Stack: uses commands to log start statements, 1-100, and end of loop.

// First log, first of stack
console.log('Start of the execution queue');

// setTimeout executes callback function once the call stack is empty. Last to print.
setTimeout(() => {
	console.log('Final code block to be executed');
}, 0);

// second log on stack (will log 1-100)
for (let i = 1; i <= 100; i++) {
	console.log(i);
}

// logs after loop, third on stack
console.log("End of the loop printing");
