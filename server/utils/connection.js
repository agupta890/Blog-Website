const mongoose = require('mongoose')

const connectDB = async()=>{
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connection successful")
} catch (error) {
    console.log("connection failed",error)
    process.exit(1)
}
}

module.exports = connectDB