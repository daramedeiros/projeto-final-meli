const Voluntaria = require('../model/voluntaria')

const fs = require('fs');

exports.get = (req, res) => {
  Voluntaria.find(function (err, voluntaria) {
    if (err) res.status(500).send(err)
    res.status(200).send(voluntaria);
  })
}