import './bootstrap.min.css'
import './ItemListContainer.css'
export default function ItemListContainer({libro}){

    return(
        <>
        <div className='col-md-4 card'>
            <img src={libro.image} alt={libro.name} />
            <h2>{libro.name}</h2>
            <p>Categoria: {libro.category}</p>
            <p>${libro.price}</p>
            <button>Comprar</button>
        </div>
        </>
    )
}