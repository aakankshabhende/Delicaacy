import React, { useState } from "react";

const Order = (props) => {
  const [menu, setMenu] = useState({
    title: "",
  });
  const srch = (e) => {
    const { name, value } = e.target;
    let searchInputTxt = value;
    localStorage.setItem("order-item", value);
    setMenu((prevdata) => {
      return {
        ...prevdata,
        [name]: value, // checks among all prev. data in note if it matches value is put in name
      };
    });
  };
  const add = async () => {
    let searchInputTxt = localStorage.getItem("order-item");
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`
    );
    const data = await res.json();

    if (data.meals) {
      var food;
      data.meals.forEach((meal) => {
        food = JSON.parse(JSON.stringify(meal));
        console.log(food);
      });
      props.make(food);
    }
  };

  return (
    <>
      <div class="col-md-4 mb-4 main">
        <div class="input-group md-form form-sm form-2 pl-0 ">
          <select
            class="form-control my-0 py-1 amber-border"
            type="text"
            name="title"
            value={menu.title}
            onChange={srch}
            placeholder="Search"
            aria-label="Search"
          >
            <option value="">Have a Look at Our Menu! 🥗</option>
            <option value="pizza">Pizza</option>
            <option value="burger">Burger</option>
            <option value="noodles">Noodles</option>
            <option value="pasta">Pasta</option>
            <option value="pancakes">Pancakes</option>
            <option value="vegan lasagna"> Vegan Lasagna</option>
          </select>
          <div class="input-group-append">
            <button class="input-group-text amber lighten-3">
              <i
                class="fas fa-search text-grey"
                onClick={add}
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
