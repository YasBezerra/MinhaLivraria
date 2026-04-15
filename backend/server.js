// Importa o app configurado
const app = require("./src/app");

// Inicia o servidor na porta 3001
app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});