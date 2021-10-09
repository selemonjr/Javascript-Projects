const video = document.querySelector("#video-container");
const btn = document.querySelector("#btn");
//targeting the play and pause buttons and adding functionalities to them//
btn.addEventListener("click",() => {
    if(!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause()
    } else {
        btn.classList.remove("slide")
        video.play()
    }
})