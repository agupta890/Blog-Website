import { BlogSchema } from "../schema/blog-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //api base url
  const API_URL = import.meta.env.VITE_API_URL;

  //form vlaidation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(BlogSchema) });

  //handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`${API_URL}/blogs/${id}`, data, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      reset();
      navigate('/admin/blogs')
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* imgUrl */}
        <div>
          <label className="block text-sm font-medium mb-1">Image Url</label>
          <input
            type="text"
            placeholder="Enter image url"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("imgUrl")}
          />
          {errors.imgUrl && (
            <p className="text-red-600">{errors.imgUrl.message}</p>
          )}
        </div>

        {/* Blog Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Blog Title</label>
          <input
            type="text"
            placeholder="Enter blog title"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Blog Content</label>
          <textarea
            rows="6"
            placeholder="Write your blog content..."
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("content")}
          ></textarea>
          {errors.content && (
            <p className="text-red-500">{errors.content.message}</p>
          )}
        </div>

        {/* author name*/}
        <div>
          <label className="block text-sm font-medium mb-1">Author Name</label>
          <input
            type="text"
            className="w-full border rounded px-2 py-2"
            placeholder="Enter author name"
            {...register("author")}
          />
          {errors.author && (
            <p className="text-red-500">{errors.author.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-3">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Update Blog
          </button>

          <button
            type="button"
            className="border px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
