const express = require('express');
const router = express.Router();
const calculadoraController = require('../controllers/calculadoraController');

router.get('/calcular', calculadoraController.calcular);
router.post('/calcular-dados', calculadoraController.calcularDados);

module.exports = router;
