const app = require("./src/app")
const PORT = 3000 || process.env.PORT;

app.listen(PORT, function() {
  console.log(`app está rodando na porta ${PORT}`)
})