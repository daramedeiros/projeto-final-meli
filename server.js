const app = require("./src/app")
const port = 3000 || process.env.PORT;

app.listen(port, function() {
  console.log(`app está rodando na porta ${port}`)
})