console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.
section = document.querySelectorAll("section");
// for (i = 0; i < section.length; i++) {
//     section[i].style.backgroundColor = "white";
// }

section.forEach(myFunction);

function myFunction(element) {
    element.style.backgroundColor = "white";
} ;

// Task 2
// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.
// Hint: look at the CSS to see if there are any classes already written which you can use.

image = document.querySelectorAll("img");
image.forEach(myFunc);
function myFunc(elemen) {
elemen.className = ".content-title";
};


// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
9 December 1906 
1 January 1992  

26 August 1918 
24 February 2020  

10 December 1815
27 November 1852