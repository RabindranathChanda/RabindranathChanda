document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
      event.preventDefault();
    }
});

// --------- Typing Animation on the Home Portion -----------
var typed = new Typed(".who-am-i", {
    strings: ["Web Development", "Software Development"],
    typeSpeed : 100,
    backSpeed : 100,
    loop: true
});

// ------------ Scroll To Top -------------

// Getting the button
let scrollToTopBtn = document.getElementById("srlup");
let chatBtn = document.getElementById("chat");

// Scroll Amount to Appear on
window.onscroll = function(){scrollFunc()};
function scrollFunc(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display="block";
    }else{
        scrollToTopBtn.style.display = "none";
    }
    if(document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
        chatBtn.style.display="block";        
    }else{
        chatBtn.style.display = "none";
    }

    
}

// Scroll To Top When Click

function topfunc(){
    document.body.scrollTop= 0;
    document.documentElement.scrollTop = 0;
}
// -----------------------------------------------------------


let resetInp = document.getElementById("myinput");
function resetInput(){
    resetInp.reset();
}
