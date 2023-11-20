import React from "react";
import BestDealSection from "./bestDealsSection";
import NavBar from "./navbar";

const HomePage = () => {

  return (
    <div>
      <NavBar />
      <div className="main-banner d-flex align-items-center justify-content-center">
        <div>
          <h1 className="heading-styles-white">Fantastic Investment</h1>
          <h5 className="text-center heading-styles-white">Investment is Key to Financial Freedom.</h5>
        </div>
      </div>

      <div className="featured section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src="../../images/trainning.jpeg" alt="missing" />
                <a href="property-details.html"><img src="images/featured-icon.png" alt="" style={{ maxWidth: "60px", padding: "0px" }} /></a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Importation does no longer need to be complicated</h2>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Acquire The right Knowledge
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Getthe best villa website template in HTML CSS and Bootstrap for your 
                      business. TemplateMo provides you the
                      best free CSS templates in the world. Please tell your friends about it.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Start Investing on Light Weighted Goods
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Make Profit!!!!
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="countering">
                      <h2 className="timer count-title count-number">10</h2>
                      <p className="count-text ">Students<br />Already</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="countering">
                      <h2 className="timer count-title count-number">5</h2>
                      <p className="count-text ">Years<br />Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="countering">
                      <h2 className="timer count-title count-number">30</h2>
                      <p className="count-text ">people<br />Established</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BestDealSection />
    </div>
  )
}

export default HomePage;