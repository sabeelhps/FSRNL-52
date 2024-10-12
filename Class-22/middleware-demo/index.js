const express = require('express');
const app = express();

const verify = (req, res, next) => {
    const { key } = req.query;
    if (key != 'apple') {
        return res.send('You dont have access to the secret!');
    }

    req.verifiedKey = key; 
    return next();
}

app.use((req, res, next) => {
    const x = 10;
    const y = 20;
    const result = x * y;
    console.log("My first middleware");
    return next()
    console.log('My first middleware after calling next')
});


app.use((req, res, next) => {
    console.log('My second middleware');
    return next();
    console.log('My second middleware after calling NEXT()');
});

app.get('/login', (req, res) => {
    console.log('login route')
    res.send('Login route');
});


app.get('/secret', verify, (req, res) => {
    const { verifiedKey } = req;
    console.log(verifiedKey);
    res.send('This is some top secret.');
})


app.listen(3000, () => console.log('server running on 3000'));



