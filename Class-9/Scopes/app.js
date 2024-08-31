// Global Scope

// var a = 100;

// function add(x, y) {
//     // res variable has functional scope
//     var res = x + y;

//     return res;
// }

// console.log(a);

let a = 100; // script scope exist in case of let and const declaration, if anything
            // is not inside any block then it is said to be in script scope

{
    let a = 200;
    console.log(a);
}

console.log(a);