import React from 'react';
import BestDealSection from './bestDealsSection';
import NavBar from './navbar';


const AboutPage = () => {

  return (
    <div>
      <NavBar />

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Meet the Team</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="single-property section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-image">
                <img src="../../images/02.jpeg" alt="missing" />
              </div>
              <div className="main-content">
                <span className="category">Brief History</span>
                <h4>Fantastic Investment</h4>
                <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. 
                TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. 
                Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee 
                schlitz enamel pin you probably haven't heard of them ugh hella.
                  <br /><br />When you look for free CSS templates, you can simply type TemplateMo in any search engine 
                  website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc.
                   Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine
                    neutra cardigan hoodie pop-up.</p>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Best useful links ?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How does this work ?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Why is Villa the best ?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-table">
                <ul>
                  <li>
                    <img src="../../images/roy.jpeg" alt="missing" style={{ maxWidth: "52px" }} />
                    <h4>Mr Achile<br /><span>671172775</span></h4>
                  </li>
                  <li>
                    <img src="../../images/roy.jpeg" alt="missing" style={{ maxWidth: "52px" }} />
                    <h4>Fabregal<br /><span>671172775</span></h4>
                  </li>
                  <li>
                    <img src="../../images/roy.jpeg" alt="missing" style={{ maxWidth: "52px" }} />
                    <h4>Roy<br /><span>671172775</span></h4>
                  </li>
                  <li>
                    <img src="../../images/roy.jpeg" alt="missing" style={{ maxWidth: "52px" }} />
                    <h4>Other<br /><span>number</span></h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BestDealSection />
    </div>
  )
}

export default AboutPage;