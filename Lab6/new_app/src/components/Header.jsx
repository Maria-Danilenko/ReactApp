import React from 'react'
import LoginControl from './LoginControl'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="border-bottom">
        <nav className="navbar navbar-light bg-light">
            <div className="d-inline-flex m-2">
                <Link className="fw-bold nav-link p-2" to="/">JapShop</Link>
                <Link className="nav-link p-2 ms-4" to="/">Home</Link>
                <Link className="nav-link p-2" to="/about">About</Link>
                <Link className="nav-link p-2" to="/feedback">Feedback</Link>
            </div>
            <div className='me-3'><LoginControl/></div>            
        </nav>
    </header>
  )
}
