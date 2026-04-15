import { useEffect, useState } from "react";
import { getBooks } from "../../services/api";

import BookItem from "../BookItem/BookItem";
import BookForm from "../BookForm/BookForm";
import BookIcon from "../Icons/BookIcon";

export default function BookList() {

  // livros da API
  const [books, setBooks] = useState([]);

  //  filtros
  const [search, setSearch] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Todos");

  //  carrega livros
  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await getBooks();

    console.log("📡 API RESPONSE:", data);

    const list = Array.isArray(data)
      ? data
      : data?.books || [];

    const formattedBooks = list.map((item) => ({
      id: item.id,
      title: item.title,
      author: item.author,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
      stock: item.stock
    }));

    setBooks(formattedBooks);
  };

  // FILTROS
  const filteredBooks = books.filter((book) => {

    const matchTitle =
      (book.title || "")
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchAuthor =
      (book.author || "")
        .toLowerCase()
        .includes(authorFilter.toLowerCase());

    const matchCategory =
      categoryFilter === "Todos" ||
      (book.category || "") === categoryFilter;

    return matchTitle && matchAuthor && matchCategory;
  });

  return (
    <div className="container">

      {/* FORM */}
      <BookForm onAdd={loadBooks} />

      {/* FILTROS */}
      <div className="filters">

        {/* título */}
        <input
          placeholder="Buscar por título..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* autor */}
        <input
          placeholder="Buscar por autor..."
          value={authorFilter}
          onChange={(e) => setAuthorFilter(e.target.value)}
        />

        {/* categoria */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="Todos">Todas as categorias</option>
          <option value="Romance">Romance</option>
          <option value="Fantasia">Fantasia</option>
          <option value="Ação">Ação</option>
          <option value="Ficção">Ficção</option>
          <option value="Literatura Brasileira">Literatura Brasileira</option>
          <option value="Suspense">Suspense</option>
        </select>

      </div>

      {/* LISTA */}
      <div className="book-list">

        {filteredBooks.length === 0 ? (
          <p>Nenhum livro encontrado...</p>
        ) : (
          filteredBooks.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onRefresh={loadBooks}
            />
          ))
        )}

      </div>
    </div>
  );
}