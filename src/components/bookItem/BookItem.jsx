import { Card, } from "react-bootstrap";


const BookItem = ({
    title,
    author,
    rating,
    pageCount,
    imageUrl,
    available = false
}) => {

    return (
        <Card className="mx-3">
            <Card.Img
                height={400}
                src={imageUrl}
                variant="top"
            />
            <h1>{title}</h1>
            <h3>{author}</h3>
            <p>{rating} estrellas</p>
            <p>{pageCount} páginas</p>
            <p>{available ? "Disponible" : "No disponible"}</p>
        </Card>
    )
}

export default BookItem;