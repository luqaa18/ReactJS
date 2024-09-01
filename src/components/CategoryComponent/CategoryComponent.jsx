import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../../asyncMock';

export default function CategoryComponent() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const allProducts = await getCategory(id);
      setItem(allProducts);
    };
    fetchCategory();
  }, [id]);

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Estas en la categoría: {id}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {item.map(item => (
          <div key={item.id} className='col-md-4 card'>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Marca: {item.brand}</p>
            <p>Categoria: {item.category}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}
