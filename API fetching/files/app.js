const imageElCat = document.querySelector(".image-cat");
const imageElDog = document.querySelector(".image-dog");
const catEl = document.querySelector(".cat-btn");
const dogEl = document.querySelector(".dog-btn");

catEl.addEventListener("click",getCatImage)
dogEl.addEventListener("click",getDogImage)

function getCatImage() {
    fetch("https://aws.random.cat/meow")
    .then(response => response.json())
    .then(data => imageElCat.innerHTML = ` <img src="${data.file}" alt="">`)

}
getCatImage()
function getDogImage() {
    fetch("https://random.dog/woof.json")
    .then(response => response.json())
    .then(data => imageElDog.innerHTML = ` <img src="${data.url}" alt="">`)
}
getDogImage()


