

---

# Artur.Art Programming Standards

## Table of Contents
1. HTML
2. CSS
3. JavaScript (JS)
4. Elementor: Naming Sections and Widgets
5. Clean Code
6. Mandatory Feedback
7. Summary
8. Appendix

## 1. HTML

HTML should be structured logically and readably. Use semantic tags, name IDs and classes descriptively, and organize content for ease of reading.

Example of an HTML section within an Elementor block:

```html
<!-- Presentation Section -->
<section id="section-presentation">
    <div class="content-presentation">
        <h1>Our Company</h1>
        <p>We specialize in web development.</p>
    </div>
</section>
```

### Principles
- Use semantic tags (`<section>`, `<article>`, `<header>`, `<footer>`) to structure content
- Use IDs for unique elements that appear only once on a page (e.g., `id="section-presentation"`)
- Use classes for elements that appear multiple times and share common styles or behaviors (e.g., `class="content-presentation"`)
- Avoid inline styles. Prefer defining styles in a `<style>` block or a CSS file.

## 2. CSS

In CSS, prefer descriptive class names and modular styles. Organize CSS code by sections to avoid style conflicts.

Example of CSS styles within an Elementor HTML block:

```css
/* Style for the presentation section */
#section-presentation {
    background-color: #f5f5f5;
    padding: 40px;
}

/* Style for the presentation content */
.content-presentation {
    text-align: center;
    max-width: 600px;
    margin: auto;
}

.content-presentation h1 {
    font-size: 2rem;
    color: #333;
}

.content-presentation p {
    font-size: 1rem;
    color: #666;
}
```

### Principles
- Classes vs IDs: Use classes for reusable styles and IDs for unique elements
- Organization by section: Define styles for each section in a specific block, following a logical order
- Clear and descriptive names: Choose names that describe the role or location of each element
- Consistent text styles: Use consistent font sizes, colors, and fonts to improve visual uniformity

## 3. JavaScript (JS)

In JavaScript, prefer clear and well-named functions. Ensure that the code is as explicit as possible to minimize the need for comments.

**IMPORTANT**: Follow Google's JavaScript style guide: [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html) (except section 3).

### Principles
- Explicit names: Function and variable names must be explicit
- Comments for clarification: Comment important steps or sections of code that may not be immediately obvious
- Organization: Limit variable scope to the blocks or functions where they are needed (preferably using `let` or `const`)
- Event handling: Use `document.addEventListener('DOMContentLoaded', ...)` to run scripts after the page has loaded
- Semicolons are mandatory: Always place semicolons at the end of command lines

### CODE WRITING RULES

#### Indentation and formatting
- Use 2-space indentation
- Always use double quotes
- Always use semicolons
- No unnecessary spaces at the end of a line
- Add a space between code blocks
- Always use braces for control statements
- Do not use trailing commas
- Avoid magic numbers, except for array indexes or [0, 1]
- Add spaces inside object braces
- Do not use spaces inside array brackets

#### Code quality and best practices
- Always use strict equality (`===`)
- Warn about unused variables
- Warn when using `console`
- Disallow the use of `var`
- Prefer `const` over `let`
- Prefer arrow functions
- Allow concise bodies in arrow functions

#### Naming conventions
- Apply a camelCase convention
- Disallow unnecessary underscores
- Limit identifier length to a minimum of 2 and a maximum of 30 characters, with exceptions for i, j, x, and y

#### Commenting style
- Always add spaces after comments
- Require JSDoc comments for certain declarations (functions, methods, classes)
- Disable the valid-jsdoc rule to avoid conflicts with require-jsdoc

#### Code formatting
- Limit line length to 80 characters
- Use Unix line breaks (LF)

#### Best practices
- Ensure consistent returns in functions
- Disallow the use of `new Object()`
- Disallow the use of `eval()`
- Warn when using `alert()`
- Disallow implicit evaluation with `setTimeout()` or `setInterval()`
- Disallow duplicate imports

