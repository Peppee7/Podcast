let a1 = document.querySelector(".l1");
let a2 = document.querySelector(".l2");
let a3 = document.querySelector(".l3");
let a4 = document.querySelector(".l4");
let a5 = document.querySelector(".l5");
let a6 = document.querySelector(".l6");

let pod2 = document.querySelector(".podcast2");
let start2 = document.querySelector(".play2");
let pause2 = document.querySelector(".pause2");

let sound2 = new Audio("audio1.mp3");
let timeStart2 = 1;
let timeEnd2 = 1;

let intv2;
let n;
function getRandom(min, max) {
    n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
}

function stile() {
    pod2.style.boxShadow = '0px 0px ' + getRandom(5, 45) + 'px white';
    a1.style.height = getRandom(30, 110) + 'px';
    a2.style.height = getRandom(30, 110) + 'px';
    a3.style.height = getRandom(30, 110) + 'px';
    a4.style.height = getRandom(30, 110) + 'px';
    a5.style.height = getRandom(30, 110) + 'px';
    a6.style.height = getRandom(30, 110) + 'px';
}

start2.addEventListener("click", function() {
    sound2.play();

    intv2 = setInterval(stile, 100);

    function time() {
        if (sound2.currentTime >= sound2.duration) {
            clearInterval(intv2);
            finish();
        }
    }

    setInterval(time, 1000);
})

pause2.addEventListener("click", function() {
    sound2.pause();
    clearInterval(intv2);
    finish();
})

function finish() {
    pod2.style.boxShadow = '0px 0px 20px white';
    a1.style.height = '30px';
    a2.style.height = '30px';
    a3.style.height = '30px';
    a4.style.height = '30px';
    a5.style.height = '30px';
    a6.style.height = '30px';
}