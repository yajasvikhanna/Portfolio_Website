const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var Timeout;
function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y:'-10',
        opacity: 0,
        duration: 2,
        ease:Expo.easeInOut
    })
    .to(".boundingelem", {
        y:0,
        duration:2,
        ease: Expo.easeInOut,
        // staggger:.2,
        delay: -1
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    
    })


}

function flatcircle()
{   // define default scale value
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(Timeout);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

       xprev= dets.clientX;
       yprev= dets.clientY;


      circleMouseFollower(xscale, yscale);
      Timeout= setTimeout(function() {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
      }, 100);

    });
}

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

flatcircle(); 
circleMouseFollower();
firstPageAnim();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });


  function updateClock() {
    const currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const date = document.getElementById("date");
     date.innerText=currentDate;

}

// Update the clock initially
updateClock();

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);


