import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div>
      <nav class="navbar d-flex flex-column align-items-center border-bottom">
        <div class="d-flex align-items-center sitewide-notification-container w-100">
          <a href="https://www.furlenco.com/packages/search">
            <div class="d-flex align-items-center">
              <img
                class="offer-star-icon"
                src="Furniture%20on%20Rent%20in%20Delhi%20Furlenco_files/ic_offer_rounded.svg"
              />
              <span class="font-size-10 font-weight-medium text-uppercase offer-strip-text margin-rl-m">
                Go rent-free for 4 months. Get flat 50% off per month. Hurry!
                Offer ends at midnight. T&amp;C Apply
              </span>
              <button class="btn rounded-pill font-size-10 offer-explore font-weight-medium letter-spacing-100">
                Explore
              </button>
            </div>
          </a>
        </div>
        <div class="container-fluid position-relative">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-auto">
              <a href="https://www.furlenco.com/delhi?ref=Home-Header-Logo">
                <svg width="29" height="33">
                  <path
                    d="M13.138 13.744c.22.328.55.6.936.82.055.054.166.054.22.108h.056c.055 0 .055 0 .11.055.44.164.991.273 1.597.273C20.133 15 29 13.744 29 12.161c0-1.42-7.435-2.62-11.786-2.784C15.12 5.555 10.66-.56 9.393.04c-1.432.71 1.377 9.117 3.194 12.72.166.437.33.765.551.983m2.771 4.259c-.444 0-.777.054-1.11.163-.388.055-.832.272-1.165.544-.055 0-.055.054-.11.054-.056.055-.112.055-.167.11l-.056.054a3.34 3.34 0 00-.943 1.305c-1.775 3.644-4.382 12.075-2.94 12.727 1.332.599 5.603-5.547 7.656-9.355 4.382-.272 11.981-1.577 11.926-3.046-.056-1.523-8.987-2.61-13.091-2.556m-6.089-.144c.16-.454.213-.966.16-1.533-.053-.568-.265-1.136-.637-1.704C7.22 11.101 1.54 4.173.266 5.081c-1.167.795 1.752 7.893 3.928 11.811-2.017 3.975-4.67 11.3-3.503 12.039 1.327.851 6.688-6.36 8.705-9.994.16-.398.319-.739.425-1.08"
                    fill="#346AA0"
                  ></path>
                </svg>
              </a>
            </div>
            <ul class="navbar-nav col-auto d-flex align-items-center align-items-stretch position-static">
              <li class="navbar-item d-flex align-items-stretch justify-content-center offers-link">
                <span class="navbar-link d-flex align-items-center">
                  <img
                    class="margin-r-m"
                    src="Furniture%20on%20Rent%20in%20Delhi%20Furlenco_files/ic_offer_rounded.svg"
                  />
                  2 Offers
                </span>
              </li>
              <li class="navbar-item d-flex align-items-stretch">
                <a class="navbar-link d-flex align-items-center">
                  <img
                    class="margin-r-m"
                    src="Furniture%20on%20Rent%20in%20Delhi%20Furlenco_files/ic_user.svg"
                  />
                  Login
                </a>
              </li>
              <li class="navbar-item d-flex align-items-stretch cursor-pointer padding-rl-l cart-widget">
                <div class="d-flex cart-widget-wrapper flex-column position-relative">
                  <a
                    href="https://www.furlenco.com/checkout?ref=Home-Header-Cart"
                    target="_self"
                    class="h-100 d-flex position-relative"
                  >
                    <img src="Furniture%20on%20Rent%20in%20Delhi%20Furlenco_files/ic-cart.svg" />
                  </a>
                  <div class="cart-preview-container text-center flex-column">
                    <div class="arrow-up"></div>
                    <div class="d-flex flex-column padding-xl align-items-center">
                      <div class="font-size-14 text-uppercase">
                        Your shopping cart is empty
                      </div>
                      <img
                        src="Furniture%20on%20Rent%20in%20Delhi%20Furlenco_files/empty-cart.webp"
                        alt=""
                        class="empty-cart-icon padding-tb-m lazy loaded"
                        data-srcset="https://assets.furlenco.com/image/upload/dpr_1.0,f_auto,q_auto/v1/s3-furlenco-images/desktop_web/optimus/icons/empty-cart.svg 1x, https://assets.furlenco.com/image/upload/dpr_2.0,f_auto,q_auto/v1/s3-furlenco-images/desktop_web/optimus/icons/empty-cart.svg 2x, https://assets.furlenco.com/image/upload/dpr_3.0,f_auto,q_auto/v1/s3-furlenco-images/desktop_web/optimus/icons/empty-cart.svg 3x"
                        sizes=""
                        srcset="
                            Furniture%20on%20Rent%20in%20Delhi%20Furlenco_files/empty-cart_003.webp 1x,
                            Furniture%20on%20Rent%20in%20Delhi%20Furlenco_files/empty-cart_004.webp 2x,
                            Furniture%20on%20Rent%20in%20Delhi%20Furlenco_files/empty-cart_002.webp 3x
                          "
                      />
                      <div class="font-size-14">But it does not have to be</div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="navbar-item d-flex align-items-stretch">
                <div class="d-flex">
                  <span class="navbar-link d-flex align-items-center city-drop-down">
                    <img
                      class="margin-r-s"
                      src="Furniture%20on%20Rent%20in%20Delhi%20Furlenco_files/ic_location.svg"
                      width="24px"
                      height="24px"
                    />
                    Delhi
                  </span>
                  <div class="navbar-dropdown">
                    <ul class="menu-link font-size-12">
                      <li class="menu-link-item d-flex align-items-center">
                        Bengaluru
                      </li>
                      <li class="menu-link-item d-flex align-items-center">
                        Mumbai
                      </li>
                      <li class="menu-link-item d-flex align-items-center">
                        Pune
                      </li>
                      <li class="menu-link-item d-flex align-items-center">
                        <img
                          class="selected"
                          src="Furniture%20on%20Rent%20in%20Delhi%20Furlenco_files/ic_tick.svg"
                        />
                        Delhi
                      </li>
                      <li class="menu-link-item d-flex align-items-center">
                        Gurugram
                      </li>
                      <li class="menu-link-item d-flex align-items-center">
                        Noida
                      </li>
                      <li class="menu-link-item d-flex align-items-center">
                        Hyderabad
                      </li>
                      <li class="menu-link-item d-flex align-items-center">
                        Chennai
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
