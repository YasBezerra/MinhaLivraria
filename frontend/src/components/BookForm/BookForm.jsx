import { useState } from "react";
import { createBook, getBookCover } from "../../services/api";

import PlusIcon  from "../Icons/PlusIcon";

// categorias fixas (padronização do sistema)
const CATEGORIES = [
  "Fantasia",
  "Ação",
  "Ficção",
  "Literatura Brasileira",
  "Suspense",
  "Romance"
];

export default function BookForm({ onAdd }) {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔍 validação profissional
    if (
      !title.trim() ||
      !author.trim() ||
      !price ||
      !description.trim() ||
      !category ||
      !stock
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    // 🖼️ capa automática via API
    const image = await getBookCover(title);

    // 📦 objeto final enviado
    const newBook = {
      title: title.trim(),
      author: author.trim(),
      price: Number(price),
      description: description.trim(),
      category,
      stock: Number(stock),
      image
    };

    await createBook(newBook);

    // 🔄 limpa formulário
    setTitle("");
    setAuthor("");
    setPrice("");
    setDescription("");
    setCategory("");
    setStock("");

    onAdd();
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      

      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        placeholder="Preço"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* dropdown categoria */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Selecione uma categoria</option>

        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        placeholder="Estoque"
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />

      {/* BOTÃO  */}
      <button type="submit" className="add-button">
        <PlusIcon />
        Adicionar Livro
      </button>
    </form>
  );
}