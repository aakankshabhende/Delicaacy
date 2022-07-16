# Delicaacy 🍕

A restaurant-based web application built over the MERN stack to provide clients with a quick, responsive web application with better, modern, and simple UI and User Experience with fast ordering options.<br>

## Getting Started

These instructions will get you a copy of this project running on your local machine for development and testing purposes. It also contains development details. Click [here](https://github.com/aakankshabhende/Delicaacy/blob/main/Getting-Started.md) <br>
This project contains readable code with proper documentation. In case of queries, feel free to ping me :)

## Tech Stack

[![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://reactjs.org/docs/getting-started.html)
[![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://reactjs.org/docs/getting-started.html)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/docs/getting-started.html)
[![NodeJs](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white)](https://reactjs.org/docs/getting-started.html)
<br>

<p> 
This is my first MERN stack application :) where I have built a REST API to provide the easy management of sign-in, registration, contact and ordering components. I tested this API using Postman. The frontend and the backend are fully connected and I have handled the CORS error which came while pushing data from the frontend to the backend using a proxy server.
</p>

# Components

## Homepage ✨

Built over ReactJS, it is a client-side rendered and responsive homepage. <br/>
![](readme_pics/home.gif)
<br/> <br/>

#### Responsiveness ✅

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/responsive.gif" width = "300px" >

Mapped these menu items into card components dynamically from an array. <br/>
<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/menu.png" width = "1100px">
<br/>

## Orders 🥗

I have used an API to get food items based on the user search, the result will get dynamically fetched and will be displayed in the form of cards on the screen. Searching it will add the item to the window.
<br/>You can check the API used [here](https://www.themealdb.com/api.php)<br/><br/>

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/demo.gif" width = "1000px">

### Select the items you want

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/menu_list.png" width = "1100px">

### After making your Fav Order 🍜

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/orders.png" width = "1100px">

## Login/Register 👤

For the register component, I have used tokens and sessions to authorize users. Sessions are programmed in a way such that they get deleted automatically after 30 days and the user gets logged out. The passwords are hashed after entering using BcryptJS while user registration and are compared while authenticating the client while signing in. <br/>

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/register.gif" width = "1000px">

<p >After registering successfully, user will get a customized confirmation email. I implemented this using EmailJS.</p> <br/>
<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/ss_reg.jpg" width = "300px">

## Navbar

Used React useContext hook (Context API) along with useReducer hook to manage state globally in the application and to toggle the navbar elements.

### Before

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/nav.png" width = "1100px">

<br/><br/>
If the user is logged in successfully, the logout option will appear. The username of the logged-in user will be shown on the navbar.

### After

<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/nav_log.png" width = "1100px">

## Footer

<p>The year in the footer gets dynamically fetched, so there is no need to take care of changing it every year. </p> 
<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/footer.png" width = "1000px">
<p>User can subscribe for the newsletter and will get a confirmation email for the same. I implemented this using EmailJS.
</p>
<img  src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/ss_sub.jpg"  width = "300px">
<br/> <br/>

## Backend

My database is hosted on MongoDB Atlas. I have used ExpressJS and NodeJS to make routes, schema and middlewares in the backend. I have used a .env file to configure my application environment constants and to keep them safe. <br/>
Stored the JWT tokens in an array. <br/>
<img src="https://github.com/aakankshabhende/Delicaacy/blob/main/readme_pics/db.png" width = "1100px">
