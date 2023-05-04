const form = document.querySelector('form'),
      userRatingDisplayer = document.querySelector('.main__rating-displayer'),
      ratingContainer = document.querySelector('.main__ratings-container'),
      feedbackDisplayer = document.querySelector('.main__thankyou-state');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    userRatingDisplayer.textContent = e.target.rating.value;
    ratingContainer.classList.add('main__ratings-container--disabled');
    feedbackDisplayer.classList.remove('main__thankyou-state--disabled');
})

document.getElementsByName('rating').forEach(el => {
    el.onchange = function () {
        document.querySelector('button').removeAttribute('disabled');
    }
})