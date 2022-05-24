gsap.registerPlugin(ScrollTrigger);
//preload

gsap.to(".runner", {
  duration: 4.8,
  rotateY: 360,
  repeat: -1,
  ease: "slow",

  
});

gsap.to(".runner-two", {
  duration: 4.7,
  ease: "slow",
  rotateY: 360,
  repeat: -1
});
gsap.to(".runner-three", {
  duration: 5,
  ease: "slow",
  rotateY: 360,
  repeat: -1
});

gsap.to(".whole-svg-two", {
  rotate: 360,
  duration: 2,
  repeat: -1,
 
});

var timeDelay = 1000;

$(window).on("load", function(){
    setTimeout(function(){
        
    $(".pre-load-wrapper").fadeOut("slow");
}, timeDelay)
});

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
