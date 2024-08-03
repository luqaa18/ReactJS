import './NavBar.css'
import ButtonComponent from "./ButtonComponent";

export default function NavBar({}){
    return (
        <>
        <nav className = 'navBar'>
        <ButtonComponent texto='Home' color= 'blue'/>
        <ButtonComponent texto='Products' color= 'blue'/>
        <ButtonComponent texto='About us' color= 'blue'/>
        </nav>
        </>
    )
}