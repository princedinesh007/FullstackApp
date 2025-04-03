const express=require('express');
const Router=express.Router();
const TodoController=require("../Controller/TodoController");
const auth=require('../middleware/auth')


Router.post("/createTodo",auth,TodoController.postTodo)
Router.get("/getTodo",auth,TodoController.getTodo)
Router.put("/updateTodo/:id",auth,TodoController.updateTodo)
Router.delete("/deleteTodo/:id",auth,TodoController.deleteTodo)

module.exports=Router;