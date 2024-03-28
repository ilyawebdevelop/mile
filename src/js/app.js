import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import AOS from "./../../node_modules/aos/dist/aos.js";
import "./modules/inputmask.min.js";
// import "./modules/select2.min.js";
import "./modules/bootstrap.bundle.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

// $(document).ready(function() {
  // $('.formSelectCityHeader').select2();
  // $('.formSelectCityLg').select2();
  // $('.formSelectCitySm').select2();
// });

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера salarySlider
const salarySlider = document.querySelector('.salarySlider');
var mySwiperSalary = new Swiper(salarySlider, {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 24,
  navigation: {
    nextEl: salarySlider?.closest('.salary').querySelector('.navArrowNext'),
    prevEl: salarySlider?.closest('.salary').querySelector('.navArrowPrev'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
    },
    1400: {
      spaceBetween: 24,
      slidesPerView: 4,
    },
  },
});

// Инициализация слайдера teamSlider
const teamSlider = document.querySelector('.teamSlider');
var mySwiperTeam = new Swiper(teamSlider, {
  slidesPerView: 3,
  speed: 800,
  spaceBetween: 40,
  navigation: {
    nextEl: document.querySelector('.teamSect .navArrowNext'),
    prevEl: document.querySelector('.teamSect .navArrowPrev'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// Инициализация слайдера rentSlider
const rentSlider = document.querySelector('.rentSlider');
var mySwiperRent = new Swiper(rentSlider, {
  slidesPerView: 2,
  speed: 800,
  spaceBetween: 40,
  navigation: {
    nextEl: document.querySelector('.rentSect .navArrowNext'),
    prevEl: document.querySelector('.rentSect .navArrowPrev'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    992: {
      spaceBetween: 40,
    },
  },
});

// Инициализация слайдера expSlider
const expSlider = document.querySelector('.expSlider');
var mySwiperExp = new Swiper(expSlider, {
  slidesPerView: 3,
  speed: 800,
  spaceBetween: 40,
  navigation: {
    nextEl: document.querySelector('.expSect .navArrowNext'),
    prevEl: document.querySelector('.expSect .navArrowPrev'),
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 9,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// fixed header
$(window).scroll(function () {
  if ($(this).scrollTop() > 35) {
    $('.header').addClass('fixed-on');
  }
  else if ($(this).scrollTop() < 35) {
    $('.header').removeClass('fixed-on');
  }
});

// modal init thanks
var thanksModal = document.getElementById('modal-thanks');
let modalThanks = new bootstrap.Modal(thanksModal)
// modalThanks.show();

// modal init city
var cityModal = document.getElementById('modal-city');
let modalCity = new bootstrap.Modal(cityModal)
// modalCity.show();

// modal init change city
var cityChangeModal = document.getElementById('modal-change');
let modalCityChange = new bootstrap.Modal(cityChangeModal)
modalCityChange.show();

let introVideoButtonClose = document.querySelector('.introVideoButtonClose');
let introVideoButton = document.querySelector('.introVideoButton');
introVideoButtonClose.addEventListener('click', () => {
  introVideoButton.classList.add('hidden');
});

// burger menu
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.btnClose');
const overlayMenu = document.querySelector('.overlayMenu');
let headerEl = document.querySelector('header');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const toggleOverlay = function () {
  overlayMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleOverlay();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
  toggleOverlay();
});

document.addEventListener('click', function (e) {
  const target = e.target;
  const its_headerBurger = target == btnMenu || btnMenu.contains(target);
  const its_headerNav = target == menu || menu.contains(target);
  const its_headerEl = target == headerEl || headerEl.contains(target);

  if (!its_headerNav && !its_headerBurger && !its_headerEl) {
    bodyEl.classList.remove('hidden');
    btnMenu.classList.remove('active');
    menu.classList.remove('active');
    overlayMenu.classList.remove('active');
  }
});