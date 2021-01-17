gsap.registerPlugin(ScrollTrigger);

gsap.to(".first", {
    scrollTrigger: {
        trigger: ".first",
        start: "20px 80%",
        end: "botto",
        scrub: true,
        //markers: true
    },
    x: 800,
    rotation: 360,
    ease: "none",
    duration: 3
});

/////////
// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {

    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    // you could also use addEventListener() instead
    window.onload = function () {

        // waits til next tick render to run code (prevents running in the middle of render tick)
        window.requestAnimationFrame(function () {

            //$(".loader-wrapper").fadeOut("slow");
           

            //gsap.to('.panel', 1.5, { scaleY: 1, delay: 0.5, height: '100vh', ease: Circ.easeOut });
            //gsap.to('#light', { duration: 5, opacity: 1, y: 0, delay: 0.5, ease: "elastic.out(1, 1)" });
            //gsap.to('p', { duration: 2, delay: 0.5, opacity: 1, y: 20, delay: 1.9 });
            //gsap.to('.box', { duration: 3, delay: 0.5, opacity: 1, scale: 1, ease: "elastic.out(1, 1)" })
            //gsap.from('.side-menu', { duration: 3.5,  x: '100vw', ease: "circ.out" })
            //gsap.from('.EngForTom', { duration: 1, x: '-100vw', stagger: 0.5 })

            //gsap.to('.whiteBox', 1.5, { opacity:1, scaleY: 1, delay: 0.5, height: '50vh', ease: Circ.easeOut });
        });
    };
});