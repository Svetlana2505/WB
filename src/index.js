// -------- header ----------

const openBtn = document.querySelector('.header-button');
const list = document.querySelector('.nav-menu');

openBtn.addEventListener('click', () => {
  list.classList.toggle('menu--active');
});

// ---------- swiper ----------
const swiper1 = new Swiper('.swiper1', {
  loop: true,
  speed: 1500,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
});

const swiper2 = new Swiper('.swiper2', {
  loop: true,

  speed: 1500,
  sccMode: false,

  effect: 'slide',
  spaceBetween: 20,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-arrow__right',
    prevEl: '.swiper-arrow__left',
  },

  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const swiper3 = new Swiper('.swiper3', {
  loop: true,
  speed: 1500,

  effect: 'slide',
  spaceBetween: 20,
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-arrow__right',
    prevEl: '.swiper-arrow__left',
  },

  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
