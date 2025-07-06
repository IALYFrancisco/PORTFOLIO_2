var menu = document.querySelector(".desktop-menu img")
var overlay = document.querySelector('.overlay')
menu.addEventListener('click', ()=>{
    overlay.classList.toggle('active')
})