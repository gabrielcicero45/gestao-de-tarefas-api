const express = require('express')
const consign = require('consign')
const cors = require('cors')




module.exports = () => {
    const app = express()
    app.use((req, res, next) => {
        
        res.header("Access-Control-Allow-Origin", "*");
        
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        app.use(cors());
        next();
    });
    app.use(express.json())
    app.use(express.urlencoded())

    consign().include('controllers').into(app)
   

    
   
   
    
    return app
}
