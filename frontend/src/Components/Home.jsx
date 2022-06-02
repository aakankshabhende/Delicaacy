import React from "react";
import hero1 from "../Assets/hero-1.jpg";
import hero2 from "../Assets/hero-2.jpg";
import hero3 from "../Assets/hero-3.jpg";
import b1 from "../Assets/breakfast-1.jpg";
import salmon from "../Assets/salmon-zucchini.jpg";
import steak from "../Assets/steak.jpg";
import data from "./Data";
import Menu from "./Menu";

const head = {
  color: "#f34949",
  "font-family": "Sacramento",
  "font-style": "bold",
  "font-size": "3.5 rem",
};

const Home = () => {
  return (
    <>
      <div class="hero">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6 hero-left">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1 class="display-4 mb-5 cur">
                We Love <br />
                Delicious Foods!
              </h1>
              <div class="mb-2">
                <a
                  class="btn btn-primary btn-shadow btn-lg"
                  href="#gtco-menu"
                  role="button"
                  style={{
                    backgroundColor: "#f34949",
                    border: "none",
                    borderRadius: "30px",
                    padding: "10px",
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
      <section id="gtco-welcome" class="bg-white section-padding">
        <div class="container">
          <br />
          <br />
          <br />
          <div class="section-content">
            <div class="row">
              <div class="col-sm-5 img-bg d-flex shadow align-items-center justify-content-center justify-content-md-end img-2"></div>
              <div class="col-sm-7 py-5 pl-md-0 pl-4">
                <div class="heading-section pl-lg-5 ml-md-5">
                  <h2 className="display-4 cur">Welcome to Delicacy</h2>
                </div>
                <div class="pl-lg-5 ml-md-5">
                  <p>
                    Enjoy a wide range of delicious cuisines from our
                    multi-cuisine restaurant Delicaacy.
                    A property built with every modern comfort you could ask for, with a grand business center, a beautifully decorated lobby
                    and the best multi-cuisine restaurant that serves
                    Chinese, Indian, Continental and Tandoor cuisine.
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

      <section id="gtco-special-dishes" class="bg-grey section-padding">
        <br />
        <div class="container">
          <div class="section-content">
            <div class="heading-section text-center">
              <br />
              <br />
              <h2 style={head}>Special Dishes</h2>
            </div>
            <div class="row mt-5">
              <div class="col-lg-5 col-md-6 align-self-center py-5">
                <h2 class="special-number">01.</h2>
                <div class="dishes-text">
                  <h3>
                    <span>Special</span>
                    <br /> Veg Cutlet
                  </h3>
                  <p class="pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate, ea vero alias perferendis quas animi doloribus
                    voluptates. Atque explicabo ea nesciunt provident libero qui
                    eum, corporis esse quos excepturi soluta?
                  </p>
                  <h3 class="special-dishes-price">Rs 515.00</h3>
                  <a
                    style={{ backgroundColor: "#f34949" }}
                    href="/orders"
                    class="btn-primary mt-3"
                  >
                    Order
                  </a>
                </div>
              </div>
              <div class="col-lg-5 offset-lg-2 col-md-6 align-self-center mt-4 mt-md-0">
                <img src={steak} alt="" class="img-fluid shadow w-100" />
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-lg-5 col-md-6 align-self-center order-2 order-md-1 mt-4 mt-md-0">
                <img src={salmon} alt="" class="img-fluid shadow w-100" />
              </div>
              <div class="col-lg-5 offset-lg-2 col-md-6 align-self-center order-1 order-md-2 py-5">
                <h2 class="special-number">02.</h2>
                <div class="dishes-text">
                  <h3>
                    <span>Salmon</span>
                    <br /> Zucchini
                  </h3>
                  <p class="pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis, accusamus culpa quam amet ipsam odit ea
                    doloremque accusantium quo, itaque possimus eius. In a quis
                    quibusdam omnis atque vero dolores!
                  </p>
                  <h3 class="special-dishes-price">Rs 520.00</h3>
                  <a
                    style={{ backgroundColor: "#f34949" }}
                    href="/orders"
                    class="btn-primary mt-3"
                  >
                    Order
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section id="gtco-menu" class="section-padding">
        <div class="container">
          <br /> <br />
          <div class="section-content">
            <div class="row mb-5">
              <div class="col-md-12">
                <div class="heading-section text-center">
                  <h2 style={{ color: "#f34949" }}>Our Menu</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 menu-wrap">
                <div class="heading-menu">
                  <h3 class="text-center mb-5">Breakfast</h3>
                </div>
                {data.map((val) => {
                  return (
                    <Menu
                      pic={val.img}
                      name={val.name}
                      price={val.p}
                      spc={val.s}
                    />
                  );
                })}
              </div>
              <div class="col-lg-4 menu-wrap">
                <div class="heading-menu">
                  <h3 class="text-center mb-5">Lunch</h3>
                </div>
                {data.map((val) => {
                  return (
                    <Menu
                      pic={val.img}
                      name={val.name}
                      price={val.p}
                      spc={val.s}
                    />
                  );
                })}
              </div>

              <div class="col-lg-4 menu-wrap">
                <div class="heading-menu">
                  <h3 class="text-center mb-5">Dinner</h3>
                </div>
                {data.map((val) => {
                  return (
                    <Menu
                      pic={val.img}
                      name={val.name}
                      price={val.p}
                      spc={val.s}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>
    </>
  );
};

export default Home;
