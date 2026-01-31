const STATUS = require("../utils/status-code")
const Contact = require("../models/contact-model")

const createContact = async(req,res)=>{
try {
    const {name,contact,message} = req.body
    // basic validation
    if(!name || !contact || !message){
        return res.status(STATUS.BAD_REQUEST).json({message:"All fields are required"})
    }

    // create a contact message
    const createMessage = await Contact.create({name,contact,message})
    const contactData ={
        name:createMessage.name,
        message:createMessage.message
    }
    return res.status(STATUS.CREATED).json({message:"Message Sent",data:contactData})
} catch (error) {
    return res.status(STATUS.SERVER_ERROR).json({message:"Internal server error"})
}
}

module.exports = {createContact}