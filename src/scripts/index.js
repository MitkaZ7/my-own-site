import { launhAnimations } from "./animations.js";


launhAnimations();

// const sectionHeaders = gsap.utils.toArray('.section__header');
// const setions = gsap.utils.toArray('.section');
// const container = document.querySelector('.main');
// const graphicContainer = document.getElementById('graphic')
// const title = document.querySelector('header__title-accent');




// sectionHeaders.forEach(item => {
//   tl.fromTo(item,{
//     x: -500,
//     opacity: 0,
//   }, {
//     x: 0,
//     opacity: 1,
//     scrollTrigger: {
//       trigger: item,
//       scrub: true,

//     }
//   })
// });




//
// ScrollTrigger.create({
//   trigger: '.menu',
//   start: 1,
//   end: 99999,
//   // markers: true,
//   onUpdate: ({ progress, direction, isActive }) => {
//     if (direction == -1) {
//       actionNav.reverse()
//     }
//     if (direction == 1) {
//       actionNav.play()
//     }
//     else if (direction == 1 && isActive == true) {
//       actionNav.play()
//     }
//   }
// });

// if (ScrollTrigger.isTouch !== 1) {

//   // анимация заголовка рабочая--------
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       markers: true,
//       trigger: '.header__titles',
//       start: 'center 80%',
//       end: 'center ',
//       toggleActions: "play reverse play reverse",

//       scrub: true,
//     },
//   })
//   //==========
//   tl.from('.header__titles', {
//     opacity: 1, duration: 1,
//   }, 1)
//   tl.to('.header__titles', {
//     opacity: 0,
//     duration: 1
//   })
//   //===========

//   // ---------
//   // tl.fromTo('.header',{opacity: 1}, {
//   //   opacity: 0,

//   //   ScrollTrigger: {
//   //     markers: true,
//   //     trigger: '.header',
//   //     endTrigger: '.projects-section',
//   //     start: 'center',
//   //     end: '10',
//   //     scrub: true,
//   //   },


//   // });



//   galeryItemsLeft.forEach(item => {
//     tl.fromTo(item, {
//       opacity: 0,
//       x: -50,

//     },
//       {
//         opacity: 1,
//         x: 0,
//         scrollTrigger: {
//           trigger: item,
//           scrub: true,
//         }
//       })
//   });

//   galeryItemRight.forEach(item => {
//     tl.fromTo(item, {
//       opacity: 0,
//       x: 50,
//     },
//     {
//       opacity: 1,
//       x: 0,
//       scrollTrigger: {
//         trigger: item,
//         scrub: true,
//       }
//     })
//   });
  // tl.fromTo('.projects-section__header',{
  //   opacity: 0
  // },{
  //   opacity: 1,
  //   // scrollTrigger: {
  //   //   pin: true,
  //   //   trigger: ".projects-section__header",
  //   //   scrub: true,
  //   //   endTrigger: '.stack-section__header',
  //   // }
  // })
//   tl.fromTo('.projects-section',{},{
//     scrollTrigger: {
//       // markers: true,
//       // pin: true,
//       trigger: ".projects-section",
//       endTrigger: '.stack-section',
//       start: "top top", // when the top of the trigger hits the top of the viewport
//       // end: "bottom 50%",
//       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//       // snap: {
//       //   snapTo: "labels", // snap to the closest label in the timeline
//       //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//       //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//       //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
//       // },
//     },
//   })

// }




// // let mainTl = gsap.timeline({
// //   // yes, we can add it to an entire timeline!
//   // scrollTrigger: {
//   //   // markers: true,
//   //   pin: true,
//   //   trigger: ".projects-section",
//   //   // endTrigger: '.stack-section',
//   //   start: "top top", // when the top of the trigger hits the top of the viewport
//   //   // end: "bottom 50%",
//   //   scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//   //   // snap: {
//   //   //   snapTo: "labels", // snap to the closest label in the timeline
//   //   //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//   //   //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//   //   //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
//   //   // },
//   // },
// // });


// const actionNav = gsap.to('.menu', {
//   x: 500,
//   duration: 0.7,
//   ease: 'power2.in',
//   paused: true,
// });








// let scrollPosition = 0;



// export const technologyScroll = (arrayElements) => {
//   for (let i = 0; i < arrayElements.length; i++) {
//     let delay = i + 1;
//     const elemTL = gsap.timeline();
//     if (i !== 0) {
//       elemTL.from(arrayElements[i], 1, { y: '-100%', opacity: 0, ease: 'power2.out' })
//     }
//     if (i !== arrayElements.length) {
//       elemTL.to(arrayElements[i], 2, { y: '100%', opacity: 0, ease: 'power2.out' })
//     }
//     tl.add(elemTL, delay)

//   }
// };
