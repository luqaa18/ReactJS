import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/Context/CartContext.jsx'
import ItemListContainer from './components/MainViews/ItemListContainer.jsx'
import NavBar from './components/NavBar.jsx'
import CartView from './components/MainViews/CartView.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import './styles/App.css'

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<CartView />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
