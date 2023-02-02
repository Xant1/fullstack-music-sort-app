const Music = require('../models/musicModel');

exports.getAll = function (req, res) {
  Music.findAll({raw: true})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

exports.getByMusician = function (req, res) {
  let musician = req.params.musician;
  Music.findAll({ where: { musician: musician }, raw: true })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

exports.getByGenre = function (req, res) {
  let genre = req.params.genre;
  Music.findAll({ where: { genre: genre }, raw: true })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

exports.getByYear = function (req, res) {
  let year = req.params.year;
  Music.findAll({ where: { year: year }, raw:true })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};
