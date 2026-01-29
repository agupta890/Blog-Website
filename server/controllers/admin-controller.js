const User = require('../models/user-model')
const STATUS = require('../utils/status-code')

//getusers controller
const getAllUser =async(req,res)=>{
try {
    const getUsers = await User.find()
    if(!getUsers){
        return res.status(STATUS.BAD_REQUEST).json({message:"No user found"})
    }
   
    return res.status(STATUS.OK).json({message:"user fetch",data:getUsers})
} catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:"Internal server error",error:error.message})
}
}

module.exports = {getAllUser}