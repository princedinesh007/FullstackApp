require('dotenv').config();
const userSchema = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const validation=require('../validation/validation');
const JWT=require('jsonwebtoken');
const SECRET_KEY=process.env.SECRET_KEY;
console.log(SECRET_KEY)

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const { error, value } = validation.validate(req.body);

    if (error) {
        // If validation fails, send an error response
        return res.status(400).json({ message: 'Validation error', details: error.message });
      }
     
    const userExists = await userSchema.findOne({ username });

    if (userExists) {
      return res.status(400).json({ message: "user Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await userSchema.create({ username, password: hashedPassword });

    // Creating JWT TOKEN

    const Token=JWT.sign({ username: username }, SECRET_KEY, { expiresIn: '3m' });

    res.status(201).json({ message: "Registered Successfully",access_token:Token });

    //by using save methd
    // const newUser=new userSchema({username,password:hashedPassword});
    // await newUser.save();
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const signIn=async(req,res)=>{
    try{
         const {username,password}=req.body;
         const { error, value } = validation.validate(req.body);

        if (error) {
        // If validation fails, send an error response
        return res.status(400).json({ message: 'Validation error', details: error.message });
      }
         const userExists = await userSchema.findOne({ username });
         if (!userExists) {
            return res.status(400).json({ message: "user Not Found" });
          }
          const isPasswordValid = await bcrypt.compare(password, userExists.password);
          if(!isPasswordValid)
          {
            return res.status(400).json({ message: "Password Mismatch" });
          }
          const Token=JWT.sign({username},SECRET_KEY,{ expiresIn: '3m' });
          res.status(200).json({ message: "Login successful",access_token:Token });
    }catch(error)
    {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = { register,signIn };
