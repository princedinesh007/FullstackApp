const mongoose=require('mongoose');

const User=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username Mandatory"]
    },
    password:{
        type:String,
        required:[true,"Password Mandatory"]
    },
    email:{
        type:String,
    },
    passwordResetToken:{
        type:String,
    },
    passwordResetTokenExpires:{
        type:String,
    }
});

const userSchema=mongoose.model("userschema",User);
module.exports=userSchema;