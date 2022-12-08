let intro = document.querySelector('.intro');


window.onload = init();

function init(){
    setTimeout(function(){
        intro.remove()
    }, 15000);
}


