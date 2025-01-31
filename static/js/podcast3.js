let a1 = document.querySelector(".l1");
let a2 = document.querySelector(".l2");
let a3 = document.querySelector(".l3");
let a4 = document.querySelector(".l4");
let a5 = document.querySelector(".l5");
let a6 = document.querySelector(".l6");

let pod3 = document.querySelector(".podcast3");
let start3 = document.querySelector(".play3");
let pause3 = document.querySelector(".pause3");

let sound3 = new Audio("audio1.mp3");
let timeStart3 = 1;
let timeEnd3 = 1;

let intv3;
let n;
function getRandom(min, max) {
    n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
}

function stile() {
    pod3.style.boxShadow = '0px 0px ' + getRandom(5, 45) + 'px white';
    a1.style.height = getRandom(30, 110) + 'px';
    a2.style.height = getRandom(30, 110) + 'px';
    a3.style.height = getRandom(30, 110) + 'px';
    a4.style.height = getRandom(30, 110) + 'px';
    a5.style.height = getRandom(30, 110) + 'px';
    a6.style.height = getRandom(30, 110) + 'px';
}

start3.addEventListener("click", function() {
    sound3.play();

    intv3 = setInterval(stile, 100);

    function time() {
        if (sound3.currentTime >= sound3.duration) {
            clearInterval(intv3);
            finish();
        }
    }

    setInterval(time, 1000);
})

pause3.addEventListener("click", function() {
    sound3.pause();
    clearInterval(intv3);
    finish();
})

function finish() {
    pod3.style.boxShadow = '0px 0px 20px white';
    a1.style.height = '30px';
    a2.style.height = '30px';
    a3.style.height = '30px';
    a4.style.height = '30px';
    a5.style.height = '30px';
    a6.style.height = '30px';
}