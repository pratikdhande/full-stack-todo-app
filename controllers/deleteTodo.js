const Todo = require("../model/todoModel");

exports.dltTodo = async (req, res) => {
    try {
        const todoId = req.params.id
        if(!todoId) return res.status(401).send("todo is not found")

        const todo = await Todo.findByIdAndDelete(todoId)
        res.status(200).json({
            success: true,
            message: "todo deleted successfully",
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}