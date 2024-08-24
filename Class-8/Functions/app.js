

function print() {
    console.log('Hello from a function');
}

function add(x, y) {
    if (typeof x != 'number' || typeof y != 'number') {
        throw new Error('arguments are not numbers');
    }
    const res = x + y;
    return res;
}

// console.log('START');

// print();
// console.log(add(5, 3));

try {
    // console.log(add(true, 10));
} catch (e) {
    console.log(e.message);
}

// console.log(add("ABC", 10));
// console.log(add("ABC", "DEF"));

// console.log('END');

// Function expression
const f = function() {
    console.log('Inside fun');
}


// Arrow functions
const a = ()=> {
    console.log('Inside a : Arrow function');
}




// 1. There is a string
//  str = The blue dog jumps over a white lazy dog.

// i. Reverse the string.
// ii. Reverse the order of words in the string
        // output : dog lazy white a over jumps dog blue The
// iii. Reverse the characters in each words in a string without changing the order 
// of the words 
// output: ehT eulb god spmuj revo a etihw yzal god.
        
function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

function reverseCharInWords(str) {
    const words = str.split(' ');
    const res = [];
    for (let word of words) {
        res.push(word.split('').reverse().join(''));
    }
    return res.join(' ');
}

console.log(reverseString('The blue dog jumps over a white lazy dog'));
console.log(reverseWords('The blue dog jumps over a white lazy dog'));
console.log(reverseCharInWords('The blue dog jumps over a white lazy dog'));