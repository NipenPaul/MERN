const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema');

const Todo = new mongoose.model("Todo", todoSchema);

// GET ALL THE TODOS
router.get('/', async(req, res) =>{

});

// GET A TODO by id
router.get('/:id', async(req, res) =>{

});

// POST A TODO
router.post("/", async(req, res) =>{
    try {
        const newTodo = new Todo(req.body);
        console.log("This Data inserted: "+newTodo);
        await newTodo.save(); // Removed the callback function

        res.status(200).json({
            message: "Todo was inserted successfully",
        });
    } catch (err) {
        res.status(500).json({
            error: 'There was a server side error!',
        });
    }
});

// POST MULTIPLE TODO
router.post('/all', async(req, res) =>{

});

// PUT TODO
router.put('/:id', async(req, res) =>{

});

// DELETE TODO
router.delete('/:id', async(req, res) =>{

});

module.exports = router;