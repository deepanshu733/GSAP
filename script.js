let btn = document.querySelector("button");
let h1 = document.querySelector("h1")
btn.addEventListener("click",() => {    
    gsap.to("#box", {
        x:1000,
        duration:2,
        delay:0.5,
        rotate:360,
        stagger:-0.5,
        borderRadius:"50%",
        backgroundColor:"blue",
        repeat:-1,
        yoyo:true
    })
}
)

btn.addEventListener("click",() => {    
    h1.innerHTML = "Sheryains coding school"
    gsap.to("h1", {
    y:-50,
    scale:0,
    delay:0.2,
    duration:1,
    repeat:-1,
    yoyo:true,
    color:"red",
    stagger:0.5
    })
}
)
