const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burger-menu-wrapper');

burgerBtn.onclick = function(e) {
  burgerMenu.classList.toggle('active')
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
