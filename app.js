const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    menu.classList.toggle('open')
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    menu.classList.remove('open')
};