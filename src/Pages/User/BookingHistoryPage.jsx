import React from 'react'
import Header from '../../Components/User/Header/Header'
import BookingHistory from '../../Components/User/Bookings/BookingHistory'

function BookingHistoryPage() {
  return (
    <div className='bg-white'>
        <Header/>
        <BookingHistory/>
    </div>
  )
}

export default BookingHistoryPage