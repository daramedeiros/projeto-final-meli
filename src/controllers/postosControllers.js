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



exports.deletarPosto = (req, res) => {
  const idPosto = req.params.id;

  Posto.findById(idPosto, function (err, posto) {
    if (err) return res.status(500).send(err);

    if (!posto) {
      return res.status(200).send({ message: `Infelizmente não localizamos o posto de id: ${req.params.id}` });
    }

    posto.remove(function (err) {
      if (!err) {
        res.status(200).send({ message: 'Posto removido com sucesso...' });
      }
    })
  })
}
