let screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
let screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

const sectionA = document.getElementsByClassName("section-a")[0];
const sectionB = document.getElementsByClassName("section-b")[0];
const sectionC = document.getElementsByClassName("section-c")[0];
const sectionD = document.getElementsByClassName("section-d")[0];
const sectionE = document.getElementsByClassName("section-e")[0];
const backgroundImage1 = document.getElementById("bg-img");

sectionA.style.height = screenHeight + "px";
sectionB.style.height = screenHeight + "px";
sectionC.style.height = screenHeight + "px";
sectionD.style.height = screenHeight / 1.5 + "px";
sectionE.style.height = screenHeight / 2.5 + "px";

backgroundImage1.style.width = screenWidth - 17 + "px";
backgroundImage1.style.height = screenHeight + "px";

// Swiper 1
var swiper_1 = new Swiper(".swiper-1", {
  slidesPerView: 2,
  spaceBetween: 10,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  },
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
});

// Swiper 2
var swiper_2 = new Swiper(".swiper-2", {
  slidesPerView: 1,
  spaceBetween: 100,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
});