let a1 = document.querySelector(".l1");
let a2 = document.querySelector(".l2");
let a3 = document.querySelector(".l3");
let a4 = document.querySelector(".l4");
let a5 = document.querySelector(".l5");
let a6 = document.querySelector(".l6");

let n = 0;
function getRandom(min, max) {
    n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
}

function stile() {
    a1.style.height = getRandom(30, 110) + 'px';
    a2.style.height = getRandom(30, 110) + 'px';
    a3.style.height = getRandom(30, 110) + 'px';
    a4.style.height = getRandom(30, 110) + 'px';
    a5.style.height = getRandom(30, 110) + 'px';
    a6.style.height = getRandom(30, 110) + 'px';
}