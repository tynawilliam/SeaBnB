const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const { routeHandler, handleValidationErrors } = require("../utils");
const { requireUser } = require("../utils/auth");


const { Boat } = require('../../db/models');

// router.get
