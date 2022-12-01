const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Title for Todo is required"],
        maxlength: [25, "Title should be maximum 25 charecters long"]
    },
    task:{
        type: [String]
    },
    isImportant: {
        type: Boolean,
        default: false
    } 
}, 
    { timestamps: true, }
)

module.exports = mongoose.model("todo", todoSchema)
// const TodoModel = mongoose.model("todo", todoSchema)
// export default TodoModel 