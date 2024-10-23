import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import FetchedData from './context/FetchedData';
import Contact from './pages/Contact';
import Search from './pages/Search';



function App() {
  return (
    <FetchedData>
      <BrowserRouter>
        <Routes>
          <Route index exact path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/product/details/:id' element={<ProductDetails />} />
          <Route path='/shop/:id?' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search/result' element={ <Search /> } />
        </Routes>
      </BrowserRouter>
      </FetchedData>
  );
}

export default App;
