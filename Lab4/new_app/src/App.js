import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Menu from './components/Menu';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const products = [
    {
      name: "Японська їжа і солодощі",
      price: 100,
      id: 1,
      quantity: 1
    },
    {
      name: "Сумки",
      price: 1000,
      id: 2,
      quantity: 1
    },
    {
      name: "Рюкзаки",
      price: 1200,
      id: 3,
      quantity: 1
    },
    {
      name: "Манга",
      price: 170,
      id: 4,
      quantity: 1
    },
    {
      name: "Ранобе",
      price: 150,
      id: 5,
      quantity: 1
    },
    {
      name: "Ще якийсь продукт",
      price: 999,
      id: 6,
      quantity: 1
    }
  ];

  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body products={products} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;