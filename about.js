gsap.registerPlugin(ScrollTrigger);

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


gsap.to(".hide-text", {
    y: '-100%',
    duration: 1.5,
    ease: "slow"
});

const textBoxOne = document.querySelector(".grid-text-one");
var underscore = document.getElementById("primal-underscore");
var challenge = document.getElementById("challenges");

textBoxOne.addEventListener('mouseover', () => {
    underscore.classList.add("hover-score");
  
});
textBoxOne.addEventListener('mouseout', () => {
    underscore.classList.remove("hover-score")
    
});

