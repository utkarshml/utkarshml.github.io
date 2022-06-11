const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");

function openToggle(){
    navMenu.style.bottom = "0"
    navToggle.style.display = "none"
    navClose.style.display = "block"
};
function closeNav(){
    navMenu.style.bottom = "-100%"
    navClose.style.display = 'none'
    navToggle.style.display = "block"
};
