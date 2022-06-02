import React, { useState, useContext, useEffect } from "react";
import { userContext } from '../App'
import { useHistory } from "react-router-dom";
const Logout = () => {
    const { state, dispatch} = useContext(userContext);
    const history = useHistory();
    useEffect(() => {
        history.push('/login');
    }, [])
    return (
        <>

            <h1>LogOut page</h1>
           { 
                dispatch({ type:'USER', payload:false })                
           }
          
        </>
    )
}

export default Logout
