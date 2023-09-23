
const throttleFunction=(func, delay)=>{
    let prev = 0;
    return (...args) => {
    let now = new Date().getTime();
    console.log(now-prev, delay);
    if(now - prev> delay){
        prev = now;
        return func(...args); 
    }
    }
}

document.querySelector("#rect").addEventListener("mousemove", 
    throttleFunction((coordinates)=>{
        var rect = document.querySelector("#rect");

        var div = document.createElement("div");
        div.classList.add("imagediv");
        div.style.left = coordinates.clientX + 'px';
        div.style.top = coordinates.clientY + 'px';

        var img = document.createElement("img");
        img.setAttribute("src", "https://images.unsplash.com/photo-1695376426264-f5d00eff1761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80");
        div.appendChild(img);

        document.body.appendChild(div);

        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: .8,
        });

        gsap.to(img, {
            y: "100%",
            delay: 0.5,
            ease: Power2,
        });


    }, 400
));



