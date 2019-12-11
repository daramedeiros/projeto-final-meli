const mongoose = require('mongoose')

const VoluntariaSchema = new mongoose.Schema ({
    nome: {type: String},
    sobrenome: {type: String},
    email:{type: String},
    cepAtendimento: {type: Number},
    telefoneAtendimento: {type: Number},
    whatsapp: {type: String}
}
, {
    versionKey: false
})


const Voluntaria = mongoose.model('Voluntaria', VoluntariaSchema);

module.exports = Voluntaria;