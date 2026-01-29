const STATUS = require('../utils/status-code')
const validate=(schema) =>(req,res,next)=>{
const result = schema.safeParse(req.body)
if(!result.success){
    return res.status(STATUS.BAD_REQUEST).json({})
}
req.body = result.data
next()
}

module.exports = validate;