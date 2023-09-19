import React from 'react'

function TripCard(props) {

const datas=props.trip
  return (
     <>
     {datas.map((result)=>
     <div className="w-full md:w-1/3 p-4">
     <div className="bg-red-100 shadow-lg rounded-lg p-4">
       <img src={result.photo? result.photo:
       "https://static.toiimg.com/photo/msid-77760003,width-96,height-65.cms"} alt='title' className="w-full h-48 object-cover" />
       <h2 className="text-xl font-semibold mt-4">{result.title}</h2>
       <p className="text-gray-600">₹{result.amount} </p>
       <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
         View Details
       </button>
     </div>
   </div> ) }
     </>
    
  )
}

export default TripCard