
// Creation of a promise
const p = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    console.log(randomNum);
    if (randomNum % 2 == 0) {
        resolve(randomNum);
    } else {
        reject(new Error('I hate Odd numbers'));
    }
});


// consumption of promise
p.then(function (randomNum) {
    console.log(`Number is even ${randomNum}`);
})
    .catch(function (err) {
        console.log(err.message);
    });