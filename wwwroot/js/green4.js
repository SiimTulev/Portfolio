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
            //gsap.from('.EngForTom', { duration: 1, x: '-100vw', stagger: 0.5 })
            gsap.from('.side-menu', { duration: 3.5, delay: 3, x: '100vw', ease: "circ.out" })
            gsap.from('.headerAnimComma', { duration: 3, delay: 4, opacity: 0, x: '-1vh', ease: "elastic.out(1, 1)" });

            //gsap.fromTo(".headerAnimExclamation", {delay: 3, opacity: 1, y: '10vh' }, { duration: 2, delay: 3, opacity: 0, y: '-10vh' });

            //reusable function
            function removeElement(element) {
                if (typeof (element) === "string") {
                    element = document.querySelector(element);
                }
                return function () {
                    element.parentNode.removeChild(element);
                };
            }

            tl = new TimelineMax();

            tl.from("#exclamation", 3, { delay: 1, opacity: 0, y: '10vh', ease: "elastic.out(1, 1)" })
                .to("#exclamation", 0.2, { color: "red", })
                .to("#exclamation", 0.5, {  opacity: 0, y: '-10vh' })
                .call(removeElement("#exclamation"))


            gsap.from('.headerAnim', { duration: 3, delay: 1, opacity: 0, y: '10vh', stagger: 1, ease: "elastic.out(1, 1)" });
            //gsap.to('.whiteBox', { duration: 3, opacity: 1, scaleY: 1, delay: 3, padding: "1rem", ease: Circ.easeOut  });
        });
    };
});