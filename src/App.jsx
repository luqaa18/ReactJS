import './App.css'
import Inicio from './components/Inicio.jsx'
import ItemList from './components/ItemList.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import NavBar from './components/NavBar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>  
        <Route exact path='/productos' element={<ItemList/>}/>
        <Route exact path='/producto/:prodID' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
