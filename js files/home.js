var tl = gsap.timeline();

tl.from(".hero-img-container", {
    duration: 2,
    width: 0,
    opacity: 0
});

tl.from(".typography-container", {
    duration: 1,
    x: -200,
    opacity: 0
});

tl.from(".nav__item", {
    duration: 1.5,
    opacity: 0,
    x: -250,
    stagger: 0.5
}, "-=70%");

tl.from(".instagram-icon", {
    duration: 1,
    opacity: 0, 
    color: "#d63031"
});

tl.to(".header__subhead", {
     keyframes: {
        "25%": { textContent: 'RELENTLESS', x: 10, rotateX: 360 },
       
        "50%": { textContent: 'UPHILL', x: 20, rotateX: -360 },
       
        "75%": { textContent: 'PURSUIT', x: 30, rotateX: 360 },
     
        "100%": { textContent: 'MTN RUNNER', x: 0 },
        easeEach: 'power4'
    },
    duration: 4,
    ease: "none"
}, "-=20%");

