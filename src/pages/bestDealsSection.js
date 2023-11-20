import React from 'react';

const BestDealSection = () => {

  return (
    <div className="section best-deal">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-heading">
              <h6>| Best Deal</h6>
              <h2>More of Our Services!!</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tabs-content">
              <div className="row">
                <div className="nav-wrapper ">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="appartment-tab" data-bs-toggle="tab" data-bs-target="#appartment" type="button" role="tab" aria-controls="appartment" aria-selected="true">Importation</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="villa-tab" data-bs-toggle="tab" data-bs-target="#villa" type="button" role="tab" aria-controls="villa" aria-selected="false">Importation Mentoring</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="penthouse-tab" data-bs-toggle="tab" data-bs-target="#penthouse" type="button" role="tab" aria-controls="penthouse" aria-selected="false">Clearing Of Goods</button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="info-table">
                          <ul>
                            <li>Goods types <span>Evarieties</span></li>
                            <li>Importation Cost <span>from 20k</span></li>
                            <li>Duration<span>from 2 weeks</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <img src="../../images/deal-01.jpg" alt="" />
                      </div>
                      <div className="col-lg-3">
                        <h4>Extra Info Our Importation Services</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                          <br /><br />When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                        <div className="icon-button">
                          <a href="property-details.html"><i className="fa fa-calendar"></i> Schedule a visit</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="villa" role="tabpanel" aria-labelledby="villa-tab">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="info-table">
                          <ul>
                            <ul>
                              <li>Goods types <span>Evarieties</span></li>
                              <li>Importation Cost <span>from 20k</span></li>
                              <li>Duration<span>from 2 weeks</span></li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <img src="../../images/deal-02.jpg" alt="" />
                      </div>
                      <div className="col-lg-3">
                        <h4>Details on Importation Mentoring</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                          <br /><br />Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                        <div className="icon-button">
                          <a href="property-details.html"><i className="fa fa-calendar"></i> Schedule a visit</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="penthouse" role="tabpanel" aria-labelledby="penthouse-tab">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="info-table">
                          <ul>
                            <ul>
                              <li>Goods types <span>Evarieties</span></li>
                              <li>Importation Cost <span>from 20k</span></li>
                              <li>Duration<span>from 2 weeks</span></li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <img src="../../images/deal-03.jpg" alt="" />
                      </div>
                      <div className="col-lg-3">
                        <h4>Details on our Clearing Service</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                          <br /><br />Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                        <div className="icon-button">
                          <a href="property-details.html"><i className="fa fa-calendar"></i> Schedule a visit</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestDealSection;