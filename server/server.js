require('dotenv').config()
const express = require('express')
const cookieParser = require("cookie-parser")
const app = express()
const cors = require('cors')

//import files
const connectDB = require('./utils/connection')
const authRoutes = require('./routes/auth-routes')
const blogRoutes = require('./routes/blog-routes')
const adminRoutes = require('./routes/admin-routes')
const contactRoutes = require('./routes/contact-routes')

//set middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors(
    {
        origin:"http://localhost:5173",
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    }
))

// base routes

app.use('/api/auth',authRoutes)
app.use('/api',blogRoutes)
app.use('/api/auth',adminRoutes)
app.use('/api',contactRoutes)

//start server

const port = process.env.port || 3000
connectDB().then(()=>{
app.listen(port,()=>{
    console.log("server is running on port",port)
})

})
