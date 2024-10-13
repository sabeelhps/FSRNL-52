const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { BadRequestError, AuthenticationError } = require('../core/ApiError');
const bcrypt = require('bcrypt');
const catchAsync = require('../core/catchAsync');
const jwt = require('jsonwebtoken');
const { isLoggedIn } = require('../middlewares/auth');

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

router.post('/login', catchAsync(async(req, res) => {
    
    const { username, password } = req.body;
    
    if (!username || !password) {
        throw new BadRequestError('Some fields are missing');
    }

    // Find the user with the input username.
    const user = await User.findOne({ username: username });

    if (!user) {
        throw new AuthenticationError('Username or password are incorrect');
    }

    const isValidPassword = await bcrypt.compare(password, user.passwordHash);

    if (!isValidPassword) {
        throw new AuthenticationError('Username or password are incorrect');
    }

    const token = jwt.sign({ userId: user._id }, "SOME_SECRET");

    res.status(200).json({ status: "SUCCESS", token: token });
}));

router.get('/profile', isLoggedIn, catchAsync(async(req, res) => {
    const { userId } = req;
    const user = await User.findById(userId);
    res.status(200).json({ status: "SUCCESS", username: user.username, email: user.email });
}));

module.exports = router;