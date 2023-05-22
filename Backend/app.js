const express = require("express");
const app = express();
const cors = require('cors')
const UserRoutes = require('./Routes/UserRoutes')
app.use(express.json());
app.use(cors({
    origin : "*",
}))

app.use('/api/v1/auth',UserRoutes)

app.all("*",(req,res,next) => {
    res.status(404).json({
        message : "Not Found"
    })
})


app.get('/',(req,res)=>{
    res.send('Hello Buddy!!')
})

module.exports = app;