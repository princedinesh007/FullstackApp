const ToDo = require('../models/TodoSchema');


const postTodo = async (req, res) => {
    try {
        const { Todo_activity } = req.body;
        const existingTodo = await ToDo.findOne({ Todo_activity });
        if (existingTodo) {
            return res.status(400).json({ message: "Todo already exists" });
        }
        const newTodo = new ToDo({ Todo_activity });
        await newTodo.save();
        res.status(201).json({ message: "Todo Created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error" })
    }
}

const getTodo = async (req, res) => {
    try {
        const TodoItems = await ToDo.find({})
        res.status(200).json(TodoItems)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}

const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedData = req.body;
        const updatedTodo = await ToDo.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(201).json({ message: "Todo updated" })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}

const deleteTodo = async (req, res) => {
    try {
        const id = req.params;
        await ToDo.findByIdAndDelete(id);
        res.status(200).json({ message: "Todo Item Deleted" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}
module.exports = { postTodo, getTodo, updateTodo, deleteTodo }

