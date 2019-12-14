
const Acolhida = require('../model/queroSerAcolhida')

const fs = require('fs');

exports.get = (req, res) => {
  Acolhida.find(function (err, acolhida) {
    if (err) res.status(500).send(err)
    res.status(200).send(acolhida);
  })
}

exports.post = (req, res) => {
  let acolhida = new Acolhida(req.body);

  acolhida.save(function (err) {
    if (err) res.status(500).send(err);

    res.status(201).send(acolhida);

  })
  }














