const mongoose=require('mongoose');

const User=mongoose.Schema({
    username:{
        type:String,
        requried:[true,"Username Mandatory"]
    },
    password:{
        type:String,
        requried:[true,"Password Mandatory"]
    }
});

const userSchema=mongoose.model("userschema",User);
module.exports=userSchema;