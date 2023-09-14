import React from 'react';
import './App.css';
import { Button, Alert, Badge, Navbar, Nav, NavDropdown, Row, Card } from 'react-bootstrap';
import Image1 from './Images/logo.jpg';
import Image2 from './Images/banner1.jpg';
import Jumbotron from './Components/Jumbotron';
import Brands from './Components/Brands';
import End from './Components/End';
import Banner from './Components/Banner';



function App() {
  return (
    <div className="App">

      <div className="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"> <img src={Image1} height="60px" alt="" /> Justice League</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item mx-2">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>

      {/* <div className="row">
        <div className="col">
          <Nav className="nav navbar-expand-lg bg-info shadow">
            <a href="" className="navbar-brand mx-4 text-reset"><img height="60px" className='mx-2' src={Image1} /> <span className='text-danger' >Justice</span>  League </a>
            <ul className="nav m-auto ">
              <li class="nav-item">
                <a class="nav-link text-reset" aria-current="page" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-reset" aria-current="page" href="#">How it works</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-reset" aria-current="page" href="#">Why Nice Commerce</a>
              </li>
            </ul>
          </Nav>
        </div>
      </div> */}

      <Jumbotron />

      <Banner />

      <Brands />

      <End />

      

    </div>
  );
}

export default App;

