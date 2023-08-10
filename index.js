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

$(window).on("resize", function () {
    var conwidth = $(".container").width() / 2 - 30;
    $(".sticky-button").css("left", "calc(50% + " + conwidth + "px)");
});
