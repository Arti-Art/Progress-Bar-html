gsap.registerPlugin(ScrollTrigger);
let progbar = document.querySelector(".progbarA");

ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {
    
    let toc = gsap.timeline({
      scrollTrigger: {
        trigger: '.table-of-contents',
        start: 'top 10%', // start when top of our trigger element reaches %fromTop of viewport
        // markers: true,
        endTrigger: '.grid-right',
        end: "bottom 50%",
        pin: true
      }
    });
    
    let progressA = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-a',
        start: 'top 50%',
        markers: true,
        endTrigger: '.section-a',
        end: "bottom 30%",
        onEnter: () => {console.log("onEnter triggered")},
        onLeave: () => {console.log("onLeave triggered")},
        onEnterBack: () => {console.log("onEnterBack triggered")},
        onLeaveBack: () => {console.log("onLeaveBack triggered")},
        // onUpdate: (self) => { console.log("onUpdate", self.progress.toFixed(3))},
        onUpdate: (self) => {
          progbar.value = self.progress.toFixed(3) * 100;
        },
        toggleClass: "toc-selected",
        scrub: 0.5
      }
    });
    progressA.from('.progress-a', { xPercent: -100 });
    
    let progressB = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-b',
        start: 'top 50%',
        markers: true,
        endTrigger: '.section-b',
        end: "bottom 30%",
        scrub: 0.5
      }
    });
    
    progressB.from('.progress-b', { xPercent: -100 });
    
    let progressC = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-c',
        start: 'top 50%',
        markers: true,
        endTrigger: '.section-c',
        end: "bottom 30%",
        scrub: 0.5
      }
    });
    
    progressC.from('.progress-c', { xPercent: -100 });
    
    let progressD = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-d',
        start: 'top 50%',
        markers: true,
        endTrigger: '.section-d',
        end: "bottom 30%",
        scrub: 0.5
      }
    });
    
    progressD.from('.progress-d', { xPercent: -100 });

  }
})
