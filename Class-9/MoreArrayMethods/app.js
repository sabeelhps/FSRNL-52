const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// output : [1, 4, 9, 16, 25, 36, 49, 64]

const square = num => num ** 2;

const squareOfNums = nums.map(square);

const cubeOfNums = nums.map(function (num, idx, nums) {
    // console.log(idx);
    // console.log(nums);
    return num ** 3;
});

const squareRootOfNums = nums.map((num) => Math.sqrt(num));

// console.log(nums);
// console.log(squareOfNums);
// console.log(cubeOfNums);
// console.log(squareRootOfNums);

const isEven = num => num % 2 == 0;

const evenNums = nums.filter(isEven);

const oddNums = nums.filter((num) => num % 2 != 0);

console.log(evenNums);
console.log(oddNums);


const sumOfNums = nums.reduce(function (num, sum) {
    return sum + num;
}, 0);

console.log(sumOfNums);

// 1. Sum of all odd numbers using reduce
// 2. Sum of all even numbers using reduce
const evenSum = nums.reduce(function (sum, num) {
    if (num % 2 == 0) {
        return num + sum;
    }
    return sum;
}, 0);

console.log(evenSum);

const cart = [{ name: 'Iphone', price: 100 }, { name: 'Macbook', price: 200 }, { name: 'Tshirt', price: 50 }];

const totalAmount = cart.reduce(function (totalPrice, item) {
    return totalPrice + item.price;
}, 0);

console.log(totalAmount);

console.log(nums.indexOf(5));
console.log(nums.indexOf(100));
console.log(nums.includes(100));












