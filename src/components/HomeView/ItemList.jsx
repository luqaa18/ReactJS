import { useState, useEffect } from "react";
import { getBikes } from '../../asyncMock.js';
import ItemListContainer from "./ItemListContainer.jsx";

export default function ItemList() {
  const [bicicletas, setBicicletas] = useState([]);

  useEffect(() => {
    getBikes().then((datosRecibidos) => setBicicletas(datosRecibidos));
  }, []);

  return (
    <>
    <h1 style={{textAlign:'center', padding:25}}>Bienvenidos a P-Fixie-T</h1>
      <div className='container justify-content-center align-items-center'>
        <div className='row justify-content-center align-items-center'>
          {bicicletas.map(bici => 
            <ItemListContainer key={bici.id} bicicleta={bici} itemID={bici.id}/>
          )}
        </div>
      </div>
    </>
  );
}