// let shop_is_open = true;
// const stocks = {
//     fruits : ["mango","strawberry","apple"],
//     liquids : ["Water","Ice"],
//     holder : ["cone","cup"],
//     toppings : ["chocolate","candy"]
// }

// function time(ms) {
//     return new Promise((resolve,reject) => {
//         if(shop_is_open) {
//             setTimeout(resolve,ms)
//         } else {
//             reject(console.log("Shop is closed"))
//         }
//     })
// };
// time();

// async function kitchen() {
//     try {
//         await time(1000)
//         console.log(`The flavour selected is ${stocks.fruits[0]}`)

//         await time(0000)
//         console.log("Start the production")

//         await time(2000)
//         console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} have been added`)

//         await time(1000)
//         console.log(`Place the IceCream on the ${stocks.holder[0]}`)

//         await time(2000)
//         console.log(`The topping should be ${stocks.toppings[0]}`)

//         await time(1000)
//         console.log("Serve the IceCream")
//     }
//     catch(error) {
//         console.log("Customer Left")
//     }
//     finally {
//         console.log("Day Ended! Shop is closed")
//     }
// }
// kitchen()
