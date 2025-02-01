let a1 = document.querySelector(".l1");
let a2 = document.querySelector(".l2");
let a3 = document.querySelector(".l3");
let a4 = document.querySelector(".l4");
let a5 = document.querySelector(".l5");
let a6 = document.querySelector(".l6");

let pod4 = document.querySelector(".podcast4");
let start4 = document.querySelector(".play4");
let pause4 = document.querySelector(".pause4");
let t4 = document.querySelector(".time4");
t4.innerHTML = "0.00";

let sound4 = new Audio("audio1.mp3");
let timeStart4 = Math.round((sound4.currentTime + Number.EPSILON)) / 100;
let timeEnd4 = Math.round(((sound4.currentTime - sound4.duration) + Number.EPSILON)) / 100;

let intv4;
let n;
function getRandom(min, max) {
    n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
}

function stile() {
    timeStart4 = Math.round((sound4.currentTime + Number.EPSILON)) / 100;
    t4.innerHTML = timeStart4;
    pod4.style.boxShadow = '0px 0px ' + getRandom(5, 45) + 'px white';
    a1.style.height = getRandom(30, 110) + 'px';
    a2.style.height = getRandom(30, 110) + 'px';
    a3.style.height = getRandom(30, 110) + 'px';
    a4.style.height = getRandom(30, 110) + 'px';
    a5.style.height = getRandom(30, 110) + 'px';
    a6.style.height = getRandom(30, 110) + 'px';
}

start4.addEventListener("click", function() {
    sound4.play();

    intv4 = setInterval(stile, 100);

    function time() {
        if (sound4.currentTime >= sound4.duration) {
            clearInterval(intv4);
            finish();
        }
    }

    setInterval(time, 1000);
})

pause4.addEventListener("click", function() {
    sound4.pause();
    clearInterval(intv4);
    finish();
})

function finish() {
    pod4.style.boxShadow = '0px 0px 20px white';
    a1.style.height = '30px';
    a2.style.height = '30px';
    a3.style.height = '30px';
    a4.style.height = '30px';
    a5.style.height = '30px';
    a6.style.height = '30px';
}