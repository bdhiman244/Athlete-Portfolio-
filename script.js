
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();


tl.from(".hero-image", {duration: 3, opacity: 0, scale: 2, transformOrigin: 'right', ease: 'slow'});

tl.from(".hero-text", {duration: 1.5, y: -150, rotateY: 360, transformOrigin: 'left', opacity: "0", color: "#d63031", ease: "slow"}, "-=0.5");
tl.from(".home-nav", {duration: 2, opacity: 0, y: 150, stagger: 0.25}, "-=1");
tl.to(".domain-animation", {
    keyframes: {
        "0%": { textContent: '' },
        "10%": { textContent: 'DOMAIN', x: 5 },
        "20%": { textContent: 'MOUNTAIN', x: 10 },
        "30%": { textContent: 'DISTANCE', x: 15 },
        "40%": { textContent: 'MID', x: 20 },
        "50%": { textContent: 'MARATHON', x: 25 },
        "60%": { textContent: 'ULTRA', x: 30 },
        "70%": { textContent: 'STEEP', x: 35 },
        "80%": { textContent: 'SALTY', x: 40 },
        "90%": { textContent: 'SAVAGE', x: 45 },
        "100%": { textContent: 'MTN RUNNER', x: 0 },
        easeEach: 'slow'
    },
    duration: 3,
    ease: "none"

});



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



