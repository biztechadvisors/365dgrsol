import Slider from "./Slider/Slider";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="main-wrapper home">
        <section className="banner">
          <Slider />
        </section>

        <section style={{ backgroundColor: "purple" }}>
          <section style={{ padding: "60px 0" }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="sectionTitle text-center">
                    <h1 style={{ color: "white" }}>Our Activities</h1>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="col-md-20">
                    <ul
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        listStyle: "none",
                        padding: 0,
                      }}
                    >
                      <li style={{ flex: "1 0 300px", margin: "20px" }}>
                        <div className="card">
                          <Link to="/Activities">
                            <div className="card_image">
                              <img
                                alt="#"
                                src="assets\events\wedding.png"
                                style={{ maxWidth: "100%", height: "auto" }}
                              />
                              <div className="card_content">
                                <h2 className="card_title">
                                  Event <br />
                                  Organiser
                                </h2>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li style={{ flex: "1 0 300px", margin: "20px" }}>
                        <div className="card">
                          <Link to="/ProductionForm">
                            <div className="card_image">
                              <img
                                alt="#"
                                src="assets\events\production1.png"
                                style={{ maxWidth: "100%", height: "auto" }}
                              />
                              <div className="card_content">
                                <h2 className="card_title">
                                  Production <br />
                                  House
                                </h2>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li style={{ flex: "1 0 300px", margin: "20px" }}>
                        <div className="card">
                          <Link to="/DesignerJewelry">
                            <div className="card_image">
                              <img
                                alt="#"
                                src="assets\events\jewel.jpg"
                                style={{ maxWidth: "100%", height: "auto" }}
                              />
                            </div>
                            <div className="card_content">
                              <h2 className="card_title">
                                Customise Jewel Design
                              </h2>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li style={{ flex: "1 0 300px", margin: "20px" }}>
                        <div className="card">
                          <Link to="/EappShop">
                            <div className="card_image">
                              <img
                                alt="#"
                                className="full_img"
                                src="assets\events\electronics.png"
                                style={{ maxWidth: "100%", height: "auto" }}
                              />
                            </div>
                            <div className="card_content">
                              <h2 className="card_title">
                                Tech
                                <br />
                                Electronics
                              </h2>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li style={{ flex: "1 0 300px", margin: "20px" }}>
                        <div className="card">
                          <Link to="/InteriorDesign">
                            <div className="card_image">
                              <img
                                alt="#"
                                className="img-full"
                                src="assets\events\interier.jpg"
                                style={{ maxWidth: "100%", height: "auto" }}
                              />
                            </div>
                            <div className="card_content">
                              <h2 className="card_title">
                                Interior <br />
                                Design
                              </h2>
                            </div>
                          </Link>
                        </div>
                      </li>
                      <li style={{ flex: "1 0 300px", margin: "20px" }}>
                        <div className="card">
                          <Link to="/Photography">
                            <div className="card_image">
                              <img
                                alt="#"
                                src="\assets\events\digital.jpg"
                                style={{ maxWidth: "100%", height: "auto" }}
                              />
                            </div>
                            <div className="card_content">
                              <h2 className="card_title">Photography</h2>
                            </div>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="more-feature">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="more-feature-left">
                  <div className="sectionTitle">
                    <h2>Why 365 Degree Solution</h2>
                    <p>
                      <b /> New and never-ending possibilities
                      <b />
                      Find everything from professionally equipped studios to
                      unconventional rooms and residences.
                    </p>
                  </div>
                  <div className="more-features">
                    <div className="feature-icon">
                      <i className="fa fa-line-chart" aria-hidden="true"></i>
                    </div>
                    <div className="feature-details">
                      <h4>We pursue collaborative relationships</h4>
                      <p>
                        Through team work, our Professionals provide customer
                        service solutions to number of companies around the
                        globe.
                      </p>
                    </div>
                  </div>
                  <div className="more-features">
                    <div className="feature-icon">
                      <i className="fa fa-industry" aria-hidden="true"></i>
                    </div>
                    <div className="feature-details">
                      <h4>Respect for the Customer</h4>
                      <p>
                        360 Degree Solution has long led the way by recognizing
                        that companies are in the hands of consumers and
                        clients, nothing is more important and relevant today.
                      </p>
                    </div>
                  </div>
                  <div className="more-features">
                    <div className="feature-icon">
                      <i className="fa fa-cogs" aria-hidden="true"></i>
                    </div>
                    <div className="feature-details">
                      <h4>Respect for Our World</h4>
                      <p>
                        As well-trained communicators, 360 Degree Solution's
                        Professionals are in a position to use their skills and
                        tools as a force for Awesome.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="countup-section bg-image home-feature bg-navy"
          style={{
            backgroundImage: "url('assets/img/home/bg-counter1.jpg')",
            backgroundattachment: "fixed",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-6">
                <div className="text-center single_block">
                  <div className="counter">25</div>
                  <span className="count">+</span>
                  <h5>Business Experts</h5>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="text-center single_block">
                  <div className="counter">80</div>
                  <span className="count">+</span>
                  <h5>Completed Projects</h5>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="text-center single_block">
                  <div className="counter">1250</div>
                  <span className="count">+</span>
                  <h5>happy clients</h5>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div className="text-center single_block">
                  <div className="counter">150</div>
                  <span className="count">+</span>
                  <h5>hours support</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
