import { useContext } from 'react';
import { CartContext } from '../Context/CartContext'
import UserInfo from '../UserInfo';

export default function CartView() {
    const { cart, createNewOrder, clear } = useContext(CartContext);

    const totalCompra = cart.reduce((acc, item) => acc + (item.price * item.cantidad),0)

    const clearCart= () => {clear()};
    return (
        <>
            <h3 style={{ textAlign: 'center' }}>Tu carrito</h3>
            {cart.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Carrito vacio</p>
            ) : (
                <div style={{ margin: '0', padding: '0' }}>
                    {cart.map((item, index) => (
                        <div key={index} style={{ borderBottom: '2px solid grey', display: 'flex', justifyContent: 'space-around', flexWrap: '', margin: '50px', padding: '5px' }}>
                            <img src={item.image} alt={item.name} style={{ width: '10%' }} />
                            <div>
                            </div>
                            <p style={{ margin: 'auto', width: '500px', flexWrap: 'wrap' }}>{item.name}</p>
                            <p style={{ margin: 'auto' }}>Price: U$D {item.price}</p>
                            <p style={{ margin: 'auto' }}>X {item.cantidad}</p>
                            <p style={{ margin: 'auto' }}>Total: U$D {item.cantidad * item.price}</p>
                        </div>
                    ))}
                    <div style={{ borderBottom: '2px solid grey', display: 'flex', justifyContent: 'flex-end', flexWrap: '', margin: '50px', padding: '5px', gap:'40px' }}>
                        <button onClick={clearCart}>Vaciar Carrito</button>
                        <p>Total: U$D {totalCompra}</p>
                    </div>
                </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <UserInfo carrito={cart} createNewOrder={createNewOrder} />
            </div>
        </>
    );
}
