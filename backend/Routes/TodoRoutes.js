const express=require('express');
const Router=express.Router();
const TodoController=require("../Controller/TodoController")


Router.post("/createTodo",TodoController.postTodo)
Router.get("/getTodo",TodoController.getTodo)
Router.put("/updateTodo/:id",TodoController.updateTodo)
Router.delete("/deleteTodo/:id",TodoController.deleteTodo)

module.exports=Router;