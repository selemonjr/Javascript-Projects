const searching = "https://themealdb.com/api/json/v1/1/search.php?s=";
const search = document.querySelector(".search")
const form = document.querySelector(".input");
const main = document.querySelector(".main");
async function find(url) {
    const resp = await fetch(url);
    const data = await resp.json()
    console.log(data.meals)
    showMeal(data.meals)
}
find(searching)
window.addEventListener("DOMContentLoaded",() => {
    find(searching)
})
form.addEventListener("submit",(e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(search) {
        main.innerHTML = " ";
        find(searching + searchTerm)
        searchTerm.value = "";
    }
});


function showMeal(eating) {
    eating.forEach((eat) => {
        const {strMealThumb,strMeal,strCategory,strInstructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8} = eat;
        const element = document.createElement("div");
        element.innerHTML = `
        <div class="image">
        <img src="${strMealThumb}" alt="">
        <div class="texts">
        <h2 class="meal">Meal : ${strMeal}</h2>
        <h2 class="meal">Category: ${strCategory}</h2>
        <h2 class="meal">Ingredients : </h2>
        <h3 class="meal">${strIngredient1}</h3>
        <h3 class="meal">${strIngredient2}</h3>
        <h3 class="meal">${strIngredient3}</h3>
        <h3 class="meal">${strIngredient4}</h3>
        <h3 class="meal">${strIngredient5}</h3>
        <h3 class="meal">${strIngredient6}</h3>
        <h3 class="meal">${strIngredient7}</h3>
        <h3 class="meal">${strIngredient8}</h3>
        <h3 class="meal">Instructions : </h3>
        <h3 class="meal">${strInstructions}</h3>
        </div>
    </div>
        `;
        main.appendChild(element);
    })
}

