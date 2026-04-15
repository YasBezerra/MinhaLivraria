const express = require("express"); // framework backend
const cors = require("cors"); // libera acesso do frontend

const bookRoutes = require("./Routes/bookRoutes"); // importa rotas

const app = express(); // cria a aplicação

// Permite requisições de outras origens (React)
app.use(cors());

// Permite receber JSON no corpo das requisições
app.use(express.json());

// Define rota base para livros
app.use("/books", bookRoutes);

// Rota simples para testar API
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Middleware global de erro
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Exporta o app para o server.js
module.exports = app;