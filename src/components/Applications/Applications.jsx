import React from "react";
import "./Applications.css";
import BlockMenu from "../BlockMenu/BlockMenu";
import Footer from "../Footer/Footer";
import phone from "./icons/application/cut-top-img.png";
import group from "./icons/Group3644.png";
import group1 from "./icons/Group3680.png";
import group3 from "./icons/Group3681.png";
function Applications() {
  return (
    <div>
      <BlockMenu />
      <section className="application">
        <div className="first-section">
          <div className="row">
            <div className="col-md-6">
              <div className="mobile-screen">
                <img src={phone} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <h1>CUT</h1>
                <h4>Category -E Wallet</h4>
                <p>
                  The CUT wallet application allows the users totransfer funds
                  at any place in China and Myanmar. The app supports RMB and
                  MMK currencies and it offers quick and instant fund transfer
                  service. Payments can be transferred to the receiver’swallet
                  through QR Code, phone number, and account ID.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="platform-main">
          {/* <div className="circle-blue1"></div> */}
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="platform-data">
                <h2>Platform</h2>
                <p>
                  Whether you are an iOS user or Android user, the app available
                  for both of the platforms. Users can download the app free of
                  cost from the app market of their device.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="platform-icon-box">
                <div className="icon-box">
                  <i className="fa fa-apple fa-5x"></i>
                  <span>Ios</span>
                </div>
                <div className="icon-box android">
                  <i className="fa fa-android fa-5x"></i>
                  <span>Android</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="slider">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="slider-content">
                <h2>Stand-Out Feature</h2>
                <p>
                  CUT offers a flexible and reliable platform to users for
                  transferring funds instantly. Whether the transaction is
                  international or local, the app allows the users to make
                  within just a few taps. These screenshots show some of the
                  core and beneficial features that are offered by CUT.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="structure">
          <div className="row">
            <div className="structurebox">
              <span className="big-text">Structure</span>
              <h1>Structure</h1>
              <p>
                During the development process, various meetings and reviews
                were undertaken. This was to minimise the development turnaround
                time of each functionality. This includes both the frontend and
                the backend code throughout the application. We also diligently
                followed security procedures, which has helped to keep user
                accounts and data transmission between the server and frontend
                secure.
              </p>
              <img src={group} alt="" className="img-fluid" />
            </div>
          </div>
        </section>
      </section>
      <section className="features">
        <div className="feature-box-left">
          <span>FEATURES</span>
          <img src={group1} alt="" />
        </div>
        <div className="feature-content">
          <div className="feature-content-box">
            <span>01</span>
            <h3>Scan</h3>
            <p>
              Users can easily make payments to the merchants by simply scanning
              the QR codes through the in-app camera. This is one of the
              smoothest and simplified ways of making transactions as well as it
              is mostly used to make payments with the contacts that are not
              saved on the phone.
            </p>
          </div>
          <div className="feature-content-box">
            <span>01</span>
            <h3>Scan</h3>
            <p>
              Users can easily make payments to the merchants by simply scanning
              the QR codes through the in-app camera. This is one of the
              smoothest and simplified ways of making transactions as well as it
              is mostly used to make payments with the contacts that are not
              saved on the phone.
            </p>
          </div>
          <div className="feature-content-box">
            <span>01</span>
            <h3>Scan</h3>
            <p>
              Users can easily make payments to the merchants by simply scanning
              the QR codes through the in-app camera. This is one of the
              smoothest and simplified ways of making transactions as well as it
              is mostly used to make payments with the contacts that are not
              saved on the phone.
            </p>
          </div>
          <div className="feature-content-box">
            <span>01</span>
            <h3>Scan</h3>
            <p>
              Users can easily make payments to the merchants by simply scanning
              the QR codes through the in-app camera. This is one of the
              smoothest and simplified ways of making transactions as well as it
              is mostly used to make payments with the contacts that are not
              saved on the phone.
            </p>
          </div>
          <div className="feature-content-box">
            <span>01</span>
            <h3>Scan</h3>
            <p>
              Users can easily make payments to the merchants by simply scanning
              the QR codes through the in-app camera. This is one of the
              smoothest and simplified ways of making transactions as well as it
              is mostly used to make payments with the contacts that are not
              saved on the phone.
            </p>
          </div>
        </div>
      </section>
      <section className="why-use-main">
        <div className="row">
          <div className="col-md-8">
            <div className="section-why-use">
              <h1>
                <span>CUT</span>
                Why?
              </h1>
              <div className="row">
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p>
                      With CUT, you can easily make payments at shops or with
                      relatives just by holding the device over the payment
                      terminal to verify the purchase. This saves time by
                      transferring funds within just a few seconds.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p>
                      With CUT, you can easily make payments at shops or with
                      relatives just by holding the device over the payment
                      terminal to verify the purchase. This saves time by
                      transferring funds within just a few seconds.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p>
                      With CUT, you can easily make payments at shops or with
                      relatives just by holding the device over the payment
                      terminal to verify the purchase. This saves time by
                      transferring funds within just a few seconds.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p>
                      With CUT, you can easily make payments at shops or with
                      relatives just by holding the device over the payment
                      terminal to verify the purchase. This saves time by
                      transferring funds within just a few seconds.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p>
                      With CUT, you can easily make payments at shops or with
                      relatives just by holding the device over the payment
                      terminal to verify the purchase. This saves time by
                      transferring funds within just a few seconds.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-thumb">
                    <h3>Time-Saving</h3>
                    <p>
                      With CUT, you can easily make payments at shops or with
                      relatives just by holding the device over the payment
                      terminal to verify the purchase. This saves time by
                      transferring funds within just a few seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 layer-screen">
            <img src={group3} alt="" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Applications;
