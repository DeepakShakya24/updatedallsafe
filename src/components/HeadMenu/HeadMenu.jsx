import React from "react";
import "./HeadMenu.css";
import { Link } from "react-router-dom";
const HeadMenu = () => {
  // const [active, setactive] = useState(false);
  // const [clctnactive, setclctnactive] = useState(false);
  // const clickbtn = () => {
  //   let currentState = active;
  //   setactive(!currentState);
  //   setclctnactive(false);
  // };
  // const clctnbtn = () => {
  //   setclctnactive(true);
  //   setactive(false);
  // };
  return (
    <section class="head_menu">
      <div class="row">
        <div class="col-md-12 text-center">
          <ul>
            <li>
              <Link
                // activeStyle={{ borderBottom: "2px solid #f8c73d" }}
                to="/"
                className="active-link"
              >
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
        </div>
      </div>
    </section>
  );
};

export default HeadMenu;
