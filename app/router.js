const express = require('express');
const mainController = require('./controllers/mainController');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/pokemon/:numero', mainController.pokemonDetail);

module.exports = router;