const express = require('express');
const asyncHandler = require('express-async-handler');

const { Boat } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async function (_req, res, _next) {
    const boats = await Boat.findAll();
    res.json({ boats });
}));

module.exports = router;
