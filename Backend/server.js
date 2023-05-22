const mongoose = require("mongoose");
const server = require('./app')

// Configuring environment variables
const dotenv = require("dotenv");
dotenv.config({path:'./config.env'});

// Establishing Connection
const DB = process.env.DATABASE_URL 
const connection = mongoose.connect(DB);

// listening on server
server.listen(8080, async()=>{
    try {
        await connection;
        console.log(`Server Running on http://127.0.0.1:${8080}`)
    } catch (error) {
      console.log("Something Wrong");  
    }
})