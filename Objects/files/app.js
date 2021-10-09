//'this' is used as a method() in Objects to refer to the parent function//

// const objects = {
//     name : "John",
//     lastName : 'Abraham',
//     age : 12,
//     fullName : function (){
//         return this.name + " " + this.lastName;
//     }
// }
// console.log(objects.fullName);
// const text = document.querySelector(".text").innerHTML = objects.fullName().toUpperCase();

// We can create a new Object in Javascript by using new Object()//

// const person = new Object();
// person.name = "John";
// person.lname = "Andrew";
// console.log(person);


//delete
// We delete a property from an Object by using the delete keyword//
// const person = {
//   name :"Selemon",
//   age : 50,
// }
// delete person.age;
// delete person["age"];
// console.log(person);

//Nested Objects//
// const item = {
//   name : "BMW",
//   type : "Luxury Car",
//   cars : {
//     car : "BMW 2020 i",
//     speed : "Lamborghini",
//     luxury : {
//       car_type : "Mercedes"
//     } 
//   },
// };
// const car = item.cars.luxury.car_type;
// const method_2 = item.cars.luxury["car_type"];
// const method_3 = item["cars"]["luxury"]["car_type"];
// console.log(method_3)


//'Object.values()' is used to convert an object to an array//

// const person = {
//   name : "Selemon",
//   age : 50,
//   lname : "Brahanu",
// }
// const name = Object.values(person);
// console.log(name) // ['Selemon ,50, 'Brahanu'];

//JSON.stringify() is a method used in Objects to return strings//

// const age = 50;
// const new_age = JSON.stringify(age);
// console.log(new_age);
// const person = {
//   name : "Selemon",
//   age : 50,
//   lname : "Brahanu",
//  }
// const new_person = JSON.stringify(person);
// console.log(new_person);


// Object Constructors they are used to construct the values inside  objects//
// function Person (first,last,age,eye){
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eye = eye;
// }
// const myFather = new Person("John","Matthew",50,"blue");
// myFather.name = function () {
//   return this.firstName + " " + this.lastName;
// }
// console.log(myFather.name())
