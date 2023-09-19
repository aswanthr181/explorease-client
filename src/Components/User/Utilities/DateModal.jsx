import React, { useState } from "react";

export default function Modal({ setShowModal, trips, setNearbyDestination ,records,setRecords}) {
    //   const [showModal, setShowModal] = useState(false);
    const [fromDate, setFromDate] = useState()
    const [toDate, setToDate] = useState()
    const [datedTrips, setDatedTrips] = useState([])

    const handleDateFiletr = () => {
        if (fromDate && toDate) {
            const filteredTrips = trips.filter((trip) => {
                const tripDate = new Date(trip.date);
                const fromDateObj = new Date(fromDate);
                const toDateObj = new Date(toDate);
                return tripDate >= fromDateObj && tripDate <= toDateObj;
            });
            setNearbyDestination(filteredTrips);
        } else {
            // If either fromDate or toDate is not selected, clear the filtered trips
            setNearbyDestination(trips);
        }
    }
    const today = new Date()
    today.setDate(today.getDate() + 1); // Add one day to get the minimum allowed date
    const minDate = today.toISOString().split('T')[0];

    return (
        <>


            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Filter By Date
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <input min={minDate}
                                value={fromDate}
                                onChange={(e) => { setFromDate(e.target.value) }}
                                className=" mr-2" type="date" />


                            <input min={minDate}
                                value={toDate}
                                onChange={(e) => { setToDate(e.target.value) }}
                                type="date" />

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
                            {fromDate ?
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {
                                        handleDateFiletr()
                                        setShowModal(false)
                                    }}

                                >
                                    Apply
                                </button> : ''}
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>

    );
}