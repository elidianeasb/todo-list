const { Schema, model } = require('mongoose')

const taskSchema = new Schema( //Define the structure of the data to be stored.
    { 
        text: { 
            type: String,
            required: [true, "Text is required."],
        },
        isCompleted: {
            type: Boolean,
            default: false
        }        
    })

const Task = model("Task", taskSchema);

module.exports = Task