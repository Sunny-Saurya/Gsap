gsap.to(
    ".box",
    {
        x: 100,
        y: 100,
        duration: 1,
        repeat: -1, // for infinite

    },
    
)
gsap.from(
    ".box",
    {
        y: 100,
        x: 100,
        duration: 1,
        repeat: -1, // for infinite
        
    },
)
gsap.to(
    "body",{
        backgroundColor :"#333"
    }
)