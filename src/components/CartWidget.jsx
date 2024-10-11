import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './Context/CartContext'

export default function CartWidget() {
    const imgStyle = {
        height: 50,
        width: 50,
    }

    const {cart} = useContext(CartContext);
    // const cartLength = cart ? cart.length : 0;
    const cartLength = cart ? cart.reduce((acc, item) => acc + item.cantidad, 0) : 0;

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Link to={'/cart'}>
                    <img style={imgStyle} src="/shopping-cart.png" alt="shopping-cart" />
                {cartLength}
                </Link>
            </div>
        </>
    )
}