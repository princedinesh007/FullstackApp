const express = require('express');
const mongoose = require('mongoose');
const todo_routes = require("./Routes/TodoRoutes");
require('dotenv').config();

const app = express();
app.use(express.json());

const url = process.env.DBURL;
const PORT = 3000;

mongoose.connect(url).then(() => {
    console.log("Database Connected")
}).catch((error) => {
    console.log("Something Went Wrong")
})


app.use(todo_routes);



app.listen(PORT, () => {
    console.log("Server Started")
})