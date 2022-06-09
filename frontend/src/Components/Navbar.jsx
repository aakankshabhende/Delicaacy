import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { userContext } from '../App'

const style = {
  "color": "black",
  "font-family": 'Sacramento',
  "font-style":"bold",
  "font-size": "3.5rem",
};
const sty = {
  "background-color": "white",
};

const Navbar = () => {
  const { state, dispatch} = useContext(userContext);
    if (state){
       return (
        <>
      <nav style={sty} id="navbar-header" className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="lnr lnr-menu"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex justify-content-between">
            <li className="nav-item only-desktop">
              <a className="nav-link" id="side-nav-open" href="#">
                <span className="lnr lnr-menu"></span>
              </a>
            </li>
            <div className="d-flex flex-lg-row flex-column">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </div>
          </ul>

          <NavLink
            style={style}
            to="/"
            className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop"
          >
            Delicaacy
          </NavLink>
          <ul className="navbar-nav d-flex justify-content-between">
            <div className="d-flex flex-lg-row flex-column">
              <li className="nav-item active">
                <NavLink to="/orders" className="nav-link">
                  Order
                </NavLink>
              </li>
              <li className="nav-item profile">
                <NavLink to="/" className="nav-link" >
                <i class="fa fa-user" aria-hidden="true">&ensp;</i> 
                  {localStorage.getItem("username")}
                  &ensp;&ensp;
                </NavLink>
                
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/logout" className="nav-link" >
                  Logout
                </NavLink>
              </li>
              
            </div>
            <li className="nav-item">
              <a id="side-search-open" className="nav-link" href="#">
                <span className="lnr lnr-magnifier"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
       );
    }
    else{
      return (
        <>
      <nav style={sty} id="navbar-header" className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="lnr lnr-menu"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex justify-content-between">
            <li className="nav-item only-desktop">
              <a className="nav-link" id="side-nav-open" href="#">
                <span className="lnr lnr-menu"></span>
              </a>
            </li>
            <div className="d-flex flex-lg-row flex-column">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </div>
          </ul>

          <NavLink
            style={style}
            to="/"
            className="navbar-brand navbar-brand-center d-flex align-items-center only-desktop d-print-none"
          >
            Delicaacy
          </NavLink>
          <ul className="navbar-nav d-flex justify-content-between">
            <div className="d-flex flex-lg-row flex-column">
              <li className="nav-item active">
                <NavLink to="/orders" className="nav-link">
                  Order
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Sign In
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink  to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
            </div>
            <li className="nav-item">
              <a id="side-search-open" className="nav-link" href="#">
                <span className="lnr lnr-magnifier"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
      );
    }
};

export default Navbar;
