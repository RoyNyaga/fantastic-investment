import React from "react";

const HomePage = () => {

  return (
    <div>
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="info">
                <li><i className="fa fa-envelope"></i> info@company.com</li>
                <li><i className="fa fa-map"></i> Sunny Isles Beach, FL 33160</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <ul className="social-links">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://x.com/minthu" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  <h1>Villa</h1>
                </a>
                <ul className="nav">
                  <li><a href="index.html" className="active">Home</a></li>
                  <li><a href="properties.html">Properties</a></li>
                  <li><a href="property-details.html">Property Details</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="#"><i className="fa fa-calendar"></i> Schedule a visit</a></li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="main-banner d-flex align-items-center justify-content-center">
        <div>
          <h1 className="heading-styles-white">Fantastic Investment</h1>
          <h5 className="text-center heading-styles-white">Investment is Key to Financial Freedom.</h5>
        </div>
      </div>

      <div class="featured section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="left-image"> 
                <img src="../../images/featured.jpg" alt="missing-image" />
                  <a href="property-details.html"><img src="images/featured-icon.png" alt="" style={{ maxWidth: "60px", padding: "0px" }} /></a>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="section-heading">
                <h6>| Featured</h6>
                <h2>Best Appartment &amp; Sea view</h2>
              </div>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Best useful links ?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How does this work ?
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Why is Villa Agency the best ?
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="info-table">
                <ul>
                  <li>
                    <img src="../../images/info-icon-01.png" alt="" style={{ maxWidth: "52px" }} />
                      <h4>250 m2<br /><span>Total Flat Space</span></h4>
                  </li>
                  <li>
                    <img src="../../images/info-icon-02.png" alt="" style={{ maxWidth: "52px" }} />
                      <h4>Contract<br /><span>Contract Ready</span></h4>
                  </li>
                  <li>
                    <img src="../../images/info-icon-03.png" alt="" style={{ maxWidth: "52px" }} />
                      <h4>Payment<br /><span>Payment Process</span></h4>
                  </li>
                  <li>
                    <img src="../../images/info-icon-04.png" alt="" style={{ maxWidth: "52px" }} />
                      <h4>Safety<br /><span>24/7 Under Control</span></h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;