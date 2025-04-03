const mongoose=require('mongoose');

const User=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username Mandatory"]
    },
    password:{
        type:String,
        required:[true,"Password Mandatory"]
    }
});

const userSchema=mongoose.model("userschema",User);
module.exports=userSchema;