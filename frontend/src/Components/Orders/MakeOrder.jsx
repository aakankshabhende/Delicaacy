import React, { useState } from "react";
import Order from "./Order";
import Card from "./Card";

// Using style as inline CSS for headings
const style = {
  "justify-content": "center",
  display: "flex",
  color: "white",
};

const MakeOrder = () => {
  const [orders, setOrders] = useState([]); // orders is array having all orders of a user
  const note = (meal) => {
    setOrders((prevdata) => {
      return [...prevdata, meal];
    });
  };

  const ondelete = (id) => {
    // returns all array items except the one to delete
    setOrders((olddata) =>
      olddata.filter((currn, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <div className="orderback">
        <br />
        <br />
        <h2 style={style}>We serve your orders,</h2>
        <h2 style={style}>Place your ORDER here. </h2>

        {/* We are passing function as a prop */}
        <Order make={note} />

        {/* Mapping all items of Orders array into form of Card */}
        {orders.map((data, index) => {
          return (
            <Card
              id={index}
              title={data.strMeal}
              img={data.strMealThumb}
              deleteitem={ondelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default MakeOrder;
