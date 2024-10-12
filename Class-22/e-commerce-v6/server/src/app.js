const express = require('express');
const app = express();
const cors = require('cors');

// Routes 
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const { NotFoundError } = require('./core/ApiError');

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(express.json({limit:'10mb'}));

app.use("/api/v1", productRoutes);
app.use('/api/v1/users', userRoutes);


app.all("*", (req, res, next) => next(new NotFoundError()));

// Error Handing middleware
app.use((err, req, res, next) => {
    const { status = 500, message = 'Internal Server Error' } = err;
    return res.status(status).json({ status: "FAILED", message: message });
});

module.exports = app;