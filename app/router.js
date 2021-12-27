const express = require('express');
const mainController = require('./controllers/mainController');

const router = express.Router();

router.use('/', mainController.homePage);

module.exports = router;