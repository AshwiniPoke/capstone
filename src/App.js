import './App.css';
import Navbar from './Layout/Navigation/navbar';
import Product from './Pages/Product-listing/product-listing';
import Footer from './Layout/Footer/footer';
import {Route, Routes} from 'react-router-dom';
import ProductDetail from './Pages/Product-detail/product-detail';
import ShoppingCart from './Pages/Cart/ShoppingCart';
import Home from './Pages/Home/homepage';
import Checkout from './Pages/checkout/checkout';
import SuccessOrder from './Pages/Order/orderSuccessful';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Product />} />
      <Route exact path="/products/men" element={<Product />} />
      <Route exact path="/products/women" element={<Product />} />
      <Route exact path="/products/electronics" element={<Product />} />
      <Route exact path="/products/jewelery" element={<Product />} />

      <Route exact path="/products/:id" element={<ProductDetail />}/>
      <Route exact path="/cart" element={<ShoppingCart />}/>
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/ordersuccess" element={<SuccessOrder />} />
     
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
