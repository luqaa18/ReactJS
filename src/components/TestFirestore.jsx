import { getFirestore } from "firebase/firestore"
import { useState } from "react"

export default function TestFirestore(){

        const [product,setProduct]=useState(null)
    return(
        <>
        <div>
            <h1>Producto</h1>
            {
                product ? (
                    <div>
                        <p>Nombre: {product.name}</p>
                        <p>Precio: {product.price}</p>
                        <p>Stock: {product.stock}</p>
                        <img src={product.image} style={{width:'50%'}} alt="" />
                    </div>
                ) : (
                    <h3>Producto no encontrado</h3>
                )
            }
        </div>
        </>
    )
}