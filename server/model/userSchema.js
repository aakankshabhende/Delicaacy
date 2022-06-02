const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// here userSchema is instance 
const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
         type: String,
        required:true
    },
    password: {
         type: String,
        required:true
    },
    cpassword: {
         type: String,
        required:true
    },
    tokens:[
        {
            token:{
                type: String,
                require : true
            }
        }
    ]
})
// middleware
userSchema.pre('save', async function(next){            // before save function in auth
    console.log("inside");                               // useEffect cannot be used with async await
    if(this.isModified('password')){
        console.log("inside pass");
        this.password = await bcrypt.hash(this.password, 12);       //salt=12
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    console.log('reached next');
    next();
});

// generation of tokens
userSchema.methods.generateAuthToken = async function() {
    try{
        console.log('generate auth')
        let token = await jwt.sign({ _id : this._id}, process.env.SECRET_KEY);   
        this.tokens = this.tokens.concat({ token : token});          // token of db : token of current user
        await this.save();                                             // this keyword acts opposite when used in fat arrow function sp use normal functions
        return token;
    }catch(err){
        console.log(err);
    }
}

const User = mongooose.model('USER', userSchema);

module.exports = User;