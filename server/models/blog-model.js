const mongoose =require('mongoose')

const blogSchema = new mongoose.Schema({
    imgUrl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        unique:true,
        minlength:3
    },
    content:{
        type:String,
        required:true,
        minlength:10
    },
    author:{
type:String,
required:true
    }
},{timestamps:true})

const Blog = mongoose.model('Blog',blogSchema)

module.exports = Blog