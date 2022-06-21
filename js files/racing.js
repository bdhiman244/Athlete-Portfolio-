gsap.registerPlugin(ScrollTrigger);

//preload

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
var screenWidth = window.innerWidth;
var raceT = gsap.timeline();
const hidddenText = document.querySelectorAll('.hide-text');
const circleText = document.querySelector('.circle-text-container');
const spinButton = document.querySelector('.animate-link');

if(screenWidth < 500 ){
    $("body").removeClass("preload");
    raceT.from(circleText, {
    opacity: 0,
    duration: 4,
    x: -1200,
    ease: 'bounce'
}); 
 raceT.to(hidddenText, {
    duration: 2,
    y: '-100%',
    ease: 'slow',
    stagger: {
        each: 0.7
    }
}, '-=70%');
    raceT.from('#chevron', {
        duration: 1,
        y: -200,
        opacity: 0,
        ease: 'power.inOut'
    }, '-=2');
    raceT.to('#chevron', {
        duration: 1,
        y: -50,
        repeat: -1,
        yoyo: true,
        opacity: 0.7
    });
} else {
   $(window).on("load", function(){
    setTimeout(function(){
    $(".pre-load-wrapper").fadeOut("slow");
    $("body").removeClass("preload");
    raceT.from(circleText, {
    opacity: 0,
    duration: 4,
    x: -1200,
    ease: 'bounce'
}); 
 raceT.to(hidddenText, {
    duration: 2,
    y: '-100%',
    ease: 'slow',
    stagger: {
        each: 0.7
    }
}, '-=70%');
    raceT.from('#chevron', {
        duration: 1,
        y: -200,
        opacity: 0,
        ease: 'power.inOut'
    }, '-=2');
    raceT.to('#chevron', {
        duration: 1,
        y: -50,
        repeat: -1,
        yoyo: true,
        opacity: 0.7
    });
}, timeDelay)
});
}

    gsap.from(spinButton, {
            delay: 4,
            opacity: 0,
            duration: 1,
            ease: 'slow'
        });

gsap.to(".biggora", {
   duration: 4,
    rotateX: 360,
    repeat: -1,
   
    ease: 'ease'
});



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

const ossauTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".gtvo-container",
        start: "-150px top",
        end: "bottom top",
        scrub: true
    }
});

const paraLayers = gsap.utils.toArray(".parallax");


paraLayers.forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth);
    ossauTL.to(layer, {
        y: movement,
        ease: 'none'
    }, 0)
});

const gabizosTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".gabizos-container",
        start: "-200px top",
        end: "+=600px",
        toggleActions: "restart pause resume pause"
    }
});

gabizosTL.from(".gabizos-img", {
    duration: 1,
    autoAlpha: 0,
    x: -200,
    ease: 'power2'
})
    .from(".gabizos-title", {
       duration: 0.5,
       autoAlpha: 0,
       x: -400,
       ease: "slow" 
    }, "-=50%")
    .from(".gabizos-text-box", {
        duration: 0.5,
        autoAlpha: 0,
        x: 400,
        ease: "power2"
    }, "-=100%")
    .from(".gabizos-logo", {
        duration: 1,
        autoAlpha: 0,
        rotateX: 720,
        ease: "slow"
    }, "-=50%");



const path = document.querySelector('.svg-path');


gsap.to(".marquee-one", {
    x: '-80%',
    scrollTrigger:{
        trigger: '.canfranc-container',
        start: '-450px top',
        end: '+=600px',
        ease: 'slow',
        scrub: true
       
    }
});


const ccTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".canfranc-profile-svg",
        start: "-150px top",
        end: "+=400px",
        toggleActions: "restart pause resume pause"
    }
});


ccTL.from(".canfranc-title-text", {
    duration: 0.5,
    autoAlpha: 0,
    rotateX: 720
});
ccTL.to('.svg-path',{
     duration: 10,
    strokeDashoffset: 0
});

ccTL.from('.nine-thousand', {
    textContent: 0,
    duration: 10,
    // ease: 'steps (12)',
    snap: { textContent: 100 }
}, "-=100%");
ccTL.from('.one-hundred', {
    textContent: 0,
    duration: 10,
    // ease: 'steps (12)',
    snap: { textContent: 1 }
}, "-=100%");

gsap.to(".marquee-two", {
    x: '-50%',
    scrollTrigger:{
        trigger: '.gr-container',
        start: '-450px top',
        end: '+=600px',
        ease: 'slow',
        scrub: true
    }
});

const grTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".gr-container",
        start: "-170px top",
        end: "+=400px",
        toggleActions: "restart pause resume pause"
    }
});

grTL.from(".gr-img", {
    autoAlpha: 0,
    x: -200,
    duration: 1,
    ease: "power2"
})
.from(".gr-textbox", {
    autoAlpha: 0,
    x: 200,
    duration: 0.5,
    ease: "power2"
},"-=100%")
.from(".gr-logo", {
    autoAlpha: 0,
    rotateX: 720,
    duration: 1
}, "-=50%");