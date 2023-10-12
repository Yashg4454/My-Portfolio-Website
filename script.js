var timeout;

function updateLiveTime() {
    // Create a new Date object
    const now = new Date();

    // Get hours, minutes, and seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the time as HH:MM:SS
    const formattedTime = `${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;

    // Update the content of the liveTime element
    document.getElementById('liveTime').textContent = formattedTime;
  }

  function formatTimeComponent(component) {
    // Add leading zero if the component is less than 10
    return component < 10 ? '0' + component : component;
  }

  // Update the live time every second (1000 milliseconds)
  setInterval(updateLiveTime, 1000);

  // Initial update
  updateLiveTime();



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem", {
        y: 0,
        duration: 2,
        delay: -1,
        ease: Expo.easeInOut,
        stagger: .2
    })
    .from("#herofooter", {
        y: '-10',
        opacity: 0,
        delay: -1,
        duration: 1.5,
        ease: Expo.easeInOut
    })

}

function circleChaptaKaro(){

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev); 
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
        
        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = 
            `translate(${dets.clientX}px , ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}


function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = 
        `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

circleChaptaKaro();
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elems").forEach(function(elems){
    var rotate = 0;
    var diffrot = 0;

    document.querySelectorAll(".elems").forEach(function (elems) {
        var rotate = 0;
        var diffrot = 0;
      
        elems.addEventListener("mouseleave", function (dets) {
          gsap.to(elems.querySelector("img"), {
            opacity: 0,
            ease: Power2,
            duration: 0.5,
          });
        });
    
        

    // elems.addEventListener("mousemove", function (dets) {
    //     var diff = dets.clientY - elems.getBoundingClientRect().top;
    //     diffrot = dets.clientX - rotate;
    //     rotate = dets.clientX;
    //     gsap.to(elems.querySelector("img"), {
    //       opacity: 1,
    //       ease: Power2,
    //       top: diff,
    //       left: dets.clientX,
    //       rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    //     });
    //   });
    });
});