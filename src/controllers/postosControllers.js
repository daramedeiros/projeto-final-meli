const Posto = require('../model/postosDeSevicosDeAtendimento')

const fs = require('fs');

exports.get = (req, res) => {
  Posto.find(function (err, posto) {
    if (err) res.status(500).send(err)
    res.status(200).send(posto);
  })
}


exports.post = (req, res) => {
  let posto = new Posto(req.body);

  posto.save(function (err) {
    if (err) res.status(500).send(err);

    res.status(201).send(posto);

  })
  }