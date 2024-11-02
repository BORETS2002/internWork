  const navbarToggle = document.getElementById("navbarToggle");
  const menuIcon = document.getElementById("menuIcon");
  const arrowIcon = document.getElementById("arrowIcon");

console.log(navbarToggle)

  navbarToggle.addEventListener("click", function () {
    // aria-expanded qiymatini tekshirish
    const isExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

    // Rasmlarni almashtirish
    if (isExpanded) {
      menuIcon.style.display = "none";
      arrowIcon.style.display = "inline";
    } else {
      menuIcon.style.display = "inline";
      arrowIcon.style.display = "none";
    }
  });



  // Akkordeonni boshqarish
document.querySelectorAll('.faq__accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    // Bosilgan akkordeon itemni ochish yoki yopish
    header.classList.toggle('faq__accordion-header--active');
    
    // Akkordeon body qismini ochish yoki yopish
    const body = header.nextElementSibling;
    body.classList.toggle('faq__accordion-body--show');
    
    // Boshqa ochilgan itemlarni yopish
    document.querySelectorAll('.faq__accordion-body').forEach(otherBody => {
      if (otherBody !== body) {
        otherBody.classList.remove('faq__accordion-body--show');
        otherBody.previousElementSibling.classList.remove('faq__accordion-header--active');
      }
    });
  });
});



 
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");
 
const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);
 
const cardCount = carousel.querySelectorAll("[data-target='card']").length;
 
let offset = 0;
const maxX = -((cardCount / 3) * carouselWidth + 
               (cardMarginRight * (cardCount / 3)) - 
               carouselWidth - cardMarginRight);

 
leftButton.addEventListener("click", function() {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
    }
})
  
rightButton.addEventListener("click", function() {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
})