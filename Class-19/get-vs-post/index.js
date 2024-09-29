const express = require('express');
const app = express();
const path = require('path');


// app.use(express.static('public'));
// console.log(__dirname);

app.use(express.urlencoded({ extended: true, limit:'10mb', parameterLimit: 5000 }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.get('/login', (req, res) => {
    console.log('Starting to process the get login GET request');
    const { username, password } = req.query;
    
    res.send(`Your username is ${username} and password is : ${password}`);
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('YOU ARE MAKING A POST REQUEST');
})

app.listen(8080, () => {
    console.log('server started at port 8080');
});

