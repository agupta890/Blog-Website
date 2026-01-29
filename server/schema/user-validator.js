const {z} = require('zod')

const registerSchema = z.object({
    username:z.string().min(4,"Username must have atleast 4 chars"),
    email:z.email("Invalid email"),
    password:z.string().min(6,"Password must have atleaset 6 chars")
})

module.exports = registerSchema;
