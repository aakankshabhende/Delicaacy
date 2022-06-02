import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { userContext } from '../App'

const Login = () => {

  const { state, dispatch} = useContext(userContext);

  const history = useHistory();
  const [user, setuser] = useState({
    email: "",
    pass: ""
  });
  
  let name, value;
  const subv = (e) => {
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value }); //[] to store dynamic data name will have e.target.value direct coz of []
  };

  const loginuser = async (e) => {
    e.preventDefault();
    const { email, pass } = user;
    const res = await fetch("/login", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({
        email : email,
        pass,
      })
    });
    console.log(res);
    const data = await res.json();
    console.log(data);
        if(res.status === 400 || !data){
      window.alert("Invalid Credentials");
    }
    else {
      dispatch({ type:'USER', payload:true });
      window.alert("Login Successful");
      history.push('/')
    }
  }

  return (
    <>
      <div class="container">
        <div class="row py-5 mt-4 align-items-center">
          <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
            <img
              src="https://i.pinimg.com/originals/8f/d8/eb/8fd8eb59bb027e607c6d14cdff1812eb.png"
              alt=""
              class="img-fluid mb-3 d-none d-md-block"
            />
          </div>
          <div class="col-md-7 col-lg-6 ml-auto mt-5">
          <a onClick={() => history.push("/register")}><h4 style={{
              textAlign: "center",
                color: "black",
                fontFamily: "Pacifico",
                fontSize: "1.0 rem",
          }}>Don't have an account?</h4></a>
          <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div class="border-bottom w-100 ml-5"></div>
                  <span style={{
            textAlign: "center",
            color: "black",
            fontFamily: "Pacifico",
            fontSize: "1.5rem",
          }} class="px-2 small text-muted font-weight-bold text-muted">
                    Welcome Back!
                  </span>
                  <div class="border-bottom w-100 mr-5"></div>
                </div>
         <br/>
            <form method ="POST">
              <div class="row">
                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value = {user.email}
                    onChange = {subv}
                    autoComplete="off"
                    placeholder="Email Address"
                    class="form-control bg-white border-left-0 border-md"
                  />
                </div>
                <div class="input-group col-lg-12 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="pass"
                    value={user.pass}
                    onChange = {subv}
                    autoComplete="off"
                    placeholder="Password"
                    class="form-control bg-white border-left-0 border-md"
                  />
                </div>
                <div class="form-group col-lg-4 mx-auto mb-0">
                  <a onClick = {loginuser}  class="btn btn-dark btn-block py-2">
                    <span class="font-weight-bold text-white">Login</span>
                  </a>
                </div>
                <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div class="border-bottom w-100 ml-5"></div>
                  <span class="px-2 small text-muted font-weight-bold text-muted">
                    OR
                  </span>
                  <div class="border-bottom w-100 mr-5"></div>
                </div>

                <div class="form-group col-lg-6 mx-auto"></div>

                <div class="text-center w-100">
                <div> 
      
        </div>
  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
