import React from "react";
import "./ContactUs.css";
//import Logo from "./res/theAllsafe White All.png";
import Logo1 from "./res/theAllsafe Blue All.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
// import NavBar from "../NavBar/NavBar";
//import Particle from "react-particles-js";
function ContactUs() {
  return (
    <>
      <section class="contact-sec">
        <Fade top>
          {/* <img src={Logo1} alt="" width="300px" className="contact-icon" /> */}
          <div className="row">
            <div className="col-md-8 left">
              <div className="contact-icon">
                <Link to="/">
                  <img src={Logo1} alt="" height="43.25" />
                </Link>
              </div>
              <h2 style={{ textAlign: "center" }}>
                <span>CONTACT</span> <span className="ship">US</span>
              </h2>
              <form>
                <div className="fields">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="">
                          FullName
                          <span className="indication">*</span>
                        </label>
                        <br />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="firstfield"
                        />
                      </div>
                      <div className="col-md-12 mt-4">
                        <label htmlFor="">
                          Email
                          <span className="indication">*</span>
                        </label>
                        <br />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="firstfield"
                        />
                      </div>
                      <div className="col-md-12 mt-4">
                        <label htmlFor="">
                          PhoneNumber
                          <span className="indication">*</span>
                        </label>
                        <br />
                        <input
                          type="text"
                          name=""
                          id=""
                          className="firstfield"
                        />
                      </div>
                      <div className="col-md-12 mt-4">
                        <label htmlFor="">
                          Message
                          <span className="indication">*</span>
                        </label>
                        <br />
                        <input
                          type="text-area"
                          name=""
                          id=""
                          className="firstfield"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-btn">
                  <a
                    href="#!"
                    class="btn c_btn_right"
                    style={{ marginTop: "2em" }}
                  >
                    Submit <i className="fa fa-check-circle-o"></i>
                  </a>
                </div>
              </form>
            </div>
            <div className="col-md-4 right">
              <div className="contactheading">
                {/* <Link to="/" className="navbar-brand">
                  <img alt="logo" src={Logo} width="300px" />
                </Link> */}
              </div>

              <div className="address1">
                <div className="home-icon" align="right">
                  <i className="fa fa-home fa-3x"></i>
                </div>
                <div className="contact-content">
                  <h4>
                    <i className="fa fa-map-marker"></i>{" "}
                    <a href="#!">London Headquarters</a>
                  </h4>
                  <p>Shelton Street 71-75 Covent Garden</p>
                  <p>T. +44 2035751335</p>
                  <p>allsafe@gmail.com</p>
                </div>
              </div>
              <div className="address1">
                <h4>
                  <i className="fa fa-map-marker"></i>{" "}
                  <a href="#!">London Headquarters</a>
                </h4>
                <p>Shelton Street 71-75 Covent Garden</p>
                <p>T. +44 2035751335</p>
                <p>allsafe@gmail.com</p>
              </div>
              <div class="col-md-12 icon-handles" align="center">
                <ul class="social-network social-circle">
                  <li>
                    <a href="#!" class="icoFacebook" title="Facebook">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="icoTwitter" title="Twitter">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="icoLinkedin" title="Linkedin">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>

                  <li>
                    <a href="#!" class="icoRss" title="Rss">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
}

export default ContactUs;
