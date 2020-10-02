const express = require('express');
const asyncHandler = require('express-async-handler');

const { Boat } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async function (_req, res, _next) {
    const boats = await Boat.findAll();
    res.json({ boats });
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const boat = await Boat.findByPk(req.params.id)
    if(!boat) {
        const err = new Error('Boat not found.');
        err.status = 404;
        next(err);
        return;
    }
    res.json({ boat });
}))

module.exports = router;
