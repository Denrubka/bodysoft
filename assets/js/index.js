const heroSlider = new Swiper('.hero__slider', {
  slidesPerView: 1,
  effect: 'fade',
  speed: 1000,
  loop: true,
  parallax: true,
  autoplay: {
    delay: 6000,
  },
});