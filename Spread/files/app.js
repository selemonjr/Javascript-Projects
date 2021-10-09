//SPREAD OPERATOR

//We can use the spread operator to pass a certain variable as an argument to a function///

// function add(x,y,z) {
//    console.log(x+y+z)
// }
// let sum = [0,3,2];
// add(...sum)

//For copying arrays//
// let age = [10,20,30,40];
// let age2 = [...age];
// age2.push(90)
// console.log(age2)

const countEl = document.querySelector(".count");
let counting = 0;
function update() {
    counting++;
    countEl.textContent = counting;
}
setInterval(update,1000)
