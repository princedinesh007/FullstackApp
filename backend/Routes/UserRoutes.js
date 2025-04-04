
const express=require('express');
const userRouter=express.Router();
const user=require('../Controller/UserController')

userRouter.post("/register",user.register)
userRouter.post("/signin",user.signIn)
userRouter.post("/forgotpassword",user.forgotPassword)
userRouter.post("/resetpassword/:token",user.passwordResetLink)



module.exports=userRouter;