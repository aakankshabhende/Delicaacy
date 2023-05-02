import React from "react";
import hero1 from "../../Assets/hero-1.jpg";
import hero2 from "../../Assets/hero-2.jpg";
import hero3 from "../../Assets/hero-3.jpg";

const Header = () => {
  return (
    <>
      {/* Header Section  */}
      <div class="hero">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6 hero-left">
              <h1 class="display-4 mb-5 head">
                We Love <br />
                Delicious Foods!
              </h1>
              <div class="mb-2">
                <a
                  class="btn btn-primary btn-shadow btn-lg"
                  href="/orders"
                  role="button"
                  style={{
                    backgroundColor: "#f34949",
                    border: "none",
                    borderRadius: "30px",
                    padding: "10px",
                    width:"150px",
                    fontSize: "18px",
                  }}
                >
                  Explore Menu
                </a>
              </div>

              <ul class="hero-info list-unstyled d-flex text-center mb-0">
                <li class="border-right">
                  <span class="lnr lnr-rocket"></span>
                  <h5>Fast Delivery</h5>
                </li>
                <li class="border-right">
                  <span class="lnr lnr-leaf"></span>
                  <h5>Fresh Food</h5>
                </li>
                <li class="">
                  <span class="lnr lnr-bubble"></span>
                  <h5>24/7 Support</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Welcome Section */}
      <section id="gtco-welcome" class="bg-white section-padding">
        <div class="container">
          <br />
          <br />
          <div class="section-content">
            <div class="row">
              <div class="col-sm-5 img-bg d-flex shadow align-items-center justify-content-center justify-content-md-end img-2"></div>
              <div class="col-sm-7 py-5 pl-md-0 pl-4">
                <div class="heading-section pl-lg-5 ml-md-5">
                  <h2 className="display-4 head">Welcome to Delicacy</h2>
                </div>
                <div class="pl-lg-5 ml-md-5">
                  <p>
                    Enjoy a wide range of delicious cuisines from our
                    multi-cuisine restaurant Delicaacy. A property built with
                    every modern comfort you could ask for, with a grand
                    business center, a beautifully decorated lobby and the best
                    multi-cuisine restaurant that serves Chinese, Indian,
                    Continental and Tandoor cuisine.
                  </p>
                  <h3 class="mt-5">Special Recipe</h3>
                  <div class="row">
                    <div class="col-4">
                      <a href="#" class="thumb-menu">
                        <img class="img-fluid img-cover" src={hero3} />
                        <h6>Soups</h6>
                      </a>
                    </div>
                    <div class="col-4">
                      <a href="#" class="thumb-menu">
                        <img class="img-fluid img-cover" src={hero2} />
                        <h6>Waffles</h6>
                      </a>
                    </div>
                    <div class="col-4">
                      <a href="#" class="thumb-menu">
                        <img class="img-fluid img-cover" src={hero1} />
                        <h6>Salads</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
