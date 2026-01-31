import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
import { useState } from 'react';
export const ContactInfo = () => {
//api base url
const API_URL = import.meta.env.VITE_API_URL;

//statte for pagination 
const [pageNumber, setPageNumber] = useState(0)
// handle next and previous button 

const handleNext = ()=>{
  setPageNumber((prev)=>prev+1)
}

const handlePrev = ()=>{
  if(pageNumber>0){
    setPageNumber((prev)=>prev-1)
  }
}

//set start and limit for pagination 
const limit = 4 
const start = limit * pageNumber
//fetch data using axios

const fetchData = async()=>{
  try {
    const response = await axios.get(`${API_URL}/auth/contact`,{
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

//userquery handle api response 
const {data,isError,isLoading,error} = useQuery({
  queryKey:['contact',pageNumber],
  queryFn:fetchData
})



// handle error and loading state
if(isError){
  return <p>{error.message}</p>
}
if(isLoading){
  return <p>loading</p>
}
  return (
    <div className="p-4">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Contact Messages</h2>

      {/* Table Wrapper */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 font-semibold">Name</th>
              <th className="text-left px-4 py-3 font-semibold">Contact</th>
              <th className="text-left px-4 py-3 font-semibold">Message</th>
            </tr>
          </thead>

          {/* table body */}
          {data.length===0 ?(
            <p>No Contact Message</p>
          ):(<tbody>
            {
              data.map((contact)=>{
                return <tr className="border-b hover:bg-gray-50 transition" key={contact._id}>
              <td className="px-4 py-3">{contact.name}</td>
              <td className="px-4 py-3 text-gray-600">{contact.contact}</td>
              <td className="px-4 py-3 text-gray-500 line-clamp-2">
               {contact.message}
              </td>
            </tr>
              })
            }
            
          </tbody>)}
        </table>

        {/* pagination buttons */}
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
    </div>
  );
};
