import './NavBar.css'
import { Link } from 'react-router-dom';
import ButtonComponent from "./ButtonComponent";
import CartWidget from './CartWidget';

export default function NavBar({ }) {
    const misEstilos = {
        backgroundColor: 'pink',
        border: 0,
        borderRadius: 5,
        fontSize: 25,
        pointer: true,
    }
    const links = {
        color: 'black',
        textDecoration: 'none'
    }
    return (
        <>
            <nav className='navBar'>
                <img className='logotipo' src='/logo-bike.png' alt="logo" />
                <h1 style={{ color: '#555555', fontFamily: 'arial', margin: 0 }}>P FIXIE T</h1>
                <button style={misEstilos}>
                    <Link style={links} to={'/'}>Inicio</Link>
                </button>
                <button style={misEstilos}>
                    <Link style={links} to={'/productos'}>Productos</Link>
                </button>
                <button style={misEstilos}>
                    <Link style={links} to={'/detalles'}>Detalles</Link>
                </button>
                <CartWidget />
            </nav>
        </>
    )
}