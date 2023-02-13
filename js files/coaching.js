gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
const navBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");
// const serviceBoxes = gsap.utils.toArray(".offering-each-list-item");

navBtn.addEventListener('click', () => {
navMenu.classList.toggle("nav--visibile");
});

tl.from(".title-text-coaching", {
    delay: 1,
    duration: 1,
    x: -300,
    opacity: 0
});

tl.from(".preface-hero", {
    duration: 1,
    x: 300,
    opacity: 0
});

gsap.to(".pitch", {
    scrollTrigger: {
        trigger: ".pitch-subtext",
        toggleActions: "restart none none none"
    },
    duration: 2,
    color: "#ecf0f1"
});

gsap.from(".offering-each-list-item", {
    delay: 1,
    scrollTrigger: {
        trigger: ".offering-list-heading",
     
        start: "50px 50%",
        end: "+=50%",
     
    },
    x: 300,
    opacity: 0,
    ease: "slow",
    stagger: 0.3
});

