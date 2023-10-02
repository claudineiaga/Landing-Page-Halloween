/* MOSTRA O MENU */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* MENU SHOW */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ESCONDE O MENU */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* REMOVE O MENU EM TELAS MENORES */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Quando clicamos em cada nav__link, removemos a classe show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* HOME SWIPER */
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",

  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

/* MUDA DE A PÁGINA*/

let root = document.documentElement;

homeSwiper.on("transitionEnd", function (e) {
  if (this.activeIndex == 1) {
    root.style.setProperty(
      "--body-color",
      "linear-gradient(to right, #2E0916, #200A2B)"
    );
    root.style.setProperty("--sub", "#ff5b79");
    root.style.setProperty("--title-color", "#ffffff");
    root.style.setProperty(
      "--container-color",
      "linear-gradient(136deg, #2E0916, #200A2B)"
    );
  }
  if (this.activeIndex == 2) {
    root.style.setProperty(
      "--body-color",
      "linear-gradient(to right, #E8CAFB, #6A4FB6)"
    );
    root.style.setProperty("--sub", "#303056");
    root.style.setProperty("--title-color", "#303056");
    root.style.setProperty(
      "--container-color",
      "linear-gradient(136deg, #E8CAFB, #6A4FB6)"
    );
  }
  if (this.activeIndex == 3) {
    root.style.setProperty(
      "--body-color",
      "linear-gradient(to right, #5B874B, #0C3720)"
    );
    root.style.setProperty("--sub", "#ffffff");
    root.style.setProperty("--title-color", "#ffffff");
    root.style.setProperty(
      "--container-color",
      "linear-gradient(136deg, #5B874B, #0C3720)"
    );
  }
});
/* MUDA O FUNDO DO CABEÇALHO */
function scrollHeader() {
  const header = document.getElementById("header");
  // Quando a rolagem for maior que 50 de altura da janela de visualização, adicione a classe scroll-header à tag de cabeçalho
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* NOVO SWIPER */
let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 16
});

/* A MEDIDA QUE AS SESSÕES SÃO MOSTRADAS O MENU FICA MARCADO */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* MOSTRA SCROLL */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // Quando a rolagem for superior a 460 de altura da janela de visualização, adicione a classe show-scroll à tag a com a classe scroll-top
  if (this.scrollY >= 460) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* ANIMAÇÃO PARA MOSTRAR O SCROLL */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, {
  interval: 100
});
sr.reveal(`.about__data, .discount__img`, { origin: "left" });
sr.reveal(`.about__img, .discount__data`, { origin: "right" });