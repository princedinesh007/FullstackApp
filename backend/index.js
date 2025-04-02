const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const todo_routes = require("./Routes/TodoRoutes");
const user_routes=require("./Routes/UserRoutes");
require('dotenv').config();

const app = express();
app.use(cors({
        origin: "http://localhost:4200",
        methods: "GET,POST,PUT,DELETE",
}))
app.use(express.json());

const url = process.env.DBURL;
const PORT = 3000;

mongoose.connect(url).then(() => {
    console.log("Database Connected")
}).catch((error) => {
    console.log("Something Went Wrong")
})


app.use(todo_routes);
app.use(user_routes)



app.listen(PORT, () => {
    console.log("Server Started")
})