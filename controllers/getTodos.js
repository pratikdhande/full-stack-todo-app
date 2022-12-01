const Todo = require('../model/todoModel');

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        if(!todos) return res.status(400).send("todo does not exist")
        res.status(200).json({
            success: true,
            todos
        })
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}