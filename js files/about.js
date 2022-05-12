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

var timeDelay = 2000;



$(window).on("load", function(){
    setTimeout(function(){
    $(".pre-load-wrapper").fadeOut("slow");
    gsap.to(".hide-text", {
    y: '-100%',
    duration: 1.5,
    ease: "slow"
});
}, timeDelay)
});


let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter('.skewElem', "skewY", 'deg'),
    clamp = gsap.utils.clamp(-40, 40);

ScrollTrigger.create({
    onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -600);

        if(Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
                skew: 0,
                duration: 0.8,
                ease: 'power3',
                overwrite: true,
                onUpdate: () => skewSetter(proxy.skew)
            });
        }
    }
});

gsap.set("skewElem", {
    transformOrigin: 'right center',
    force3D: true
});


// gsap.to(".hide-text", {
//     delay: 2.5,
//     y: '-100%',
//     duration: 1.5,
//     ease: "slow"
// });


//nav
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


const aboutTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".grid-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false

    }
});

const paraLayers = gsap.utils.toArray(".parallax");


paraLayers.forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth);
    aboutTL.to(layer, {
        y: movement,
        ease: 'none'
    }, 0)
});

const runBody = document.querySelector(".runs");
const hikeBody = document.querySelector(".hikes");
const carrotBtn = document.querySelector(".carrot");
const carrotBtnTwo = document.querySelector(".carrot-two");


carrotBtnTwo.addEventListener('click', growBoxOne);

    let clickCountOne = 0;
    function growBoxOne(event) {
        clickCountOne ++;

    if (clickCountOne % 2 != 0) {
        gsap.to(carrotBtnTwo, {
            rotate: 540
        });
        hikeBody.style.height = 800 + 'px';
    }
    else {
        hikeBody.style.height = 200 + 'px';
       gsap.to(carrotBtnTwo, {
            rotate: 360
        });
    }
    }
carrotBtn.addEventListener('click', growBox);

    let clickCount = 0;
    function growBox(event) {
        clickCount ++;

    if (clickCount % 2 != 0) {
        gsap.to(carrotBtn, {
            rotate: 540
        });
        runBody.style.height = 800 + 'px';
    }
    else {
        runBody.style.height = 200 + 'px';
       gsap.to(carrotBtn, {
            rotate: 360
        });
    }
    }
const footer = document.querySelector(".footer-container");
const viewWidth = window.innerWidth;

const newWidth = footer.style.width = viewWidth + 'px';

console.log(newWidth);

// const imgScrollTL = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".canfranc-profile-svg",
//         start: "top top",
//         end: "+=400px",
//         toggleActions: "restart pause resume pause"
//     }
// });


