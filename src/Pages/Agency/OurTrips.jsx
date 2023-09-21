import React, { Suspense, lazy } from 'react'

import AgentNavbar from '../../Components/Agent/Navbar/AgentNavbar'
import TripList from '../../Components/Agent/TripList/TripList'
// const TripList =lazy(()=>import('../../Components/Agent/TripList/TripList') )
function OurTrips() {
  return (
    <div className='h-full bg-white'>
        <AgentNavbar />
        <div className='text-center mt-7  text-xl font-bold trackinge-wide'>OUR FUTURE SCHEDULES</div>
        
        {/* <Suspense fallback={<div>Loading...</div>} > */}
        <TripList/>
        {/* </Suspense> */}
    </div>
  )
}

export default OurTrips