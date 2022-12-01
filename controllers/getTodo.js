const Todo = require("../model/todoModel");

exports.getTodo = async(req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId);

        if(!todo) return res.status(400).send("todo not found");

        res.status(200).json({
            success:true,
            todo
        })

    } catch (error) {
        console.log(error)
        console.log(error.message)
    }
}