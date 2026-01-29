import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { RegisterSchema } from "../schema/Register-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";


export const Register = () => {
  const navigate = useNavigate();
  //import baseurl
  const API_URL = import.meta.env.VITE_API_URL;
  //form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(RegisterSchema) });

  //form submision handle
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, data, {
        withCredentials: true,
      });
       toast.success(response.data.message)
      reset()
      navigate('/login')
     
     
      
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong")
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Card */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <div>
            <label className="block mb-1 text-sm font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("username")}
            />
          </div>
          {errors.username && (
            <p className="text-red-600">{errors.username.message}</p>
          )}

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Already have an account?
          <Link to="/login">
            <span className="text-blue-600 cursor-pointer ml-1">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
