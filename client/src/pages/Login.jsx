import {Link,useNavigate} from 'react-router-dom'
import {LoginSchema} from '../schema/Login-schema'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useContext } from 'react'
import {AuthContext} from '../context/AuthContext'

export const Login = () => {

  //setup context 
  const {user,setUser} = useContext(AuthContext)
 
  const navigate = useNavigate()
  //import baseUrl

  const API_URL = import.meta.env.VITE_API_URL
  //form validation

  const {register,handleSubmit,reset,formState:{errors}}=useForm({resolver:zodResolver(LoginSchema)})
   

  //handle submission
  const onSubmit =async(data)=>{
    try {
      const response = await axios.post(`${API_URL}/auth/login`,data,
        {
          withCredentials:true
        }
      )
      
      
      toast.success(response.data.message)
      reset()
      setUser(response.data.data); 
   
      navigate('/')
      


    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid Credentials")
    }

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {/* Card */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email")}
            />
            {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password")}
             
            />
             {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
          </div>

  

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Don't have an account?
         <Link to="/register"> <span className="text-blue-600 cursor-pointer ml-1">
            Register
          </span></Link> 
        </p>

      </div>

    </div>
  );
};

