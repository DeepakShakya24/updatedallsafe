import React, { useState } from "react";
import "./AwesomeBuilds.css";
import swap2 from "./res/swap2.webp";
import swap3 from "./res/swap3.webp";
export default function AwesomeBuilds() {
  const [img, setimg] = useState(swap3);
  return (
    <section class="builds-sec ">
      <div class="container-fluid ">
        <div class="row builds-box">
          <div class="col-md-12" align="center">
            <div className="container heading">
              <h2>
                AWESOME <span className="ship">BUILDS</span>
              </h2>
              <div className="awsm-build">
                <ul>
                  <li>
                    <a href="#!" onClick={() => setimg(swap3)}>
                      BEST SELLER
                    </a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => setimg(swap2)}>
                      SELF BUILD
                    </a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => setimg(swap3)}>
                      ON TRENDING
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-md-8">
              <div class="front_banner">
                <img src={img} class="img-fluid" alt="" />
              </div>
            </div>
            <div class="col-md-4 awsm-content">
              <div class="front_heading">
                <h3>
                  <b>Developed by theAllsafe</b>
                </h3>
                <p>
                  Our softwares are user inspired, and custom builds. Our
                  softwares are user inspired, and custom builds. Our softwares
                  are user inspired, and custom builds. Our softwares are user
                  inspired, and custom builds. Our softwares are user inspired,
                  and custom buildsOur softwares are user inspired, and custom
                  builds.
                  <br />
                  <br />
                  Our softwares are user inspired, and custom builds. Our
                  softwares are user inspired, and custom builds. Our softwares
                  are user inspired, and custom builds.
                </p>
                <a href="#!" class="btn btn-exp">
                  Explore Products
                </a>
              </div>
            </div>
          </div>

          {/* <div
            id="tab"
            class="btn-group"
            style={{
              width: "65%",
              border: "none",
            }}
          >
            <a href="#!" onClick={() => setimg(swap3)} class="btn btn-exp">
              <strong>Prices</strong>
            </a>
            <a href="#!" onClick={() => setimg(swap2)} class="btn btn-exp ">
              <strong>Features</strong>
            </a>
            <a href="#!" onClick={() => setimg(swap3)} class="btn btn-exp ">
              <strong>Requests</strong>
            </a>
          </div> */}
        </div>
      </div>
      <hr style={{ marginTop: "2rem", marginBottom: "2rem" }} />
    </section>
  );
}
