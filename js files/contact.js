gsap.registerPlugin(ScrollTrigger);

const clusterPics = gsap.utils.toArray(".cluster-pic");


clusterPics.forEach(pic => {
    gsap.from(pic, {
        scale: 0.2,
        autoAlpha: 0,
        duration: 2,
        x: 500,
        stagger: 0.3,
        ease: "power2.in"
    })
});

const spinButton = document.querySelector(".animate-link");

spinButton.addEventListener('mouseenter', () => {
    gsap.to("#star-spin", {
        duration: 0.5,
        rotate: 360,
        ease: 'power2.inOut'
    })
})
spinButton.addEventListener('mouseleave', () => {
    gsap.set("#star-spin", {
        duration: 0.5,
        rotate: 0,
        ease: 'power2.inOut',
        
    })
});
