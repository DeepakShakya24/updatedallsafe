import React from "react";
import "./HeadMenu.css";
import { Link } from "react-router-dom";
import LightSpeed from "react-reveal/LightSpeed";
const HeadMenu = () => {
  // const [product, setproduct] = useState("borderBottom: 2px solid #f8c73d");
  // const [collection, setcollection] = useState(null);

  // const clickProduct = () => {
  //   setproduct("borderBottom: 2px solid #f8c73d");
  //   setcollection
  // }

  return (
    <section class="head_menu">
      <div class="row">
        <div class="col-md-12 text-center">
          <LightSpeed left>
            <ul>
              <li>
                <Link to="/" className="active-link">
                  PRODUCT
                </Link>
              </li>
              <li>
                <Link to="/collections/" className="active-link">
                  COLLECTION
                </Link>
              </li>
              <li>
                <a href="#!" className="active-link">
                  BUILD YOUR SOFTWARE
                </a>
              </li>
            </ul>
          </LightSpeed>
        </div>
      </div>
    </section>
  );
};

export default HeadMenu;
