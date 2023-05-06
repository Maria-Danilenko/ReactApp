import LoginWindow from './LoginWindow';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/reducers/authSlice';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const loginButtonText = auth.isLoggedIn ? 'Log out' : 'Log in';
  const loginButtonColor = auth.isLoggedIn ? 'danger' : 'success';

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLoginOK = async () => {
    dispatch(login());
  };

  const handleLogout = async () => {
    dispatch(logout());
  };

  const handleLogin = async () => {
    if (auth.isLoggedIn) {
      handleLogout();
    } else {
      setShowModal(true);
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
            {auth.isLoggedIn ? null : <button type="button" className='btn btn-success me-2'>Sing Up</button>}
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