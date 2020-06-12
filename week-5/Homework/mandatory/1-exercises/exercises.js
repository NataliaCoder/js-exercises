/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
let content = document.querySelector("#content");
for( i=0; i<arrayOfPeople.length; i++) {
let name = document.createElement("h1");
name.innerText = people[i].name;
content.appendChild(name);
let job = document.createElement("h2");
job.innerText = people[i].job;
content.appendChild(job);
  }
};
  
/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo(shopping) {
let newContent = document.querySelector("#content");
let ul = document.createElement("ul");
  
newContent.appendChild(ul);

for( i=0; i<shopping.length; i++) {
let li = document.createElement("li");
ul.appendChild(li);
li.innerText = shopping[i];
} 
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false,
            coverImageUrl: "assets/design_of_things.jpeg"
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true,
            coverImageUrl: "assets/most_human_human.jpeg"
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true,
            coverImageUrl: "assets/pragmatic_programmer.jpeg"
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
let page = document.querySelector("body");//Write your code in here

let ulNew = document.createElement("ul");
page.appendChild(ulNew);
  // ulNew.className = "ulNewClass";

ulNew.style.listStyle = "none";
ulNew.style.display = "flex";
ulNew.style.flexWrap = "wrap";
ulNew.style.padding = "20px";
ulNew.style.width = "calc( 100% - 41px)";

for(i=0; i<books.length; i++) {
    
let liNew = document.createElement("li");
ulNew.appendChild(liNew);
  
liNew.style.width = "calc(25% - 51px)";
liNew.style.margin = "15px";
liNew.style.padding = "10px";
liNew.style.minWidth = "350px";

let par = document.createElement("p");
liNew.appendChild(par);
par.innerText = books[i].title + " " + books[i].author;
let image = document.createElement("img");
liNew.appendChild(image);
image.src = books[i].coverImageUrl;
if (books[i].alreadyRead === true) {
liNew.style.backgroundColor = "green";
} else 
{ liNew.style.backgroundColor = "red";
}
}
}
//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    coverImageUrl: "assets/design_of_things.jpeg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    coverImageUrl: "assets/most_human_human.jpeg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    coverImageUrl: "assets/pragmatic_programmer.jpeg",
  },
];

exerciseThree(books);
