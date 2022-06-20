const express = require('express');
const router = express.Router();

const controller = require('../controllers/DetailedResponseController');

router.get('/detailedResponse', controller.getAllRequest);

router.post('/detailedResponse', controller.insertLegalResponse);

module.exports = router;