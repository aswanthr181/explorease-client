import React from 'react'
import AgentNavbar from '../../Components/Agent/Navbar/AgentNavbar'
import Details from '../../Components/Agent/TripDeatils/Details'

function TripDetails() {
  return (
    <div className='bg-white h-screen sm:h-full md:h-screen lg:h-full xl:h-screen'>
        <AgentNavbar/>
        {/* <div className="md:grid grid-cols-2 place-content-center md:py-16 md:px-12 md:gap-16
        lg:px-36 xl:px-72 xl:gap-20"> */}
            <Details/>
            {/* </div> */}
        
    </div>
  )
}

export default TripDetails