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

exports.getById = (req, res) => {
  const voluntariaId = req.params.id

  Voluntaria.findById(voluntariaId, function (err, voluntaria) {
    if (err) return res.status(500).send(err);

    if (!voluntaria) {
      return res.status(404).send({ message: `Infelizmente não localizamos a voluntaria pelo id: ${voluntariaId}` });
    }

    res.status(200).send(voluntaria);
  })
}

exports.update = (req, res) => {  
  Voluntaria.update(
    { _id: req.params.id },
    { $set: req.body },
    { upsert: true },
    function (err) {
      if (err) return res.status(500).send({ message: err });
      res.status(200).send({ message: "Atualizado com sucesso!" });
    })
}


exports.deletarVoluntaria = (req, res) => {
  const idVoluntaria = req.params.id;

  Voluntaria.findById(idVoluntaria, function (err, voluntaria) {
    if (err) return res.status(500).send(err);

    if (!voluntaria) {
      return res.status(404).send({ message: `Infelizmente não localizamos a voluntaria pelo id: ${req.params.id}` });
    }

    voluntaria.remove(function (err) {
      if (!err) {
        res.status(204).send({ message: 'Voluntaria removida com sucesso...' });
      }
    })
  })
}