import React from "react";
import "./Accounts.css";
import NavBar from "../NavBar/NavBar";
const Accounts = () => {
  return (
    <>
      <NavBar />
      <div className="accounts">
        <div className="row">
          <div className="col-md-3">
            <div className="login">
              <i className="fa fa-user fa-4x"></i>
              <h3>School login</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="login">
              <i className="fa fa-user fa-4x"></i>
              <h3>User login</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="login">
              <i className="fa fa-user fa-4x"></i>
              <h3>Instructor login</h3>
            </div>
          </div>
          <div className="col-md-3">
            <div className="login">
              <i className="fa fa-user fa-4x"></i>
              <h3>Vendor login</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Accounts;
