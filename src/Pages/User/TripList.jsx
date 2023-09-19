import React from 'react'
import Header from '../../Components/User/Header/Header'
import Trips from '../../Components/User/TripList/Trips'
import Places from '../../Components/User/TripList/Trip1'

function TripList() {
  return (
    <>
    <div className='h-full bg-white'>
      <Header />
        <Trips />
        </div>
        
        {/* <Places/> */}
        </>
  )
}

export default TripList