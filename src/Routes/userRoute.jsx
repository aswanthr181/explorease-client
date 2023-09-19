import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/User/HomePage'
import Signup from '../Components/User/Login/Signup'
import VerifyMail from '../Components/User/verifyMail/verifyMail'
import Login from '../Components/User/Login/Login'
import UserProfile from '../Pages/User/UserProfile'
import UserProfileEdit from '../Pages/User/UserProfileEdit'
import { useSelector } from 'react-redux'
import App from '../Components/User/Otp/OtpLogin'
import TripList from '../Pages/User/TripList'
import TripdetailsPage from '../Pages/User/TripdetailsPage'
import BookingSuccss from '../Components/User/Success/BookingSuccss'
import BookingHistoryPage from '../Pages/User/BookingHistoryPage'
import ChatPage from '../Pages/User/ChatPage'
import BookingDetailPage from '../Pages/User/BookingDetailPage'
import WallletPage from '../Pages/User/WallletPage'
import BookingForm from '../Components/User/BookingForm/BookingForm'


function UserRoute() {
  const token=useSelector((state)=>state.Client.Token)
  
  return (
    <div>
       
        <Routes>
          
            <Route path='/signup' element={<Signup />} />
            <Route path='/verify/:token' element={< VerifyMail/>} />
            <Route path='/login' element={token?<HomePage />:<Login /> } />
            <Route path='/otp-login' element={<App />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/user-profile" element={token?<UserProfile />:<Login />} />
            <Route path='/user-profile/edit' element={token?<UserProfileEdit />:<Login />} />
            <Route path='/wallet' element={token?<WallletPage/>:<Login />} />
            <Route path='/trips' element={<TripList />} />
            <Route path='/tripDetails/:id' element={<TripdetailsPage/>} />
            <Route path='/passengers/:id' element={<BookingForm/>}  />
            <Route path='/booking-success' element={<BookingSuccss />} />
            <Route path='/bookings' element={token?<BookingHistoryPage/>:<Login />} />
            <Route path='/bookingDetails/:id' element={token?<BookingDetailPage/>:<Login />} />
            <Route path='/chat/:id' element={<ChatPage/>}  />
            
        </Routes>
    </div>
  )
}

export default UserRoute