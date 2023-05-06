import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Input } from 'antd';

function AddProductWindow({ show, onClose, onSubmit }) {
  const refresh = () => window.location.reload(true);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [imgPath, setImgPath] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, price, category, imgPath });
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price:</Form.Label>
            <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category:</Form.Label>
            <Form.Control as="textarea" rows={3} value={category} onChange={(e) => setCategory(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image:</Form.Label>
            <Input value={imgPath} onChange={(e) => setImgPath(e.target.value)} />
          </Form.Group>
          <Button type="submit" variant="success" onClick={refresh}>Add Product</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddProductWindow;