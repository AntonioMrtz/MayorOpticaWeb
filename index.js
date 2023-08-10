/* REVEAL ANIMATION */

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

const el = document.getElementById("home");
const sticky = document.getElementById("sticky-button-container");
const sticky_1 = document.getElementById("sticky-button");
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        sticky.classList.remove("scroll");
        sticky_1.classList.remove("scroll");
    } else {
        // el is not visible
        sticky.classList.add("scroll");
        sticky_1.classList.add("scroll");
    }
});

observer.observe(el); // Asynchronous call

/* CALCULATE HEIGHT HOME WHOLE SCREEN*/

/* const PHONE_MEDIA_QUERY = window.matchMedia("(max-width: 990px)");

const containerHome = document.getElementById("container-home");
const containerNavbar = document.getElementById("home");

function setHeightContainerHom() {
    if (!PHONE_MEDIA_QUERY.matches) {
        let windowHeight = window.innerHeight;
        let navbarHeight = window
            .getComputedStyle(containerNavbar)
            .getPropertyValue("height")
            .replace("px", "");
        containerHome.style.height = windowHeight - navbarHeight + "px";

    }
}

window.addEventListener("resize", () => {
    setHeightContainerHom();
});

window.addEventListener("load", () => {
    setHeightContainerHom();
}); */