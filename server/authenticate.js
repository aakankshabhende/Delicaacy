const jwt = require("jsonwebtoken");
const User = require("../server/model/userSchema");

const authenticate = async (req, res, next) => {
  try {
     const token = req.cookies.jwtwebtoken;
     const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
     console.log(token)

     const rootuser = await User.findOne({
       _id: jwt.verify._id,
       "tokens.token": token,
     });
     if (!rootuser) {
       throw new Error("User not Found");
     }
     console.log("inside auntenticate");
     req.token = token;
     req.rootuser = rootuser;
     req.userID = rootuser._id;

     next();
   } catch (err) {
     res.status(401).send("Unauthorized: No token provided");
     console.log(err);
   }
};

module.exports = authenticate;
