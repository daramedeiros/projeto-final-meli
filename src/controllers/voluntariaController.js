const Voluntaria = require('../model/voluntariaAcolhe')

const fs = require('fs');

exports.get = (req, res) => {
  Voluntaria.find(function (err, voluntaria) {
    if (err) res.status(500).send(err)
    res.status(200).send(voluntaria);
  })
}


exports.getById = (req, res) => {
  const voluntariaId = req.params.id

  Acolhida.findById(voluntariaId, function (err, voluntaria) {
    if (err) return res.status(500).send(err);

    if (!voluntaria) {
      return res.status(200).send({ message: `Infelizmente não localizamos essa pessoa que deseja ser voluntária pelo seu id: ${voluntariaId}` });
    }

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
