import React from "react";
import "./Accounts.css";
import NavBar from "../NavBar/NavBar";
//import Footer from "../Footer/Footer";
const Accounts = () => {
  return (
    <>
      <NavBar />
      <div className="accounts">
        <div className="row">
          <div className="col-md-3">
            <div className="login">
              <i className="fa fa-user fa-4x"></i>
              <h3>School Login</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="login">
              <i className="fa fa-user fa-4x"></i>
              <h3>User Login</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="login">
              <i className="fa fa-user fa-4x"></i>
              <h3>Instructor Login</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="login">
              <i className="fa fa-user fa-4x"></i>
              <h3>Vendor Login</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Accounts;
