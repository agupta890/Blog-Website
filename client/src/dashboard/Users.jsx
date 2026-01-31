import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react';

export const Users = () => {
  // api base url
  const API_URL = import.meta.env.VITE_API_URL

  // state for pagination 
  
const [pageNumber, setPageNumber] = useState(0)
//handle next and prev button

const handleNext = ()=>{
  setPageNumber((prev)=>prev+1)
}

const handlePrev = ()=>{
  if(pageNumber>0){
    setPageNumber((prev)=>prev-1)
  }
}
//set limit and start 
const limit = 4
  const start = limit *pageNumber
//fetch data 
const fetchData = async()=>{
try {
  const response = await axios.get(`${API_URL}/auth/user`,{
    withCredentials:true,
    params:{
      _start:start,
      _limit:limit
    }
  })
  return response.data.data
} catch (error) {
  console.log(error?.response?.data?.message || "something went wrong")
}
}
//useQuer for handle api response
const {data,isError,isLoading,error} = useQuery({
  queryKey:['users',pageNumber],
  queryFn:fetchData
})
console.log(data)

if(isLoading){
  return <p>loading</p>
}

if(isError){
  return <p>{error.message}</p>
}
  return (
    <div className="p-4">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Users</h2>

      {/* Table Wrapper */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 font-semibold">Name</th>
              <th className="text-left px-4 py-3 font-semibold">Email</th>
              <th className="text-left px-4 py-3 font-semibold">Role</th>
            </tr>
          </thead>

          {/* Table Body (Dummy UI Data) */}
          <tbody>
            {
              data.map((user)=>{
                return <tr className="border-b hover:bg-gray-50 transition">
              <td className="px-4 py-3">{user.username}</td>
              <td className="px-4 py-3 text-gray-600">{user.email}</td>
              <td className="px-4 py-3">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {user.role}
                </span>
              </td>
            </tr>
              })
            }
          </tbody>
        </table>
      </div>
      {/* page buttons  */}
      <div className='flex items-center justify-center m-4 gap-4'>
        <button className='bg-emerald-500 px-4 py-2 rounded-sm hover:bg-emerald-600' onClick={handlePrev}>Prev</button>
        <p className='text-xl font-semibold'>{pageNumber}</p>
        <button className='bg-emerald-500 px-4 py-2 rounded-sm hover:bg-emerald-600' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
