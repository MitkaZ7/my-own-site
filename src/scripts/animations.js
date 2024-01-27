import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);
// Main timeline
// filter: 'drop-shadow(0 0 0.15em hsl(0, 100%, 52%)) drop-shadow(0 0 0.3em hsl(0, 100%, 50%)) drop-shadow(0 0 0.45em hsl(0, 70%, 40%)) drop-shadow(0 0 0.6em hsl(0, 70%, 40%)) drop-shadow(0 0 0.75em hsl(0, 70%, 30%)) drop-shadow(0 0 0.9em hsl(0, 70%, 30%))',

const tl = gsap.timeline({ repeat: -1 });
// Gallery animation constants:
const galeryItemsLeft = gsap.utils.toArray('.galery__left .galery__item');
const galeryItemRight = gsap.utils.toArray('.galery__right .galery__item');
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
const graphicAnimation = () => {
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
const headerAnimation = () => {
  tl.fromTo('.header', {
    opacity: 1,

  }, {
    opacity: 0,

    scrollTrigger: {
      // markers: true,
      trigger: '.header',
      start: 'center 30%',
      end: 'bottom',
      toggleActions: "play reverse play reverse",
      scrub: true,
    },
  })

}
// Galery section animation:
const galeryAnimation = () => {
  galeryItemsLeft.forEach(item => {
    tl.fromTo(item, {
      opacity: 0.4,
      x: -50,

    },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          end: 'bottom 50%',
          trigger: item,
          scrub: true,
        }
      })
  });

  galeryItemRight.forEach(item => {
    tl.fromTo(item, {
      opacity: 0,
      x: 50,
    },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          scrub: true,
        }
      })
  });
}
// launc animations:
export const launhAnimations = () => {
  graphicAnimation();
  headerAnimation();
  galeryAnimation();
}
