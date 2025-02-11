// -------- header ----------

const openBtn = document.querySelector('.header-button');
const list = document.querySelector('.nav-menu');

openBtn.addEventListener('click', () => {
  list.classList.toggle('menu--active');
});

// ---------- swiper ----------
const swiper1 = new Swiper('.swiper1', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiper2 = new Swiper('.swiper2', {
  // loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper3 = new Swiper('.swiper3', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
