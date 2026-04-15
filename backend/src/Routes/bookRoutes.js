const express = require("express");
const router = express.Router();

// Importa controller
const bookController = require("../Controllers/bookController");

// GET → listar livros
router.get("/", bookController.getAll);

// POST → criar livro
router.post("/", bookController.create);

// PUT → atualizar livro
router.put("/:id", bookController.update);

// DELETE → remover livro
router.delete("/:id", bookController.remove);

// Exporta rotas
module.exports = router;