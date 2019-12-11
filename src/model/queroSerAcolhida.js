const mongoose = require('mongoose')

const AcolhidaSchema = new mongoose.Schema ({
    nome: {type: String},
    sobrenome: {type: String},
    idade: {type: Number},
    email:{type: String},
    genero: [{
        _id: false,
        mulherCis: Boolean,
        mulherTrans: Boolean,
    }],
    tipoAjuda: {type: String},
    cidade: {type: String},
    bairro: {type: String},
    estado: {type: String}

}
, {
    versionKey: false
})


const Acolhida = mongoose.model('Acolhida', AcolhidaSchema);

module.exports = Acolhida;