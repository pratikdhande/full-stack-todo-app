const Todo = require("../model/todoModel");

exports.createTodo = async (req, res) => {
    try {
        // const {title, isImportant} = req.body;
        const newTodo = new Todo({
            title: req.body.title,
            isImportant: req.body.isImportant
            
        })

        if(!newTodo.title && typeof newTodo.title !== String) {
            throw new Error("Title is required and Title value should be string");
        }
        console.log(typeof this.isImportant)
        if(this.isImportant && typeof(this.isImportant) !== Boolean){
            throw new Error("isImportant must be boolean type")
        }

        const createdNewTodo = await newTodo.save();
        res.status(201).json(createdNewTodo)

        
        // const todo = await Todo.create({title, isImportant})
        // res.status(201).json({
        //     success: true,
        //     message: "todo is created"
        // })

    }catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message: error.message
        })
    }
}
