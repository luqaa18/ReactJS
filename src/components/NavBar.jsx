import './NavBar.css'
import ButtonComponent from "./ButtonComponent";
import CartWidget from './CartWidget';
export default function NavBar({}){
    return (
        <>
        <nav className = 'navBar'>
        <img className = 'logotipo' src='../public/logo-bike.png' alt="logo" />
        <h1  style={{color:'#555555', fontFamily:'arial', margin: 0}}>P FIXIE T</h1>
        <ButtonComponent texto='Servicios' color= 'pink'/>
        <ButtonComponent texto='Paquetes' color= 'pink'/>
        <ButtonComponent texto='Insumos' color= 'pink'/>
        <CartWidget/>
        </nav>
        </>
    )
}