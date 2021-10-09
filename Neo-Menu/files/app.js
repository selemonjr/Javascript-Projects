const contain = document.querySelector("#change");
const menuEl = document.querySelector(".menu")
contain.addEventListener("click",() => {
    function rotate() {
        contain.classList.toggle("change")
    };
    rotate()
    if(!menuEl.classList.contains("show")) {
        menuEl.classList.add("show")
    } else {
        menuEl.classList.remove("show")
    }
})
