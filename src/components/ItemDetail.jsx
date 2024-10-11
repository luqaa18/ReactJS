import { useState } from "react"

export default function ItemDetail({ price, stock, agregarAlCarrito }) {
    const [count, setCount] = useState(1);

    const handleClickInc = () => {
        // count < stock && setCount(count + 1);
        if (count < stock) {
            setCount(count + 1);
        }
    }
    const handleClickDec = () => {
        // count > 1 && setCount(count - 1);
        if(count > 1) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <div>
                <button onClick={handleClickDec}>-</button>
                <span>{count}</span>
                <button onClick={handleClickInc}>+</button>
            </div>
            {count !== 0 && <p>Total: U$D {price * count}</p>}
            <button onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
        </>
    )
}

