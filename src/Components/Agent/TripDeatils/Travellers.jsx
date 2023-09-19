import React from 'react'

function Travellers({bookings,getUniqueDetails}) {
    console.log(bookings,'jjjjjjjjjjjjjjjjjjjjjj')

    

    return (
        <div className="flex items-center justify-center overflow-scroll  bg-white">
            <div className="col-span-12">
                <div className="overflow-auto lg:overflow-visible ">
                    {bookings?
                    <table className="table text-gray-400 border-separate space-y-6 text-sm">
                    <thead className="bg-white text-gray-500">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3 text-left">No of persons</th>
                            <th className="p-3 text-left">Payment</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings?bookings.map((bookings)=>{
                            return(<tr className="bg-slate-100">
                            <td className="p-3">
                                <div className="flex align-items-center">
                                    <img className="rounded-full h-12 w-12  object-cover" src={bookings.user.image} alt="unsplash image" />
                                    <div classNameName="ml-3">
                                        <div className="">{bookings.user.name} </div>
                                        <div className="text-gray-500 text-xs">{bookings.user.email}</div>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="p-3 font-bold">
                            {bookings.userNumber}
                            </td>
                            <td className="p-3">
                                <span className="bg-green-400 text-gray-50 rounded-md px-2">completed</span>
                            </td>
                            <td onClick={()=>getUniqueDetails(bookings)}
                             className="p-3 ">
                                <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                    <i className="material-icons-outlined text-base">Details</i>
                                </a>
                               
                            </td>
                        </tr>)
                        }):''}


                    </tbody>
                </table>:
                <div><p>NO bookings</p></div>}
                </div>
            </div>
        </div>
    )
}

export default Travellers