import React, { useState } from 'react'

function Analysis({ num, data, bookings, money }) {
//     { bookings? 
//             const y=bookings.map((v)=>{return(v.advance)}).reduce((a,b)=>{return a+b})
// :setMoney(0)}
    return (
        <div class="  bg-white flex items-center h-full justify-center mt-1 ">
            <div class="bg-slate-300 text-black rounded shadow-xl py-2 px-5 w-full sm:w-2/3 md:w-full" >
                <div class="flex w-full">
                    <h3 class="text-lg font-semibold leading-tight flex-1">TOTAL Booking</h3>
                    <div class="relative h-5 leading-none">

                    </div>
                </div>
                <div class="relative overflow-hidden transition-all duration-500"  >
                    <div>
                        <div class="pb-4 lg:pb-6">
                            <h4 class="text-2xl lg:text-3xl text-white font-semibold leading-tight inline-block" >{data ? data.maxPeoples - data.
                                peoples : 0} /{data?.maxPeoples}</h4>
                        </div>
                        <div class="pb-4 lg:pb-6">
                            <div class="overflow-hidden rounded-full h-3 bg-gray-800 flex transition-all duration-500" >

                            </div>
                        </div>
                        <div class="flex -mx-4">

                            <div class="w-1/3 px-4" >
                                <div class="text-sm">
                                    <span class="inline-block w-2 h-2 rounded-full mr-1 align-middle bg-green-400"></span>
                                    <span class="align-middle">Amount</span>
                                </div>
                                <div class="font-medium text-lg text-white">
                                    <span>₹{money}</span>
                                </div>
                            </div>
                            


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis