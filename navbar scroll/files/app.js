const header = document.querySelector("nav");
const navLinks = document.querySelector("#navLinks");
const date = document.querySelector("#date");
const activeEl = document.querySelector(".arrow");
//targeting the arrow which takes us up to the home page//
window.addEventListener("scroll",() => {
    if(window.pageYOffset > 100) {
        activeEl.classList.add("active");
    } else {
        activeEl.classList.remove("active");
    }
})
//targeting the year//
date.innerHTML = new Date().getFullYear()
window.addEventListener("scroll",()=> {
    header.classList.toggle("nav",window.scrollY > 0);
});
//targeting the sidebar//
function showMenu() {
    navLinks.style.right = "0px";
}
function closeMenu() {
    navLinks.style.right = "-200px";
}