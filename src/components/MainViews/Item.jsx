import { Link } from 'react-router-dom'

export default function Item({ id, name, category, price, img }) {

    return (
        <div className="col-md-4 card">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>Categoria: {category}</p>
            <p>Precio: U$D {price}</p>
            <button>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </button>
        </div>
    )
}