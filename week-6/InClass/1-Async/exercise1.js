// const greekGods = [
//   "Aphrodite",
//   "Ares",
//   "Artemis",
//   "Athena",
//   "Poseidon",
//   "Zeus",
// ];

let my_array = [
  {name: "Natalia", surname: "Semenova", age: "не скажу!" }, // object 1
  {name: "Pavel", surname: "Filkovskiy tehuea ryw", age: "взрослый!" }, // object 2
  {name: "Pavel", surname: "rugtwutgr Filkovskiy ryw", age: "взрослый!" }, // object 3
];
let filtered_array_of_objects  =   my_array.filter(an_object => an_object.surname.includes("Filkovskiy"));
console.log(filtered_array_of_objects);
// 1. Console.log() the name of the first and second god in the list
// 2. Console.log() the name of the first god after 3 seconds, and the name of the second god after 1 second