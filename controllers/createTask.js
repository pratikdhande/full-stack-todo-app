
const Todo = require("../model/todoModel");

exports.createTask = async (req, res) => {
    try {
        
        const todoId = req.params.id
        const todo = await Todo.findById(todoId)
        if(!todo){
            res.status(400).send("todo not exist")
        }
        const {tasks} = req.body
        todo.task.push(tasks)
        await todo.save()
        res.json(todo)
        // Object.defineProperties(todoObj, "task", {
        //     value : tasks,
        //     enumerable: true
        // })
        
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}