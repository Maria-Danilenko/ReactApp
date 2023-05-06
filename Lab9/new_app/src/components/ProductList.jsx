import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { getAllProducts } from "../api/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const columns = [  
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Image",
      dataIndex: "imgPath",
      key: "imgPath",
    },
  ];

  return <Table columns={columns} dataSource={products} />;
};

export default ProductList;
