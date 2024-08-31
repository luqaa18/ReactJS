import { Link } from 'react-router-dom'
import '../assets/bootstrap.min.css'
import './ItemListContainer.css'
export default function ItemListContainer({libro, productoID}) {

    return (
        <>
            <div className='col-md-4 card'>
                <img src={libro.image} alt={libro.name} />
                <h2>{libro.name}</h2>
                <p>Categoria: {libro.category}</p>
                <p>${libro.price}</p>
                <button>
                    <Link to={`/producto/${productoID}`}>Ver Detalles</Link>
                </button>
            </div>
        </>
    )
}