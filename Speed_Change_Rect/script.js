

window.addEventListener("mousemove", function(coordinates){

    var rect = document.querySelector("#rect");
    console.log(coordinates.clientX);

    var xVal = gsap.utils.mapRange(
        0, 
        window.innerWidth,
        100+rect.getBoundingClientRect().width/2, 
        window.innerWidth - (100+rect.getBoundingClientRect().width/2), 
        coordinates.clientX
    );

    gsap.to(rect, {
        left: xVal + "px",
        ease: Power3,
    });
});