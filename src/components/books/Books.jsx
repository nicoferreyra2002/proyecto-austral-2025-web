import { useState } from "react";
import BookItem from "../bookItem/BookItem";
import BooksSearch from "../bookSearch/BooksSearch";

const Books = ({ books }) => {
    const [selectedBook, setSelectedBook] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSelectBook = (title) => {
        setSelectedBook(title);
    };

    // Filtrar los libros según lo que se escriba en el buscador
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const booksMapped = filteredBooks.map(book => (
        <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
            onBookSelected={handleSelectBook}
        />
    ));

    return (
        <>
            <BooksSearch onSearchChange={setSearchTerm} />

            {selectedBook && (
                <p>Usted ha seleccionado el libro: <b>{selectedBook}</b></p>
            )}

            <div className="d-flex justify-content-center flex-wrap">
                {booksMapped}
            </div>
        </>
    );
};

export default Books;
