import { Link } from 'react-router-dom'
import '../../assets/bootstrap.min.css'
import './ItemListContainer.css'

export default function ItemListContainer({bicicleta, itemID}) {
    return (
        <>
            <div className='col-md-4 card'>
                <img src={bicicleta.image} alt={bicicleta.name} />
                <h2>{bicicleta.name}</h2>
                <p>Categoria: {bicicleta.category}</p>
                <p>${bicicleta.price}</p>
                <button>
                    <Link to={`/item/${itemID}`}>Ver Detalles</Link>
                </button>
            </div>
        </>
    )
}