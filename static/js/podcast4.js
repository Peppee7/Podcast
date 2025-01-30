let pod4 = document.querySelector(".podcast4");

pod4.addEventListener("click", function() {
    setTimeout(finish, 10000);
    let intv = setInterval(stile, 100);

    function finish() {
        clearInterval(intv);
        a1.style.height = '30px';
        a2.style.height = '30px';
        a3.style.height = '30px';
        a4.style.height = '30px';
        a5.style.height = '30px';
        a6.style.height = '30px';
    }
})