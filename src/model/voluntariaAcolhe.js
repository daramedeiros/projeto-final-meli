const mongoose = require('mongoose')

const VoluntariaSchema = new mongoose.Schema ({
    nome: {type: String},
    sobrenome: {type: String},
    email:{type: String},
    cepAtendimento: {type: String},
    telefoneAtendimento: {type: String},
    whatsapp: {type: String},
    tipoDeServicoPrestado: [{
        _id: false,
        piscologico: Boolean,
        juridico: Boolean,
    }]
}
, {
    versionKey: false
})


const Voluntaria = mongoose.model('Voluntaria', VoluntariaSchema);

module.exports = Voluntaria;