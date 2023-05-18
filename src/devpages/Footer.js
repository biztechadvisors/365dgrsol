import React from "react";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-classic bg-navy">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-text">
                <a href="/">
                  <img
                    src="assets/img/logoDA.png"
                    style={{ width: "150px" }}
                    alt="Logo"
                  />
                </a>
                <p>
                  365 degree solution is passionate about crafting charmingly
                  timeless and elegant luxurious weddings and events at stunning
                  venues throughout the world. As the leading wedding designers
                  and event organizers in India, we are renowned for creating
                  authentic experiences worth cherishing for a lifetime.
                </p>
                <div className="social-icons">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-social btn-social-o twitter"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-social btn-social-o linkedin"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a
                    href="http://facebook.com/365drgsol"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-social btn-social-o facebook"
                  >
                    <i className="fa fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/365degreesolution/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-social btn-social-o skype"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="links">
                <h3>Links</h3>
                <ul className="">
                  <li>
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="Portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="Aboutus">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="Contactus">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="location">
                <h3>Location</h3>
                <ul>
                  {/* <li>India Office</li> */}
                  <li>
                    <i className="fa fa-map-marker"></i> (Gujarat), (M.P), (
                    Maharastra), (Rajsthan) India.
                  </li>
                  <li>
                    {/* <a href="#pageTop" > */}
                      <i className="fa fa-envelope"></i>info@365drgsol.com
                    {/* </a> */}
                  </li>
                </ul>
              </div>
            </div>

            <a href="#pageTop" className="back-to-top">
              <i className="fa fa-angle-up" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
