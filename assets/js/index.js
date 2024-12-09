'use strict';

const heroSlider = new Swiper('.hero__slider', {
  slidesPerView: 1,
  effect: 'fade',
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 6000,
  },
});

const aboutSlider = new Swiper('.about__slider', {
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: '.about__slider .swiper-button-next',
    prevEl: '.about__slider .swiper-button-prev',
  },
  effect: 'flip',
  autoplay: {
    delay: 4000,
  },
});

const teamSlider = new Swiper('.team__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '.team__wrapper .swiper-button-next',
    prevEl: '.team__wrapper .swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
  },
});

const reviewsTextSlider = new Swiper('.reviews__slider_text', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '.reviews-text-button-next',
    prevEl: '.reviews-text-button-prev',
  },
  autoplay: {
    delay: 4000,
  },
});

const reviewsVideoSlider = new Swiper('.reviews__slider_video', {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: false,
  autoplay: {
    delay: 3500,
    reverseDirection: true,
  },
  navigation: {
    nextEl: '.reviews-video-button-next',
    prevEl: '.reviews-video-button-prev',
  },
});

const benefitsAnim = () => {
  const items = document.querySelectorAll('.benefits__item');
  
  if(window.innerWidth >= 768) {
    let i = 1;

    setInterval(() => {
      if(i <= items.length - 1) {
        items.forEach(item => {
          item.classList.remove('hover');
        });

        items[i].classList.add('hover');
        i++;
      } else {
        i = 0;
      };

    }, 2000);
  } else {
    items.forEach(item => {
      item.classList.remove('hover');
    });
  }
}

benefitsAnim();

const accordion = () => {
  const items = document.querySelectorAll(".accordion__item-btn");

  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }

  items.forEach(item => item.addEventListener('click', toggleAccordion));
}

accordion();