import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img src="../../images/logo.jpeg" style={{ width: "50%" }} alt="missing-image"/>
              </a>
              <ul className="nav">
                <li><Link className="active" to={"/"}>Home</Link></li>
                <li><Link to={"/services"}>Services</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/about"}>Contact</Link></li>
              </ul>
              <a className='menu-trigger'>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar;