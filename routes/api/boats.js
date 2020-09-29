const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const { routeHandler, asyncHandler } = require("../utils");
const { requireUser } = require("../utils/auth");


const { Boat } = require('../../db/models');

router.get('/', asyncHandler ( async(req, res) => {
    const boats = await Boat.findAll()
    res.json({ boats })
}))

module.exports = router;
