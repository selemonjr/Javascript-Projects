const mainEl = document.querySelector(".main");
const navlinksEl = document.querySelector("#navLinks")
mainEl.addEventListener("click",() => {
    function rotate() {
        if(!mainEl.classList.contains("change")){
            mainEl.classList.add("change");
            navlinksEl.style.right = "0"
        } else {
            mainEl.classList.remove("change");
            navlinksEl.style.right = "-900px"
        }
    }
    rotate()
})