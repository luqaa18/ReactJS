import { useState, useEffect } from "react";
import ItemListContainer from "./ItemListContainer.jsx";
import { getBooks } from '../asyncMock.js';

export default function ItemList() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    getBooks().then((datosRecibidos) => setLibros(datosRecibidos));
  }, []);

  return (
    <>
      <div className='container justify-content-center align-items-center'>
        <div className='row justify-content-center align-items-center'>
          {libros.map(libro => 
            <ItemListContainer key={libro.id} libro={libro} productoID={libro.id}/>
          )}
        </div>
      </div>
    </>
  );
}