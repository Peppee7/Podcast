

let elem = document.querySelectorAll(".imgP");

let elem1 = document.querySelector(".imgP1");
let elem2 = document.querySelector(".imgP2");
let elem3 = document.querySelector(".imgP3");
let elem4 = document.querySelector(".imgP4");

let tit = document.querySelectorAll(".titleP");

let tit1 = document.querySelector(".titleP1");
let tit2 = document.querySelector(".titleP2");
let tit3 = document.querySelector(".titleP3");
let tit4 = document.querySelector(".titleP4");



for (let i = 0; i < elem.length; i++) {
    let el = elem[i];
    el.addEventListener("click", function() {
        //console.log(tit[i]);
    })
}