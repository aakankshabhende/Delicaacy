const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');
const authenticate = require('../authenticate');
const { response } = require('express');

router.get('/', (req, res) => {
    res.send(`Hello world from the server router js`);
});

router.post('/register', async (req, res) => {
    const {name, email, password, cpassword} = req.body;
    if (!name || !email || !password || !cpassword){
        return res.status(422).json({error : "Please fill all the fields"});
    }
    try{
        const userExist = await User.findOne({ email : email});
        if(userExist){
            return res.status(422).json({error:"Email already in use"})
        }
        else if(password != cpassword){
            return res.status(422).json({error:"Passwords are not matching"})   
        }
        const user = new User({ name, email, password, cpassword });
        // bcryptjs middleware
        await user.save();

        res.status(201).json({ message :"You registered successfully"});
    }
    catch(err){
        console.log(err)
    }
    
});

router.post("/login", async (req,res) =>{
    try{
        const {pass, email} = req.body;
        if (!pass || !email){
            return res.status(400).json({error : "Please fill all the fields"});
        }
        const userLogin = await User.findOne({email : email});                // userLogin == req.body
        if (userLogin) {
             const match = await bcrypt.compare(pass, userLogin.password, (err, response) => {
                //if error than throw error
                if (err) {
                    console.log(err);
                }
                //if both match than you can do anything
                if(!response){
                    return res.status(400).json({error:"Invalid Credentials"})
                }
                else{
                    return res.status(201).json({ message :"You signed in successfully"});
                }
             });
            const token = await userLogin.generateAuthToken();
            const accessToken = userlogin.generateAccessToken(user)
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
            res.header('x-auth-auth', token).send(JSON.stringify(_.pick(userLogin, ['email', 'password'])))
             res.cookie("jwttoken", token,{
                expires : new Date(Date.now() + 25892000000),    // 30 days in milliseconds automatic session expire
                httpOnly:true
            });
                 
            // !userLogin is removed as email is already getting changed
            
         }
         else {
            return res.status(400).json({error:"Please register first!"})   
         }
}
    catch(err){
        console.log(err);
    }
})


router.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
  })
  

router.get('/about', authenticate, (req,res) =>{
    res.send(req.rootuser);
});

module.exports = router;