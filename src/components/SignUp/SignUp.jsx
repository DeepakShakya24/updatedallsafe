import React from "react";
import "./SignUp.css";
import Logo from "./res/theAllsafe Blue All(1).png";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <section className="signUp-background">
            <div className="logo">
              <Link to="/" className="navbar-brand">
                <img alt="logo" src={Logo} width="300px" />
              </Link>
            </div>
            <div className="col-md-12" align="center">
              <div className="signUp-content">
                <h1>One Of Us?</h1>
                <p>
                  If you already have an account, just sign in. We've missed
                  you!
                </p>
                <button className="signup-form-btn">Sign in</button>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-6">
          <div className="col-md-12" align="center">
            <div className="signUp-form">
              <h1>Create Free Account</h1>
              <p>Sign up using social networks</p>
              {/* <ul class="social-network social-circle">
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
              </ul> */}
              <ul className="form-login-icons">
                <li>
                  <a href="#!" class="icon-Facebook" title="Facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" class="icon-google" title="Facebook">
                    <i class="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" class="icon-linkedin" title="Facebook">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <form className="signUp_form">
                <div className="signUp_form_title">
                  <div className="signUp-title">OR</div>
                </div>
                <fieldset className="auth-form-fieldset">
                  <div className="registration-box">
                    <fieldset className="name-fields">
                      <input type="text" placeholder="Name" />
                    </fieldset>
                    {"             "}
                    <fieldset className="surname">
                      <input
                        type="text"
                        placeholder="SurName"
                        className="surname-field"
                      />
                    </fieldset>
                  </div>
                  <div className="registration-box">
                    <fieldset className="name-fields">
                      <input type="email" placeholder="Email" />
                    </fieldset>
                    {"             "}
                    <fieldset className="surname">
                      <input
                        type="password"
                        placeholder="Password"
                        className="surname-field"
                      />
                    </fieldset>
                  </div>
                </fieldset>
                <button className="signUp-form-btn">Sign in</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default SignUp;
