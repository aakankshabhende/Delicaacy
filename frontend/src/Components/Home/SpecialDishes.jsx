import React from "react";
import salmon from "../../Assets/salmon-zucchini.jpg";
import steak from "../../Assets/steak.jpg";
import MenuItems from "./MenuItems";
import Menu from "./Menu";

// Used head for inline CSS for headings
const head = {
  color: "#f34949",
  "font-family": "Sacramento",
  "font-style": "bold",
  "font-size": "3.5 rem",
};

const SpecialDishes = () => {
  return (
    <>
      {/* Special Dishes  */}
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
                    A veggie cutlet is basically a veggie patty. It consists of
                    a mix of various steamed vegetables like carrots, potatoes,
                    peas, cauliflower, broccoli, corn and more.
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
                    Salmon coated in Cajun spices, cooked to perfection in
                    butter, and paired with simple sautéed zucchini.
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
      {/* Top Selling Items */}
      <section id="gtco-menu" class="section-padding">
        <div class="container">
          <br /> <br />
          <div class="section-content">
            <div class="row mb-5">
              <div class="col-md-12">
                <div class="heading-section text-center">
                  <h2 style={head}>Our Top Selling Items</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 menu-wrap">
                <div class="heading-menu">
                  <h3 class="text-center mb-5">Breakfast</h3>
                </div>
                {MenuItems.map((val) => {
                  return (
                    <Menu
                      pic={val.img}
                      name={val.name}
                      price={val.price}
                      spc={val.description}
                    />
                  );
                })}
              </div>
              <div class="col-lg-4 menu-wrap">
                <div class="heading-menu">
                  <h3 class="text-center mb-5">Lunch</h3>
                </div>
                {MenuItems.map((val) => {
                  return (
                    <Menu
                      pic={val.img}
                      name={val.name}
                      price={val.price}
                      spc={val.description}
                    />
                  );
                })}
              </div>

              <div class="col-lg-4 menu-wrap">
                <div class="heading-menu">
                  <h3 class="text-center mb-5">Dinner</h3>
                </div>
                {MenuItems.map((val) => {
                  return (
                    <Menu
                      pic={val.img}
                      name={val.name}
                      price={val.price}
                      spc={val.description}
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

export default SpecialDishes;
