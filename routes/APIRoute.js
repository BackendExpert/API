const express = require('express');
const APIController = require('../controllers/APIController');

const router = express.Router();

router.get('/allrecipe', APIController.alldata)
router.get('/onerecipe/:id', APIController.onedata)

module.exports = router;