//gsap.registerPlugin(ScrollTrigger);

//gsap.to(".first", {
//    scrollTrigger: {
//        trigger: ".first",
//        start: "20px 80%",
//        end: "botto",
//        scrub: true,
//        //markers: true
//    },
//    x: 800,
//    rotation: 360,
//    ease: "none",
//    duration: 3
//});

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
            gsap.from('.side-menu', { duration: 3.5, delay: 4.5, x: '100vw', ease: "circ.out" })


            gsap.from('.waves', { duration: 10, opacity: 0, delay: 2, y: '100vh', ease: "circ.out" })

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
            if ($(window).width() > 1000) {

                tl = new TimelineMax();
                tl.from("#exclamation", 1, { delay: 1, opacity: 0, y: '5vh', ease: Circ.easeOut })
                    .to("#exclamation", 1, { fontSize: "1rem", ease: "expo.inOut" })
                    .to("#exclamation", 0.2, { color: "red" })
                    .to("#exclamation", 0.5, { opacity: 0, y: '-10vh' })
                    .call(removeElement("#exclamation"));

                t2 = new TimelineMax();
                t2.from('.hi', { duration: 1, delay: 1, opacity: 0, y: '5vh', ease: Circ.easeOut })
                    .to(".hi", 1, { fontSize: "1rem", ease: "expo.inOut" });

                gsap.from('.headerAnimComma', { duration: 3, delay: 3.5, opacity: 0, x: '-1vh', ease: "elastic.out(1, 1)" });

                gsap.from('.headerAnimGSAP', { duration: 1, delay: 3, opacity: 0, y: '5vh', stagger: 1, ease: Circ.easeOut });
            }

            if ($(window).width() <= 1000) {

                tl = new TimelineMax();
                tl.from("#exclamation", 1, { delay: 2, opacity: 0, fontSize: "1rem", y: '5vh', ease: Circ.easeOut })
                    .to("#exclamation", 0.2, { color: "red" })
                    .to("#exclamation", 0.5, { opacity: 0, y: '-10vh' })
                    .call(removeElement("#exclamation"));

                t2 = new TimelineMax();
                t2.from('.hi', { duration: 1, delay: 2, opacity: 0, fontSize: "1rem", y: '5vh', ease: Circ.easeOut });

                gsap.from('.headerAnimComma', { duration: 3, delay: 3.5, opacity: 0, x: '-1vh', ease: "elastic.out(1, 1)" });

                gsap.from('.headerAnimGSAP', { duration: 1, delay: 3, opacity: 0, y: '5vh', stagger: 1, ease: Circ.easeOut });
            }


            var t3 = new TimelineMax({paused:true});
            t3.from(".box", 0, {
                delay: 0,
                width: "60px",
                height: "60px",
                background: "rgba(0,255,255,0.5)",
                boxShadow: "0px 0px 40px rgba(0,255,255,0.5), 0 0 0 black, 0 0 0 #cccccc inset, 2px 2px 2px inset", ease: Circ.easeInOut
            })
            .to(".box", 1, {
                width: "60px",
                height: "60px",
                background: "rgba(0, 40, 40, 0.5)",
                boxShadow: "0px 0px 40px rgba(0,255,255,0.5), 0 0 0 black, 0 0 0 #cccccc inset, 2px 2px 2px inset", ease: Circ.easeInOut
            })
            .to(".box", 0.5, {
                width: "60px",
                height: "240px",
                background: "rgba(0, 40, 40, 0.5)",
                boxShadow: "0px 0px 40px rgba(0,255,255,0.5), 0 0 0 black, 0 0 0 #cccccc inset, 2px 2px 2px inset", ease: Circ.easeInOut
            })
            .to(".box", 1, {
                width: "480px",
                height: "240px",
                background: "rgba(0, 40, 40, 0.5)",
                boxShadow: "0px 0px 40px rgba(0,255,255,0.5), 0 0 0 black, 0 0 0 #cccccc inset, 2px 2px 2px inset", ease: Circ.easeOut
            })
            .to(".boxText", 1, {opacity: "1", ease: Circ.easeOut});


            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".descriptionBox", {
                scrollTrigger: {
                    trigger: ".descriptionBox",
                    start: "0px 80%",
                    markers: true,
                    onEnter: () => t3.paused(false)

                },
            });

            function activateFunction() {
                t3.time(window.pageYOffset + triggerOffset);
                requestId = null;
            }

            gsap.to('.loadingBackground', 0, { delay: 1, opacity: 0, autoAlpha: 0, onComplete: removeElement("#loadingBackground") });
            gsap.to('.SVG_BootstrapDontTouch', 2, { opacity: 0, autoAlpha: 0, onComplete: removeElement("#loadingEffectWrap") });
            //gsap.to('.whiteBox', { duration: 3, opacity: 1, scaleY: 1, delay: 3, padding: "1rem", ease: Circ.easeOut  });
        });
    };
});

// If screen size goes bigger, remove blur and close phone side menu
$(window).resize(function () {
    if ($(window).width() > 1000) {
        gsap.to('.content__wrapper', 1, { filter: "blur(0px)" });
        document.getElementById('phoneMenu').checked = false;


    }
});