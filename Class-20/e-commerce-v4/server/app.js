const express = require('express');
const app = express();
const cors = require('cors');

// Routes 
const productRoutes = require('./routes/product');

const port = 8080;


app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(express.json({limit:'10mb'}));

app.use("/api/v1", productRoutes);


app.listen(port, () => {
    console.log(`server started at port ${port}`);
});