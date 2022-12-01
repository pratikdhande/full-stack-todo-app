const express = require("express");
const { createTask } = require("../controllers/createTask");
const {createTodo} = require("../controllers/createTodo");
const { deleteTask } = require("../controllers/deleteTask");
const { dltTodo } = require("../controllers/deleteTodo");
const { editTodo } = require("../controllers/editTodo");
const { getTodo } = require("../controllers/getTodo");
const { getTodos } = require("../controllers/getTodos");
const { home } = require("../controllers/home");
const router = express.Router();

router.get("/home", home)
router.post("/todo", createTodo);
router.post("/createtask/:id", createTask);
router.get("/todos", getTodos);
router.get("/todo/:id", getTodo);
router.put("/editTodo/:id", editTodo);
router.delete("/todo/:id", dltTodo);
router.delete("/deleteTodoTask/:id", deleteTask);

module.exports = router