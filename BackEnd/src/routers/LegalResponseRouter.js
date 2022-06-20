const express = require('express');
const router = express.Router();

const controller = require('../controllers/LegalResponseController');

router.get('/respuestaLegal', controller.getAllRequest);

module.exports = router;