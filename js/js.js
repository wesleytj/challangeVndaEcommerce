const menuMobile = document.getElementById("menu-mobile")
const nav = document.getElementById("nav")
const menuBg = document.getElementById("menu-bg")

menuMobile.addEventListener("click", () => {
    menuMobile.classList.toggle("change")
    nav.classList.toggle("change")
    menuBg.classList.toggle("change-bg")
})

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
   
  });