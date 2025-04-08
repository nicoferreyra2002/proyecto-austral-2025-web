import { books } from "./data/books"

import Books from "./components/books/Books"
import NewBook from "./components/newBook/NewBook"


const App = () => {
  return (
    <>
      <h1>Book Champions</h1>
      <p>¡Bienvenidos a book champions!</p>
      <NewBook />
      <Books books={books} />
    </>
  )
}

export default App
