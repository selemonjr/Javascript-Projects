// // synchronous
// console.log(" I ")

// console.log(" Eat ")

// console.log(" ice cream")

// console.log(" with a")

// console.log(" spoon ")

//Asynchronous ~ Allow you to run a function after a specific amount of time//

// console.log(" I ")

// console.log(" Eat ")

// setTimeout(() => {
//     console.log(" ice cream");
// },4000)

// console.log(" with a")

// console.log(" spoon ")



//Callback ~ is a function that is passed as an argument to a method //

// let order = (fruit_name,call_production) => {
//     setTimeout(() =>{
//         console.log(`${stocks.Fruits[fruit_name]} was selected`);
//         call_production();
//     },2000)
// };

// Callback Hell

// let production = () => {
//   setTimeout(() => {
//       console.log("Production has started");
//       setTimeout(() => {
//           console.log("The fruit has been chopped!");
//           setTimeout(() => {
//               console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//               setTimeout(() => {
//                   console.log("Start the machine");
//                   setTimeout(() => {
//                       console.log(`IceCream was placed on the ${stocks.holder[0]}`);
//                       setTimeout(() => {
//                           console.log(`The topping to be added is ${stocks.toppings[0]}`);
//                           setTimeout(() => {
//                               console.log("Your IceCream is ready!!")
//                           },2000)
//                       },3000)
//                   },2000)
//               },1000)
//           },1000);
//       },2000);
//   },0000);
// };
// order(0,production)


// Promises are made to follow instruction in order to make our code neat//
//Promise > Pending > Resolve or Reject > .then or .catch > finally

// let stocks = {
//     Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
//     liquid : ["Water","Ice"],
//     holder : ["cone","cup","stick"],
//     toppings : ["chocolate","peanuts"]
// };
// let shop_is_open = true;
// let order = (time,work) => {
//     return new Promise((resolve,reject) => {
//         if(shop_is_open) {
//             setTimeout(() => {
//                 resolve(work())
//             },time);
//         }else {
//             reject(console.log("Shop is closed"));
//         };
//     });
// };

// order(2000,() => console.log(`${stocks.Fruits[0]} was selected`))

// .then(() => {
//     return order(0000,() => console.log("Production has started"))
// })

// .then(() => {
//     return order(2000, () => console.log("The fruits were chopped"))
// })

// .then (() => {
//     return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`))
// })

// .then (() => {
//     return order(1000,() => console.log("The machine has been started"))
// })

// .then (() => {
//     return order(2000, () => {
//         console.log(`IceCream has been placed on the ${stocks.holder[0]}`)
//     })
// })
// .then (() => {
//     return order(3000,() => console.log(`The topping selected is ${stocks.toppings[0]}`))
// })
// .then (() => {
//     return order(2000,() => console.log("Serve the IceCream"))
// })

// .catch (() => {    //Used only when you want to catch errors//
//     console.log("Customer left")
// })

// .finally(() => {        //it's neutral whether the shop is closed or opened it will print it out at the end //
//     console.log("Day ended, Shop is closed")
// })


// Async / Await => It is a better way to write Promises.....Async makes a function return a promise while Await makes a function wait for a Promise//

let stocks = {
    Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["Water","Ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"]
};
let shop_is_open = false;
function time(ms) {
    return new Promise((resolve,reject) => {
        if(shop_is_open) {
            setTimeout(resolve,ms)
        } else {
            reject(console.log("Shop is closed"))
        }
    });;
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`);
        console.log("Start the production");

        await time(2000)
        console.log("Chop the fruits")

        await time(1000)
        console.log(` Add ${stocks.liquid[0]} and ${stocks.liquid[1]} into the ingredients`)

        await time(1000)
        console.log("Start the machine")

        await time(2000)
        console.log(`The IceCream will be placed on the ${stocks.holder[0]}`)

        await time(3000)
        console.log(`The toppings should be ${stocks.toppings[0]}`)

        await time(2000)
        console.log("Serve the IceCream")
    }
    catch (error){
        console.log("Customer left")
    }
    finally{
        console.log("Day ended,Shop is closed!")
    }
}
kitchen()