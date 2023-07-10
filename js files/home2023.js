//  gsap.from(".hero-img-container", {
//     duration: 2,
//     x: -700,
//     opacity: 0
// });
 gsap.to(".hero-img-container", {
    duration: 3,
    opacity: '100%'
   
});

gsap.from(".nav__item", {
    delay: 2,
    duration: 1.5,
    opacity: 0,
    x: -250,
    stagger: 0.5
}, "-=92%");

gsap.from(".name-text", {
    delay: 2.5,
    duration: 1,
    opacity: 0
});
gsap.to(".name-text", {
    delay: 2.8,
    duration: 5,
      backgroundImage:"linear-gradient(220deg,rgba(236, 240, 241, 1) 0%, rgba(236, 240, 241, 1) 100%)",
      yoyo: "true",
      ease: "slow.out"
    
});

