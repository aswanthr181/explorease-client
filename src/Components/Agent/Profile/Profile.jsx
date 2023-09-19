import React, { useEffect, useState } from 'react'
import AgencyAxios from '../../../Axios/agencyAxios'

function Profile() {
    const agencyAxios=AgencyAxios()
    const [data,setData]=useState()
    useEffect(()=>{
        agencyAxios.get('/getprofile')
        .then((res)=>{
            setData(res.data.profile)
        })
    },[])
    return (
        <div className="min-h-screen  bg-gray-100">
            <div className="p-4 md:p-10 flex justify-center items-center">
                <div className="w-full max-w-screen-lg p-6 md:p-10 mx-auto relative rounded bg-white shadow-md">
                    <div className="border w-11/12 left-11 absolute top-15 border-gray-300"></div>
                    <div className="flex flex-col md:flex-row md:gap-5 md:pt-10 relative">
                        <div className="md:relative">
                            <img

                                src='/Logo/18f5e7f5-ebf2-41ea-81d7-c4a8c7091a25.jpg'
                                className="w-36 h-36 md:w-44 rounded-full md:h-44 md:left-16"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 md:w-2/3">
                            <div className="md:w-1/2 ">
                                <h1 className="text-2xl md:text-4xl font-josefin-sans font-bold">
                                    {data?data.name:''}
                                </h1>
                                <div className="mt-2 md:mt-4 space-y-3">
                                    <p className="text-base font-josefin-sans md:text-lg">
                                    {data?data.email:''}
                                    </p>

                                    <div className="flex  items-center">
                                        <p className="text-base font-josefin-sans md:text-lg">
                                            Ranking:
                                        </p>
                                        <div className="ml-2 ">
                                            {/* <span>⭐⭐⭐⭐⭐</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:w-1/3 mt-12">
                                <div className="flex items-center mb-2 md:mb-4">
                                    <img
                                        src="/footer/Cardmap.png"
                                        alt=""
                                        className="w-4 h-4 md:w-5 md:h-5"
                                    />
                                    <p className="ml-2 text-base font-josefin-sans md:text-lg">
                                        kochi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-11/12 mx-auto h-1 border-t-2 border-gray-300 mt-5" />
                    <div className="flex flex-col mt-[3%] md:flex-row items-center gap-6 md:justify-center">
                        <div className="pb-5 font- md:pb-0 md:mb-10 grid gap-2 md:ml-4">
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <p className="text-lg font-semibold">Agency Details</p>
                                <div className="flex justify-between mt-2">
                                    <span className="font-bold">Reg:Number:</span>
                                    <span className="text-green-500 font-bold">
                                    {data?.regNumber?data.regNumber:'Nil'}
                                    </span>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="font-bold">Owner</span>
                                    <span>{data?.agentName?data.agentName:'Nil'}</span>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="font-bold">Address:</span>
                                    <span>Kochi</span>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <span className="font-bold">Working Hours:</span>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    
                </div>
            </div>
        </div>
    )
}

export default Profile