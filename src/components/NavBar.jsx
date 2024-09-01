import './NavBar.css'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar({ }) {
    const misEstilos = {
        backgroundColor: 'gray',
        border: 0,
        borderRadius: 5,
        fontSize: 25,
        pointer: true,
    }
    const links = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <>
            <nav className='navBar' style={{ display: 'flex', justifyContent:'space-between', margin:20}}>
                <div>
                    <Link style={{ display: 'flex', justifyContent: 'flex-start', width: '25%' }} to={'/'}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '25%' }}>
                            <img className='logotipo' src='/logo-bike.png' alt="logo" />
                            {/* <h1 style={{ color: '#555555', fontFamily: 'arial', display: 'flex', alignItems: 'center', margin: 'auto' }}>P-FIXIE-T</h1> */}
                        </div>
                    </Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', margin: 'auto', gap: 20 }}>
                    <button style={misEstilos}>
                        <Link style={links} to={'/category/pista'}>Bicicletas de Pista</Link>
                    </button>
                    <button style={misEstilos}>
                        <Link style={links} to={'/category/ruta'}>Bicicletas de Ruta</Link>
                    </button>
                    <button style={misEstilos}>
                        <Link style={links} to={'/category/cuadro'}>Cuadros</Link>
                    </button>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}