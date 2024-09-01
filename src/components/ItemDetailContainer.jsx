import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBike } from '../asyncMock';

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchProducto = async () => {
            const bike = await getBike(id);
            setItem(bike)
        };
        fetchProducto();
    }, [id]);

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='card'>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>Marca: {item.brand}</p>
                    <p>Categoria: {item.category}</p>
                    <p>${item.price}</p>
                </div>
            </div>
        </>
    )
}