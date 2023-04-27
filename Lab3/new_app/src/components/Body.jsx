import React, { useState } from 'react';
import './Styles/Body.css'
import Menu from './Menu'
import Products from './ProductsWrap'
import ShoppingCart from './ShoppingCart'

export default function Body(props) {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const counter=()=>{
    setCount(count + 1)
  }
  const addProduct = (id) => {
    const existingObjIndex = products.findIndex(product => product.id === id);
    if (existingObjIndex !== -1){
      const updatedProducts = [...products];
      updatedProducts[existingObjIndex].quantity += 1;
      setProducts(updatedProducts);
      return
    }
    else {
      setProducts([
          ...products,
          props.products.find(product=>product.id === id)
        ])
    }  
  }

  const deleteProduct = (_id) => {
    setProducts(oldProducts => {
      return oldProducts.filter(({id})=>id !== _id)
    })
  }

  return (
    <div style={flexxx}>
      <Menu/>
      <div style={wrapper}>
        <Products products={props.products} addProduct={addProduct}/>
        <ShoppingCart products={products} deleteProduct={deleteProduct}/>
      </div>
    </div>
  )
}
const flexxx = {
  display: "flex",
}
const wrapper = {
  display: "flex",
  justifyContent: 'space-between',
  width: '100%',  
}
