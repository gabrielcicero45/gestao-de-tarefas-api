const Task = require('../models/taskModel')
const express = require('express')
module.exports = app =>{
    
    app.get('/task',(req,res) => {
        Task.listTask(res)
    });

    app.get('/task/:id',(req,res) => {
        const id = parseInt(req.params.id)
        
        Task.getTaskByID(id,res)
    });

    app.post('/task', (req,res) =>{
        
        let task = req.body

        Task.addTask(task,res)
        
        console.log(req.body)
    })

    app.patch('/task/:id', (req,res) =>{
        const id = parseInt(req.params.id)
        const values = req.body

        Task.updateTask(id,values,res)
    })

    app.delete('/task/:id',(req,res) => {
        const id = parseInt(req.params.id)

        Task.deleteTask(id,res)
    })
}


