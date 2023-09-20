const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema');

const Todo = new mongoose.model("Todo", todoSchema);

// Todo active find using my instance method
router.get('/active', async(req, res) =>{
    try {
        const todo = new Todo();
        const data = await todo.findActive();
        res.status(200).json({
            data,
        });
    } catch (error) {
        res.status(500).json({
            error: 'There was a server side error using findActive!',
        });
    } 
});

// Todo inactive find using my instance method
router.get('/inactive', async(req, res) =>{
    try{
        const todo = new Todo();
        const data = await todo.findInactive();
        res.status(200).json({
            data,
        });
    }catch(err){
        res.status(500).json({
            error: 'There was a server side error using findActive!',
        });
    }
});

// Todo inactive find using my instance method
router.get('/js', async(req, res) =>{
    try{
        const data = await Todo.findByJS();
        res.status(200).json({
            data,
        });
    }catch(err){
        res.status(500).json({
            error: 'There was a server side error using findByJs!',
        });
    }
});


// Get TODOS BY LANGUAGE
router.get('/language', async(req, res) =>{
    try{
        const data = await Todo.find().byLanguage('learn');
        res.status(200).json({
            data,
        });
    }catch(err){
        res.status(500).json({
            error: 'There was a server side error using byLanguage!',
        });
    }
});

// GET ALL THE TODOS
router.get('/', async(req, res) =>{
    try {
        const data = await Todo.find({status: 'active'});
        res.status(200).json({
            message: "Find all Object: ",
            result: data
        });
        
    } catch (error) {
        res.status(500).json({
            error: 'There was a server side error using get!',
        });
    }

    // try {
    //     const data = await Todo.find({status: 'active'}).select({
    //         _id: 0,
    //         __v: 0,
    //         date: 0
    //     }).limit(1);
    //     res.status(200).json({
    //         message: "Find all Object: ",
    //         result: data
    //     });
        
    // } catch (error) {
    //     res.status(500).json({
    //         error: 'There was a server side error!',
    //     });
    // }

    // Total Active Object found..
    // try {
    //     const count = await Todo.countDocuments({ status: 'active' });
    //     res.status(200).json({
    //         message: "Total active objects found: ",
    //         result: count
    //     });
    // } catch (error) {
    //     res.status(500).json({
    //         error: 'There was a server side error!',
    //     });
    // }
    
});

// GET A TODO by id
router.get('/:id', async(req, res) =>{
    try {
        const data = await Todo.findById(req.params.id);
        if (data) {
            res.status(200).json({
                message: "Found object by ID: ",
                result: data
            });
        } else {
            res.status(404).json({
                message: "No object found with that ID",
            });
        }
    } catch (error) {
        res.status(500).json({
            error: 'There was a server side error using :id!',
        });
    }    
});

// POST A TODO
router.post("/", async(req, res) =>{
    try {
        const newTodo = new Todo(req.body);
        //console.log("This Data inserted: "+newTodo);
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
    try {
        await Todo.insertMany(req.body);
        res.status(200).json({
            message: "Todo were inserted successfully!",
        });
    } catch (err) {
        res.status(500).json({
            error: 'There was a server side error!',
        });
    }
});

// PUT TODO
router.put('/:id', async(req, res) =>{
    try {
        await Todo.updateOne({_id: req.params.id}, {
            $set: {
                status: 'inactive',
            }
        });
        res.status(200).json({
            message: "Todo was Updated successfully!",
        });
    } catch (error) {
        res.status(500).json({
            error: 'There was a server side error!',
        });
    }

    /* Updated and return data (before update or after update, 
    it's depend new true or false, true means after updated)
    */

    // try {
    //     const data = await Todo.findByIdAndUpdate({_id: req.params.id},
    //         {$set: {
    //             status: 'inactive',
    //         }},
    //         {
    //            new: true,
    //            useFindAndModify: false,
    //         }
    //         );
    //     res.status(200).json({
    //         message: "Todo was Updated successfully!",
    //     });
    //     console.log(data);
    // } catch (error) {
    //     res.status(500).json({
    //         error: 'There was a server side error!',
    //     });
    // }
});

// DELETE TODO
router.delete('/all', async(req, res) =>{
    try {
        await Todo.deleteMany({status: 'inactive'});
        res.status(200).json({
            message: "Found object by ID Deleted using many..",
        });
    }catch (error) {
        res.status(500).json({
            error: 'There was a server side error using deleteMany!',
            errorData: error
        });
    }
});


// DELETE TODO
router.delete('/:id', async(req, res) =>{
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Found object by ID Deleted..",
        });
    }catch (error) {
        res.status(500).json({
            error: 'There was a server side error using id!',
        });
    }
});

module.exports = router;