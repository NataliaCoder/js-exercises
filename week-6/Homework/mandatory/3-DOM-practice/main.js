console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

section = document.querySelectorAll("section");
section.forEach((element) => (element.style.backgroundColor = "white"));

// Task 2
// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
// Hint: look at the CSS to see if there are any classes already written which you can use.

document.querySelectorAll("img").forEach((element) => (element.className = "content-title"));

// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

let index = 0;
let years = [
    "9 December 1906 - 1 January 1992",  
    "26 August 1918 - 24 February 2020",  
    "10 December 1815 - 27 November 1852"
];

document.querySelectorAll("section").forEach((element) => {
let paragraph = document.createElement("p");
paragraph.textContent = years[index];
element.append(paragraph);
index++;
});