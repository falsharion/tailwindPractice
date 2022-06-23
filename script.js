
// navSlide();
const toggles = document.getElementById("toggles");
let nav = document.getElementById("nav");

toggles.addEventListener("click", function () {
    nav.classList.toggle("-right-full")
    nav.classList.toggle("right-0")
})