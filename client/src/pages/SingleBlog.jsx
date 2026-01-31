import React from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'

export const SingleBlog = () => {

  const {id} = useParams();
  //base url
  const API_URL = import.meta.env.VITE_API_URL

  //fetch data 
const fetchData = async()=>{
try {
  const response = await axios.get(`${API_URL}/blog/${id}`)
  return response.data.data
} catch (error) {
  console.log("data fetching failed",error.message)
}
}

//handle api using useQuery
const {data,isError,isLoading,error} = useQuery({
  queryKey:['blog',id],
  queryFn:fetchData
})


if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>{error.mess}</h1>
 return (
  <div className="bg-gray-50 min-h-screen py-10 px-4">
    <div className="max-w-3xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {data.title}
        </h1>

        <div className="flex items-center gap-3 text-gray-600 text-sm">
          <span className="w-9 h-9 bg-emerald-500 text-white rounded-full flex items-center justify-center font-semibold">
            {data.author?.charAt(0)}
          </span>
          <span>{data.author}</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </div>

      {/* Image */}
      <img
        src={data.imgUrl}
        className="rounded-xl mb-8 w-full object-cover"
      />

      {/* Article Content */}
      <article className="prose prose-lg max-w-none text-gray-800">
        {data.content}
      </article>

    </div>
  </div>
);



}
