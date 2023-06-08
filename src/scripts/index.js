import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger.js";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother.js";
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

// const tl = gsap.timeline();
// tl.from('.hedaer', {
//     xPercent: -100,
//   })
//   .from('.projects-section',{
//     xPercent: 100,
//   })
//   .from('.stack-section', {
//     xPercent: -100,
//   })

// gsap.utils.toArray('.section').forEach((section, i) => {
//   ScrollTrigger.create({
//     animation: tl,
//     trigger: section,
//     start: 'top top',
//     pin: true,
//     pinSpacing: false,
//   })
// })




// анимация заголовка рабочая--------
// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.header__titles',
//     start: 'center 80%',
//     end: 'bottom 20%',
//     toggleActions: "play reverse play reverse",
//     markers: true,
//     scrub: true,
//   },
// })
//---------

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
tl.from('.header__titles', {
    opacity: 1, duration: 1,
},1)
tl.to('.header__titles', {
  opacity: 0,
  duration: 1
})



let scrollPosition = 0;
// window.addEventListener('scroll', (evt) => {
//   scrollPosition = window.scrollY;
//   // console.log(scrollPosition);
//   document.body.style.cssText = `--scrollTop: ${scrollPosition}px`
// })

