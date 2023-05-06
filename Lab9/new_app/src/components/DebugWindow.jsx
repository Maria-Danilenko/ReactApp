import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

function DebugWindow({ show, onClose }) {
  const [history, setHistory] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setHistory(prevHistory => [...prevHistory, location.pathname]);
  }, [location]);

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Debug History</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="list-group">
          {history.map((path, index) => (
            <li className="list-group-item" key={index}>{path}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DebugWindow;