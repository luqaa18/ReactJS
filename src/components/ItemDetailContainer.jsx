import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBikes } from '../asyncMock';

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState({});
    const { prodID } = useParams();

    useEffect(() => {
        const fetchProducto = async () => {
            const bike = await getBikes(prodID);
            setProducto(bike)
        };
        fetchProducto();
    }, [prodID]);

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='card'>
                    <img src={producto.image} alt={producto.name} />
                    <h2>{producto.name}</h2>
                    <p>Marca: {producto.brand}</p>
                    <p>Categoria: {producto.category}</p>
                    <p>${producto.price}</p>
                </div>
            </div>
        </>
    )
}