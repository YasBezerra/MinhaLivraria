import axios from "axios";

// API local (JSON Server)
const api = axios.create({
  baseURL: "http://localhost:3001/books"
});

// 📚 GET - buscar livros
export const getBooks = () =>
  api.get("/").then(res => res.data);

// ➕ POST - criar livro
export const createBook = (data) =>
  api.post("/", data).then(res => res.data);

// ✏️ PUT - atualizar livro
export const updateBook = (id, data) =>
  api.put(`/${id}`, data).then(res => res.data);

// ❌ DELETE - remover livro
export const deleteBook = (id) =>
  api.delete(`/${id}`).then(res => res.data);



// 🔥 GOOGLE BOOKS API - capa real do livro
export const getBookCover = async (title) => {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}`
    );

    const item = res.data.items?.[0];

    const image =
      item?.volumeInfo?.imageLinks?.thumbnail ||
      item?.volumeInfo?.imageLinks?.smallThumbnail ||
      "https://via.placeholder.com/150";

    // força https (evita erro em alguns browsers)
    return image.replace("http://", "https://");

  } catch (err) {
    console.log("Erro ao buscar capa:", err);
    return "https://via.placeholder.com/150";
  }
};