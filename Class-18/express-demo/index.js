const express = require('express');

const app = express();

app.use((req, res) => {
    console.log(req);
    console.log(res);
    res.send('Hello from my first express server');
});


app.listen(3000, () => {
    console.log(`server started at port 3000`);
});