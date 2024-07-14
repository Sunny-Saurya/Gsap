gsap.to(
    ".box",
    {
        duration: 1,
        x: 500,
        // y: 200,
        ease: "power1.inOut",
        duration: 5,
        stagger : 1, // manage individual delay at one
        repeat : -1

    }
)
gsap.to(
    "body",
    {
        backgroundColor : "#333"
    }
)