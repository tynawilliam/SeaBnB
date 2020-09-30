const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { User } = require('../../db/models');
const { handleValidationErrors } = require('../util/validation');
const { requireUser, generateToken, AuthenticationError } = require('../util/auth');
const { jwtConfig: { expiresIn } } = require('../../config');

const router = express.Router();

const validateLogin = [
    check('email').exists(),
    check('password').exists(),
];

router.get(
    '/',
    requireUser,
    asyncHandler(async function (req, res, next) {
        if (req.user) {
            return res.json({
                user: req.user
            });
        }
        next(new AuthenticationError());
    })
);

router.put(
    '/',
    validateLogin,
    handleValidationErrors,
    asyncHandler(async function (req, res, next) {
        const user = await User.login(req.body);
        if (user) {
            const token = generateToken(user);
            console.log(token);
            res.cookie('token', token, {
                maxAge: expiresIn * 1000, //maxAge in miliseconds
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: true,
            });
            return res.json({
                user,
            });
        }
        const err = new Error('Invalid credentials');
        err.status = 422;
        return next(err);
    })
);

// router.delete('/', requireUser, asyncHandler(async (req, res) => {
//     console.log('router delete end point')
//     res.clearCookie('token');
//     res.json({ message: 'success' });
// }));

module.exports = router;
