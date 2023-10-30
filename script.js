
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: `-10`,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
       y: 0,
       ease: Expo.easeInOut,
       duration: 1.5,
       delay: -1,
       stagger: .2
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}


function circleSkew(){
    // define default scale value
    var xscale = 1;
    var yscale = 1;
    
    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove", function(dets){
        
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientx - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientxy- yprev);
        
        xprev = dets.clientx;
        yprev = dets.clienty;
        
        // circleMouseFollower(xscale, yscale);
        
    });
}

circleSkew();

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnim();


// This rest of the code for the animation of the Image displaying action


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;


    elem.addEventListener("mouseleave", function(details){
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            // ease: Power3,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function(details){
       var diffrot = details.clientY - elem.getBoundingClientRect().top;
        diff = details.clientX - rotate;
        rotate = details.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: parent,
            top: diff,
            left: details.clientX,
            rotate : gsap.utils.clamp(-25, 25, diff)
        });
    });
});


let time = document.getElementById("cur-time");
let time1 = document.getElementById("cur-date");


setInterval(() =>{
    let d = new Date();
    time1.innerHTML = d.toLocaleDateString();
    time.innerHTML = d.toLocaleTimeString();
},1000)














