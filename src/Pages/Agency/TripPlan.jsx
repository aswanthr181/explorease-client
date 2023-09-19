import React, { useState } from 'react'
import AgentNavbar from '../../Components/Agent/Navbar/AgentNavbar'
import PlanTrip from '../../Components/Agent/Plan/PlanTrip'
import PlanItenary from '../../Components/Agent/Plan/PlanItenary'

function TripPlan() {
  const [isSubmit,SetSubmit]=useState(true)
  const [id,setId]=useState()
  const [daylimit,setDaylimit]=useState()

  return (
    <div className='bg-white h-screen'>
        <AgentNavbar  />
        {isSubmit?
        <PlanTrip isSubmit={SetSubmit} setId={setId} setDaylimit={setDaylimit} />
        :
        <PlanItenary id={id} daylimit={daylimit} />}
    </div>
  )
}

export default TripPlan