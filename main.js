
//Loading 
const preloader = document.querySelector("[data-preaload]");
window.addEventListener("load", function () {

    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});
// Typing animation
const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Freelancer",],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});