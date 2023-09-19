import React from 'react'
import Header from '../../Components/User/Header/Header'
import Home from '../../Components/User/Home/Home'
import Home2 from '../../Components/User/Home/home2'
import Discover from '../../Components/User/Home/Discover'
// import Slider from '../../Components/User/Home/Home1'


function HomePage() {
  return (
    <div className='bg-white'>
        
        <Header />
        <Home />
        <Discover />
        {/* <Home2 /> */}

        {/* <Slider/> */}

    </div>
  )
}

export default HomePage