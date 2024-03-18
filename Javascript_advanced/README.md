  <h1 align="center">
  <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" align="left" width="50">
    Javascript - Advanced
  <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" align="right" width="50"></h1>


## Intro
JavaScript is a scripting or programming language that allows you to implement complex features on web pages. I've found comparing the web page to a human body can differentiate on what the components can do. In the context of a person, HTMl is the bones, CSS is the skin and hair, and Javascript is the brain and muscle.

This Directory is a warm up on Javascript to get started on larger projects. 


## Learning Objectives

1. **What is lexical scoping in JavaScript**

2. **What is closure in JavaScript, and how do you use it?**

3. **How to chain different closures, and how to simulate private methods with Closure**

4. **The execution stack order with JavaScript**
   
5. **How to use callbacks**

---
---
&nbsp;
&nbsp;

# Highlighted Javascript Mechanics

## JavaScript Lexical Scoping
[*click to learn more*](https://www.w3schools.com/js/js_scope.asp)

Lexical scoping is a fundamental concept in JavaScript that determines the scope of a variabled based on its location within the source code. It is how variable names are resolved during runtime based on where they are declared. Scope refers to the context in which variables are accessible. Before ES6, they were either global or local. ES6 introduced block scope, which is provided using the keywords `let` and `const`. Variables declared inside a `{ }` block cannot be accessed from outside the block, unless they use the `var` keyword. 

### Example
```
{
	let x = 2;
}

(x cannot be used here)
```
```
{
	var x = 2;
}

(x CAN be used here)
```

&nbsp;
---
&nbsp;
## JavaScript Closures
[*click to learn more*](https://www.w3schools.com/js/js_function_closures.asp)

A closure is a combination of a function and the lexical environment within which that function was declared. The environment will consist of any local variables that were in-scope at the time the closure was created. Closures allow a function to retain access to its surrounding scope even after the execution has moved out of that scope. 

```
function outer() {
	var message = "Hello from outer!"

	function inner() {
		// Inner function has access to the mesage variable.
		alert(message); 
	}

	// Return the inner function
	return inner;

}

// Call outer to get the inner function
var closureAlert = outer();

// closureAlert contains inner function and its surrounding scope
// Calling closureAlert will still have access to the message variable

closureAlert();

```

Closures are useful for preserving state across multiple function calls, creating private variables, and implementing data hiding.

&nbsp;
---
&nbsp;
## JavaScript Call Stack
[*click to learn more*](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

A call stack is how an interpreter keeps track of its place in a script that calls multiple functions. When a script calles a function, the interpreter adds it to the call stack, then carries out the function. Any functions that are called by that function are added further up and run where their calls are reached. When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing. If the stack takes up more space than it was assigned, a "stack overflow" error is thrown. 

&nbsp;
---
&nbsp;

## JavaScript Timing Events
[*click to learn more*](https://www.w3schools.com/js/js_timing.asp)

The [window object](https://www.w3schools.com/js/js_window.asp) allows for code to be executed at specified time intervals. The two methods used most in JavaScript for this practice is `setTimeout` and `setInterval`

### `setTimeout`

`setTimeout` executes a function after waiting a specified number of milliseconds. It can be used to change the stack order. It takes a callback function that will be placed at the end of the execution stack, and a delay in milliseconds, which will allow other synchronous code to execute first. 

Usage: `setTimeout(function, milliseconds)`

This method can be seen in some files, but the best example is in [11-prime.js](/Javascript_advanced/11-prime.js)

### `setInterval`

`setInterval` is the same as `setTimeout`, but it repeats the execution of the function continously at every given time-interval given. The first parameter is the function to be executed, and the second parameter is the length of the time-interval between each execution in milliseconds. 

Usage: `setInterval(function, milliseconds)`

This method was not used in this project.

&nbsp;
&nbsp;
&nbsp;
---
---

## Authors/Contributors to this project
This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
