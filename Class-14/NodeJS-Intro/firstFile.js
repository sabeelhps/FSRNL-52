console.log('Hello World');

const fruits = ['Apple', 'Oranges', 'Guava'];

console.log(fruits);

function add(x,y) {
    return x + y;
}

console.log(add(5, 6));

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const p1 = new Person('Max', 34);

console.log(p1);


function createPromise() {
    return new Promise((resolve, reject) => {
        resolve(100);
    })
}

async function main() {
    const p = await createPromise();
    console.log(p);
}

main();