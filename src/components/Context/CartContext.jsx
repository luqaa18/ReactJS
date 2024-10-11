import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { createContext, useState } from 'react';

// Creamos el contexto
export const CartContext = createContext([]);

// Creamos el proveedor que dará acceso al contexto desde un componente
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState('')

  function addItem(producto) {
    setCart((prevCart) => {
        const productoExistente = prevCart.find((item) => item.id === producto.id);

        if (productoExistente) {
            const nuevaCantidad = productoExistente.cantidad + producto.cantidad;            
            if (nuevaCantidad > producto.stock) {
                alert('No puedes agregar más productos de los que hay en stock');
                return prevCart;
            }

            return prevCart.map((item) =>
                item.id === producto.id
                    ? { ...item, cantidad: nuevaCantidad }
                    : item
            );
        }
        return [...prevCart, producto];
    });
}
  const clear = () => {
    setCart([]);
}

  const createNewOrder = (order) => {

    const db = getFirestore();
    const orders = collection(db, 'order')

    addDoc(orders, order).then((snapshot) => {
      setOrderId(snapshot.id)

      const getDoc = doc(db, 'order', snapshot.id)

      updateDoc(getDoc, { orderId: snapshot.id })

      alert(snapshot.id)
    })
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, createNewOrder, clear }}>
      {children}
    </CartContext.Provider>
  );
}
