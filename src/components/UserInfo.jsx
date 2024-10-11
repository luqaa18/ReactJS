import React, { useState } from 'react'

export default function UserInfo({ carrito, createNewOrder }) {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const formularioCompleto = () => {
        return nombre !== '' && apellido !== '' && email !== '' && telefono !== '';
    }

    const handleSubmit = () => {
        const order = {
            buyer: {
                nombre,
                apellido,
                email,
                telefono
            },
            items: carrito,
            creadoEn: new Date()
        }
        createNewOrder(order)
    }

    return (
        <div style={{ width: '500px', margin: '50px', border: '2px solid black', padding: '20px' }}>
            <h3 >Datos del usuario</h3>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30, margin: '50px 0' }} >
                <input type='text' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input type='text' placeholder='Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='text' placeholder='Telefono' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div>
                <button onClick={handleSubmit} disabled={!formularioCompleto()}>Finalizar compra</button>
            </div>
        </div>
    )
}