function breakTheText() {
    var h1 = document.querySelector("h1")

    var h1Text = h1.textContent

    var splittedText = h1Text.split("")
    var halfValue = splittedText.length / 2

    var clutter = " "

    // splittedText.forEach(function(elem){
    //     clutter += `<span>${elem}</span>`
    // })

    splittedText.forEach(function (elem, idx) {
        if (idx < halfValue) {
            clutter += `<span class="left">${elem}</span>`

        }
        else
        {
            clutter += `<span class="right">${elem}</span>`

        }

        h1.innerHTML = clutter
    })
}

breakTheText()

// gsap.from("h1 span", {
//         y: 70,
//         stagger: 0.1,
//         duration: 0.5,
//         ease: "power2.out"
//     })

gsap.from("h1 .left",{
    y:80,
    duration:0.6,
    delay:0.5,

    stagger:0.15,
    opacity:0,
})
gsap.from("h1 .right",{
    y:80,
    duration:0.6,
    delay:0.5,

    stagger:-0.15,
    opacity:0,
})