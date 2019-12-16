
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

  exports.getById = (req, res) => {
    const acolhidaId = req.params.id
  
    Acolhida.findById(acolhidaId, function (err, acolhida) {
      if (err) return res.status(500).send(err);
  
      if (!acolhida) {
        return res.status(404).send({ message: `Infelizmente não localizamos a pessoa acolhida pelo id: ${acolhidaId}` });
      }
  
      res.status(200).send(acolhida);
    })
  }
  
  exports.update = (req, res) => {  
    Acolhida.update(
      { _id: req.params.id },
      { $set: req.body },
      { upsert: true },
      function (err) {
        if (err) return res.status(500).send({ message: err });
        res.status(200).send({ message: "Atualizado com sucesso!" });
      })
  }
  
  
  exports.deletarPosto = (req, res) => {
    const idAcolhida = req.params.id;
  
    Acolhida.findById(idAcolhida, function (err, acolhida) {
      if (err) return res.status(500).send(err);
  
      if (!acolhida) {
        return res.status(404).send({ message: `Infelizmente não localizamos a pessoa acolhida pelo id: ${req.params.id}` });
      }
  
      acolhida.remove(function (err) {
        if (!err) {
          res.status(200).send({ message: 'Pessoa acolhida removida com sucesso...' });
        }
      })
    })
  }














