// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    940: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
});
