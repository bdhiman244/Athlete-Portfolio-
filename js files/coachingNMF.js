const navBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");
// const serviceBoxes = gsap.utils.toArray(".offering-each-list-item");

navBtn.addEventListener('click', () => {
navMenu.classList.toggle("nav--visibile");
});

var tl = gsap.timeline();

tl.from(".title", {
    duration: 1.5,
    x: -300,
    opacity: 0
});