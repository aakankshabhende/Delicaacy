import React, { useState } from "react";

const Order = (props) => {
  const [menu, setMenu] = useState({
    // input box state management
    title: "",
  });
  const search = (e) => {
    const { name, value } = e.target;
    localStorage.setItem("order-item", value);
    setMenu((prevdata) => {
      return {
        ...prevdata,
        [name]: value, // checks among all previous data in note if it matches, it puts in name
      };
    });
  };

  // Calling Food API
  const add = async () => {
    let searchInputTxt = localStorage.getItem("order-item");
    const res = await fetch(
      // Fetching menu item from API based on user search
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`
    );
    const data = await res.json(); // Converting content type to application/JSON

    if (data.meals) {
      // API response will have meals named array
      var food;
      data.meals.forEach((meal) => {
        food = JSON.parse(JSON.stringify(meal)); // Converting a JavaScript object into a string with JSON.stringify() and parsing the data with JSON.parse()
      });
      props.make(food); // Passing result fetched by API to note function on Order page
    }
  };

  return (
    <>
      <div class="col-md-4 mb-4 main" style={{align:'center'}}>
        <div class="input-group md-form form-sm form-2 pl-0 ">
          <select
            class="form-control my-0 py-1 amber-border"
            type="text"
            name="title"
            value={menu.title}
            onChange={search}
            placeholder="Search"
            aria-label="Search"
          >
            {/* Menu Items */}
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
