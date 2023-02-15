 gsap.from(".hero-img-container", {
    duration: 2,
    x: -700,
    opacity: 0
});

gsap.from(".nav__item", {
    delay: 2,
    duration: 1.5,
    opacity: 0,
    x: -250,
    stagger: 0.5
}, "-=70%");