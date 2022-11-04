
const windowInnerWidth = window.innerWidth;

if (windowInnerWidth < 767) {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1.2,
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        }
    });
}

let buttonSlide = document.querySelector('.repair-brand__button-slide');
let slideMore = document.querySelector('.repair-brand__slider-desktop');
let buttonSlideTitle = document.querySelector('.repair-brand__button-title');
let slideSevenTablet = document.querySelector('.repair-brand__slide:nth-child(7)');
let slideEightTablet = document.querySelector('.repair-brand__slide:nth-child(8)');

slideMore.style.display = 'none';

if (windowInnerWidth < 1119){
    slideSevenTablet.style.display = 'none';
    slideEightTablet.style.display = 'none';
}

buttonSlide.addEventListener('click', (e) => {
    if (slideMore.style.display === 'flex'){
        slideMore.style.display = 'none';
        buttonSlideTitle.innerHTML = 'Показать все';
        buttonSlide.style.backgroundImage = 'url("img/down.svg")';
        if (windowInnerWidth < 1119){
            slideSevenTablet.style.display = 'none';
            slideEightTablet.style.display = 'none';
        }
    } else {
        slideMore.style.display = 'flex';
        buttonSlideTitle.innerHTML = 'Скрыть';
        buttonSlide.style.backgroundImage = 'url("img/up.svg")';
        if (windowInnerWidth < 1119){
            slideSevenTablet.style.display = 'flex';
            slideEightTablet.style.display = 'flex';
        }
    }
})