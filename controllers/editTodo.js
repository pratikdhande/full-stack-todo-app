const Todo = require("../model/todoModel");

exports.editTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)

        if(!todo) throw new Error("Todo that you are looking not found")

        res.status(200).json({
            success: true,
            message: "Todo is updated successfully",
        })

    } catch (error) {
        console.log(error)
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}