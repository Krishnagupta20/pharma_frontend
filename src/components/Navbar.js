import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import img1 from "../assets/photo1.png";

export default function Navbar() {
  const divStyle = {
    width: "35px",
  };
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      setIsAuth(true); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    setIsAuth(false);
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary my-2 border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="#">
            <img src={img1} style={divStyle} alt="MediStock" />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a
                  className="nav-link active mx-2"
                  aria-current="page"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/dashboard">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/contact">
                  ContactUS
                </a>
              </li>
            </ul>
              <button className="btn btn-outline-light mx-2" onClick={handleLogout}>
                Logout
              </button>
          </div>
        </div>
      </nav>
    </>
  );
}
