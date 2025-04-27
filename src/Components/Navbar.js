import { Link } from "react-router-dom";

import logo from './Images/logo2.png';

import React from 'react'

export default function Navbar() {
  return (
    <div className="fixed-top">
      <img src={logo} alt="logo" className="position-absolute" style={{ height: "98px" ,top:"0px", zIndex : "2", width : "270px"}} />
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background : "black",height : "100px"}}>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft : "250px"}}>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{fontSize : "18px"}}>
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item" style={{fontSize : "18px"}}>
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item" style={{fontSize : "18px"}}>
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item" style={{fontSize : "18px"}}>
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item" style={{fontSize : "18px"}}>
                  <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item" style={{fontSize : "18px"}}>
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item" style={{fontSize : "18px"}}>
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item" style={{fontSize : "18px"}}>
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item" style={{fontSize : "18px"}}>
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                
              </ul>
              
            </div>
          </div>
        </nav>
    </div>
  )
}

