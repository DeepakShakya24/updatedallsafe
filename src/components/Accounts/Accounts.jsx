import React from "react";
import "./Accounts.css";
import NavBar from "../NavBar/NavBar";
import Tada from "react-reveal/Tada";
//import Footer from "../Footer/Footer";
const Accounts = () => {
  return (
    <div className="account-section">
      <NavBar />
      <div className="accounts">
        <div className="row">
          <Tada>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-3x"></i>
                <h3>School Login</h3>
              </div>
            </div>
          </Tada>
          <Tada>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-3x"></i>
                <h3>User Login</h3>
              </div>
            </div>
          </Tada>
          <Tada>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-3x"></i>

                <h3>Instructor Login</h3>
              </div>
            </div>
          </Tada>
          <Tada>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-3x"></i>
                <h3>Vendor Login</h3>
              </div>
            </div>
          </Tada>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Accounts;
