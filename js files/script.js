gsap.registerPlugin(ScrollTrigger);

gsap.to(".runner", {
  duration: 4.8,
  rotateY: 360,
  repeat: -1,
  ease: "slow",

  
});

gsap.to(".runner-two", {
  duration: 4.78,
  ease: "slow",
  rotateY: 360,
  repeat: -1
});
gsap.to(".runner-three", {
  duration: 4.82,
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
    $("body").removeClass("preload");
}, timeDelay)
});


var tl = gsap.timeline();


tl.from(".hero-image", {delay: 2, duration: 1.5, opacity: 0, scale: 2, transformOrigin: 'right', ease: 'slow'});

tl.from(".hero-text", {duration: 1.2, y: -150, rotateY: 360, transformOrigin: 'left', opacity: "0", color: "#d63031", ease: "slow"}, "-=0.5");
tl.from(".home-nav", {duration: 1.5, opacity: 0, y: 150, stagger: 0.25}, "-=1");
tl.to(".domain-animation", {
    keyframes: {
        "25%": { textContent: 'RELENTLESS', x: 10, rotateX: 360 },
       
        "50%": { textContent: 'UPHILL', x: 20, rotateX: -360 },
       
        "75%": { textContent: 'PURSUIT', x: 30, rotateX: 360 },
     
        "100%": { textContent: 'MTN RUNNER', x: 0 },
        easeEach: 'power4'
    },
    duration: 4,
    ease: "none"
});

const height = window.innerHeight;
function heightAdjust () {
    const nav = document.querySelector(".hero-nav");
    const newHeight = height * .85;
    nav.style.top = newHeight + 'px';
}
heightAdjust();
//figure out screen resize function to make this update on change

