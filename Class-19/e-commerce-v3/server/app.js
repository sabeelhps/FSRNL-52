const express = require('express');
const app = express();
const cors = require('cors');

const port = 8080;


app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));

const products = [
    {
        id: 1,
        title: 'Jeans',
        price: 100,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amVhbnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 2,
        title: 'Macbook Air',
        price: 200,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: "https://plus.unsplash.com/premium_photo-1681702114246-ffe628203982?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 3,
        title: 'Iphone pro max',
        price: 200,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: "https://images.unsplash.com/photo-1727079513748-d03e7b8c8947?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMHBybyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 4,
        title: 'Iphone pro max',
        price: 300,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: "https://images.unsplash.com/photo-1727079513748-d03e7b8c8947?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMHBybyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 5,
        title: 'Iphone pro max',
        price: 400,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: "https://images.unsplash.com/photo-1727079513748-d03e7b8c8947?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMHBybyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D"
    },
]


app.get('/products', (req, res) => {
    res.json(products);
});



app.listen(port, () => {
    console.log(`server started at port ${port}`);
})