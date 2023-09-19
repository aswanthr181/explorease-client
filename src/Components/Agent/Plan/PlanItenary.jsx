import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import Dayplan from './dayplan'

function PlanItenary({id,daylimit}) {
    
    const [day, setDay] = useState(1)
    const [tripId,setTripId]=useState(id)
    const limit=daylimit
    const [done,setDone]=useState(false)
    const generateError = (err) => toast.error(err, { position: "top-center" })

    const addDayItenary=(e)=>{
        setDay(day+1)
    }
    //test
    useEffect(() => {
        if (day > limit) {
            console.log('day completedd');
            setDone(true);
        }
    }, [day, limit]);


    return (
        <>
            <div className='bg-slate-100  flex justify-center'>
                <div className='my-24 px-3 md:w-[1000px] bg-slate-50 rounded-md '>
                    <div className=" bg-gray-100 border-gray-500 shadow pt-3  mt-3 mb-6">
                        <form >
                            <div className="flex border-b border-black justify-between">
                                <div className="flex pb-1 gap-2 ">
                                    <h1>itenary list</h1>
                                </div>
                            </div>
                            <div className="pt-3">
                                {done?
                                 <div><h5>completed</h5></div>
                               : <Dayplan dayNo={day} setDay={addDayItenary} tripId={tripId} limit={limit} complete={setDone} />
                                  }

                                <div className="text-xl flex justify-end mr-4 font-bold text-emerald-700">
                                    {done?
                                    <div onClick={addDayItenary} className="cursor-pointer pb-3">
                                    <Link to='/agency/ourTrips' >Done</Link>
                                </div>
                                    :<div  className="cursor-pointer pb-3">
                                    
                                </div>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlanItenary