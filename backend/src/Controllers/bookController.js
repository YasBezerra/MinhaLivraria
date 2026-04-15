// Importa regras de negócio (service layer)
const bookService = require("../Services/bookService");

// LISTAR TODOS OS LIVROS
exports.getAll = (req, res) => {
  const books = bookService.getAll();
  res.json(books);
};

// CRIAR NOVO LIVRO
exports.create = (req, res) => {
  const newBook = bookService.create(req.body);
  res.status(201).json(newBook);
};

// ATUALIZAR LIVRO
exports.update = (req, res) => {
  const id = Number(req.params.id);

  bookService.update(id, req.body);

  res.json({ message: "Livro atualizado" });
};

// REMOVER LIVRO
exports.remove = (req, res) => {
  const id = Number(req.params.id);

  bookService.remove(id);

  res.json({ message: "Livro removido" });
};