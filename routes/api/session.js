const express = require('express');
const asyncHandler = require('express-async-Handler');
const { check } = require('express-validator');

const { User } = require('../../db/models');
const { jwtConfig: { expiresIn }} = require('../../config');

const router = express.Router();

const validateLogin = [
    check("email").exists(),
    check("password").exists(),
];

router.get(
    '/',
    asyncHandler(async function (req, res, next) {
        if(req.user) {
            return res.json({
                user: req.user
            });
        }
        next()
    })
);
