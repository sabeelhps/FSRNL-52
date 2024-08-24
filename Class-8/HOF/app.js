function fun(x,y) {
    return z;
}

// The function fun is called HOF if any of x,y or z are also function 

// function abc(f) {
//     f();
// }

// const a = function () {
//     console.log('This is function f');
// }

// abc(a);

// -----------------------------------------------
const radii = [1, 2, 3, 4, 5, 6];

// 1.diamter of circle (2*r) => [1, 4, 6, 8, 10, 12]
// 2. Area of circle (PI*r*r) => 
// 3. Circumference (2*PI*r)

function calculateDiameter(radii) {
    const res = [];
    for (let radius of radii) {
        res.push(2 * radius);
    }
    return res;
}

function calculateArea(radii) {
    const res = [];
    for (let radius of radii) {
        res.push(Math.PI * radius * radius);
    }
    return res;
}

function calculateCircumference(radii) {
    const res = [];
    for (let radius of radii) {
        res.push(2 * Math.PI * radius);
    }
    return res;
}

// console.log(calculateDiameter(radii));
// console.log(calculateArea(radii));
// console.log(calculateCircumference(radii));


// ------------------------- Better way of writing above code----

// Arrow function implicit return
const diameter = (radius) => 2 * radius;

const area = (radius) => Math.PI * radius * radius;

const perimeter = (radius) => 2 * Math.PI * radius;

const squareOfRadius = (radius) => radius ** 2;

function calculate(radii, logic) {
    const res = [];
    for (let radius of radii) {
        res.push(logic(radius));
    }
    return res;
}

console.log(calculate(radii, diameter));
console.log(calculate(radii, area));
console.log(calculate(radii, perimeter));
console.log(calculate(radii, squareOfRadius));
