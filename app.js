const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burger-menu-wrapper');

burgerBtn.onclick = function(e) {
  burgerMenu.classList.toggle('active')
  document.body.classList.toggle('scroll-lock');
} 

const accordButtons = document.querySelectorAll(".clicked");


accordButtons.forEach((el) => {
  el.addEventListener("click", function() {

    let content = this.nextElementSibling;

    accordButtons.forEach(el => {
      if (el.nextElementSibling !== content) {
        el.nextElementSibling.style.maxHeight = null
      };
    })

if (content.style.maxHeight) {
   content.style.maxHeight = null;
} else {
  content.style.maxHeight = content.scrollHeight + "px";
}
  });
});


document.addEventListener('click', (e) => {
  if (e.target.closest('div.slide')
  ?.querySelector('span.worker-info-open-close')) {

    let index = e.target.closest('div.slide')
    .querySelector('span.worker-info-open-close')?.dataset.index;

    document.querySelector(`.worker-${index}`).classList.toggle('open')
  };


  
})

if (window.innerWidth < 1025) {
  document.querySelector('.slider-wrapper').classList.add('swiper');
  document.querySelector('.slider-line ').classList.add('swiper-wrapper');
  document.querySelectorAll('.slide').forEach(el => {
    el.classList.add('swiper-slide')
  });
  firstSwiper = new Swiper(".swiper", {
    enabled: true,
    direction: "horizontal",
    // loop: true,
    speed: 500,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    }
  });
}

