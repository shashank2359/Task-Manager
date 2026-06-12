const Task = require("../models/Task");

const createTask = async(req,res)=>{

    const task = await Task.create({
        title:req.body.title,
        description:req.body.description,
        user:req.user.id
    });

    res.status(201).json(task);
};


const getTasks = async(req,res)=>{

    const tasks = await Task.find({
        user:req.user.id
    });

    res.json(tasks);
};


const updateTask = async (req,res)=>{

    const task = await Task.findOneAndUpdate(
        {
            _id:req.params.id,
            user:req.user.id
        },
        req.body,
        {
            new:true
        }
    );

    res.json(task);
};


const deleteTask = async(req,res)=>{

    await Task.findOneAndDelete({
        _id:req.params.id,
        user:req.user.id
    });

    res.json({
        message:"Deleted"
    });
};  

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};