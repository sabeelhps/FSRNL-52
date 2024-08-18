const person = {
    name: "ABC",
    age: 24,
    isAdult: true,
    favColor: ['blue', 'purple'],
    company: {
        name: "DEF",
        address: "Some address of the company"
    }
}

console.log(person.name);
console.log(person["name"]);
console.log(person["fav"+"Color"]);
