import "./card.css";

interface CardProps {
    id: number, // Add the unique ID
    price: number,
    title: string,
    image: string,
    onDelete: (id: number) => void // Add the delete handler
}

export function Card({ id, price, image, title, onDelete }: CardProps) {
    return(
        <div className="card">
            <img src={image} />
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
            {/* Add the delete button */}
            <button className="delete-button" onClick={() => onDelete(id)}>
                Excluir
            </button>
        </div>
    );
}