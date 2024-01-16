import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary opacity-75">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img src="indigo-vector-logo-2022-removebg-preview.png" alt="" width={100} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={'/login'} className="nav-link">
                <button className='btn btn-primary'>Login</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/signup'} className="nav-link">
                <button className='btn btn-primary'>SignUp</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
