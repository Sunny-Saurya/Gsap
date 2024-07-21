var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full",{
    duration: 0.5,
    right:0,

})

tl.from("#full h4",{
    x:100,
    duration: 0.5,
    stagger:0.3,
    opacity:0,
})

tl.from("#full i",{
    opacity:0,
})

tl.pause();


menu.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})