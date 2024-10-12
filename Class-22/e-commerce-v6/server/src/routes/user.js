const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { BadRequestError } = require('../core/ApiError');
const bcrypt = require('bcrypt');
const catchAsync = require('../core/catchAsync');

router.post('/register', catchAsync(async (req, res, next) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        throw new BadRequestError(`Feilds are missing.`);
    }
    // check if user already exists with that username.
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
        throw new BadRequestError('User with this name already exists');
    }

    // Hash the incoming plane password
    const hash = await bcrypt.hash(password, 12);
    
    // Create the new user in the database.
    const newUser = await User.create({ email: email, username: username, passwordHash: hash });
    return res.status(200).json({status:"SUCCESS", message: `User registered successfully`});
}));

router.post('/login', (req, res) => {
    res.send('THIS IS A Login ROUTE!');
});

module.exports = router;