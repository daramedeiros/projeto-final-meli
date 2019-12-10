const Acolhida = require('../model/postos')

const fs = require('fs');

exports.get = (req, res) => {
  Posto.find(function (err, posto) {
    if (err) res.status(500).send(err)
    res.status(200).send(posto);
  })
}