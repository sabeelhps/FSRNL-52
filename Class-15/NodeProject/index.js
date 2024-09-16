const colors = require('colors');
const figlet = require("figlet");

// console.log("Welcome to NPM World".rainbow);

figlet("Welcome to NodeJS", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data.rainbow);
});