const burgerBtn = document.getElementById("burgerBtn");
const burgerMenu = document.getElementById("burger-menu-wrapper");

burgerBtn.onclick = function (e) {
  burgerMenu.classList.toggle("active");
  document.body.classList.toggle("scroll-lock");
};

const accordButtons = document.querySelectorAll(".clicked");

accordButtons.forEach((el) => {
  el.addEventListener("click", function () {
    let content = this.nextElementSibling;
   
    accordButtons.forEach((el) => {
      if (el.nextElementSibling !== content) {
        el.nextElementSibling.style.maxHeight = null;
        el.classList.remove('active')
      }
      this.classList.add('active');
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      el.classList.remove('active')
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

document.addEventListener("click", (e) => {
  if (
    e.target.closest("div.slide")?.querySelector("span.worker-info-open-close")
  ) {
    let index = e.target
      .closest("div.slide")
      .querySelector("span.worker-info-open-close")?.dataset.index;

    document.querySelector(`.worker-${index}`).classList.toggle("open");
  }
});
function initializeSliderOnResize() {
  if (window.innerWidth < 1025) {
    document.querySelector(".workers-slider-wrapper").classList.add("swiper");
    document.querySelector(".workers-slider").classList.add("swiper-wrapper");
    document.querySelectorAll(".workers-slide").forEach((el) => {
      el.classList.add("swiper-slide");
    });
    const firstSwiper = new Swiper(".workers-slider-wrapper", {
      enabled: true,
      direction: "horizontal",
      // loop: true,
      speed: 500,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        enabled: true,
        el: ".workers-swiper-pagination",
      },
    });
  } else {
    document.querySelector(".workers-slider-wrapper").classList.remove("swiper");
    document.querySelector(".workers-slider").classList.remove("swiper-wrapper");
    document.querySelectorAll(".workers-slide").forEach((el) => {
      el.classList.remove("swiper-slide");
    });
    
  }
}
initializeSliderOnResize();
window.addEventListener("resize", initializeSliderOnResize);


 const testimonialsSwiper = new Swiper(".testimonials-swiper", {
  enabled: true,
  direction: "horizontal",
  // loop: true,
  speed: 500,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
navigation: {
prevEl: '.swiper-button-prev',
nextEl: '.swiper-button-next',
},

breakpoints: {
  360: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 2,
  },
}
}); 

const articklesSwiper = new Swiper(".artickles-slider", {
  enabled: true,
  direction: "horizontal",
  // loop: true,
  speed: 500,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
pagination: {
  clickable: true,
el: '.slider-pagination',
},
autoplay: {
  delay: 3000,
},
breakpoints: {
  360: {
   
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 3, 
    spaseBetween: 20,
  },
  1300: {
    slidesPerView: 3,
    spaseBetween: 30,
  },
}
}); 


const photosLineSwiper = new Swiper(".photos-line-slider", {
  enabled: true,
  direction: "horizontal",
   loop: true,
  speed: 500,
  centeredSlides: false,
  spaceBetween: 30,
  simulateTouch: false,
autoplay: {
  delay: 2000,
},
breakpoints: {
  360: {
   
    slidesPerView: 2,
  },
  640: {
slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4, 
    spaseBetween: 30,
  },
  1200: {
slidesPerView: 5,
  },
  1600: {
    loop: false,
    slidesPerView: 6,
    spaseBetween: 100,
  },
}
}); 