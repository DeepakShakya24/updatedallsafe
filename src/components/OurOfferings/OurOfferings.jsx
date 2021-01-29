import React from "react";
import "./OurOffering.css";
import android from "./res/android.png";
import ai from "./res/ai-service.png";
import ios from "./res/ios.png";
import { Link } from "react-router-dom";
import maintain from "./res/maintain.png";
import uiux from "./res/uiux.png";
import webdev from "./res/web-development.png";
function OurOfferings() {
  return (
    <section class="service-home">
      <hr style={{ marginTop: "-3rem", marginBottom: "3rem" }} />
      <div class="container">
        <div class="container heading">
          <h2>
            {/* <div class="circle pulse"></div> */}
            OUR <span className="ship">OFFERINGS</span>
          </h2>
        </div>
        <div class="row" style={{ marginTop: "2em" }}>
          <div className="col-md-6">
            <p
              style={{
                fontSize: "15px",
                fontWeight: "200",
                lineHeight: "27px",
                color: "var(--gray-dark-color);",
              }}
            >
              We believe in providing smart and innovative mobile and web
              solutions that will help businesses to solve the problems of their
              customers. We not only build the software, but we strategically
              analyse the project, to identify how each business can maximise
              the value it offers to their customers.
            </p>

            <p
              style={{
                fontSize: "15px",
                fontWeight: "200",
                lineHeight: "27px",
                color: "var(--gray-dark-color);",
              }}
            >
              We believe in providing smart and innovative mobile and web
              solutions that will help businesses to solve the problems of their
              customers. We not only build the software, but we strategically
              analyse the project, to identify how each business can maximise
              the value it offers to their customers.
            </p>
          </div>

          <div class="col-md-3">
            <Link to="/webdevelopment" style={{ textDecoration: "none" }}>
              <div class="service-home-box">
                <h4>
                  Web <br />
                  Development
                </h4>
                <Link to="/webdevelopment" class="">
                  <i class="fa fa-plus"></i>
                </Link>
                <img
                  src={webdev}
                  alt="web app development company Spain and Poland"
                />
              </div>
            </Link>
          </div>
          <div class="col-md-3">
            <Link to="/android-development" style={{ textDecoration: "none" }}>
              <div class="service-home-box">
                <h4>
                  Android App <br />
                  Development
                </h4>
                <Link to="/android-development" class="">
                  <i class="fa fa-plus"></i>
                </Link>
                <img
                  src={android}
                  alt="Nimble AppGenie - Mobile app development services Germany and Texas"
                />
              </div>
            </Link>
          </div>
          <div class="col-md-3">
            <Link to="/ios-development" style={{ textDecoration: "none" }}>
              <div class="service-home-box">
                <h4>
                  iOS App <br />
                  Development
                </h4>
                <Link to="/ios-development" class="">
                  <i class="fa fa-plus"></i>
                </Link>
                <img
                  src={ios}
                  alt="Top Graphic Designers in Houston and Germany"
                />
              </div>
            </Link>
          </div>
          <div class="col-md-3">
            <div class="service-home-box">
              <h4>
                Artificial <br />
                Intelligence
              </h4>
              <a href="#!" class="">
                <i class="fa fa-plus"></i>
              </a>
              <img
                src={ai}
                alt="Nimble AppGenie - Mobile app development services Germany and Texas"
              />
            </div>
          </div>

          <div class="col-md-3">
            <div class="service-home-box">
              <h4>
                Maintenance and <br />
                Support
              </h4>
              <a href="#!" class="">
                <i class="fa fa-plus"></i>
              </a>
              <img src={maintain} alt="Top Web Designers in Houston" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="service-home-box">
              <h4>
                UI/UX
                <br /> Design
              </h4>
              <a href="#!" class="">
                <i class="fa fa-plus"></i>
              </a>
              <img
                src={uiux}
                alt="Top Creative Agencies in London and Denmark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurOfferings;
