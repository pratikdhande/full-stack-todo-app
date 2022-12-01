const Todo = require("../model/todoModel")

exports.deleteTask = async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId);

        const {taskToBeDelete} = req.body;
        const index = todo.task.indexOf(taskToBeDelete);
        todo.task.splice(index, 1)
        await todo.save();
        res.status(200).json({
            success: true,
            message: "task deleted successfully",
            todo
        });

    } catch (error) {
        console.log(error);
        res.status(401).json({
            success: false,
            message: "task deletion failed"
        })
    }
}