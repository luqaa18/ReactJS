import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Item from "./Item.jsx";
import { useParams } from "react-router-dom";

export default function ItemList() {

  const { categoryId } = useParams();

  const [allBikes, setAllBikes] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    if(categoryId) {
      const bikesCollection = query(collection(db, 'bicicletas'), where('category', '==', categoryId))

      getDocs(bikesCollection).then((snapshot)=>{
        if (snapshot.size === 0) {
          console.log("No hay productos")
        }
        setAllBikes(snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
      })
    } else {
      const bikesCollection = collection(db, 'bicicletas');
      
      getDocs(bikesCollection).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log('No hay productos')
        } else {
          setAllBikes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      })
    }
  }, [categoryId]);

  return (
    <>
      {allBikes.map(bici =>
        <Item
          key={bici.id}
          id={bici.id}
          name={bici.name}
          category={bici.category}
          price={bici.price}
          img={bici.image}
        />
      )}
    </>
  );
}