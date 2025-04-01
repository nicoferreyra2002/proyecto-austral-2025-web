import { books } from "./data/books"

import Books from "./components/books/Books"


const App = () => {
  return (
    <>
      <h1>Book Champions</h1>
      <p>¡Bienvenidos a book champions!</p>
      <Books books={books} />
    </>
  )
}

export default App
