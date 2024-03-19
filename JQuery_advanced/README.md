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

&nbsp;
&nbsp;
---
---
&nbsp;
&nbsp;

# Technical jQuery Methods and Examples

## The Document Ready Event
[*click to learn more*](https://www.w3schools.com/jquery/jquery_syntax.asp)

jQuery methods are almost always placed inside a document ready event, which looks like this:
```
$(document).ready(function(){
	// jQuery methods here...
});
```
This is done to prevent any jQuery code from executing before the document if finished loading, or before the document is 'ready'. This is best practice to avoid actions from failing if they are run before the document is ready. However, the jQuery team created an even shorter method for the document ready event, which looks like this:
```
$(function (){
	// jQuery methods here...
})
```

Either syntax is acceptable for jQuery!

&nbsp;
---
&nbsp;

## What is a CDN?

A **Content Delivery Network**, or **CDN**, is a network of servers distributed across various locations around the world designed to deliver web content to users based on their geographic location. The goal of a CDN is to reduce latency and improve the loading speed of web pages by serving content from the server closest to the user. The CDN in this project is being used to load the jQuery library from a remove server, seen in the `<script>` tags with the `src="https://code.jquery.com/jquery-3.6.0.slim.min.js` attribute.

&nbsp;
---
&nbsp;

## Creating DOM elements with jQuery
[*here*](https://www.w3schools.com/jquery/jquery_ref_html.asp)

jQuery provides methods to create new DOM elements, set their attributes, and append them to existing elements. There are several different methods that can achieve the same results.

Here are some common methods that can be used to manipulate HTML and CSS in your document, click [*here*](https://www.w3schools.com/jquery/jquery_ref_html.asp) for a full list.

`addClass()`	Adds one or more class names to selected elements
`after()`	Inserts content after selected elements
`append()`	Inserts content at the end of selected elements
`attr()`	Sets or returns attributes/values of selected elements
`before()`	Inserts content before selected elements
`clone()`	Makes a copy of selected elements
`html()`	Sets or returns the content of selected elements
`offset()`	Sets or returns the offset coordinates for selected elements (relative to the document)
`position()`	Returns the position (relative to the parent element) of an element
`prepend()`	Inserts content at the beginning of selected elements
`remove()`	Removes the selected elements (including data and events)
`text()`	Sets or returns the text content of selected elements
&nbsp;

Using the `$()` constructor, here are a few different ways to create new elements:
```
var newDiv = $('<div></div>); // Passes the HTML string of the element of the element that you want to create.

$('#existingElement').html('<div>New Content</div>'); // Sets the HTMl content of an existing element.
$('#existingElement').append('<div>New Content</div>'); // Appends new element to existing element.
$('#existingElement').prepend('<div>New Content</div>'); // Prepends new element to existing element.
$('#existingElement').after('<div>New Content</div>'); // Creates new element after existing element.
$('#existingElement').before('<div>New Content</div>'); // Creates new element before existing element.

```

&nbsp;
---
&nbsp;


## Authors/Contributors to this project
This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
