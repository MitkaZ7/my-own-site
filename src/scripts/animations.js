import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger);
// ScrollSmoother
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  // console.log(e)
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
})
gsap.ticker.lagSmoothing(0);

// Main timeline
const tl = gsap.timeline({ repeat: -1 });

// all sections
const sections = gsap.utils.toArray('.section');


//Graphic animation constants:
  // "rockHand"
const rockHandElements = document.querySelectorAll(
  "#index_finger_rock, #rihgt_part_rock, #thumb_rock"
);
  // "shakaHand"
const shakaHandElements = document.querySelectorAll(
  "#middle_finger_shaka, #thumb_shaka, #index_finger_shaka"
);
// Animation logic:
    // Graphic animation function:
const graphicTween = () => {
  tl.add(() => { }, "+=1"); // At start of animation do nothing for 1 second
  tl.to(rockHandElements, { // Animate .to()
    stroke: "#000000", // Animate to black

    opacity: 0.2, // set opacity
    ease: "steps(1)" // animate, but it is instand in 1 step
  });
  tl.from(shakaHandElements, { // animate .from()
    stroke: "#000000", // Set color to black an animate to current color
    opacity: 0.2,
    ease: "steps(1)",

  }, "<"); // Animate at the same time as previous tween
  tl.add(() => { }, "+=1");  // At end of animation do nothing for 1 second

}
    // Header animation:
// const headerAnimation = () => {
//   tl.fromTo('.header', {
//     opacity: 1,

//   }, {
//     opacity: 0,

//     scrollTrigger: {
//       // markers: true,
//       trigger: '.header',
//       start: 'center 30%',
//       end: 'bottom',
//       toggleActions: "play reverse play reverse",
//       scrub: true,
//     },
//   })

// }
// Galery section animation:
const galeryTween = () => {
  // galeryItemsLeft.forEach(item => {
  //   tl.fromTo(item, {
  //     opacity: 0.4,
  //     // x: -50,

  //   },
  //     {
  //       opacity: 1,
  //       // x: 0,
  //       scrollTrigger: {
  //         end: 'bottom 50%',
  //         trigger: item,
  //         scrub: true,
  //       }
  //     })
  // });

  // galeryItemRight.forEach(item => {
  //   tl.fromTo(item, {
  //     opacity: 0,
  //     x: 50,
  //   },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       scrollTrigger: {
  //         trigger: item,
  //         scrub: true,
  //       }
  //     })
  // });
}
// launch animations:
export const launhAnimations = () => {
  graphicTween();
  // headerAnimation();
  galeryTween();
  projectBtnTween();
}


// tl.to('.header',{
//   yPercent: 100,
//   opacity: 0,
//   ease: 'none',
//   duration:2 ,
//   scrollTrigger: {
//     trigger: '.projects-section',
//     start: 'top bottom',
//     end:  'top center',
//     scrub: true,

//   }
// })

// sections.forEach(section => {
//   tl.to(section,{
//     yPercent: 100,
//     opacity: 0,
//     ease: 'none',
//     duration: 1 ,
//     scrollTrigger: {
//       trigger: section,
//       start: 'top top',
//       // end: () => `+=${sectionHeight}`,
//       scrub: true,

//     }
//   })
// });
const actionNav = gsap.to('.navbar', {
  x: 500,
  duration: 0.7,
  ease: 'power2.in',
  paused: true,
});
ScrollTrigger.create({
  trigger: '.navbar',
  start: 1,
  end: 99999,
  // markers: true,
  onUpdate: ({ progress, direction, isActive }) => {
    if (direction == -1) {
      actionNav.reverse()
    }
    if (direction == 1) {
      actionNav.play()
    }
    else if (direction == 1 && isActive == true) {
      actionNav.play()
    }
  }
});
// tl.to('.projects-section',{
//   scrollTrigger: {
//     pin: true,
//     trigger: ".projects-section",
//     scrub: true,
//     start: 'top top',
//     // end: 'botom bottom',
//     // markers: true,
//     markers: { startColor: "green", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20 }
//   }
// })

// gsap.to('.menu',{
//   opacity: 1,
//   duration: 1,
//   display: 'flex'
// });


const menuBtn = document.querySelector('.navbar__button');
const closeMenuBtn = document.querySelector('.menu__exit-wrapper');
menuBtn.addEventListener('mouseenter', ()=> {
  gsap.to(menuBtn,{
    scale: 1.2,
  })
});
menuBtn.addEventListener('mouseleave', () => {
  gsap.to(menuBtn, {
    scale: 1,
  })
})

menuBtn.addEventListener('click', ()=> {
  gsap.to('.menu', {
    opacity: 1,
    duration: 0.5,
    display: 'flex',
    right: 0,
    position: 'fixed',
  });
});
closeMenuBtn.addEventListener('click', () => {
  gsap.to('.menu', {
    opacity: 0,
    duration: 0.5,
    display: 'none',
    // delay: 0,
    right: '-100%',
  });
});

const projectBtnTween = () => {
  const projectButtonsDecor = gsap.utils.toArray('.project-card__button-decor');
  const projectButtons = gsap.utils.toArray('.project-card__link');
  projectButtons.forEach((button, index) => {

    const buttonDecor = projectButtonsDecor[index];

    let hoverTL = gsap.timeline({ paused: true });
    hoverTL.to(buttonDecor, {
      width: 'calc(100% + 1.3em)',
      ease: 'Elastic.easeOut(0.25)',
      duration: 0.3,

    }),

    hoverTL.to(buttonDecor, {
      width: '1.3em',
      left: 'calc(100% - 1.5em)',
      ease: 'Elastic.easeOut(0.4)',

      duration: 0.3
    });
    hoverTL.to(buttonDecor,{
      // delay: 0.2,
      border: 'none',
      'background-color': '#0FD944',
      boxShadow: '0.1em 0 0.2em #0FD944, -0.1em 0 0.2em #0FD944',
    });

    button.addEventListener('mouseenter', () => {
      hoverTL.play();
    })

    button.addEventListener('mouseleave', () => {
      hoverTL.reverse();
    })
  });

}





const menu = document.querySelector('.menu');
onscroll = (event) => {
  gsap.to(menu, {
    display: 'none',
    opacity: 0,
    duration: 0.5,
    top: '-100%'
  })

};
