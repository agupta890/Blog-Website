import {useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {BlogSchema} from '../schema/blog-schema'
import axios from 'axios'
import {toast} from 'react-hot-toast'
export const CreateBlog = () => {
  //import base api url
  const API_URL = import.meta.env.VITE_API_URL

  // validate form using useform

  const {register,handleSubmit,reset, formState:{errors}} = useForm({resolver:zodResolver(BlogSchema)})

  //handle form submission 

  const onSubmit = async(data)=>{
    try {
      const response = await axios.post(`${API_URL}/blogs`,data,
        {withCredentials:true}
      )
     
      toast.success(response.data.message)
       reset()
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went wrong")
    }
    
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl">

      <h2 className="text-xl font-bold mb-4">Create Blog</h2>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

        <input
          type="text"
          placeholder="img url"
          className="w-full border p-2 rounded"
          {...register("imgUrl")}
        />
        {errors.imgUrl && <p className='text-red-600'>{errors.imgUrl.message}</p>}


        <input
          type="text"
          placeholder="Blog Title"
          className="w-full border p-2 rounded"
          {...register("title")}
        />
        {errors.title && <p className='text-red-600'>{errors.title.message}</p>}


        <textarea
          rows="5"
          placeholder="Blog Description"
          className="w-full border p-2 rounded"
          {...register("content")}
        ></textarea>
        {errors.content && <p className='text-red-600'>{errors.content.message}</p>}

        <input
          type="text"
          placeholder="write author name"
          className="w-full border p-2 rounded"
          {...register("author")}
        />
        {errors.author && <p className='text-red-600'>{errors.author.message}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Publish Blog
        </button>

      </form>

    </div>
  );
};


