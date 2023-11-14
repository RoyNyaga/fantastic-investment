import React from 'react';

const NavBar = () => {

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <h1>Fantastic</h1>
              </a>
              <ul className="nav">
                <li><a href="index.html" className="active">Home</a></li>
                <li><a href="properties.html">Services</a></li>
                <li><a href="property-details.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
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