import { valHooks } from 'jquery';
import React, { useState } from 'react'
import Createorder from './Createorder'
import Navbar from './Navbar';
import Note from './Note'

const style = {
    'justify-content': "center",
    'display' : "flex",
    'color' : 'white',
 };

const Order = () => {
    const [addnote,fullsetnote] = useState([]);
    const add = (note) =>{
        fullsetnote((prevdata) => {
            return [...prevdata, note];
        });
    };
    const ondelete = (id) => {
        fullsetnote((olddata) => 
            olddata.filter((currn, indx) => {
                return indx !== id;
             })
        );
    };

    return (
        <div className="orderback">
        <br/><br/>
        <h2 style={style}>We serve your orders,</h2>
         <h2 style={style}>Place your ORDER here. </h2>
        <Createorder passnote={add}/>
        {
        addnote.map((val, index) => {
            return (<Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteitem={ondelete}
            />
        );
        })}
        </div>
    );
}

export default Order
