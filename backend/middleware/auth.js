require('dotenv').config();
const JWT=require("jsonwebtoken");
const SECRET_KEY=process.env.SECRET_KEY;

const auth=(req,res,next)=>{
    try{
        const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1]; 
        if (!token) {
          return res.status(403).json({ message: 'Access denied' });
        }
        const user= JWT.verify(token,SECRET_KEY);
        req.user=user;
     next();
    }
    catch(error){
        return res.status(400).json({ message: 'Invalid token or token expired.', error: error.message });
    }
}
module.exports=auth;