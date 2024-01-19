import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);


const actionNav = gsap.to('.menu', {
  x: 500,
  duration: 0.7,
  ease: 'power2.in',
  paused: true,

});

ScrollTrigger.create({
  trigger: '.menu',
  start: 1,
  end: 99999,
  // markers: true,
  onUpdate: ({progress,direction,isActive}) => {
    if (direction == -1) {
      actionNav.reverse()
    }
    if (direction == 1 ) {
      actionNav.play()
    }
    else if (direction == 1 && isActive == true) {
      actionNav.play()
    }
  }
});




// анимация заголовка рабочая--------
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.header__titles',
    start: 'center 80%',
    end: 'bottom 20%',
    toggleActions: "play reverse play reverse",

    scrub: true,
  },
})
//==========
tl.from('.header__titles', {
    opacity: 1, duration: 1,
},1)
tl.to('.header__titles', {
  opacity: 0,
  duration: 1
})
//===========

// ---------

// let animation = anime({
//   targets: '.header__titles',
//   translateY: 300,
//   opacity: 0,
//   easing: 'easeInOutSine',
//   autoplay: false
// });

// window.onscroll = (e) => {
//   animation.seek(window.pageYOffset);
//   console.log(window.pageXOffset)
// }


// ScrollSmoother.create({
//   wrapper: '.wrapper',
//   content: '.main',
//   smooth: 1.4,
//   effects: true,
// })
// tl.to('.header__titles', {
//   x: 1100,
//   rotation: 90,
//   duration: 4,
//   ease: 'none'
// })


let scrollPosition = 0;
// window.addEventListener('scroll', (evt) => {
//   scrollPosition = window.scrollY;
//   // console.log(scrollPosition);
//   document.body.style.cssText = `--scrollTop: ${scrollPosition}px`
// })



const pinProjectsSection = gsap.to('.projects-section', {
  duration: 0.5,
  y: 0,
  pin: true,
  ease: 'none',
  paused: true
});

ScrollTrigger.create({
  trigger: '.projects-section',
  start: 'top top',
  end: () => '+=' + document.querySelector('.projects-section').offsetHeight,
  markers: true,
  onEnter: () => {
    pinProjectsSection.play();
  },
  onLeave: () => {
    pinProjectsSection.reverse();
  }
});
