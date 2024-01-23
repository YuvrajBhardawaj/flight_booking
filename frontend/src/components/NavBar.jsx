import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function NavBar(props) {
  const [checkUser,setCheckUser]=useState(false)
  const [id,setId]=useState('')
  useEffect(() => {
    checkUserStatus();
    setInterval(checkUserStatus, 2000);
  }, []); 

  const checkUserStatus = () => {
    axios.get('/api/check')
      .then((res) => {
        if (res.data.success) {
          setId(res.data.id);
          setCheckUser(res.data.success);
        }
        else{
          setCheckUser(false)
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary opacity-75">
      {checkUser?
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img src={props.logo} alt="" width={100} />
        </Link>
        <h4>ID : {id}</h4>
      </div>
      :
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img src={props.logo} alt="" width={100} />
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
      </div>}
    </nav>
  );
}

export default NavBar;
