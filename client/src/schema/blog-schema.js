import {z} from 'zod'

export const BlogSchema = z.object({
    imgUrl:z.string().nonempty("Img url is required"),
    title:z.string().nonempty("Title is required").min(3,"Title must have atleast 3 chars"),
    content:z.string().nonempty("Blog content is required").min(10,"Blog content is not enough"),
    author:z.string().nonempty("Author name is required").min(2,"Author name must have atleast 2 chars")
})