import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemList from './components/HomeView/ItemList.jsx'
import CategoryComponent from './components/CategoryComponent/CategoryComponent.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemList/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/category/:id' element={<CategoryComponent/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
