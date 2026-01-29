import {z} from 'zod'

export const RegisterSchema = z.object({
    username:z.string().nonempty("Username is required").min(3,"Username must have atleast 3 chars"),
    email:z.email("Invalid Email").nonempty("Email is required"),
    password:z.string().nonempty("Password is required").min(6,"Password must have atleast 6 chars")
})