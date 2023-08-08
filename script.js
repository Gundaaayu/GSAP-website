var crsr=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
})





gsap.to('#nav',{
    backgroundColor:"black",
    height:"80px",    
    duration:0.5,
    delay:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
         start:"top-10%",

    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        marker:true,start:"top-30%", end:"top-70%",scrub:2
    }
})