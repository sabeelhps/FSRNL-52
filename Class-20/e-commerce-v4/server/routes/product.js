const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

const products = [
    {
        id: uuid(),
        title: 'Jeans',
        price: 100,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8amVhbnN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: uuid(),
        title: 'Macbook Air',
        price: 200,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: "https://plus.unsplash.com/premium_photo-1681702114246-ffe628203982?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: uuid(),
        title: 'Iphone pro max',
        price: 200,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: "https://images.unsplash.com/photo-1727079513748-d03e7b8c8947?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMHBybyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: uuid(),
        title: 'Iphone pro max',
        price: 300,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: "https://images.unsplash.com/photo-1727079513748-d03e7b8c8947?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMHBybyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: uuid(),
        title: 'Iphone pro max',
        price: 400,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: "https://images.unsplash.com/photo-1727079513748-d03e7b8c8947?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMHBybyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D"
    },
]


// Get All products
router.get('/products', (req, res) => {
    res.json(products);
});

// Create a new Product
router.post('/products', (req, res) => {
    
    products.push({ ...req.body, id: uuid() });
    
    res.status(201).json({ status: "SUCCESS", message:'Product create successfully' });
});

//Get a single product
router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => id == product.id);
    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }
    res.status(200).json(product);
}); 


// Update a single product
router.patch('/products/:id', (req, res) => {
    const { title, price, description, image } = req.body;
    const { id } = req.params;
    const product = products.find((product) => id == product.id);
   
    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }

    product.title = title;
    product.price = price;
    product.description = description;
    product.image = image;

    res.status(200).json({ status: "SUCCESS", message: 'Product updated successfully' });
});

// Delete a single product
router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((product) => id == product.id);
    if (productIndex === -1) {
        throw new Error(`Product with id ${id} not found`);
    }
    products.splice(productIndex, 1);
    res.status(200).json({ status: "SUCCESS", message: "Product deleted successfully" });
});

module.exports = router;

