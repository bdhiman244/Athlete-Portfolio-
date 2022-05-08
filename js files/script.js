
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();


tl.from(".hero-image", {duration: 1.5, opacity: 0, scale: 2, transformOrigin: 'right', ease: 'slow'});

tl.from(".hero-text", {duration: 1.2, y: -150, rotateY: 360, transformOrigin: 'left', opacity: "0", color: "#d63031", ease: "slow"}, "-=0.5");
tl.from(".home-nav", {duration: 1.5, opacity: 0, y: 150, stagger: 0.25}, "-=1");
tl.to(".domain-animation", {
    keyframes: {
        "25%": { textContent: 'CONQUER', x: 10, rotateX: 360 },
       
        "50%": { textContent: 'THRU', x: 20, rotateX: -360 },
       
        "75%": { textContent: 'ENDURANCE', x: 30, rotateX: 360 },
     
        "100%": { textContent: 'MTN RUNNER', x: 0 },
        easeEach: 'power4'
    },
    duration: 4,
    ease: "none"
});

// tl.to(".domain-animation", {
//     keyframes: [
//         {textContent: 'CONQUER', duration: 1, ease: 'sine.out'},
//         {rotateX: 360, duration: 0.5, delay: -0.5},
//         {textContent: 'THRU', duration: 2, ease: 'sine.out'},
//         {textContent: 'ENDURANCE', duration: 3, ease: 'sine.out'}
//     ],
//     ease: 'expo.inOut'
// });



var raceT = gsap.timeline();
const hidddenText = document.querySelectorAll('.hide-text');
const circleText = document.querySelector('.circle-text-container');
const spinButton = document.querySelector('.animate-link');

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



const path = document.querySelector('.svg-path');


gsap.to(".marquee-one", {
    x: '-50%',
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
        start: "top top",
        end: "+=400px",
        toggleActions: "restart pause resume pause"
    }
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



