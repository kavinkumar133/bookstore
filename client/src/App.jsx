import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Register from './Component/Register';
import Product from './Component/Product';
import CartPage from './Component/CartPage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/product' element={<Product/>}/>
          <Route path="/cart" element={<CartPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
      
    </>
  );
}

export default App;


