import React from "react";
import "./Collections.css";

import HeadMenu from "../HeadMenu/HeadMenu";
import Footer from "../Footer/Footer";
import p1 from "./res/p1.JPG";
import p2 from "./res/p2.JPG";
import p3 from "./res/p3.JPG";
import SafetyBanner from "../SafetyBanner/SafetyBanner";
import NavBar from "../NavBar/NavBar";
function Collections() {
  return (
    <>
      <NavBar />
      <div className="menu-head" align="center">
        <HeadMenu />
      </div>
      <section class="p_main_sec">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <h4 class="heading_p">
                Our products are highly effective and featured complete
                products. Here are our products provided.
              </h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <span class="pro_sale">sale</span>
                <img class="card-img-top" src={p1} alt="" />
                <div class="card-body">
                  <h5 class="card-title">
                    HR Manager - Human Resource Management System
                  </h5>
                  <p>
                    <span>
                      <del class="text-secondary">₹1999</del>{" "}
                      <ins class="text-success">₹1499</ins>
                    </span>
                  </p>
                  <p class="text-secondary card-text">
                    HR Manager is Human Resource Management Systmet for your
                    company HR & Management.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#!" class="btn c_btn_left">
                    {" "}
                    LIVE DEMO
                  </a>
                  <a href="#!" class="btn c_btn_right">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top" src={p2} alt="" />
                <div class="card-body">
                  <h5 class="card-title">
                    ERP Business ERP Solution / Product / Shop / Company Manag
                  </h5>
                  <p>
                    <span>
                      <del class="text-secondary">₹1999</del>{" "}
                      <ins class="text-success">₹1499</ins>
                    </span>
                  </p>
                  <p class="text-secondary card-text">
                    ent ERP is a Modern and responsive Business management
                    system. It is developed for thinking shop, small & Medium
                    busi
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#!" class="btn c_btn_left">
                    {" "}
                    LIVE DEMO
                  </a>
                  <a href="#!" class="btn c_btn_right">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top" src={p3} alt="" />
                <div class="card-body">
                  <h5 class="card-title">Pharmacare - Pharmacy Software</h5>
                  <p>
                    <span>
                      <del class="text-secondary">₹1999</del>{" "}
                      <ins class="text-success">₹1499</ins>
                    </span>
                  </p>
                  <p class="text-secondary card-text">
                    ade Easy Pharmacare is a pharmacy software which is
                    responsive Modern design for any kind of pharmacy.This
                    pharmacy software is actually used for pharmacy data m
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#!" class="btn c_btn_left">
                    {" "}
                    LIVE DEMO
                  </a>
                  <a href="#!" class="btn c_btn_right">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top" src={p1} alt="" />
                <div class="card-body">
                  <h5 class="card-title">
                    HR Manager - Human Resource Management System
                  </h5>
                  <p>
                    <span>
                      <del class="text-secondary">₹1999</del>{" "}
                      <ins class="text-success">₹1499</ins>
                    </span>
                  </p>
                  <p class="text-secondary card-text">
                    HR Manager is Human Resource Management Systmet for your
                    company HR & Management.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#!" class="btn c_btn_left">
                    {" "}
                    LIVE DEMO
                  </a>
                  <a href="#!" class="btn c_btn_right">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top" src={p2} alt="" />
                <div class="card-body">
                  <h5 class="card-title">
                    ERP Business ERP Solution / Product / Shop / Company Manag
                  </h5>
                  <p>
                    <span>
                      <del class="text-secondary">₹1999</del>{" "}
                      <ins class="text-success">₹1499</ins>
                    </span>
                  </p>
                  <p class="text-secondary card-text">
                    ent ERP is a Modern and responsive Business management
                    system. It is developed for thinking shop, small & Medium
                    busi
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#!" class="btn c_btn_left">
                    {" "}
                    LIVE DEMO
                  </a>
                  <a href="#!" class="btn c_btn_right">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top" src={p3} alt="" />
                <div class="card-body">
                  <h5 class="card-title">Pharmacare - Pharmacy Software</h5>
                  <p>
                    <span>
                      <del class="text-secondary">₹1999</del>{" "}
                      <ins class="text-success">₹1499</ins>
                    </span>
                  </p>
                  <p class="text-secondary card-text">
                    ade Easy Pharmacare is a pharmacy software which is
                    responsive Modern design for any kind of pharmacy.This
                    pharmacy software is actually used for pharmacy data m
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#!" class="btn c_btn_left">
                    {" "}
                    LIVE DEMO
                  </a>
                  <a href="#!" class="btn c_btn_right">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top" src={p1} alt="" />
                <div class="card-body">
                  <h5 class="card-title">
                    HR Manager - Human Resource Management System
                  </h5>
                  <p>
                    <span>
                      <del class="text-secondary">₹1999</del>{" "}
                      <ins class="text-success">₹1499</ins>
                    </span>
                  </p>
                  <p class="text-secondary card-text">
                    HR Manager is Human Resource Management Systmet for your
                    company HR & Management.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#!" class="btn c_btn_left">
                    {" "}
                    LIVE DEMO
                  </a>
                  <a href="#!" class="btn c_btn_right">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top" src={p2} alt="" />
                <div class="card-body">
                  <h5 class="card-title">
                    ERP Business ERP Solution / Product / Shop / Company Manag
                  </h5>
                  <p>
                    <span>
                      <del class="text-secondary">₹1999</del>{" "}
                      <ins class="text-success">₹1499</ins>
                    </span>
                  </p>
                  <p class="text-secondary card-text">
                    ent ERP is a Modern and responsive Business management
                    system. It is developed for thinking shop, small & Medium
                    busi
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#!" class="btn c_btn_left">
                    {" "}
                    LIVE DEMO
                  </a>
                  <a href="#!" class="btn c_btn_right">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img class="card-img-top" src={p3} alt="" />
                <div class="card-body">
                  <h5 class="card-title">Pharmacare - Pharmacy Software</h5>
                  <p>
                    <span>
                      <del class="text-secondary">₹1999</del>{" "}
                      <ins class="text-success">₹1499</ins>
                    </span>
                  </p>
                  <p class="text-secondary card-text">
                    ade Easy Pharmacare is a pharmacy software which is
                    responsive Modern design for any kind of pharmacy.This
                    pharmacy software is actually used for pharmacy data m
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#!" class="btn c_btn_left">
                    {" "}
                    LIVE DEMO
                  </a>
                  <a href="#!" class="btn c_btn_right">
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SafetyBanner />
      <Footer />
    </>
  );
}

export default Collections;
