import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import spiner from './logo.png';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={spiner}
              alt="logo"
              style={{ width: "80px", height: "50px", textAlign: "center" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"  
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Your Link components with different colors */}
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" >
                  <i className="fa fa-home" style={{ fontSize: "36px" }}></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/business" >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
           
        </div>
      </nav>
    );
  }
}

export default NavBar;
