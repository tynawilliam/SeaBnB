const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const csrfProtection = require("csurf")({ cookie: true });
const { check }= require('express-validator');


const { asyncHandler, routeHandler } = require('../utils');
const { getUserToken } = require('../utils/auth');
const { expiresIn } = require('../../config').jwtConfig;

const { User } = require('../../db/models');

//create validations
const validateEmail =
    check('email')
        .exists({ checkFalsy: true })

const validateAuthFields = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a name"),
    check("city")
        .exists({ checkFalsy: true })
        .withMessage("Please provide your city"),
    check("phone")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a phone number")
        .isLength({ min: 10, max: 13 })
        .withMessage("Please provide a valid phone number"),
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a valid email")
        .isEmail(),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a password.")
        .isLength({ min: 6, max: 30 })
        .withMessage("Password must be between 6 to 30 characters")
]

//sign up route
router.post(
    "/",
    csrfProtection,
    validateAuthFields,
    routeHandler,
    asyncHandler(async(req, res) => {
        const {
            name,
            city,
            phone,
            email,
            password
        } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, city, phone, email, hashedPassword });
        const token = getUserToken(user);
        res.cookie("token", token, { maxAge: expiresIn * 1000 }); // maxAge in milliseconds
        res.json({ id: user.id, name: user.name, token });
    })
)

//logging in
router.put(
    "/token",
    csrfProtection,
    validateEmail,
    routeHandler,
    asyncHandler(async (req, res, next) => {
        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email,
            },
        });


        // password validation and error handling
        if (!user || !user.validatePassword(password)) {
            const err = new Error("Email and Password do not match our records");
            err.status = 401;
            err.title = "Login failed";
            err.errors = ["Email or password does not match our records."];
            return next(err);
        }

        // token generation
        const token = getUserToken(user);
        res.cookie("token", token, { maxAge: expiresIn * 1000 }); // maxAge in milliseconds
        res.json({ id: user.id, name: user.name, token });
    })

)

router.delete('/session', asyncHandler(async(req,res) => {
    res.clearCookie('token');
    res.json({ message: 'success' });
  }));

//  GET /token route
router.get('/token', asyncHandler(async (req, res, next) => {
    if (req.user) {
      return res.json({
        id: req.user.id,
        name: req.user.name
      });
    }
    const err = new Error('Invalid token');
    err.status = 401;
    next(err);
  }));

router.get('/', asyncHandler(async function (req, res, next) {
    const users = await User.findAll();
    res.json({ users });
}));

module.exports = router;
