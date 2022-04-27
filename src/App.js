import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import Pplpage from './routes/ppl/Pplpage';
import Home from './routes/home/Home';
import Pagenotfound from "./Component/errorpages/Pagenotfound";
import Footer from './routes/footer/Footer';
import Header from './routes/navigation/Header';
import { CartProvider } from './context/cartContext';

function App() {

  return (
   <>
        <CartProvider>
        <Routes>
          <Route path="/" element={<Header/>} >
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="pplpage" element={<Pplpage />} />
            <Route path="*" element={<Pagenotfound />} />
          </Route>
        </Routes>
        </CartProvider>
        <Footer></Footer>
   </>
  );
}

export default App;
