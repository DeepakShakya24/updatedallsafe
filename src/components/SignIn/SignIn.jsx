import React from "react";
import "./SignIn.css";
import Logo from "./res/theAllsafe Blue All(1).png";
import { Link } from "react-router-dom";
// import Particles from "react-particles-js";
// const particlesOptions = {
//   particles: {
//     number: {
//       value: 100,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//   },
//   interactivity: {
//     detect_on: "canvas",
//     events: {
//       onhover: {
//         enable: true,
//         mode: "repulse",
//       },
//       onclick: {
//         enable: true,
//         mode: "push",
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 400,
//         line_linked: {
//           opacity: 1,
//         },
//       },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//       push: {
//         particles_nb: 4,
//       },
//       remove: {
//         particles_nb: 2,
//       },
//     },
//   },
// };

function SignIn() {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div className="logo">
            <Link to="/" className="navbar-brand">
              <img alt="logo" src={Logo} width="300px" />
            </Link>
          </div>
          <div className="col-md-12" align="center">
            <div className="login-form heading">
              <h2>
                Login to<span className="ship"> Your Account</span>
              </h2>
              <p>Login using social networks</p>
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
              </ul>
              <form className="login_form">
                <div className="login_form_title">
                  <div className="login-title">OR</div>
                </div>
                <fieldset className="auth-form-fieldset">
                  <div className="email-field">
                    <fieldset className="email">
                      <input type="email" placeholder="Email" />
                    </fieldset>
                  </div>
                  <div className="password-field">
                    <fieldset className="password">
                      <input type="password" placeholder="Password" />
                    </fieldset>
                    <div className="password-eye"></div>
                  </div>
                </fieldset>
                <button className="login-form-btn">Sign in</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <section className="login-background">
            <div className="col-md-12" align="center">
              <div className="login-content">
                <h1>New Here?</h1>
                <p>Sign up and discover a great amount of new opportunities!</p>
                <button className="signup-form-btn">Sign up</button>
              </div>
            </div>

            {/* <Particles params={particlesOptions} className="particles" /> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
