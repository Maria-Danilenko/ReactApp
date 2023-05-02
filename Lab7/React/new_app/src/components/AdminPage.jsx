import React, {useState} from "react";
import { Layout } from "antd";
import ProductList from "./ProductList";
import { Button } from 'react-bootstrap';
import AddProductWindow from "./AddProductWindow";
import {addProduct} from '../api/api'
import { PlusCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;
const AdminPage = () => {
    const [showModal, setShowModal] = useState(false);

const handleShowModal = () => {
  setShowModal(true);
};

const handleCloseModal = () => {
  setShowModal(false);
};
    return (
        <Layout>
            <Content>
                <ProductList />
            </Content>
                <div>
            <Button type="button" className="btn btn-success" onClick={handleShowModal}>               
                Add Product <PlusCircleOutlined /></Button>
            <AddProductWindow show={showModal} onClose={handleCloseModal} onSubmit={addProduct} />
            </div>
        </Layout>       
    );
};
export default AdminPage;