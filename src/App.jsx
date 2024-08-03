import './App.css'
import TituloComponente from "./components/TituloComponente";

function App() {
const misEstilos = {
  color: 'red',
  backgroundColor: 'blue',
}
  return(
    <>
    <h1  style={{color:'#555555', fontFamily:'arial'}}>En linea</h1>
    <TituloComponente texto='Este texto esta creado con una prop'/>
    <TituloComponente texto='Puedo reutilizar el componente, y funciona perfectamente'/>
    <h2 style={misEstilos}>Desde una constante</h2>
    </>
  )
}

export default App
