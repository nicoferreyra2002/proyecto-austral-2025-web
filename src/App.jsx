import { books } from "./data/books"

import BookItem from "./components/bookItem/BookItem"


const App = () => {
  return (
    <>
      <h1>Book Champions</h1>
      <p>¡Bienvenidos a book champions!</p>
      <BookItem
        title={books[0].title}
        author={books[0].author}
        rating={books[0].rating}
        pageCount={books[0].pageCount}
        imageUrl={books[0].imageUrl}
        available={books[0].available}
      />
      <BookItem
        title={books[1].title}
        author={books[1].author}
        rating={books[1].rating}
        imageUrl={books[1].imageUrl}
        pageCount={books[1].pageCount}
        available={books[1].available}

      />
      <BookItem
        title={books[2].title}
        author={books[2].author}
        rating={books[2].rating}
        imageUrl={books[2].imageUrl}
        pageCount={books[2].pageCount}
        available={books[2].available}

      />
      <BookItem
        title={books[3].title}
        author={books[3].author}
        rating={books[3].rating}
        imageUrl={books[3].imageUrl}
        pageCount={books[3].pageCount}
        available={books[3].available}

      />
    </>
  )
}

export default App
