import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DebugWindow from './DebugWindow';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="border-top">
        <div className='d-flex justify-content-between'>
          <footer className="m-2 text-muted">©2023, JapShop</footer>
        <div>
          <Button type="button" className="btn btn-secondary" onClick={handleShowModal}>Show Debug Window</Button>
          <DebugWindow show={showModal} onClose={handleCloseModal} />
        </div>
      </div>
    </div>
  )
}