const Music = require('../models/musicModel');

exports.getAll = function (req, res) {
  Music.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};
