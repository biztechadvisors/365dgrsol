import React from "react";
import "../App.css"

export const Aboutus = () => {
  return (
    <div>
      <div className="main-wrapper page-contactus">
        <section className="bredcrumb">
          <div className="bg-image text-center"
           style={{ backgroundImage: "url('assets/img/bg-bredcrumb.jpg')" }}
          >
            <h1>Welcome to where extraordinary begins</h1>
          </div>
          <div className="">
            <ul className="pager middle">
              <li>Home</li>
              <li>
                <a href="javascript:void(0)">About us</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="about-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1>About Company</h1>
                <p>
                  We bring together a whole team of photographers, studios,
                  make-up artists, talent managers, trainers for guidance and
                  grooming, production house tie-ups under one roof.
                </p>
                <br />
                <br />

                <h2>Our Vision</h2>
                <p>
                  We envision a world filled with happy people enjoying
                  outstanding software development and back office outsourcing
                  services.
                </p>
                <br />
                <br />
                <h2>Our Mission</h2>
                <p>
                  Achieving global growth through sound economic, social and
                  environmental policies.
                </p>
                <br />
                <br />
                <h2>Our Values</h2>
                <p>
                  Above all we value integrity, respect, accountability and
                  diversity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section classname="countup-section bg-image brandColor">
          <div classname="container">
            <div classname="text-center single_block">
              <h1 className="bg-image text-center">
                WE ARE 365 DEGREE SOLUTION{" "}
              </h1>
            </div>
            <ul className="cards">
              <li className="cards_item">
                <div className="card">
                  <div className="card_image">
                    <img alt="#" src="assets\homeimage\wedding0.jpg" />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">DESTINATION DREAM WEDDING</h2>
                    <h5 className="card_text">
                      Let us capture the feelings, the sentiments, and the
                      beauty of your wedding day.
                    </h5>
                  </div>
                </div>
              </li>
              <li className="cards_item">
                <div className="card">
                  <div className="card_image">
                    <img alt="#" src="assets\homeimage\Studio0.jpg" />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">ADVERTISING SHOOTS</h2>
                    <h5 className="card_text">
                      Our expertise in fashion and advertising has helped us bag
                      various prestigious Indian.
                    </h5>
                  </div>
                </div>
              </li>
              <li className="cards_item">
                <div className="card">
                  <div className="card_image">
                    <img alt="#" src="assets\homeimage\modal0.png" />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">MODELLES</h2>
                    <h5 className="card_text">
                      We groom, shoot portfolios, promote and launch models and
                      actors in modelling industry.
                    </h5>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="services-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="sectionTitle text-center">
                  <h2>Our Services</h2>
                  <h5>
                    365 degree solution event organiser and productions casting
                    agency
                  </h5>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="media-box">
                  <div className="media-icon">
                    <i className="fa fa-line-chart"></i>
                  </div>
                  <div className="media-content">
                    <a href="service-details-left-sidebar.html">
                      <h4>Event Services</h4>
                    </a>
                    <span className="p-t-30">
                      15+
                      <br /> years of experience <br />-
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="media-box">
                  <div className="media-icon">
                    <i className="fa fa-code"></i>
                  </div>
                  <div className="media-content">
                    <a href="service-details-right-sidebar.html">
                      <h4>Production House</h4>
                    </a>
                    <span className="p-t-30">
                      25+
                      <br /> years of experience <br />-
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="media-box">
                  <div className="media-icon">
                    <i className="fa fa-bar-chart-o"></i>
                  </div>
                  <div className="media-content">
                    <a href="service-details-fullwidth.html">
                      <h4>Custome jwelle design Gold & Diamond</h4>
                    </a>

                    <span className="p-t-30">
                      25+
                      <br /> years of experience <br />-
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="media-box">
                  <div className="media-icon">
                    <i className="fa fa-tripadvisor"></i>
                  </div>
                  <div className="media-content">
                    <a href="service-details-left-sidebar.html">
                      <h4>Electronics</h4>
                    </a>

                    <span className="p-t-30">
                      25+
                      <br /> years of experience <br />-
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="media-box">
                  <div className="media-icon">
                    <i className="fa fa-pencil-square-o"></i>
                  </div>
                  <div className="media-content">
                    <a href="service-details-right-sidebar.html">
                      <h4>Interior Design</h4>
                    </a>
                    <span className="p-t-30">
                      15+
                      <br /> years of experience <br />-
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="media-box">
                  <div className="media-icon">
                    <i className="fa fa-pencil-square-o"></i>
                  </div>
                  <div className="media-content">
                    <a href="service-details-right-sidebar.html">
                      <h4>Digital Marketing & Product Marketing</h4>
                    </a>
                    <span className="p-t-30">
                      20+
                      <br /> years of experience <br />-
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-20">
                <div className="sectionTitle text-center">
                  <h2>Technical Support, DONE</h2>
                  <p>
                    <li>Contacting & Contracting Artists globally</li>
                    <li>
                      Scheduling dates & booking Technical support for sound &
                      lighting systems
                    </li>
                    Updates with Latest Trends & Acts
                    <li>Response within 24 hours of your inquiry</li>
                    Suggestions or Recommendations as per budget
                    <li>Event flow coordination & execution</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="sectionTitle text-center">
                  <h2>WHO WE ARE</h2>

                  <p>
                    Our success depends on the strength of our team. With an
                    awesome pool of talent with proven acumen, all the
                    undertaken projects remain assured that they are in an
                    experienced hand. And the output says it all!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
