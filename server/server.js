require('dotenv').config()
const express = require('express')
const cookieParser = require("cookie-parser")
const app = express()

//import files
const connectDB = require('./utils/connection')
const authRoutes = require('./routes/auth-routes')
const blogRoutes = require('./routes/blog-routes')
const adminRoutes = require('./routes/admin-routes')

//set middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// base routes

app.use('/api/auth',authRoutes)
app.use('/api',blogRoutes)
app.use('/api',adminRoutes)


//start server

const port = process.env.port || 3000
connectDB().then(()=>{
app.listen(port,()=>{
    console.log("server is running on port",port)
})

})
