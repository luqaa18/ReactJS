import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCategory } from '../../asyncMock';

export default function CategoryComponent() {
  const [item, setItem] = useState([]);
  const { idCat } = useParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const allProducts = await getCategory(idCat);
      setItem(allProducts);
    };
    fetchCategory();
  }, [idCat]);


  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Estas en la categoría: {idCat}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
        {item.map(item => (
          <div key={item.id} className='col-md-4 card'>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Marca: {item.brand}</p>
            <p>Categoria: {item.category}</p>
            <p>${item.price}</p>
            <button>
              <Link to={`/item/${item.id}`}>Ver Detalles</Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
