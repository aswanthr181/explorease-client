import React, { useEffect, useState } from 'react'
import UserAxios from '../../../Axios/userAxios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';



function BookingDetails() {
  const userAxios = UserAxios()
  const { id } = useParams();
  const [data, setData] = useState()
  const [passengers, setPassengers] = useState([])


  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  // useEffect(()=>{

  // })
  useEffect(() => {
    if (id) {
      userAxios.get(`/getBookingDetails?id=${id}`)
        .then((res) => {

          const result = res.data.data
          setData(result)
          setPassengers(result.passengers)

          console.log(passengers[0]);
        })
    }
  }, [])
  const formattedDate = new Date(data?.bookedDate).toLocaleDateString("en-GB");
  const tripdate = new Date(data?.trip.bookedDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });

  const cancelBooking = async (id) => {
    try {


      Swal.fire({
        title: "Are you sure?",
        text: "Do you want to Cancel!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,  !",
      })
        .then(async (result) => {
          if (result.isConfirmed) {
            setLoad(load + 1)
            const response = await userAxios.patch(`/cancelBooking?id=${id}`);
            Swal.fire("canceled!")
            console.log(response.data.data);
            setBooking(response.data.data)
          }
        })
    } catch (error) {
      console.log(err)
    }
  }
  return (
    <>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 ">
          <img className="w-full" alt="img of a girl posing" src={data?.trip.photo} />
          <h1
            className="	lg:text-2xl	text-xl	font-semibold	lg:leading-6 leading-7 	text-gray-800	mt-6"
          >
            {data?.trip.start[0].place.split(',')[0].trim()} to {data?.trip.destination[0].place.split(',')[0].trim()}
          </h1>
          <table class=" w-full mt-6 border-2 table-fixed">
            <thead className='border-2 text-slate-700'>
              <tr className='border-2  border-black' >
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>



              {passengers.length > 0 ? passengers.map((user, i) => {
                return (
                  <tr key={i} className='border-2 text-center border-slate-800  '>
                    <td>{user.name} </td>
                    <td>{user.age} </td>
                    <td>{user.gender ? user.gender : 'Male'} </td>
                  </tr>
                )
              }) : ''}

            </thead>
          </table>
        </div>




        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">Balenciaga Fall Collection</p>
            <h1
              className="
							lg:text-2xl	text-xl	font-semibold	lg:leading-6	leading-7	text-gray-800	mt-2"
            >
              {data?.trip.title}
            </h1>
          </div>

          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">{data?.trip.description}.</p>
            <p className="text-base leading-4 mt-7 text-gray-600">Booking ID: {data?._id}</p>
            <p className="text-base leading-4 mt-7 text-gray-600">Booking Date: {formattedDate}</p>
            <p className="text-base leading-4 mt-7 text-gray-600">Trip Date: {data?.trip.date}</p>
            <p className="text-base leading-4 mt-4 text-gray-600">Amount: {data?.trip.amount}</p>
            <p className="text-base leading-4 mt-4 text-gray-600">Payed: {data?.advance}</p>
            {data?.isCanceled === 0 ?
              <p className="text-base leading-4 mt-4 text-gray-600">Amount to be payed:{data?.pending}</p>
              : <p className="text-base leading-4 mt-4 text-red-700">This Booking is cancelled</p>
            }
            <p className="md:w-96 text-base leading-normal text-gray-600 mt-4"></p>
          </div>

          {
           data?.trip.is_cancel===0?
          data?.isCanceled === 0 ? <button
            onClick={() => cancelBooking(data?._id)}
            className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none	text-white	bg-gray-800	w-full	py-4	hover:bg-gray-700	"
          >
            cancel
          </button> : <p className="text-base leading-4 mt-4 text-red-700">Amount of {data?.advance} Refunded </p>
          :<p className="text-base leading-4 mt-4 text-red-700">This trip is cancelled by admin.Amount of {data?.advance} Refunded </p>
          }

          {/* <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
                <button
                  className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                  aria-label="show or hide"
                >
                  <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
              </div>
            </div>
          </div> */}
          {/* <div>
            <div className="border-b py-4 border-gray-200">
              <div className="flex justify-between items-center cursor-pointer">
                <p className="text-base leading-4 text-gray-800">Contact us</p>
                <button
                  className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                  aria-label="show or hide"
                >
                  <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                If you have any questions on how to return your item to us, contact us.
              </div>
            </div>
          </div> */}
        </div>
      </div>

    </>
  )
}

export default BookingDetails