#### Additional documentation
- [MDN documentation on events](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- Refer to the appendix at the end of the document

## 4. Elementor: Naming Sections and Widgets

In Elementor, good naming is essential for organizing sections, columns, and widgets logically and for easy site maintenance.

### Principles
- Descriptive names: Names for sections, columns, or widgets should be explicit and related to their function
- Centralized JavaScript: JavaScript should ALWAYS be centralized in a single Elementor block located in the last section in the last block

### Exceptions for JavaScript
1. Libraries requiring early loading
2. Global Elementor blocks containing JavaScript

### Example names
- Sections: introduction, services, contact
- Columns: left-column, right-column, center-column
- Widgets: title-widget, contact-button-widget, team-image-widget

## 5. Clean Code

Clean code means writing code that is clear and understandable for other developers.

### Basic Principles
- Descriptive names: Every variable, function, and class should have a descriptive name
- Minimal comments: The code should be self-explanatory
- Avoid repetition: Use classes and functions to organize code
- Follow standards: Adhere to established coding conventions

### Resources
- [Clean Architecture by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2011/11/22/Clean-Architecture.html)
- [Clean Coding for Beginners](https://www.freecodecamp.org/news/clean-coding-for-beginners/)

## 6. Mandatory Feedback

### Why?
1. Continuous Improvement
2. Knowledge Sharing
3. Standardization
4. Bug Detection
5. External Validation

### 6.1 Attitudes during code feedback
- Be active in discussions
- Be constructive and positive on GitHub
- Adjust your code based on the feedback
- Thank others for bug detection
- View feedback as a way to improve

### Feedback Process
1. Check that the code follows conventions
2. Create a branch in the front-end repository
3. Notify others via Discord
4. Listen to feedback
5. Get consensus before making changes

### How to provide feedback
1. Create a branch: `OriginalBranchName_Revision_YourName`
2. For WordPress: `w_revision_pageName_revisionistName_version`
3. Announce the proposal on Discord
4. Explain the benefits and identify weaknesses
5. Compare performance if relevant

## 7. Summary

- HTML: Use semantic tags and descriptive names
- CSS: Prefer reusable classes and organization by section
- JavaScript: Use explicit names and a logical structure
- Elementor: Clearly name sections, columns, and widgets
- Clean Code: Write maintainable and well-documented code
- Feedback: Actively participate in the code review process

## 8. Appendix

### 8.1 Event Management in the JS Block

#### 1. Avoid HTML event attributes
❌ Bad practice:
```html
<button onclick="myFunction()">Click here</button>
```

✅ Good practice:
```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', myFunction);
```

#### 2. Event Delegation
```javascript
document.getElementById('list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Clicked element:', event.target.textContent);
    }
});
```

#### 3. Event Listener Management
```javascript
const button = document.getElementById('myButton');
const handler = () => console.log('Button clicked!');
button.addEventListener('click', handler);

// Remove listener
button.removeEventListener('click', handler);
```

#### 4. Use Named Functions
```javascript
// Good example
function handleClick() {
    console.log('Clicked');
}
element.addEventListener('click', handleClick);
```

#### 5. Handling Default Behaviors
```javascript
document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Link clicked');
});
```

### 8.2 Event Types

#### DOM Events
- Mouse: click, dblclick, mousedown, mouseup, mousemove, mouseenter/mouseleave
- Keyboard: keydown, keyup
- Form: focus, blur, change, input, submit, reset

#### Document/Window Events
- Loading: DOMContentLoaded, load, beforeunload, unload
- Window: resize, scroll

#### Media Events
- Playback: play, pause, ended, timeupdate, volumechange

#### Network Events
- Connectivity: online, offline

#### Custom Events
```javascript
const event = new CustomEvent('myEvent', {
    detail: { message: 'Hello World!' }
});
```

#### Pointer Events
- Interactions: pointerdown, pointermove, pointerup

#### Other Events
- Miscellaneous: wheel, drag/drop, animationstart/end/iteration, transitionend

---
