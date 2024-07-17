// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:1.5,
//     rotate:360
// })


// gsap.from("#page2 #box",{
//     scale:0,
//     delay:1,
//     duration:1.5,
//     rotate:360,
//     // scrollTrigger:"#page2 #box"

//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",

//     }
// })

// gsap.from("#page2 h1",{
//     opacity:0,
//     x:500,
//     duration:2,
//     delaty:1,
//     fontSize:"50px",

//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
        
//     }
    
// })

// gsap.from("#page2 p",{
//     opacity:0,
//     x:-500,
//     duration:2,
//     delaty:1,

//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
        
//     }
    
// })


// SCRUB PROPERTIES


// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     delay:1,
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:3 // totally dependent on scrolling


//     }
// })



// PIN PROPERTIES

gsap.from("#page2 #box",{
    scale:0,
    opacity:0,
    delay:1,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:3 // totally dependent on scrolling

    }
})