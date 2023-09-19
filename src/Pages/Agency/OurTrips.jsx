import React from 'react'
import AgentNavbar from '../../Components/Agent/Navbar/AgentNavbar'
import TripList from '../../Components/Agent/TripList/TripList'

function OurTrips() {
  return (
    <div className='h-full bg-white'>
        <AgentNavbar />
        <div className='text-center mt-7  text-xl font-bold trackinge-wide'>OUR FUTURE SCHEDULES</div>
        <TripList/>
    </div>
  )
}

export default OurTrips