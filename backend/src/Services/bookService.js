// Simula banco de dados em memória
let books = [];

// Retorna todos os livros
exports.getAll = () => {
  return books;
};

// Cria um livro
exports.create = (data) => {
  // Cria objeto com ID único
  const book = {
    id: Date.now(),
    ...data
  };

  books.push(book); // adiciona no array

  return book;
};

// Atualiza livro
exports.update = (id, data) => {
  books = books.map((b) =>
    b.id === id ? { ...b, ...data } : b
  );
};

// Remove livro
exports.remove = (id) => {
  books = books.filter((b) => b.id !== id);
};