import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger.js";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother.js";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.4,
  effects: true,
})




let scrollPosition = 0;
// window.addEventListener('scroll', (evt) => {
//   scrollPosition = window.scrollY;
//   // console.log(scrollPosition);
//   document.body.style.cssText = `--scrollTop: ${scrollPosition}px`
// })


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
