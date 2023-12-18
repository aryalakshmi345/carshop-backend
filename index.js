require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

// create express server
const csServer = express()

csServer.use(cors())
csServer.use(express.json())
csServer.use(router)

const port = 4000 || process.env.PORT

csServer.listen(port,()=>{
    console.log(`Server is started running at port : ${port} and waiting for client request`);
})

