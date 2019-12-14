const Voluntaria = require('../model/voluntariaAcolhe')

const fs = require('fs');

exports.get = (req, res) => {
  Voluntaria.find(function (err, voluntaria) {
    if (err) res.status(500).send(err)
    res.status(200).send(voluntaria);
  })
}

exports.post = (req, res) => {
  let voluntaria = new Voluntaria(req.body);

  voluntaria.save(function (err) {
    if (err) res.status(500).send(err);

    res.status(201).send(voluntaria);

  })
}
