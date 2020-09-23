const nav_links = document.getElementsByClassName('nav_links')[0]
const hamburger = document.getElementsByClassName('hamburger')[0]
const gold_video = document.querySelector('.logo h3')

hamburger.addEventListener("click",function(){
    nav_links.classList.toggle('active')
})

gold_video.addEventListener('mouseenter',() =>{
    gold_video.innerHTML = 'GoldVideo'
    setTimeout(50)
}) 

gold_video.addEventListener('mouseleave',() =>{
    gold_video.innerHTML = 'GV'
}) 