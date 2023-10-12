document.querySelectorAll(".elems").forEach(function (elems) {
    elems.addEventListener("mousemove", function (details) {
        gsap.to(elems.querySelector("img"), {
            opacity: 1,
            ease: Power1,
        });
    });
});
