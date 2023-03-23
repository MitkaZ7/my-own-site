let scrollPosition = 0;




window.addEventListener('scroll', (evt) => {
  scrollPosition = window.scrollY;
  console.log(scrollPosition);
  document.body.style.cssText = `--scrollTop: ${scrollPosition}px`
})


const quoteElement = document.querySelector('.quote');
function getQuote() {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then((data) => {

        quoteElement.textContent = data.quote;

    });
}

const btn = document.querySelector('.main-article__button');
btn.addEventListener('click', getQuote)
