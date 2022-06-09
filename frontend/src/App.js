import './App.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';
import About from './Components/About';
import Logout from './Components/Logout';
import { createContext, useReducer } from 'react';
import {initialState, reducer} from '../src/Components/Usereducer'
import Order from './Components/Order';
import MakeOrder from './Components/MakeOrder';


export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <userContext.Provider value = {{state, dispatch}}>
    <Navbar/>  
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/contact">
      <Contact/>
    </Route>
    <Route exact path="/about">
      <About/>
    </Route>
    <Route exact path="/login">
      <Login/>
    </Route>
    <Route exact path="/register">
      <Register/>
    </Route> 
    <Route exact path ="/orders">
     <MakeOrder/>
    </Route>
    <Route exact path ="/logout">
      <Logout/>
    </Route>
    <Redirect to ='/' />
    </Switch>
    <Footer/> 
 
    </userContext.Provider>
    </>
  );
}

export default App;
