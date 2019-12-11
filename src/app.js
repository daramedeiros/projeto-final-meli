const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');

const app = express()

//String de conexão com o mongodb
mongoose.connect("mongodb+srv://adm:reprograma7@cluster0-1tmnh.mongodb.net/acolherasmanas",{useNewUrlParser: true});

//representação da conexão com o banco de dados 
let db = mongoose.connection;

//após a conexão, caso ocorra algum erro, será logado o erro
db.on("error", console.log.bind(console, "connection error:"))

//uma vez que a conexão esteja aberta, será exebida essa mensagem
db.once("open", function (){
  console.log("conexão feita com sucesso.")
})

//rotas
const index = require("./routes/index")
const queroSerAcolhida = require("./routes/acolhidaRoute")
const voluntarioAcolhe = require("./routes/voluntariaRoute")
const postosDeSevicosDeAtendimento  = require("./routes/postosRoute")


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json());

app.use("/", index)
app.use("/queroSerAcolhida", queroSerAcolhida)
app.use("/voluntarioAcolhe", voluntarioAcolhe)
app.use("/postosDeSevicosDeAtendimento ", postosDeSevicosDeAtendimento )


module.exports = app
