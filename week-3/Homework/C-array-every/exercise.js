/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

var groupIsOnlyStudents = group.every(inclStudent); // complete this statement
function inclStudent(name) {
return students.includes(name) ;
}
if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students

// var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley"];
// function isAboveThreshold(name) {
//   return name.length > 3;
// }
// var studentNameLength = students.every(isAboveThreshold);

// console.log(studentNameLength); // logs true

