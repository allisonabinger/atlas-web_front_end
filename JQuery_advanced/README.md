  <h1 align="center">
  <img src="https://www.svgrepo.com/show/452242/jquery.svg" align="left" width="50">
    jQuery - Advanced
  <img src="https://www.svgrepo.com/show/452242/jquery.svg" align="right" width="50"></h1>


## Intro
jQuery is a lightweight JavaScript library designed by John Resig as way to do more with less code. The purpose is to make it easier to use JavaScript on a webpage. The jQuery library contains HTML/DOM and CSS manipulation, HTML event methods, effects and animations, AJAX, and other utilities. It is considered the most popular JavaScript library.

## Learning Objectives

1. **How to load jQuery from a CDN in a page**

2. **Ways to create DOM elements with jQuery**

3. **Modifying/adding new elements to a page with different positions**

4. **Click Handlers**
   
5. **How to send GET, POST, DELETE, or any type of AJAX query with jQuery**

6. **How to create a pagination**

---
---
&nbsp;
&nbsp;

# jQuery Methods Used

## What is a CDN?

A **Content Delivery Network**, or **CDN**, is a network of servers distributed across various locations around the world designed to deliver web content to users based on their geographic location. The goal of a CDN is to reduce latency and improve the loading speed of web pages by serving content from the server closest to the user. The CDN in this project is being used to load the jQuery library from a remove server, seen in the `<script>` tags with the `src="https://code.jquery.com/jquery-3.6.0.slim.min.js` attribute.

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

`setTimeout()` executes a function after waiting a specified number of milliseconds. It can be used to change the stack order. It takes a callback function that will be placed at the end of the execution stack, and a delay in milliseconds, which will allow other synchronous code to execute first. 

Usage: `setTimeout(function, milliseconds)`

This method can be seen in some files, but the best example is in [11-prime.js](/Javascript_advanced/11-prime.js)

### `setInterval`

`setInterval()` is the same as `setTimeout`, but it repeats the execution of the function continously at every given time-interval given. The first parameter is the function to be executed, and the second parameter is the length of the time-interval between each execution in milliseconds. 

Usage: `setInterval(function, milliseconds)`

This method was not used in this project.

&nbsp;
---
&nbsp;

## JavaScript Binding
[*click to learn more](https://www.w3schools.com/js/js_function_bind.asp)

The `bind()` method allows an object to borrow a method from another object.
```
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
```
In this example, the `member` object borrows the `fullname()` method from the `person` object.

Sometimes the `bind()` method has to be used to prevent losing `this`. When a function is used as a callback, `this` is lost. 
```
const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

setTimeout(person.display, 3000);
```
This will try to display the person after 3 seconds, but it will display `undefined`. Let's use `bind` to bind `person.display`:

```
let display = person.display.bind(person);
setTimeout(display, 3000);
```
Now, the example will display the person name! 

This method was used in [12-room_area.js](/Javascript_advanced/12-room_area.js)

---

## Authors/Contributors to this project
This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
