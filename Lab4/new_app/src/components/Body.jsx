import { useState, useEffect } from 'react';
import './Styles/Body.css'
import Menu from './Menu'
import Products from './ProductsWrap'
import ShoppingCart from './ShoppingCart'

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === 'function') {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function useProducts(initialValue) {
  const [products, setProducts] = useLocalStorage('products', initialValue);

  const addProduct = (id) => {
    const existingObjIndex = products.findIndex(product => product.id === id);
    if (existingObjIndex !== -1){
      const updatedProducts = [...products];
      updatedProducts[existingObjIndex].quantity += 1;
      setProducts(updatedProducts);
      return;
    }
    else {
      setProducts([
        ...products,
        initialValue.find(product=>product.id === id)
      ]);
    }  
  }

  const deleteProduct = (_id) => {
    setProducts(oldProducts => {
      return oldProducts.filter(({id})=>id !== _id)
    })
  }

  return [products, addProduct, deleteProduct];
}

export default function Body(props) {
  const [count, setCount] = useState(0);
  const [products, addProduct, deleteProduct] = useProducts(props.products);

  const counter=()=>{
    setCount(count + 1);
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
