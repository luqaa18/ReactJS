import { useContext, useEffect, useState } from 'react';
import { CartContext } from './Context/CartContext'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import '../styles/ItemDetailContainer.css'
import { getDoc, getFirestore, doc } from 'firebase/firestore';

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();
    const { cart, addItem } = useContext(CartContext)

    const onAdd = (cantidad) => {
        const productoConCantidad = { ...item, cantidad };
        console.log(productoConCantidad);
        addItem(productoConCantidad);
    }

    useEffect(() => {
        const db = getFirestore();
        const getItem = doc(db, 'bicicletas', id);

        getDoc(getItem).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() })
            }
        })
    }, [id]);

    return (
        <>
            <div className='mainDiv'>
                <div className='card'>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>Marca: {item.brand}</p>
                    <p>Categoria: {item.category}</p>
                    <p>U$D {item.price}</p>
                    <ItemDetail price={item.price} stock={item.stock} agregarAlCarrito={onAdd} />
                </div>
            </div>
        </>
    )
}