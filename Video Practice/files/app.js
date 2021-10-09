const video = document.querySelector(".video-container");
const btn = document.querySelector(".button");
const loader = document.querySelector(".loader")
btn.addEventListener("click",() => {
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide")
        video.pause();
    } else {
        btn.classList.remove("slide")
        video.play()
    }
});
window.addEventListener("load", () => {
    loader.classList.add("hide")
})