import React, { useEffect, useState } from 'react'

import Travellers from './Travellers'
import Analysis from './Analysis'
import { useParams } from 'react-router-dom'
import AgencyAxios from '../../../Axios/agencyAxios'
import Modal1 from '../Modals/Modal1'



function Details() {
  const agencyAxios = AgencyAxios()
  const [detail, setDetail] = useState(true)
  const [trip, setTrip] = useState()
  const [data, setData] = useState()
  const [fullData, setFullData] = useState()
  const [bookings, setBookings] = useState([])
  const { id } = useParams();
  const [money,setMoney]=useState(0)

  const [showModal, setShowModal] = useState(false);
  const [uniqueDetail, setUniqueDetail] = useState('')


  useEffect(() => {
    if (id) {
      agencyAxios.get(`/getDetails?id=${id}`)
        .then((res) => {
          console.log(res.data, '858585');
          const result = res.data.data
          const fullData = res.data

          setFullData(res.data.totalUserNumber)
          // console.log(fullData,'858585');
          setData(result)
          setBookings(res.data.bookings)
          const y= res.data.bookings.map((v)=>{return(v.advance)}).reduce((a,b)=>{return a+b})
          setMoney(y)

        })
    }
  }, [])

  const getUniqueDetails = (bookings) => {
    setShowModal(true)
    setUniqueDetail(bookings)
  }
  const handleRightDiv = () => {
    if (detail) {
      setDetail(false)
    } else {
      setDetail(true)
    }
  }



  return (
    <div className="md:flex items-start justify-center pt-10 2xl:px-20 md:px-6 px-4 ">
      <div className="xl:w-2/6 lg:w-2/5 w-80 ">
        <img className="w-full" alt="img of a girl posing" src='https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177_1280.jpg' />
        <h1
          className="	lg:text-2xl	text-xl	font-semibold	lg:leading-6 leading-7 	text-gray-800	mt-6"
        >
        </h1>
        <button onClick={handleRightDiv}
          className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none	text-white	bg-gray-800	w-full	py-4	hover:bg-gray-700	"
        >
          {detail ? "list" : "details"}
        </button>
        {data?<Analysis num={fullData} data={data} bookings={bookings} money={money} />:''}
        
      </div>

      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6 ">
        {detail ?
          <div>
            <div className="border-b border-gray-200 pb-6 ">
              <p className="text-sm leading-none text-gray-600">
                {data?.start[0].place.split(',')[0].trim()} to {data?.destination[0].place.split(',')[0].trim()}
              </p>
              <h1
                className="
							lg:text-2xl	text-xl	font-semibold	lg:leading-6	leading-7	text-gray-800	mt-2"
              >
                {data?.title}
              </h1>
            </div>
            {/* .split(',')[0].trim() */}
            <div>
              <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">Trip Id:as
                {data?._id}
              </p>
              <p className="text-base leading-4 mt-7 text-gray-600">Strating Point:
                {data?.start[0].place.split(',')[0].trim()}
              </p>
              <p className="text-base leading-4 mt-7 text-gray-600">Destination:
                {data?.destination[0].place.split(',')[0].trim()}
              </p>
              <p className="text-base leading-4 mt-7 text-gray-600">Trip Date: </p>
              <p className="text-base leading-4 mt-4 text-gray-600">Amount:
                {data?.amount}
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">Advance:
                {data?.advance}
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">Details:
                {data?.description}
              </p>
              <p className="md:w-96 text-base leading-normal text-gray-600 mt-4"></p>
            </div>


            <button
              className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none	text-white	bg-gray-800	w-full	py-4	hover:bg-gray-700	"
            >
              cancel
            </button>
          </div> : <Travellers bookings={bookings} setShowModal={setShowModal} getUniqueDetails={getUniqueDetails} />}
        {showModal && <Modal1 setShowModal={setShowModal} uniqueDetail={uniqueDetail} />}


      </div>
    </div>







  )
}

export default Details