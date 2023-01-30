const express = require('express');
const musicRouter = express.Router();
const musicController = require('../controllers/musicController');

musicRouter.get('/music', musicController.getAll);

module.exports = musicRouter;
