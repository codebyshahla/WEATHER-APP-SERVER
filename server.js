const express = require('express');
const app = express();
require('dotenv').config();
require('./config/config')();
const port =4000;
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})