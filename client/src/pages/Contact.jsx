import React from "react";
import { contactSchema } from "../schema/contact-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from 'react-hot-toast'

export const Contact = () => {
  //api_baseurl
  const API_URl = import.meta.env.VITE_API_URL;

  //handle form using useform
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactSchema) });

  //handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${API_URl}/contact`,data,{
        withCredentials:true
      })
      toast.success(response.data.message)
      reset();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wroong")
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-600 via-indigo-600 to-purple-700 px-4">
      <form
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            {...register("name")}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        {/* Contact Number */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Contact Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            {...register("contact")}
          />
          {errors.contact && (
            <p className="text-red-600">{errors.contact.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
            {...register("message")}
          ></textarea>
          {errors.message && (
            <p className="text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
