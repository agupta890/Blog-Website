const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    contact:{
        type:Number,
        required:true,
        maxlength:10
    },
    message:{
        type:String,
        required:true,
        minlength:10,
    }
})

const Contact = mongoose.model('Contact',contactSchema)

module.exports = Contact
