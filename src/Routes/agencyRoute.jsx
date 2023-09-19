import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AgentSignup from '../Components/Agent/SignUp/AgentSignup'
import { useSelector } from 'react-redux'
import AgentLogin from '../Components/Agent/Login/AgentLogin'
import AgencyHome from '../Pages/Agency/AgencyHome'
import Registration from '../Pages/Agency/Registration'
import TripPlan from '../Pages/Agency/TripPlan'
import OurTrips from '../Pages/Agency/OurTrips'
import ChatPage from '../Pages/Agency/ChatPage'
import TripDetails from '../Pages/Agency/TripDetails'
import AgencyProfile from '../Pages/Agency/AgencyProfile'
import AgentDashBoard from '../Pages/Agency/AgentDashBoard'

function AgencyRoute() {
  const token=useSelector((state)=>state.Agency.Token)
  return (
    <div>
        <Routes>
            <Route path='/signup' element={<AgentSignup />} />
            <Route path='/login' element={<AgentLogin/>} />
            <Route path='/home' element={token?<AgencyHome/>:<AgentLogin/>} />
            <Route path='/registration' element={token?<Registration/>:<AgentLogin/>} />
            <Route path='/profile' element={token?<AgencyProfile/>:<AgentLogin/>} />
            <Route path='/plan' element={token?<TripPlan/>:<AgentLogin/>} />
            <Route path='/ourTrips' element={token?<OurTrips/>:<AgentLogin/>} />
            <Route path='/ourTrips/details/:id' element={<TripDetails/>} />

            <Route path='/dashboard' element={token?<AgentDashBoard/>:<AgentLogin/>} />
            <Route path='/chat' element={token?<ChatPage/>:<AgentLogin/>} />
        </Routes>


    </div>
  )
}

export default AgencyRoute