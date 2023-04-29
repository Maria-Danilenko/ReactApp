import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import ProductDetails from './components/ProductDetails';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductProvider from './components/ProductContext';

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;