import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { useState, useEffect } from 'react';
import ItemList from './components/ItemList';

function App() {

  const items = [
  {
    id:1,
    brand: 'roselli',
    type:'fixie',
    price: 500
  },
  {
    id:2,
    brand: 'specialized',
    type:'route',
    price: 1500
  },
  {
    id:3,
    brand: 'hispano france',
    type:'route',
    price: 600
  },
  {
    id:4,
    brand: 'look',
    type:'fixie',
    price: 2000
  }
  ]

  const itemsPromesa = new Promise ((resolve,reject)=> {
    setTimeout(()=> {
      resolve(items);
    },2000);
  });

  // Información devuelta del server guardada en un array local
  const[allItems,setAllItems] = useState([]);

  useEffect(() => {
    itemsPromesa
    .then((respuesta)=> setAllItems(respuesta))
    .catch((error)=>console.log(error));
  },[]);

  return(
    <>
    <NavBar/>
    <ItemListContainer greeting='💅 Bienvenido a Valentime Nails 💅'/>
    <ItemList listadoItems = {allItems}/>
    </>
  )
}

export default App
