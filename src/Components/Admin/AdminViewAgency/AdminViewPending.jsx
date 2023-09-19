import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import AdminAxios from '../../../Axios/adminAxios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function AdminViewPending() {
    const adminAxios=AdminAxios()
    const [agencyData,setAgencyData]=useState([])
    const [state,setState]=useState(false)

    const navigate=useNavigate()

    useEffect(()=>{
        adminAxios.get('/getPending')
        .then((response)=>{
            console.log('agency list');
            console.log(response.data);
            setAgencyData(response.data.result)
        })
    },[state])

    const Approve = async (id) => {
        try {
            const response = await adminAxios.get(`/approve?id=${id}`, {
                
            });
            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to Approve this Request!" ,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText:  "Yes,  !" ,
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        console.log('ujuallll',response.data.result);

                        if (response.data.status) {
                            Swal.fire("BLOCKED!", "User has been blocked.", "success");
                        } else {
                            Swal.fire("UNBLOCKED!", "User has been Unblocked.", "success");
                        }
                        setAgencyData(response.data.result);
                        setState(true)

                    }
                })
        } catch (error) {

        }
    }

    
    const Reject = async(id)=>{
        try {
          
            const response = await adminAxios.post(`/rejectRequest?id=${id}`, {
                
            });
            Swal.fire({
                title: "Are you sure?",
                text: "Do you want to Approve this Request!" ,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText:  "Yes,  !" ,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    console.log('ujuallll',response.data.status);

                    if (response.data.status) {
                        Swal.fire("BLOCKED!", "User has been blocked.", "success");
                    } else {
                        Swal.fire("UNBLOCKED!", "User has been Unblocked.", "success");
                    }
                    
                    setAgencyData(response.data.result);
                    setState(true)

                }
            })
        } catch (error) {
            
        }
    }

    // const viewPending = () =>{
    //     navigate('/agency/pendingApprovals')
    // }
  return (
    <>
    <div className="w-screen flex-col ml-3 mr-3">
                <Toaster />
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-12">
                    <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 mr-2">
                        <div className="text-white ml-3 font-bold text-lg tracking-wide ">
                            AGENCY LIST
                        </div>
                        
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="pl-9">
                                    No
                                </th>
                                <th scope="col" className="pl-9">
                                    IMAGE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    AGENCY NAME
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {agencyData.map((obj, index) => {
                                return (
                                    <tr key={obj._id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                        <th key={obj._id} className="pl-9">
                                            {index + 1}
                                        </th>
                                        <td className="px-6 py-4">IMAGE</td>
                                        <td className="px-6 py-4"></td>
                                        <td className="px-6 py-4">{obj.email}</td>
                                        <td className="px-6 py-4">{obj.phone}</td>
                                        {/* isBanned */}
                                        <td className="px-6 py-4">
                                            
                                                <button
                                                    
                                                    key={obj._id}
                                                    onClick={()=>Reject(obj._id)}
                                                    className="  bg-red-800 w-15 w-15 text-white font-mono rounded-md w-[4rem]"
                                                >
                                                    REJECT
                                                </button>
                                           
                                                
                                                <button
                                                    key={obj._id}
                                                    onClick={() => Approve(obj._id)}
                                                    className=" bg-green-900 w-15 text-white font-mono rounded-md w-[4rem]"
                                                >
                                                    APPROVE
                                                </button>
                                           
                                            ̥
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
    </>
  )
}

export default AdminViewPending