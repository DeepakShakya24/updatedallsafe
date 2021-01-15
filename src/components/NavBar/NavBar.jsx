import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "./res/theAllsafe Blue All(1).png";
function NavBar() {
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-lg fixed-top"
          style={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <div className="col-lg-3 mt-2 mb-2">
            <Link to="/" className="navbar-brand">
              <img alt="logo" src={Logo} width="180px" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="col-lg-4 mt-2 mb-2">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link" to="/business">
                    <b style={{ color: "#2463A1" }}>Business</b>{" "}
                  </Link>
                </li>

                <li style={{ color: "#FFBC00" }} className="mt-2 ml-2">
                  {" "}
                  |
                </li>

                <li className="nav-item">
                  <Link className="nav-link ml-2" to="/applications">
                    <b style={{ color: "#2463A1" }}>Applications</b>
                  </Link>
                </li>

                <li style={{ color: "#FFBC00" }} className="mt-2">
                  {" "}
                  |
                </li>

                <li className="nav-item">
                  <a className="nav-link ml-2" href="#!">
                    <b style={{ color: "#2463A1" }}>Oneview</b>
                  </a>
                </li>
              </ul>
            </div>

            <div className="input-group col-md-4">
              <input
                type="text"
                placeholder=""
                name="search "
                className="form-control"
              />

              <span className="input-group-append">
                <button
                  className="btn "
                  type="button"
                  style={{ backgroundColor: "#2463A1" }}
                >
                  <i className="fa fa-search clr-white"></i>
                </button>
              </span>
            </div>

            <div className="col-lg-4 mr-5 mt-2 mb-2">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="!#">
                    <i className="fa fa-shopping-cart fa-2x mr-5 mt-2"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="!#">
                    <i className="fa fa-user-circle-o fa-2x mr-5 mt-2 "></i>
                  </a>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">
                    <p
                      className=""
                      style={{
                        color: "#2463A1",
                        borderBottom: "3px solid #FFBE00",
                      }}
                    >
                      Contact Us
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
