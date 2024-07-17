// this is asynchoronous method

// gsap.to("#box1",{
//     x:1000,
//     rotate: 360,
//     duration: 1.5,
//     delay:1
// })
// gsap.to("#box2",{
//     x:1000,
//     rotate: 360,
//     backgroundColor: "yellow",
//     duration: 2,
//     delay:2.5
// })
// gsap.to("#box2",{
//     x:1000,
//     rotate: 360,
//     backgroundColor: "yellow",
//     duration: 2,
//     delay:4.5
// })


// this is synchronous
// timeline

var tl = gsap.timeline()

tl.to("#box1",{
        x:1000,
        rotate: 360,
        duration: 1.5,
        delay:1
    })
tl.to("#box2",{
        x:1000,
        // rotate: 360,
        backgroundColor: "yellow",
        duration: 1.5,
    })
tl.to("#box3",{
        x:1000,
        // rotate: 360,
        backgroundColor: "yellow",
        duration: 1.5,
    })

 