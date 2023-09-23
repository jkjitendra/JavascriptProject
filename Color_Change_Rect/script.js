
var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(coordinates){

    var rectLoc = rect.getBoundingClientRect();
    var insideRectValue = coordinates.clientX - rectLoc.left;
    var midOfRect = rectLoc.width/2;
    if(insideRectValue == midOfRect){
        // var redColor = gsap.utils.mapRange(0, midOfRect, 255, 0, insideRectValue);
        gsap.to(rect, {
            backgroundColor: `rgba(255, 255, 255)`,
            ease: Power4,
        });
        console.log("center");
    }
    else if(insideRectValue < midOfRect){
        var redColor = gsap.utils.mapRange(0, midOfRect, 255, 0, insideRectValue);
        gsap.to(rect, {
            backgroundColor: `rgba(${redColor}, 0, 0)`,
            ease: Power4,
        });
        console.log("left");
    } else {
        var blueColor = gsap.utils.mapRange(midOfRect, rectLoc.width, 0, 255, insideRectValue);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,
        });
        console.log("right");
    }
});

rect.addEventListener("mouseleave", function(){
    console.log("left off");
    gsap.to(rect, {
        backgroundColor: "white",
    })
});