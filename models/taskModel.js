const connection = require('../infra/connection')

class TaskModel {

    addTask(task,res){
        const sql ='INSERT INTO Tarefas SET ? ';
        
        connection.query(sql,task,(error,results) =>{
            if(error){
                res.status(400).json(error)}
                res.status(201).json(results)})
        
    }

    listTask(res){
        const sql = 'SELECT * FROM Tarefas'

        connection.query(sql, (error,results) => {
            if(error){
                res.status(400).json(erro)
            }
            res.status(200).json(results)
        })
    }

    getTaskByID(id,res){
        const sql =  `SELECT * FROM Tarefas WHERE id=${id}`

        connection.query(sql,(error,results) =>{
            if(error){
                res.status(400).json(error)}
                res.status(201).json(results)})
        
    }
    updateTask(id,values,res){
        const sql = 'UPDATE Tarefas SET ? WHERE id=?'
        connection.query(sql,[values,id], (error,results) =>{

            if(error){
                res.status(400).json(error)
            }
            res.status(200).json(results)
        })
    }

    deleteTask(id,res){
        const sql = 'DELETE FROM Tarefas WHERE id=?'

        connection.query(sql,id, (error,results) =>{
            if(error){
                res.status(400).json(error)
            }
            res.status(200).json(results)
        })
    }
}

module.exports = new TaskModel