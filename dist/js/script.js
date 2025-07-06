var menu = document.querySelector(".desktop-menu img")
var overlay = document.querySelector('.overlay')
var elements = document.querySelectorAll('.overlay ul li')
menu.addEventListener('click', ()=>{
    overlay.classList.add('active')
})

overlay.addEventListener('click', ()=>{
    overlay.classList.remove('active')
})

elements.forEach((el) => {
    el.addEventListener('click', ()=>{
        overlay.classList.remove('active')
    })
})