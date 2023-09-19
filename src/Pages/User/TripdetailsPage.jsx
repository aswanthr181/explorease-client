import React from 'react'
import Header from '../../Components/User/Header/Header'
import Tripdetail from '../../Components/User/Tripdetails/Tripdetails'

function TripdetailsPage() {
  return (
    <div className=' bg-white flex-col'>
      
       <div className='fixed z-10'> <Header  /></div>
      

      <Tripdetail />

    </div>
  )
}

export default TripdetailsPage