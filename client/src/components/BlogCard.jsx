import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {Link} from 'react-router-dom'

export const BlogCard = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  //pagination state

  const [pageNumber, setPageNumber] = useState(0)
  //function for handle next and previous button in pagination
  const handleNext =()=>{
    setPageNumber((prev)=>prev+1)
  }
  const handlePrev = ()=>{
    if(pageNumber>0){
setPageNumber((prev)=>prev-1)
    }
    
  }

  //set limit and start
  const limit = 4
  const start = pageNumber*limit

  // Fetch function
  const fetchData = async () => {
    const response = await axios.get(`${API_URL}/blogs`,
  {params:
    {_start:start,_limit:limit}
  }
      
    );
    return response.data.data;
  };

  // UseQuery
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["blog",pageNumber],
    queryFn: fetchData,
  });

  // Handle loading & error state
  if (isLoading) return <h1 className="text-center mt-10 text-xl">Loading...</h1>;
  if (isError) return <h1 className="text-center mt-10 text-red-500">{error.message}</h1>;

  return (
    <>
    {data>10 ?(
      <p>No blogs...</p>
    ):(
      <div className="flex flex-col gap-6 px-4 py-6 max-w-6xl mx-auto">

      {data.map((blogs) => (
        <div
  key={blogs._id}
  className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col md:flex-row overflow-hidden"
>
  {/* Image Section */}
  <div className="md:w-1/3 w-full h-56 md:h-auto">
    <img
      src={blogs.imgUrl || "https://via.placeholder.com/400x250"}
      alt={blogs.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content Section */}
  <div className="md:w-2/3 w-full p-6 flex flex-col">

    {/* Title */}
    <h2 className="text-2xl font-semibold mb-2 line-clamp-2">
      {blogs.title}
    </h2>

    {/* Description */}
    <p className="text-gray-600 mb-4 line-clamp-3">
      {blogs.content}
    </p>

    {/* Footer */}
    <div className="flex justify-between items-center mt-auto">

      <span className="text-sm text-gray-500">
        {blogs.author}
      </span>

      <Link to={`/blogs/${blogs._id}`}>
        <button className="text-blue-600 font-medium hover:underline">
          Read More →
        </button>
      </Link>

    </div>

  </div>
</div>

      ))}

      
    </div>
    )}
    
    <div className="flex item-center justify-center gap-4 m-2">
        <button className="bg-emerald-500 px-4 py-2 rounded-sm" onClick={handlePrev}>Prev</button>
        <p className="text-xl font-semibold">{pageNumber}</p>
        <button className="bg-emerald-500 px-4 py-2 rounded-sm" onClick={handleNext}>Next</button>
      </div>
      </>
  );
};
