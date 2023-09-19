import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRoute from './Routes/userRoute'
import AgencyRoute from './Routes/agencyRoute'
import AgentSignup from './Components/Agent/SignUp/AgentSignup'
import AgentLogin from './Components/Agent/Login/AgentLogin'
import AgencyHome from './Pages/Agency/AgencyHome'
import TripPlan from './Pages/Agency/TripPlan'
import Registration from './Pages/Agency/Registration'
import OurTrips from './Pages/Agency/OurTrips'
import AdminRoute from './Routes/adminRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* <h1 className='text-xl'>good</h1> */}
      <BrowserRouter>
        <Routes>

          <Route path='/*' element={<UserRoute />} />
          <Route path='/agency/*' element={<AgencyRoute/>} />
          <Route path='/admin/*' element={<AdminRoute/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
