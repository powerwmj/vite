import Swiper from 'swiper/bundle'

// Swiper를 초기화합니다.
const mySwiper = new Swiper('.visual-container', {
  // 옵션 설정
  lidesPerView: 1,
  navigation: {
      nextEl: ".visual__arrow .visual__arrow__next",
      prevEl: ".visual__arrow .visual__arrow__prev",
  },
    pagination: {
    el: ".visual__bullet",
    clickable: true,
  },
});


let roomSwiper = new Swiper(".room", {
    slidesPerView: 1,
    pagination: {
    el: ".room__bullet",
    clickable: true,
  },
});

mySwiper();
roomSwiper();