import { deleteBook, updateBook } from "../../services/api";

export default function BookItem({ book, onRefresh }) {

  // REMOVE UM LIVRO
  const handleDelete = async () => {
    await deleteBook(book.id);
    alert("Livro removido!");
    onRefresh(); // atualiza lista
  };

  // EDITA UM LIVRO COMPLETO
  const handleEdit = async () => {

    const newTitle = prompt("Novo título:", book.title);
    const newAuthor = prompt("Novo autor:", book.author);
    const newPrice = prompt("Novo preço:", book.price);
    const newDescription = prompt("Nova descrição:", book.description);
    const newCategory = prompt("Nova categoria:", book.category);
    const newStock = prompt("Novo estoque:", book.stock);

    // validação mais segura - não salva vazio
    if (
      !newTitle?.trim() ||
      !newAuthor?.trim() ||
      !newPrice ||
      !newDescription?.trim() ||
      !newCategory?.trim() ||
      !newStock
    ) {
      alert("Edição cancelada: campos inválidos.");
      return;
    }

    // objeto atualizado
    const updated = {
      ...book,
      title: newTitle.trim(),
      author: newAuthor.trim(),
      price: Number(newPrice),
      description: newDescription.trim(),
      category: newCategory.trim(),
      stock: Number(newStock)
    };

    // atualiza na API
    await updateBook(book.id, updated);

    alert("Livro atualizado!");

    // recarrega lista
    onRefresh();
  };

  return (
    <div className="book-card">

      {/* imagem do livro */}
      <img
        src={book.image}
        alt={book.title}
        onError={(e) => {
            e.target.src = "https://picsum.photos/150/200";
        }}
        />

      <div className="book-info">

        {/* título */}
        <h3>{book.title}</h3>

        {/* autor */}
        <p>
          <strong>Autor:</strong> {book.author || "Não informado"}
        </p>

        {/* descrição */}
        <p>{book.description}</p>

        {/* categoria */}
        <p>
          <strong>Categoria:</strong> {book.category}
        </p>

        {/* estoque */}
        <p>
          <strong>Estoque:</strong> {book.stock ?? 0}</p>

        {/* preço */}
        <strong>R$ {book.price}</strong>

      </div>

      {/* ações */}
      <div className="book-actions">

        <button onClick={handleEdit}>
          Editar
        </button>

        <button onClick={handleDelete}>
          Excluir
        </button>

      </div>
    </div>
  );
}