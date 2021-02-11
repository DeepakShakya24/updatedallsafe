import React from "react";
import "./Accounts.css";
import NavBar from "../NavBar/NavBar";
import Zoom from "react-reveal/Zoom";
//import Footer from "../Footer/Footer";
const Accounts = () => {
  return (
    <div className="account-section">
      <NavBar />
      <div className="accounts">
        <div className="row">
          <Zoom top>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-3x"></i>
                <h3>School Login</h3>
              </div>
            </div>
          </Zoom>
          <Zoom top>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-3x"></i>
                <h3>User Login</h3>
              </div>
            </div>
          </Zoom>
          <Zoom top>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-3x"></i>

                <h3>Instructor Login</h3>
              </div>
            </div>
          </Zoom>
          <Zoom top>
            <div className="col-md-3">
              <div className="login">
                <i className="fa fa-user fa-3x"></i>
                <h3>Vendor Login</h3>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
export default Accounts;
