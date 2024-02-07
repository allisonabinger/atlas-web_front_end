# Sass // SCSS

## Intro
This project is focused on practicing Sass basics, flow control directives, and references.



## Learning Objectives

1. **What is Sass and ScSS, and what are the differences?**

2. **Sass preprocessing**

3. **Variable Declaration**

4. **Nested Definition**

5. **Mixins**

6. **Manipulate Operators**

---
### What is SCSS/Sass?
-	**SCSS (Sassy CSS)** is a preprocessor scripting language that is interpreted or compiled into CSS. It adds mechanics like variables, nesting, and mixings to regular CSS.
-	**Sass** is an older syntax, but SCSS is more widely used and is often the preferred syntax. They are very similar, but SCSS is more like CSS with curly braces and semicolons, which can be easier for those more familiar with CSS.
&nbsp;

### Sass preprocessing
-	Sass preprocessing is the process of converting Sass or SCSS files into standard CSS files. This can be done using a preprocessor tool to add features and functionality to CSS. All of the scss files will be converting using `sass`.
&nbsp;

### Variable Declaration
- Variables are declared in Sass/SCSS using the `$` symbol followed by the variable name and value.
- Example: `$primary-color: #007bff`
&nbsp;

### Nested Definition
- Use nested definitions in Sass/SCSS to nest CSS rules within each other, which can improve readability and maintainability. 
- Example:
```
.container {
	width: 100%;
	box {
		background-color: #bff;
	}
}

```
- The code block aboves shows the nesting capability of defining a style to a box within a container.
&nbsp;

### Mixins
- Mixins are reusable blocks of CSs declarations that can be included (or 'mixed-in') in other CSS rules. They operate like functions in programming languages, allowing encapsulation of a set of styles and apply them to multiple selectors or rules.
- Mixins are defined using the `@mixin` directive followed by a name and a block of CSS declarations. They are included in other rules using the `@include` directive followed by the name of the mixin. They can also accept parameters, which allow customization of the styles they generate.
- Example: 
```
@mixin border-radius($radius) {
	border-radius: $radius;
}

.btn {
	@include border-radius(5px);
}
```
- The above code block uses the mixin `border-radius`, which accepts a parameter `$radius` and applies the value to the specified property. It is then used in the .btn class using the `@include` directive.
&nbsp;

### Manipulate Operators
- You can manipulate operators in Sass/SCSS using arithmetic operations like `+`, `-`, `*`, `/`, or `%`. This can be done to perform calculations on numeric values.

## Highlighted Tasks
Below are links to highlighted or unique tasks that I enjoyed in this project.


## Authors/Contributors to this project
This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
