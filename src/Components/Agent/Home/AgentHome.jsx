import React from 'react'
import { useNavigate } from 'react-router-dom'
import AgencyAxios from '../../../Axios/agencyAxios'
// import Typed from 'react-typed'

function AgentHome() {
  const agencyAxios=AgencyAxios()
  const navigate=useNavigate()

  const start=()=>{
    console.log('hiii');
    agencyAxios.get('/getAgencyData')
    .then((res)=>{
      const result=res.data.agencyData
      console.log(result);
      if(result.isApproved===2){
        navigate('/agency/plan')
      }else{
        navigate('/agency/registration')
      }
    })
  }
  
  return (
  
    <>
    

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

      <div 
       className="mt-8 flex flex-wrap gap-4 text-center">
        <div onClick={()=>start()}
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </div>

        <div
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
          </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default AgentHome