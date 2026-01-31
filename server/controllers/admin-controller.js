const User = require('../models/user-model')
const Contact =require('../models/contact-model')
const Blog = require('../models/blog-model')
const STATUS = require('../utils/status-code')

//getusers controller
const getAllUser =async(req,res)=>{
try {
    const _start = parseInt(req.query._start) || 0
    const _limit = parseInt(req.query._limit) || 4
    const getUsers = await User.find().skip(_start).limit(_limit)
    if(!getUsers){
        return res.status(STATUS.BAD_REQUEST).json({message:"No user found"})
    }
   
    return res.status(STATUS.OK).json({message:"user fetch",data:getUsers})
} catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:"Internal server error",error:error.message})
}
}

//  get all contact message

const getAllMessage =async(req,res)=>{
try {
    const _start = parseInt(req.query._start) || 0
    const _limit = parseInt(req.query._limit) || 4
    const getMessage = await Contact.find().skip(_start).limit(_limit)
    if(!getMessage){
        return res.status(STATUS.BAD_REQUEST).json({message:"No Message..."})
    }
    return res.status(STATUS.OK).json({message:"Message Fetch",data:getMessage})
} catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:"Internal server error",error:error.message})
}
}

//get all blogs

const getAllBlogs = async(req,res)=>{
    try {
        const Allblogs = await Blog.find()
        
        if(Allblogs.length===0){
            return res.status(STATUS.OK).json({message:"No records..."})
        }
        return res.status(STATUS.OK).json({message:"Blogs fecthing",data:Allblogs})
    } catch (error) {
         return res.status(STATUS.SERVER_ERROR).json({message:"Internal server error",error:error.message})
    }
}

module.exports = {getAllUser,getAllMessage,getAllBlogs}