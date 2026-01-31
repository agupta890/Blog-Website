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
      <div className="flex flex-wrap justify-center gap-4 px-4 py-6">
      {data.map((blogs) => (
        <div
          key={blogs._id}
          className="flex flex-col max-w-sm w-full sm:w-[48%] md:w-[32%] lg:w-[24%] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
        >
          {/* Image Section */}
          <img
            src={blogs.imgUrl || "https://via.placeholder.com/400x200"}
            alt={blogs.title}
            className="w-full h-48 object-cover"
          />

          {/* Content Section */}
          <div className="p-5 flex flex-col flex-1">
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-3">{blogs.title}</h2>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{blogs.content}</p>

            {/* Button */}
           <Link to = {`/blogs/${blogs._id}`}><button className="text-blue-600 font-medium uppercase tracking-wide hover:underline mt-auto">
              Read More
            </button></Link> 
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
