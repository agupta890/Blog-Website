import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {Link} from 'react-router-dom'

export const AllBlogs = () => {
  // API Base URL
  const API_URL = import.meta.env.VITE_API_URL;

  // state for handle pagination
  const [pageNumber, setPageNumber] = useState(0);

  // handle prev and next button to handle pagination
  const handleNext = () => {
    setPageNumber((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (pageNumber > 0) {
      setPageNumber((prev) => prev - 1);
    }
  };

  // set limits and start for pagination
  const limit = 3;
  const start = pageNumber * limit;
  // Fetch Function
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/blogs`, {
        withCredentials: true,
        params: {
          _start: start,
          _limit: limit,
        },
      });

      // Always return data
      return response.data.data || [];
    } catch (error) {
      console.error("Fetching failed:", error);
      throw new Error(
        error?.response?.data?.message || "Failed to fetch blogs",
      );
    }
  };

  // React Query Hook
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blogs", pageNumber],
    queryFn: fetchData,
  });
  console.log(data);

  // Loading State
  if (isLoading) {
    return <p className="text-center mt-6">Loading...</p>;
  }

  // Error State
  if (isError) {
    return <p className="text-center mt-6 text-red-500">{error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">All Blogs</h2>

      {/* Empty State */}
      {data.length === 0 ? (
        <p className="text-center text-gray-500">No Blogs Found</p>
      ) : (
        // Grid Wrapper
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((blogs) => (
            <div
              key={blogs._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={blogs.imgUrl || "https://via.placeholder.com/300"}
                alt={blogs.title}
                className="rounded mb-3 h-48 w-full object-cover"
              />

              {/* Title */}
              <h3 className="font-semibold text-lg line-clamp-1">
                {blogs.title}
              </h3>

              {/* Content */}
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {blogs.content}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-between mt-4">
                <Link to={`/edit/${blogs._id}`}><button className="text-blue-600 hover:underline">Edit</button></Link>

                <button className="text-red-600 hover:underline">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center m-4 gap-4">
        <button
          className="bg-emerald-500 px-4 py-2 rounded-sm hover:bg-emerald-600"
          onClick={handlePrev}
        >
          Prev
        </button>
        <p className="text-xl font-semibold">{pageNumber}</p>
        <button
          className="bg-emerald-500 px-4 py-2 rounded-sm hover:bg-emerald-600"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
