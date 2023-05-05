import LoginWindow from './LoginWindow';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [loginButtonText, setLoginButtonText] = useState("Log in");
  const [loginButtonColor, setLoginButtonColor] = useState("success");

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLoginOK = async () => {
    setLoginButtonText("Log out");
    setLoginButtonColor("danger");
  };
  const handleLogin = async () => {
    if (loginButtonColor === "success") {
      setShowModal(true);
    } else {
      setLoginButtonText("Log in");
      setLoginButtonColor("success");
      setShowModal(false);
    }
  };

  return (
    <header className="border-bottom">
      <nav className="navbar navbar-light bg-light">
        <div className="d-inline-flex m-2">
          <Link className="fw-bold nav-link p-2" to="/">JapShop</Link>
          <Link className="nav-link p-2 ms-4" to="/">Home</Link>
          <Link className="nav-link p-2" to="/about">About</Link>
          <Link className="nav-link p-2" to="/feedback">Feedback</Link>
          <Link className="nav-link p-2" to="/admin">Admin</Link>
        </div>
        <div className="me-3">
          <Link to="/register">
            <button type="button" className='btn btn-success me-2'>Sing Up</button>
          </Link>
          <Button type="button" className={`btn btn-${loginButtonColor}`} onClick={handleLogin}>
            {loginButtonText}
          </Button>
        </div>
        <LoginWindow show={showModal} onClose={handleCloseModal} onLogin={handleLoginOK} />
      </nav>
    </header>
  );
}