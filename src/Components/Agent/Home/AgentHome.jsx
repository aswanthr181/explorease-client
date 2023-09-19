import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Typed from 'react-typed'

function AgentHome() {

  const navigate=useNavigate()
  
  return (
    // <div className='text-white mt-24    ' >
    //   <div className=' bg-amber-300 max-w-full mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    //     <p className='text-[#00df9a] font-bold p-2'>
          
    //     </p>
    //     <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
    //       Grow with us.
    //     </h1>
    //     <div className='flex justify-center items-center'>
    //       <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
    //       Welcome Travel Agencies! Join Our Platform
    //       </p>
          
    //       {/* <Typed
    //       className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
    //         strings={['BTB', 'BTC', 'SASS']}
    //         typeSpeed={120}
    //         backSpeed={140}
    //         loop
    //       /> */}
    //     </div>
    //     <p className='md:text-2xl text-xl font-bold text-gray-500'>Are you a travel agency seeking to expand your reach and connect with globetrotters worldwide?</p>
    //     <button className='bg-[#1ed72499] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
    //   </div>
    // </div>
    <>
    {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(https://static.vecteezy.com/system/resources/previews/002/112/225/original/tourism-and-travel-concept-bus-line-path-on-white-background-icon-of-bus-route-with-dash-line-trace-start-point-and-transfer-point-vector.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Grow with us

        <strong className="block font-extrabold text-rose-700">
        Welcome Travel Agencies! Join Our Platform
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Are you a travel agency seeking to expand your reach and connect with globetrotters worldwide?
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default AgentHome