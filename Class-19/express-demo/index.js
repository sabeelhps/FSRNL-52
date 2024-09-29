const express = require('express');
const app = express();


// Will get executed for all the path at localhost:3000
// app.use((req, res) => {
//     res.send('<h1>Hello from server</h1>')
// });


// http://localhost:3000/?name=sabeel&age=24

app.get('/login', (req, res) => {
    console.log(req.query);
    res.send('Calling my Login route') 
});

app.get('/register', (req, res) => {
    res.json({ name: 'Max', hobbies: ['swimming', 'web series'] });
});


// app.get('/r/dogs', (req, res) => {
//     res.send('Dogs subredit');
// })

// app.get('/r/cats', (req, res) => {
//     res.send('Cats subredit');
// })

// app.get('/r/apple', (req, res) => {
//     res.send('Apple subredit');
// });

// http://localhost:3000/r/apple

app.get('/r/:subredit', (req, res) => {
    // console.log(req.params);
    const { subredit } = req.params;
    res.send(`You are requesting ${subredit} subredit`);
});

app.listen(3000, () => {
    console.log('server started at port 3000');
});