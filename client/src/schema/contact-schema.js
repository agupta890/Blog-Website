import {z} from 'zod'
export const contactSchema = z.object({
   name:z.string().nonempty("Name is required").min(2,"Name must have atleaset 2 chars"),
   contact:z.string().nonempty("Contact number is required").min(10,"Invlid contact number format"),
   message:z.string().nonempty("Message is required").min(10,"Message must have 10 chars")

})