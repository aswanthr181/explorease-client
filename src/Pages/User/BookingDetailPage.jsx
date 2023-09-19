import React from 'react'
import Header from '../../Components/User/Header/Header'
import BookingDetails from '../../Components/User/Bookings/BookingDetails'

function BookingDetailPage() {
  return (
    <div className='bg-white min-h-screen'>
        <Header/>
        <BookingDetails/>
    </div>
  )
}

export default BookingDetailPage