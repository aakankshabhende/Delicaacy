const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const { response } = require("express");

router.get("/", (req, res) => {
  res.send(`Hello world from the server router js`);
});

// Register route
router.post("/register", async (req, res) => {
  const { name, email, password, cpassword } = req.body; // got from frontend
  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }
  try {
    const userExist = await User.findOne({ email: email }); // Checking if user already exists
    if (userExist) {
      return res.status(422).json({ error: "Email already in use" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Passwords are not matching" });
    }
    const user = new User({ name, email, password, cpassword });
    // bcryptjs middleware
    await user.save();

    res.status(201).json({ message: "You registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

// Login route
router.post("/login", async (req, res) => {
  
  try {   
    const { pass, email } = req.body; // got from frontend
    if (!pass || !email) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    const userLogin = await User.findOne({ email: email }); // userLogin == req.body
    if (userLogin) {
      const match = await bcrypt.compare(pass, userLogin.password);
      const token = await userLogin.generateAuthToken();

      res.cookie("jwt-token", token, {
        expires: new Date(Date.now() + 25892000000), // 30 days in milliseconds automatic session expire
        httpOnly: true,
      });
    if(!match){
      return res.status(400).json({ error: "Invalid Credentials!" });
    }
    else {
      return res.json({ message : "User sign-in successfully!" });
    }
  }}
  catch(err) {
    console.log(err);
  }
});

// LogOut route
router.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.sendStatus(204);
});

// About route
/* router.get("/about", authenticate, (req, res) => {
  res.send(req.rootuser);
});
*/

module.exports = router;
