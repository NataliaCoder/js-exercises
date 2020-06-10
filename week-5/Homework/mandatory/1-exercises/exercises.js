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



  //Write your code in here


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
  for(i=0; i<books.length; i++) {
  let page = document.querySelector("body");//Write your code in here
let par = document.createElement("p");
  page.appendChild(par);
ulNew = document.createElement("ul");
  par.appendChild(ulNew);
liNew = document.createElement("li");
  ulNew.appendChild(liNew);
    liNew.innerText = books[i].title + " " + books[i].author;
img = document.createElement("img");
par.appendChild(img);
img.src = "https://i.ebayimg.com/images/g/qMYAAOSwlj9d4DzJ/s-l1600.png";
html = document.createElement("html");
img.appendChild(html);
html.href = "https://en.wikipedia.org/wiki/The_Design_of_Everyday_Things";
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
