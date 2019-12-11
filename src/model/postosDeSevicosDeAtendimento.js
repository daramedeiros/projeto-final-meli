const mongoose = require('mongoose')

const PostoSchema = new mongoose.Schema ({
    nome: {type: String},
    logadouro: {type: String},
    numero: {type: Number},
    complemento:{type: String},
    cidade:{type: String},
    bairro: {type: String},
    estado: {type: String},
    contato: {type: Number}

}
, {
    versionKey: false
})


const Posto = mongoose.model('Posto', PostoSchema);

module.exports = Posto;