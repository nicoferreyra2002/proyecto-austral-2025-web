import { Form } from "react-bootstrap";

const BooksSearch = ({ onSearchChange }) => {
    return (
        <Form.Group className="mb-3 w-100 px-3" controlId="searchBook">
            <Form.Control
                type="text"
                placeholder="Buscar libro..."
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </Form.Group>
    );
};

export default BooksSearch;
