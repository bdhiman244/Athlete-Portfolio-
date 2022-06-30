const navBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");
const circleSVG = document.querySelector(".header-svg");


navBtn.addEventListener('click', () => {
navMenu.classList.toggle("nav--visibile");
});

gsap.to(circleSVG, {
    duration: 20,
    rotate: 360,
    repeat: -1,
    ease: "none"
});

gsap.to(".bigorre-tiger", {
    delay: 1.5,
    duration: 4,
    rotateX: -360,
    repeat: -1,
    ease: "slow"
});

var tl = gsap.timeline();

tl.from(".svg-bundle", {
    duration: 1,
    x: -300,
    ease: "bounce"
});
tl.from(".typography-container", {
    duration: 1,
    x: 300,
    ease: "bounce"
}, "-=100%");



