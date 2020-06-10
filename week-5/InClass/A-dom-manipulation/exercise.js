/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
console.log(document.querySelectorAll("p"));
console.log(document.querySelector("div"));
console.log(document.querySelector("#jumbotron-text"));
console.log(document.querySelectorAll(".primary-content p"));
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop 
up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector('#alertBtn');
alertButton.addEventListener('click', voteThanks);

function voteThanks() {
    alert("Thanks for visiting Bikes for Refugees!");
};

/*
Task 3
=======

Write JavaScript below that changes the background colour of
 the page when the 'Change colour' button is clicked.
*/
let changeButton = document.querySelector('#bgrChangeBtn');
changeButton.addEventListener('click', changeBackground);

function changeBackground() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'blue';
}
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph 
should be added below the buttons that says "Read more below."
*/
let addSomeText = document.querySelector('#addTextBtn');
addSomeText.addEventListener('click', addNewParagraph);
function addNewParagraph() {
let paragraph = document.createElement("p"); // here we're just creating it, element is not visible yet
paragraph.innerHTML = 'Read more below.';
let divNew = document.querySelector('.buttons');
divNew.appendChild(paragraph);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all 
links on the page should increase.
*/
let textIncr = document.querySelector("#largerLinksBtn");
textIncr.addEventListener('click', increase);
function increase(){
document.querySelectorAll("a").forEach((element) => 
{element.style.fontSize = "200%";
}); 
}




/*
When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

/*
Task 6
======

Using JavaScript, create an unordered list under the "Add" button.
When the "Add" button is pressed, get the value of the text box on its left, and add it to the list you created above.
*/
