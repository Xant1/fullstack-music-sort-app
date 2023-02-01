const express = require('express');
const musicRouter = express.Router();
const musicController = require('../controllers/musicController');

musicRouter.get('/music', musicController.getAll);
musicRouter.get('/music/name/:musician', musicController.getByMusician);
musicRouter.get('/music/genre/:genre', musicController.getByGenre);
musicRouter.get('/music/year/:year', musicController.getByYear);

module.exports = musicRouter;
