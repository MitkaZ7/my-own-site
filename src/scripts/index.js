import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollSmoother } from 'gsap/ScrollSmoother.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
let scrollPosition = 0;
window.addEventListener('scroll', (evt) => {
  scrollPosition = window.scrollY;
  // console.log(scrollPosition);
  document.body.style.cssText = `--scrollTop: ${scrollPosition}px`
})


const quoteElement = document.querySelector('.main_article__header');
// function getQuote() {
//     fetch('https://api.kanye.rest')
//     .then(res => res.json())
//     .then((data) => {
//       console.log(data)
//         quoteElement.textContent = data.quote;

//     });
// }

// const btn = document.querySelector('.button');
// btn.addEventListener('click', getQuote())
