
# Minha Livraria

Aplicação front-end desenvolvida com React para gerenciamento de livros, consumindo uma API REST. O projeto permite listar, adicionar, editar e remover livros de forma interativa.

## Tecnologias utilizadas

- React (com Hooks)
- JavaScript (ES6+)
- Axios (requisições HTTP)
- HTML5 + CSS3
- Node.js + Express (API local)

## Funcionalidades

🔍 Listagem de livros
- Busca dados da API (GET)
- Exibe livros em formato de cards
- Mostra título, autor, preço, descrição e imagem

➕ Adicionar livro
- Formulário completo
- Envio via POST
- Integração com API do Google Books para capa automática

✏️ Editar livro
- Atualização de dados existentes (PUT)
- Interface simples e intuitiva

❌ Remover livro
- Exclusão de livros (DELETE)
- Atualização automática da lista


##  Integrações

- API própria (Node + Express)
- Google Books API (para buscar capas reais dos livros)


## Estrutura do Projeto

- src/
-  ├── components/
-  │   ├── BookList
-  │   ├── BookItem
-  │   ├── BookForm
-  │   ├── Header
-  │   └── icons/
-  ├── services/
-  │   └── api.js
-  ├── pages/
-  │   └── Home.jsx
-  ├── App.jsx
-  └── main.jsx
## ⚙️ Como rodar o projeto


🔹 1. Clonar o repositório
- git clone https://github.com/YasBezerra/MinhaLivraria.git

🔹 2. Instalar dependências (frontend)
- npm install

🔹 3. Rodar o frontend

- npm run dev
🔹 4. Rodar o backend (API)

Dentro da pasta backend:

- npm install
- npm i axios
- npm i express
- npm i node
- node server.js

Servidor rodando em:

http://localhost:3001

## 💡 Decisões técnicas

- Uso de Axios para facilitar requisições HTTP
- Separação de responsabilidades (services, components)
- Componentização para reutilização de código
- Integração com API externa para enriquecer a experiência do usuário
- Backend simples com Express para simular uma API real

## Screenshots

<details>
  <summary>📸 Ver preview do projeto</summary>

  <br>

  <img src="https://github.com/user-attachments/assets/53ce1ef9-2c73-4ab1-8bcc-7e53b50fe3f4" alt="Preview do projeto" width="100%"/>

</details>

## Authors

- [@YasBezerra](https://www.github.com/YasBezerra)

