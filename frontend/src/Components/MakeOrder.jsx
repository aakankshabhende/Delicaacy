import React, { useState } from 'react'
import Order from './Order'
import Card from './Card'

const style = {
    "justify-content": "center",
    display: "flex",
    color: "white",
  };

const MakeOrder = () => {
    const [fullNote, setNote] = useState([]);
    const note = (meal) => {
        setNote((prevdata) =>{
            return [...prevdata, meal];
        });
    }
    // we are passing function as a prop
    const ondelete = (id) => {
        setNote((olddata) => 
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

    <Order make = {note}/>  
 
    {
        fullNote.map((data, index) => {
            return( <Card 
                id={index}
                title = {data.strMeal}
                img = {data.strMealThumb}
                deleteitem={ondelete}
                />
            );
        })
    }
    </div>
    </>
  )
}

export default MakeOrder