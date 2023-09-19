import React from 'react'

function Modal1({ setShowModal, uniqueDetail }) {

    console.log(uniqueDetail, '141411');
    return (



        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-50"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl pt-14">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col sm:w-full h-screen bg-white outline-none focus:outline-none ">
                    {/*header*/}
                    <div className="flex items-start justify-between  border-b border-solid border-slate-200 rounded-t">
                        
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">

                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative  flex-auto overflow-x-scroll ">
                        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">

                            <div className="flex justify-start item-start space-y-2 flex-col">
                                <h5 className="text-xl   font-semibold leading-7 lg:leading-9 text-black">Booking {uniqueDetail?._id}</h5>
                                <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">{uniqueDetail?.bookedDate}</p>
                            </div>




                            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                                    <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                        <p className="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-950">Travellers List</p>





                                        <div className="flex flex-col w-full">
                                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                                    <div className="overflow-hidden">
                                                        <table className="min-w-full text-left text-sm font-light">
                                                            <thead className="border-b font-medium dark:border-neutral-500">
                                                                <tr>
                                                                    <th scope="col" className="px-6 py-4">No</th>
                                                                    <th scope="col" className="px-6 py-4">Name</th>
                                                                    <th scope="col" className="px-6 py-4">Age</th>
                                                                    <th scope="col" className="px-6 py-4">Gender</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {uniqueDetail ?
                                                                    uniqueDetail.passengers.map((user, i) => {
                                                                        return (
                                                                            <tr key={i} className="border-b dark:border-neutral-500">
                                                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{i + 1} </td>
                                                                                <td className="whitespace-nowrap px-6 py-4">{user.name} </td>
                                                                                <td className="whitespace-nowrap px-6 py-4">{user.age} </td>
                                                                                <td className="whitespace-nowrap px-6 py-4">Male</td>
                                                                            </tr>
                                                                        )
                                                                    }) : ''}

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center flex-col md:flex-row  items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                                            <h3 className="text-xl  font-semibold leading-5 text-gray-800">Summary</h3>
                                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                                <div className="flex justify-between w-full">
                                                    <p className="text-base  leading-4 text-gray-800">Payment Method</p>
                                                    <p className="text-base  leading-4 text-gray-600">{uniqueDetail?.paymentMethod}</p>
                                                </div>
                                                <div className="flex justify-between items-center w-full">
                                                    <p className="text-base  leading-4 text-gray-800">Amount <span className="bg-gray-200 p-1 text-xs font-medium  dark:text-gray-800 leading-3 text-gray-800">Advance</span></p>
                                                    <p className="text-base leading-4 text-gray-600">₹{uniqueDetail?.advance} </p>
                                                </div>
                                                <div className="flex justify-between items-center w-full">
                                                    <p className="text-base  leading-4 text-gray-800">Others</p>
                                                    <p className="text-base  leading-4 text-gray-600">₹0</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-base  font-semibold leading-4 text-gray-800">Total</p>
                                                <p className="text-base  font-semibold leading-4 text-gray-600">₹{uniqueDetail?.advance}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                                        <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                                        <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                            <div className="flex flex-col justify-start items-start flex-shrink-0">
                                                <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                                    <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                                    <div className="flex justify-start items-start flex-col space-y-2">
                                                        <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">David Kent</p>
                                                        <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">10 Previous Orders</p>
                                                    </div>
                                                </div>

                                                <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <p className="cursor-pointer text-sm leading-5 ">david89@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                                    <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                                        <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                                        <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                                    </div>
                                                    <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                                        <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                                        <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                                    </div>
                                                </div>
                                                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                                    <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base  leading-4 text-gray-800">Edit Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Modal1