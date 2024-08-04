import './NavBar.css'
import ButtonComponent from "./ButtonComponent";
import CartWidget from './CartWidget';

export default function NavBar({}){
    return (
        <>
        <nav className = 'navBar'>
        <h1  style={{color:'#555555', fontFamily:'arial'}}>Valentime Nails</h1>
        <ButtonComponent texto='Servicios' color= 'pink'/>
        <ButtonComponent texto='Paquetes' color= 'pink'/>
        <ButtonComponent texto='Insumos' color= 'pink'/>
        <CartWidget/>
        </nav>
        </>
    )
}