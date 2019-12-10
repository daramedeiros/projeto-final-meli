
const Acolhida = require('../model/acolhida')

const fs = require('fs');

exports.get = (req, res) => {
  // console.log(req.url)
  // res.status(200).send(alunas)
  Acolhida.find(function (err, acolhida) {
    if (err) res.status(500).send(err)
    res.status(200).send(acolhida);
  })
}















