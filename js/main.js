let back = document.querySelector(".back")

back.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 50){
        back.style.display = "block"
    }else{
        back.style.display = "none"
    }
})