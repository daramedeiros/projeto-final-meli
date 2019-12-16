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

exports.getById = (req, res) => {
  const postoId = req.params.id

  Posto.findById(postoId, function (err, posto) {
    if (err) return res.status(500).send(err);

    if (!posto) {
      return res.status(404).send({ message: `Infelizmente não localizamos o posto pelo id: ${postoId}` });
    }

    res.status(200).send(posto);
  })
}

exports.update = (req, res) => {  
  Posto.update(
    { _id: req.params.id },
    { $set: req.body },
    { upsert: true },
    function (err) {
      if (err) return res.status(500).send({ message: err });
      res.status(200).send({ message: "Atualizado com sucesso!" });
    })
}


exports.deletarPosto = (req, res) => {
  const idPosto = req.params.id;

  Posto.findById(idPosto, function (err, posto) {
    if (err) return res.status(500).send(err);

    if (!posto) {
      return res.status(404).send({ message: `Infelizmente não localizamos o posto de id: ${req.params.id}` });
    }

    posto.remove(function (err) {
      if (!err) {
        res.status(200).send({ message: 'Posto de serviço removido com sucesso...' });
      }
    })
  })
}


