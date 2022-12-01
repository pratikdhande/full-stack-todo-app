require('dotenv').config();
const express = require('express');
const dbConnect = require("./config/db")
const app = express();
const todoRouter = require("./router/todoRouter")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

dbConnect();

app.use("/api/v1/",todoRouter );


module.exports = app