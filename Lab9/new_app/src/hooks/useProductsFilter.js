import { useState, useCallback } from 'react';

const useProductFilter = (initialProducts) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  const filterProducts = useCallback((category) => {
    const newFilteredProducts = initialProducts.filter(
      (product) => product.category === category
    );
    setFilteredProducts(newFilteredProducts);
  }, [initialProducts]);

  const resetFilter = useCallback(() => {
    setFilteredProducts(initialProducts);
  }, [initialProducts]);

  return { filteredProducts, filterProducts, resetFilter };
};

export default useProductFilter;