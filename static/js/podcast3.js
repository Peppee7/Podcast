let a1 = document.querySelector(".l1");
let a2 = document.querySelector(".l2");
let a3 = document.querySelector(".l3");
let a4 = document.querySelector(".l4");
let a5 = document.querySelector(".l5");
let a6 = document.querySelector(".l6");

let pod3 = document.querySelector(".podcast3");

let n = 0;
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

pod3.addEventListener("click", function() {
    setTimeout(finish, 10000);
    let intv = setInterval(stile, 100);

    function finish() {
        clearInterval(intv);
        pod3.style.boxShadow = '0px 0px 20px white';
        a1.style.height = '30px';
        a2.style.height = '30px';
        a3.style.height = '30px';
        a4.style.height = '30px';
        a5.style.height = '30px';
        a6.style.height = '30px';
    }
})