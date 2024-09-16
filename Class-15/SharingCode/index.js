// const math = require('./math');
const {sqrt, PI} = require('./math');


console.log(sqrt(49));
console.log(PI);
// console.log(math.PI);
// console.log(math.sqrt(81));
// console.log(math.cube(2));

































// -----------------------------Spread Operator-----------------

const arr1 = [1, 2, 3, 4, 5, 6];

const arr2 = [10, 20, 30, 40];

const res = [...arr1, 99, 88, 77, ...arr2, 66, 55];

// console.log(res);

const obj1 = {
    k: 10,
    m: true,
    l: "Something"
}

const obj2 = {
    ...obj1,
    a: 20,
    b: false,
    c: "Hello word"
}

// console.log(obj2);


const nums = [10, 30, 40, 1, 4, -87];

// console.log(`Max of nums :${Math.max(1, 2, 3, 88, 99, 100, -10)}`);
// console.log(`Min of nums :${Math.min(1, 2, 3, 88, 99, 100, -10)}`);

// console.log(Math.max(...nums));
// console.log(Math.min(...nums));

// ---------------------------------------Rest Parameters----------

function fun(x, y, ...nums) {
    return x + y + nums.reduce((sum, curr)=> curr+ sum, 0);
}

// console.log(fun(3, 4, 10, 1, 2, 3, 4));



// -----------------------------------Destructring--------------------


const person = {
    name: 'Max',
    age: 24,
    isAdult: true,
    favColors: ['blue', 'purple', 'wine-red']
}


// const firstName = person.name;

// Both below lines are equivalent.
// const { name } = person;
// const name = person.name;

// console.log(firstName);

const { name, age } = person;

// console.log(name, age);

const fruits = ['apple', 'mango', 'orange', 'guava'];

const [firstFruit, secondFruit] = fruits;

// const firstFruit = fruits[0];
// const secondFruit = fruits[1]

// console.log(firstFruit);
// console.log(secondFruit);
