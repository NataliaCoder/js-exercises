let blueBtn = document.querySelector("#blueBtn");
let jumbotron = document.querySelector(".jumbotron");
let donateBtn = document.querySelector(".btn.btn-primary.btn-lrg");
let volunteerBtn = document.querySelector(".btn.btn-secondary.btn-lrg");

blueBtn.addEventListener("click", blueBtnChanges);
function blueBtnChanges(){
jumbotron.style.backgroundColor = `#588fbd`;
donateBtn.style.backgroundColor = `#ffa500`;
volunteerBtn.style.backgroundColor =`black`;
volunteerBtn.style.color = `white`;
}

let orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", orangeBtnChanges);
function orangeBtnChanges(){
jumbotron.style.backgroundColor = `#f0ad4e`;
donateBtn.style.backgroundColor = `#5751fd`;
volunteerBtn.style.backgroundColor =`#31b0d5`;
volunteerBtn.style.color =`white`;
}

let greenBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener("click", greenBtnChanges);
function greenBtnChanges(){
jumbotron.style.backgroundColor = `#87ca8a`;
donateBtn.style.backgroundColor = `black`;
volunteerBtn.style.backgroundColor = `#8c9c08`;
}
