# Delicaacy 🍕

This project is a restaurant-based web application built over the MERN stack to provide clients a quick, responsive web application with better, modern, and simple UI and User Experience with fast ordering options.<br>

## Tech Stack

[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://reactjs.org/docs/getting-started.html)
[![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://reactjs.org/docs/getting-started.html)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/docs/getting-started.html)
[![NodeJs](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white)](https://reactjs.org/docs/getting-started.html)
<br>
<br>

<p> 
I have built a REST API to provide the easy management of sign-in, registration, contact and ordering components. I tested this API using Postman. The frontend and the backend are fully connected and I have handled the CORS error which came while pushing data from the frontend to the backend using proxy server.
</p>

## Components

### Homepage

Built over ReactJS, it is a client-side rendered and responsive homepage. <br/>
<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/homepage.png" width = "1100px">
<br/> <br/>

#### Responsiveness ✅

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/responsive.png" width = "300px" >

### About

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/about.png" width = "1000px">

### Login/Register 👤

For the register component, I have used tokens and sessions to authorize users. Sessions are programmed in a way such that they get deleted automatically after 30 days and the user gets logged out. The passwords are hashed after entering using BcryptJS while user registration and are compared while authenticating the client while signing in. <br/>

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/register.png" width = "1100px">

<p >After registering successfully, user will get a customized confirmation email. I implemented this using EmailJS.</p> <br/>
<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/ss_reg.jpg" width = "300px">

Mapped these menu items into card components dynamically from an array. <br/>
<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/menu.png" width = "1100px">

### Order

I used an API to get good items based on the user search, the result will get displayed in form of cards on the screen. You can see the API used [here](https://www.themealdb.com/api.php)<br/>
<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/order.png" width = "1100px">

### Navbar

Used React useContext hook (Context API) along with useReducer hook to manage state globally in the application and to toggle the navbar elements. If the user is logged in successfully, logout option will appear. Username of the logged-in user will be shown on the navbar.

#### Before

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/nav.png" width = "1100px">

#### After

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/nav_log.png" width = "1100px">

### Footer

<p>The year in the footer gets dynamically fetched, so there is no need to take care of changing it every year. </p> 
<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/footer.png" width = "1000px">
<p>User can subscribe for the newsletter and will get a confirmation email for the same. I implemented this using EmailJS.
</p>
<img  src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/ss_sub.jpg"  width = "300px">
<br/> <br/>

### Backend

My database is hosted on MongoDB Atlas. I have used ExpressJS and NodeJS to make routes, schema and middlewares in the backend. I have used a .env file to configure my application environment constants and to keep them safe. <br/>
Stored the JWT tokens in an array. <br/>
<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/pics/db.png" width = "1100px">
