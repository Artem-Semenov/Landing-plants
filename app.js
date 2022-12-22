document.querySelectorAll('.clicked').forEach(el => {
  el.addEventListener('click', (e) => {

  document.querySelectorAll('.accordeon').forEach(el => {
  
    // el.style.height = null;
  })

e.target.nextElementSibling.style.height = e.target.nextElementSibling.style.scrollHeight + 'px'
}
  )
}
)