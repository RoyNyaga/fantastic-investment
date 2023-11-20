import React from 'react';
import NavBar from './navbar';

const ServicePage = () => {

  return (
    <div>
      <NavBar />
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Our Services</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="services-body-wrapper container my-5">
        <div className="row services-row my-5 py-5">
          <div className="col-md-5">
            <img src="../../images/deal-01.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-md-7 py-5 px-1">
            <h2 className="text-center">Importation</h2>
            <p>Random text should go here, random text should go here, Random text should go here, Random text should go here</p>
          </div>
        </div>

        <div className="row services-row py-5 px-1">
          <div className="col-md-5">
            <img src="../../images/deal-01.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-md-7 p-5">
            <h2 className="text-center">Importation</h2>
            <p>Random text should go here, random text should go here, Random text should go here, Random text should go here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage;