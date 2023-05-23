const express = require("express");
const app = express();
const cors = require('cors')
const UserRoutes = require('./Routes/UserRoutes')
const EmployeeRoutes = require("./Routes/EmployeeRoutes")

app.use(express.json());

app.use(cors({
    origin : "*",
}))

app.use('/api/v1/auth',UserRoutes)
app.use('/api/v1/employee',EmployeeRoutes)

app.all("*",(req,res,next) => {
    res.status(404).json({
        message : "Not Found"
    })
    next();
})

module.exports = app;