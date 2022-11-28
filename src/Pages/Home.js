import React from 'react'
import '../Styles/Home.css'
import $ from 'jquery';
import './HomeDark.js'
import img from '../assets/vector.png'
import { Link } from 'react-router-dom';
export default function Home() {
   
    return ( 
        <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 bgcolor">
      <div className="container">
        <a className="navbar-brand" href="#">D Farm</a>
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
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              
            <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
         <Link className="nav-link text-white" to="/services">Services</Link>
            </li>
            <li className="nav-item">
         <Link className="nav-link text-white" to="/about">Community</Link>
            </li>
            <li className="nav-item">
         <Link className="nav-link text-white" to="/appointment">Appointment</Link>
            </li>
            <li className="nav-item" id='special'>
         <Link className="nav-link text-white" to="/appointment">Contact</Link>
            </li>
            <li className="nav-item">
         <Link className="nav-link text-white" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center"
    >
      {/* <div className="content text-center">
        <h1 className="text-white">WEB ZONE</h1>
      </div> */}
      <div className='content'>

              <h1>D Farms</h1>
              <p></p>
    
          
      </div>
      
    </div>

        </>
     );
}
