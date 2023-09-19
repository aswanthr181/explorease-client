import React from 'react'
import AgentNavbar from '../../Components/Agent/Navbar/AgentNavbar'
import DashBoard from '../../Components/Agent/Dashboard/DashBoard'

function AgentDashBoard() {
  return (
    <div className='bg-white h-screen'>
        <AgentNavbar/>
        <DashBoard/>
    </div>
  )
}

export default AgentDashBoard