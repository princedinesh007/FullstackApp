
const express=require('express');
const userRouter=express.Router();
const user=require('../Controller/UserController')

userRouter.post("/register",user.register)
userRouter.post("/signin",user.signIn)


module.exports=userRouter;