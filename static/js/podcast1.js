let a1 = document.querySelector(".l1");
let a2 = document.querySelector(".l2");
let a3 = document.querySelector(".l3");
let a4 = document.querySelector(".l4");
let a5 = document.querySelector(".l5");
let a6 = document.querySelector(".l6");

let pod1 = document.querySelector(".podcast1");
let start1 = document.querySelector(".play1");
let pause1 = document.querySelector(".pause1");

let sound1 = new Audio("audio1.mp3");
let timeStart1 = 1;
let timeEnd1 = 1;

let intv1;
let n;
function getRandom(min, max) {
    n = Math.floor(Math.random() * (max - min + 1) + min);
    return n;
}

function stile() {
    pod1.style.boxShadow = '0px 0px ' + getRandom(5, 45) + 'px white';
    a1.style.height = getRandom(30, 110) + 'px';
    a2.style.height = getRandom(30, 110) + 'px';
    a3.style.height = getRandom(30, 110) + 'px';
    a4.style.height = getRandom(30, 110) + 'px';
    a5.style.height = getRandom(30, 110) + 'px';
    a6.style.height = getRandom(30, 110) + 'px';
}

start1.addEventListener("click", function() {
    sound1.play();

    intv1 = setInterval(stile, 100);

    function time() {
        if (sound1.currentTime >= sound1.duration) {
            clearInterval(intv1);
            finish();
        }
    }

    setInterval(time, 1000);
})

pause1.addEventListener("click", function() {
    sound1.pause();
    clearInterval(intv1);
    finish();
})

function finish() {
    pod1.style.boxShadow = '0px 0px 20px white';
    a1.style.height = '30px';
    a2.style.height = '30px';
    a3.style.height = '30px';
    a4.style.height = '30px';
    a5.style.height = '30px';
    a6.style.height = '30px';
}

/*
function time() {
    timeStart = Math.floor(sound1.currentTime)/10;
    timeEnd = Math.floor(sound1.currentTime - sound1.duration)/10;
}
*/