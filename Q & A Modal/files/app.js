const modal = document.querySelector(".modal-container")
const openEl = document.querySelector("#open");
const closeEl = document.querySelector("#close");
openEl.addEventListener("click",()=> {
    modal.classList.add("show")
});
closeEl.addEventListener("click",()=> {
    modal.classList.remove("show")
})