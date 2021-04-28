const customConfig = require('./config/customConfig')
const connection = require('./infra/connection')
const Tables = require('./infra/tables')

connection.connect( error => {
    if(error){
        console.log(error)
    }
    
    console.log('Conectado com sucesso')
    Tables.init(connection)
    const app =customConfig()

    app.listen(3000, ()=> console.log('Api rodando na porta 3000'))
})


