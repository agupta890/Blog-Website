const Blog = require('../models/blog-model')
const STATUS = require('../utils/status-code')

const createBlog = async(req,res)=>{
try {
   const {imgUrl,title,content,author} = req.body
   if(!imgUrl || !title || !content || !author){
return res.status(STATUS.BAD_REQUEST).json({message:"All fields are required"})
   }

   // check exist blog 

   const existBlog = await Blog.findOne({title})
   if(existBlog){
    return res.status(STATUS.BAD_REQUEST).json({message:"Blog is already exist"})
   }

   const newBlog = await Blog.create({imgUrl,title,content,author})
   
   return res.status(STATUS.CREATED).json({message:"Blog is created",data:newBlog})
    
} catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:"Internal server error",error:error.message})
}
}

//get all blogs

const getAllblogs = async(req,res)=>{
    try {
        const _start = parseInt(req.query._start) || 0
        const _limit = parseInt(req.query._limit) || 4
        const Allblogs = await Blog.find().skip(_start).limit(_limit)
        
        if(Allblogs.length===0){
            return res.status(STATUS.OK).json({message:"No records..."})
        }
        return res.status(STATUS.OK).json({message:"Blogs fecthing",data:Allblogs})
    } catch (error) {
         return res.status(STATUS.SERVER_ERROR).json({message:"Internal server error",error:error.message})
    }
}

//get single blog
const getSingleBlog = async(req,res)=>{
    try {
        const {id} = req.params;
        const getBlog = await Blog.findById(id)
        if(!getBlog){
            return res.status(STATUS.BAD_REQUEST).json({message:"Something went wrong"})
        }
        return res.status(STATUS.OK).json({message:"Blog fetch",data:getBlog})
    } catch (error) {
        return res.status(STATUS.SERVER_ERROR).json({message:"Internal server error",error:error.message})
    }
}


//edit blogs data 
const editBlog = async( req,res)=>{
    try {
        const {id} = req.params;
        const editData = req.body;

        const updateBlog = await Blog.findByIdAndUpdate(id,editData,{new:true, runValidators: true })
        if(!updateBlog){
            return res.status(STATUS.BAD_REQUEST).json({message:"Blog is not update"})
        }
        return res.status(STATUS.OK).json({message:"Update successful",data:updateBlog})

    } catch (error) {
        return res.status(STATUS.SERVER_ERROR).json({message:"Internal server error",error:error.message})
    }
}

//delete blogs 
const deleteBlog = async(req,res)=>{
try {
    const {id} = req.params
    const deletedBlog = await Blog.findByIdAndDelete(id)
    if(!deleteBlog){
        return res.status(STATUS.BAD_REQUEST).json({message:"Blogs is not deleted"})
    }
    return res.status(STATUS.OK).json({message:"blog is deleted",data:deletedBlog})
} catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:"Internal server error",error:error.message})
}
}
module.exports = {createBlog,getAllblogs,getSingleBlog,editBlog,deleteBlog}