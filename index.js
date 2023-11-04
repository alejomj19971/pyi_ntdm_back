const express = require('express')
require('dotenv').config()
//const routes = require('./routes/')
const app = express()
const cors = require('cors')
const configdb = require('./connection/configdb')
//PORT
const port = process.env.PORT || 4500

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
//app.use('/api', routes);



app.listen(port, ()=>{
    console.log('listening on port', port);
})