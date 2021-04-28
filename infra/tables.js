class Tables {

    init(connection){
        console.log('Tabelas Chamadas')
        this.connection = connection
        this.createTask()
    }

    createTask(){
        const sql = 'CREATE TABLE IF NOT EXISTS Tarefas (id int NOT NULL AUTO_INCREMENT, title varchar(50), description text,responsible varchar(50),priority varchar(10), deadline varchar(50), status varchar(20), PRIMARY KEY(id) )'
        this.connection.query(sql, (error) =>{
            if(error){
                console.log(error)
            }
            console.log('Tabela Tarefas Criada !')

        })
    }
}

module.exports = new Tables