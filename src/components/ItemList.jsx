export default function ItemList({listadoItems}){



    return(
        <>
        <h2>Bicicletas</h2>
        <div>
            <ul>
                {listadoItems.map((item)=>(
                    <li key={item.id}>
                        {item.brand} - {item.type} | U$D {item.price}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}