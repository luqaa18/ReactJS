import { useState, useEffect } from "react";
import ItemListContainer from "./ItemListContainer.jsx";
import {getBooks} from '../asyncMock.js';

// export default function ItemList(){
//     const [bicis,setBicis] = useState([]);

//     useEffect(()=> {
//         getBicis().then((datosRecibidos)=>setBicis(datosRecibidos));
//     },[]);

//     return (
//         <>
//         <div>
//             {bicis.map((bike)=>(
//             <ItemListContainer bici = {bike}/>
//             ))}
//         </div>
//         </>
//     );
// }

export default function ItemList() {
    const [libros, setLibros] = useState([]);
  
    useEffect(() => {
      getBooks().then((datosRecibidos) => setLibros(datosRecibidos));
    }, []);
  
    return (
      <>
      <div className='container p-4 justify-content-center align-items-center'>
        <div className= 'row p-4 justify-content-center align-items-center'>
          {libros.map((libro) => (
            <ItemListContainer libro={libro} />
          ))}
        </div>
      </div>
      </>
    );
  }