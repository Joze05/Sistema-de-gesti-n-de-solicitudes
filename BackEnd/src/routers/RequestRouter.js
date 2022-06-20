const express = require('express');
const router = express.Router();

const controller = require('../controllers/RequestController');

router.post('/request',controller.insert);

module.exports = router;