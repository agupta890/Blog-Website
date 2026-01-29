const jwt = require('jsonwebtoken')
const STATUS = require('../utils/status-code')
const isAuth = async(req,res,next)=>{
try {
    const token = req.cookies.token;
    if(!token){
        return res.status(STATUS.BAD_REQUEST).json({message:"User not Authenticate"})
    }
    const decode = jwt.verify(token,process.env.SECRET_KEY)
    if(!decode){
        return res.status(STATUS.BAD_REQUEST).json({message:"Invalid token"})
    }
    req.user = {id:decode._id,role:decode.role}
    
    next()
} catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:"internal server error",error:error.message})
}
}

module.exports = isAuth