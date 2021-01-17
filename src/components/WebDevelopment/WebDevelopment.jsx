import React from "react";
import "./WebDevelopment.css";
import w1 from "./res/web-development1.png";
import w2 from "./res/web-development2.png";
import w3 from "./res/web-development3.png";
import w4 from "./res/web-development4.png";
import w5 from "./res/web-development5.png";
import w6 from "./res/web-development6.png";
import w7 from "./res/web-development7.png";
import w8 from "./res/web-development8.png";
import w10 from "./res/web-development10.png";
import w11 from "./res/web-development11.png";
import w12 from "./res/web-development12.png";
import w13 from "./res/web-development13.png";
import w9 from "./res/web-development9.png";
import w14 from "./res/web-development14.png";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function WebDevelopment() {
  return (
    <>
      <NavBar />
      <div className="webdevelopment">
        <div className="heading" style={{ marginTop: "4em" }}>
          <h1>WEB DEVELOPMENT</h1>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img className="img1" src={w1} alt=""></img>
          </div>
          <div class="col-md-6">
            <h2 className="row1head">
              Bespoke Web Development <br></br> Company
            </h2>
            <p className="pararow1">
              Being one of the top web development companies in the UK, Nimble
              AppGenie provides adaptable and seamless website development
              services for clients globally. We are committed to delivering the
              finest web solutions that are worthy of your investments. With a
              motive of “Stand above the crowd and rise above the noise”, we
              develop eye-catchy and customer-friendly web designs to help
              elevate your business to unprecedented heights.
            </p>
            <p className="midrow1 pararow1">
              Competition in every business industry naturally grows over time,
              making it extremely difficult to get your brand recognized in the
              market. With our dedicated and highly experienced web designers
              and developers, you can improve the brand awareness on your
              business significantly. Our team makes sure to work with you at
              every step, so that you can achieve all your business goals
              through your website.
              <br></br>Hire dedicated Web development experts from Nimble
              AppGenie for your next big dream project!
            </p>
          </div>
        </div>
        <div className="row2">
          <div class="row">
            <div class="col-sm-4 cd">
              <img src={w2} alt=""></img>
              <h2 className="cardhead">WordPress Websites</h2>
              <p>
                We use WordPress CMS to integrate better control on your
                website. This can help you to achieve much better search engine
                rankings, as WordPress is the most used CMS worldwide
              </p>
              `
            </div>
            <div class="col-sm-4 cd">
              <img src={w3} alt=""></img>
              <h2 className="cardhead">Online Shop Websites</h2>
              <p>
                We use WordPress CMS to integrate better control on your
                website. This can help you to achieve much better search engine
                rankings, as WordPress is the most used CMS worldwide
              </p>
              `
            </div>
            <div class="col-sm-4 cd">
              <img src={w4} alt=""></img>
              <h2 className="cardhead">CMS Websites</h2>
              <p>
                We use WordPress CMS to integrate better control on your
                website. This can help you to achieve much better search engine
                rankings, as WordPress is the most used CMS worldwide
              </p>
            </div>
          </div>
        </div>
        <div className="secheading">
          <h1>
            Why Nimble AppGenie for Web <br></br>Development?
          </h1>
        </div>
        <div className="row">
          <div class="col-md-6">
            <img className="img5" src={w5} alt=""></img>
          </div>
          <div class="col-md-6">
            <div className="row3r row3rr">
              <img className="img6" src={w6} alt=""></img>
              <div>
                <h2>User-Friendly Experiences</h2>
                <p>
                  We develop websites with an engaging and interesting strategy.
                  This ensures we provide a user-friendly experience for the
                  customers of your business
                </p>
              </div>
            </div>
            <div className="row3r">
              <img className="img6" src={w7} alt=""></img>
              <div>
                <h2>Targeted Communication</h2>
                <p>
                  We develop websites with an engaging and interesting strategy.
                  This ensures we provide a user-friendly experience for the
                  customers of your business
                </p>
              </div>
            </div>
            <div className="row3r">
              <img className="img6" src={w8} alt=""></img>
              <div>
                <h2>Traffic Conversion</h2>
                <p>
                  We develop websites with an engaging and interesting strategy.
                  This ensures we provide a user-friendly experience for the
                  customers of your business
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row4">
          <div class="row">
            <div class="col-md-4 row4l">
              <div className="row4l2">
                <h1>Web Development Frameworks</h1>
                <p>
                  {" "}
                  number of them available, and every one of them has its pros
                  and cons. We use the latest extensible web development
                  frameworks to provide cutting-edge web solutions, that can
                  help you take your business to new heights.number of them
                  available, and every one of them has its pros and cons. We use
                  the latest extensible web
                </p>
              </div>
            </div>
            <div class="col-md-8">
              <div className="cardrow4">
                <div className="cards">
                  <img src={w9} alt=""></img>
                  <h4>PHP</h4>
                </div>
                <div className="cards">
                  <img src={w10} alt=""></img>
                  <h4>.Net</h4>
                </div>
                <div className="cards">
                  <img src={w11} alt=""></img>
                  <h4>Java</h4>
                </div>
              </div>
              <div className="cardrow4">
                <div className="cards">
                  <img src={w12} alt=""></img>
                  <h4>Magento</h4>
                </div>
                <div className="cards">
                  <img src={w13} alt=""></img>
                  <h4>Ruby on Rails</h4>
                </div>
                <div className="cards">
                  <img src={w14} alt=""></img>
                  <h4>Laravel</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default WebDevelopment;
