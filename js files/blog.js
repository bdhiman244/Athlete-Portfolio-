const navBtn = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav");

navBtn.addEventListener('click', () => {
navMenu.classList.toggle("nav--visibile");
});