import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import AdminAxios from '../../../Axios/adminAxios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function AdminViewAgency() {
    const adminAxios = AdminAxios()
    const [agencyData, setAgencyData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        adminAxios.get('/getAgency')
            .then((response) => {
                console.log('agency list');
                console.log(response.data);
                setAgencyData(response.data.result)
            })
    }, [])

    const viewPending = () => {
        navigate('/admin/pendingApprovals')
    }

    const blockAgency = async (id,isBanned) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: isBanned === true ? "Do you want to unblock this user!" : "Do you want to block this user!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: isBanned === true ? "Yes, Unblock it !" : "Yes,block it !",
            })
            .then(async(result)=>{
                if (result.isConfirmed){
                    const response=await adminAxios.patch(`/blockAgency?id=${id}`)
                    if (response.data.result[0].isBanned === true) {
                        Swal.fire("BLOCKED!", "User has been blocked.", "success");
                    } else {
                        Swal.fire("UNBLOCKED!", "User has been Unblocked.", "success");
                    }
                    setAgencyData(response.data.result)
                }
            })
        } catch (error) {

        }
    }
    return (
        <>
            <div className="w-screen flex-col ml-3 mr-3">
                <Toaster />
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-12">
                    <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900 mr-2">
                        <div className="text-white ml-3 font-bold text-lg tracking-wide ">
                            AGENCY LIST
                        </div>
                        <div>
                            <button onClick={viewPending}
                            >VIEW REQUESTS</button>
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
                                        <td className="px-6 py-4">{obj.name}</td>
                                        <td className="px-6 py-4">{obj.email}</td>
                                        <td className="px-6 py-4">{obj.phone}</td>
                                        {/* isBanned */}
                                        <td className="px-6 py-4">
                                            {obj.isBanned ? (
                                                <button
                                                    onClick={() => blockAgency(obj._id, obj.isBanned)}
                                                    key={obj._id}
                                                    className=" bg-green-900 w-15 text-white font-mono rounded-md w-[4rem]"
                                                >
                                                    UNBLOCK
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => blockAgency(obj._id, obj.isBanned)}
                                                    key={obj._id}
                                                    className=" bg-red-800 w-15 text-white font-mono rounded-md w-[4rem]"
                                                >
                                                    BLOCK
                                                </button>
                                            )}
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

export default AdminViewAgency