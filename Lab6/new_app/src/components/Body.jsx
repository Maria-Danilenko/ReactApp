import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles/body.module.css';
import Products from './ProductsWrap'
import ShoppingCart from './ShoppingCart'
import { ProductContext } from './ProductContext';
import useProductFilter from '../hooks/useProductsFilter'
import CategoryFilter from './CategoryFilter';

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

export default function Body() {
  const propsProducts = useContext(ProductContext);
  const [products, addProduct, deleteProduct] = useProducts(propsProducts);

  const { filteredProducts, filterProducts, resetFilter } = useProductFilter(propsProducts);
  const categories = [...new Set(propsProducts.map((product) => product.category))];

  const location = useLocation();
  const { key } = location;

  useEffect(() => {
    resetFilter();
  }, [key, resetFilter]);

  return (
    <div className={styles.flex}>
      <CategoryFilter categories={categories} onFilter={filterProducts} onReset={resetFilter} />
      <div className={styles.wrapper}>          
        <Products addProduct={addProduct} filteredProducts={filteredProducts}/>
        <ShoppingCart products={products} deleteProduct={deleteProduct}/>
      </div>
    </div>
  )
}