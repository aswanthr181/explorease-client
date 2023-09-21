import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import AgencyAxios from '../../../Axios/agencyAxios'
import { useNavigate } from 'react-router-dom'
import Pagination from '../../Utilities/Pagination'
import Swal from 'sweetalert2'
import ClipLoader from 'react-spinners/ClipLoader'
ClipLoader
function TripList() {
  const agencyAxios = AgencyAxios()
  const navigate = useNavigate()
  const token = useSelector((state) => state.Agency.Token)
  const [tripList, setTripList] = useState([])
  const [num,setNum]=useState(1)

  const [currenPage, setCurretPage] = useState(1)
  const recordsPerPage = 2;
  const lastIndex = currenPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage
  const [records, setRecords] = useState([])
  const [npage, setNpage] = useState('')
  const [numbers, setNumber] = useState([])

  useEffect(() => {
    agencyAxios.get('/getourTrips', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        setTripList(response.data.result)
        const a = response.data.result.slice(firstIndex, lastIndex)
        const b = Math.ceil(response.data.result.length / recordsPerPage)
        setRecords(a);
        setNpage(b)
        setNumber([...Array(b + 1).keys()].slice(1))

      })
      .catch((err) => {
        console.log(err);
      });
  }, [currenPage,num])

  const showDetails = (id) => {
    navigate(`/agency/ourTrips/details/${id}`)
  }

  const cancelTrip = async (id) => {
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
                    
                    const response = await agencyAxios.patch(`/cancelTrip?id=${id}`);
                    Swal.fire("canceled!")
                    setNum(num+1)
                    // console.log(response.data.data);
                    // setBooking(response.data.data)
                }
            })
    } catch (error) {
        console.log(err)
    }
}
  return (
    <>{records?
      <div className='md:px-56 h-full'>

        {/* {tripList.map((result) => {
          return (
            <div className="container flex justify-around  bg-gray-200 mt-7 ml-auto mr-auto rounded-md mb-7 border border-black">
              <div className="mb-auto mt-auto flex">
                <div className="bg-gradient-to-r from-gray-500 to-gray-300 md:w-[10rem] md:h-[10rem] m-auto flex justify-center">
                  <img
                    className="md:w-[6rem] md:h-[6rem] sm:w-[4rem] sm:h-[4rem] mb-auto mt-auto"
                    src={result.photo}
                  />
                </div>
              </div>
              <div>
                <ul className="mt-4 mb-4">
                  <h2 className="font-bold mt-4 text-lg trackinge-wide">
                    {result.title}
                  </h2>
                  <li className="font-semibold mt-3  text-gray-800">
                    Destination:{result.destination[0].place}
                  </li>
                  <li className="font-semibold mt-3  text-gray-800">
                    Date:{result.date}
                  </li>
                  <li className="font-semibold mt-3  text-gray-800">
                    Trip Duration :{result.day} day
                  </li>
                  <li className="font-semibold mt-3  text-gray-800">
                    Amount:₹{result.amount}
                  </li>
                </ul>
              </div>
              <div className="my-auto">
                <button className="bg-gray-900 md:w-[6rem] s:w-[4rem] h-[2rem] hover:bg-slate-700 rounded-md text-white md:font-bold ">
                  Edit Now
                </button>
              </div>
            </div>
          )
        })} */}
        {records.map((result,i) => {
          const formattedDate = new Date(result.date).toLocaleDateString("en-GB");
          return (
            <div key={i} class="p-10">

              <div className=" w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden  " title="Mountain">
                  <img
                    className="h-full"
                    src={result.photo}
                  />
                </div>
                <div className="border-r w-full border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      {formattedDate}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{result.title}</div>
                    <p className="text-gray-700 text-base">{result.start[0].place.split(',')[0].trim()}  To  {result.destination[0].place.split(',')[0].trim()}</p>
                  </div>
                  <div className="">

                    <div className='flex justify-around'>
                      <div className="bg-red-900 h-9  py-1 w-[7rem] text-center rounded-md text-md font-medium  text-white md:block"
                        onClick={() => showDetails(result._id)}>
                        DETAILS</div>
                        {result.is_cancel===0?<div
                        onClick={()=>{cancelTrip(result._id)}}
                        className="bg-red-600 h-9 px-3 py-1 w-[7rem] text-center rounded-md text-md font-medium  text-white  md:block">
                        CANCEL</div>:<div className="bg-red-400 h-9 px-3 py-1 w-[7rem] text-center rounded-md text-md font-medium  text-white  md:block">
                        CANCELLED</div>}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

{numbers.length>0 ?
                <div className=' flex justify-center  py-10   '>
                    <Pagination
                     numbers={numbers}
                      currenPage={currenPage} 
                      firstIndex={firstIndex}
                      lastIndex={lastIndex}
                      setCurretPage={setCurretPage}
                      
                      />
                      </div>
                : null}
      </div>
      :
<div className='flex justify-center items-center w-screen h-[calc(100vh-128px)] m-auto '>
          <ClipLoader className='' />

        </div>}

    </>
  )
}

export default TripList