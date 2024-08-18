// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for loops

// for (initilisation; condition; updation){

// }

// for (let i = 10; i <= 100; i = i + 10){
//     console.log(i);
// }

// Infinite Loop
// for (let y = 100; i <= 200; y = y - 10){
//     console.log(y);
// }


// break simply helps in exiting the inner most loop
// for (let i = 10; i <= 100; i = i + 10){
//     if (i == 50) {
//         break;
//         console.log(i);
//     }
//     console.log(i);
// }

// for (let i = 10; i <= 100; i = i + 10){
//     if (i == 50) {
//         console.log(i);
//         continue;
//     }
//     console.log(i);
// }

// let i = 10;

// while (i <= 100) {
//     console.log(i);
//     i = i + 10;
// }

// ---------------------- for-of looops

// 1. It is used for iterable object -> the objects in js which have iteraterable protocol implemented in them
// e.g.: arrays, string, set, map

const colors = ['blue', 'orange', 'green', 'black'];

// for (let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// console.log('Using for-of loops')

// for (let color of colors) {
//     console.log(color);
// }

const car = {
    name: 'BMW',
    price: 1000,
    isDiscBrake: true
}

for (let prop in car) {
    console.log(`${prop}---->${car[prop]}`);
}


console.log(`Sum of 1, 2 and 3 is ${1 + 2 + 3}`);

const str = `dqnhmsdjk
adjhkldsdg
asfgjhkjl; ds
HTMLDataListElementd`;

console.log(str)

const name = "ABC";
const age = 23;

console.log(`My name is : ${name}, age: ${age}`);

