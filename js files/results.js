const navBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");


navBtn.addEventListener('click', () => {
navMenu.classList.toggle("nav--visibile");
});

var tl = gsap.timeline();

tl.from(".title-text", {
    duration: 1.5,
    x: -300,
    opacity: 0
});